/**
 * Contact form endpoint — an AWS Lambda (Node 20+, ESM) fronted by a Function
 * URL or an API Gateway HTTP API (payload format 2.0).
 *
 * Relays the message through Resend's REST API. `pnpm build:lambda` bundles
 * this file to dist-lambda/index.mjs; README → Deployment has the CLI steps.
 *
 * Env:  RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL
 * CORS: configure it on the Function URL (AllowOrigins = the site origin,
 *       AllowMethods = POST, AllowHeaders = content-type). Preflight requests
 *       are answered there and never reach this code.
 */

/** The parts of the HTTP API v2 / Function URL event this handler reads. */
interface HttpEvent {
  requestContext: { http: { method: string } }
  body?: string
  isBase64Encoded?: boolean
}

interface HttpResult {
  statusCode: number
  headers: Record<string, string>
  body: string
}

interface ContactPayload {
  name?: unknown
  email?: unknown
  company?: unknown
  message?: unknown
  /** Honeypot — humans never see this field. */
  website?: unknown
  /** Client timestamp of when the form was first rendered. */
  startedAt?: unknown
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
/** Real people don't fill in four fields in under two seconds. */
const MIN_FILL_TIME_MS = 2000

function text(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

function json(statusCode: number, body: Record<string, unknown>): HttpResult {
  return {
    statusCode,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
    body: JSON.stringify(body),
  }
}

export async function handler(event: HttpEvent): Promise<HttpResult> {
  if (event.requestContext.http.method !== 'POST') {
    return json(405, { ok: false, error: 'Method not allowed.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL
  if (!apiKey || !to || !from) {
    return json(503, { ok: false, error: 'Contact endpoint is not configured.' })
  }

  let payload: ContactPayload
  try {
    const raw = event.isBase64Encoded
      ? Buffer.from(event.body ?? '', 'base64').toString('utf8')
      : (event.body ?? '')
    payload = JSON.parse(raw) as ContactPayload
  } catch {
    return json(400, { ok: false, error: 'Invalid request body.' })
  }

  // Bot defences mirror the client: a filled honeypot, a missing timestamp or
  // an implausibly fast submission gets a cheerful 200 and nothing is sent.
  const startedAt = typeof payload.startedAt === 'number' ? payload.startedAt : NaN
  if (
    text(payload.website, 10) !== '' ||
    Number.isNaN(startedAt) ||
    Date.now() - startedAt < MIN_FILL_TIME_MS
  ) {
    return json(200, { ok: true })
  }

  const name = text(payload.name, 200)
  const email = text(payload.email, 320)
  const company = text(payload.company, 200)
  const message = text(payload.message, 5000)

  if (!name || !EMAIL_RE.test(email) || message.length < 10) {
    return json(400, {
      ok: false,
      error: 'Please provide your name, a valid email, and a short message.',
    })
  }

  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    '',
    message,
  ]
    .filter((line) => line !== null)
    .join('\n')

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${apiKey}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `New project enquiry — ${name}`,
      text: body,
    }),
  })

  if (!res.ok) {
    return json(502, { ok: false, error: 'The email provider rejected the message.' })
  }
  return json(200, { ok: true })
}
