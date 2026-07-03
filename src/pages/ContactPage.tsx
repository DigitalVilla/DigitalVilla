import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Check, Send } from 'lucide-react'
import { Seo } from '@/components/seo/Seo'
import { PageHero } from '@/components/shared/PageHero'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { site } from '@/data/site'
import { fadeUp, staggerContainer, viewportOnce, easeOutExpo } from '@/lib/motion'

interface FormState {
  name: string
  email: string
  company: string
  message: string
}

const empty: FormState = { name: '', email: '', company: '', message: '' }

const channels = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: 'Phone', value: site.phone, href: 'tel:+15878878781' },
  { icon: MapPin, label: 'Location', value: site.location },
]

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(empty)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [sent, setSent] = useState(false)

  // Bot defences: a honeypot field humans never see, and the time the form
  // was first rendered (bots submit near-instantly).
  const [honeypot, setHoneypot] = useState('')
  const renderedAt = useRef(Date.now())

  function validate(): boolean {
    const next: Partial<FormState> = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Please enter a valid email.'
    if (form.message.trim().length < 10)
      next.message = 'Tell us a little more (10+ characters).'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // If the honeypot is filled, or the form was submitted implausibly fast,
    // treat it as a bot: show the success state but send nothing.
    const tooFast = Date.now() - renderedAt.current < 2000
    if (honeypot.trim() !== '' || tooFast) {
      setSent(true)
      setForm(empty)
      return
    }

    if (!validate()) return
    // No backend in this build — compose a mailto so the message is never lost.
    const subject = encodeURIComponent(`New project enquiry — ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
    setForm(empty)
  }

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Start a project with Digital Villa. Tell us what you're building and we'll bring senior engineering, design, and delivery."
        path="/contact"
      />

      <PageHero
        eyebrow="Contact"
        title="Let's start something."
        description="Tell us about your project. We typically reply within one business day."
      />

      <section className="container-page py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Left: details */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-2xl font-semibold tracking-tight"
            >
              Talk to a senior engineer.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-pretty leading-relaxed text-muted"
            >
              No sales funnel, no junior account manager. You speak directly with
              the people who will build your product.
            </motion.p>

            <motion.ul variants={fadeUp} className="mt-9 space-y-3">
              {channels.map((c) => {
                const Icon = c.icon
                const content = (
                  <span className="flex items-center gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-surface text-accent">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.16em] text-subtle">
                        {c.label}
                      </span>
                      <span className="text-foreground">{c.value}</span>
                    </span>
                  </span>
                )
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="block rounded-2xl border border-border bg-surface/40 p-4 transition-colors hover:border-border-strong"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="rounded-2xl border border-border bg-surface/40 p-4">
                        {content}
                      </div>
                    )}
                  </li>
                )
              })}
            </motion.ul>

            <motion.div
              variants={fadeUp}
              className="mt-6 rounded-2xl border border-border bg-surface/40 p-5 text-sm text-muted"
            >
              <span className="font-medium text-foreground">
                {site.founder.name}
              </span>{' '}
              · {site.founder.role}
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="relative rounded-[1.75rem] border border-border bg-surface/50 p-6 md:p-9"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-80 flex-col items-center justify-center text-center"
                >
                  <span className="grid size-14 place-items-center rounded-full bg-accent-soft text-accent">
                    <Check className="size-7" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                    Message ready to send.
                  </h3>
                  <p className="mt-2 max-w-sm text-pretty text-muted">
                    Your email client should have opened with the details. If it
                    didn't, reach us directly at {site.email}.
                  </p>
                  <PremiumButton
                    variant="secondary"
                    className="mt-6"
                    onClick={() => {
                      setHoneypot('')
                      renderedAt.current = Date.now()
                      setSent(false)
                    }}
                  >
                    Send another
                  </PremiumButton>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="grid gap-5"
                >
                  {/* Honeypot — hidden from humans, irresistible to bots. */}
                  <div
                    aria-hidden
                    style={{
                      position: 'absolute',
                      left: '-9999px',
                      width: 1,
                      height: 1,
                      overflow: 'hidden',
                    }}
                  >
                    <label htmlFor="dv-website">Website</label>
                    <input
                      id="dv-website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Name"
                      value={form.name}
                      onChange={(v) => update('name', v)}
                      error={errors.name}
                      autoComplete="name"
                    />
                    <Field
                      label="Email"
                      type="email"
                      value={form.email}
                      onChange={(v) => update('email', v)}
                      error={errors.email}
                      autoComplete="email"
                    />
                  </div>
                  <Field
                    label="Company"
                    value={form.company}
                    onChange={(v) => update('company', v)}
                    optional
                    autoComplete="organization"
                  />
                  <Field
                    label="What are you building?"
                    value={form.message}
                    onChange={(v) => update('message', v)}
                    error={errors.message}
                    multiline
                  />
                  <PremiumButton size="lg" className="mt-1 w-full">
                    Send message
                    <Send className="size-4" />
                  </PremiumButton>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  )
}

interface FieldProps {
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  type?: string
  optional?: boolean
  multiline?: boolean
  autoComplete?: string
}

function Field({
  label,
  value,
  onChange,
  error,
  type = 'text',
  optional,
  multiline,
  autoComplete,
}: FieldProps) {
  const id = label.toLowerCase().replace(/[^a-z]/g, '-')
  const base =
    'w-full rounded-xl border bg-background/60 px-4 py-3 text-foreground placeholder:text-subtle transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40'
  const borderClass = error ? 'border-red-500/60' : 'border-border'

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 flex items-center gap-1.5 text-sm font-medium text-foreground"
      >
        {label}
        {optional && <span className="text-xs text-subtle">(optional)</span>}
      </label>
      {multiline ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
          className={`${base} ${borderClass} resize-none`}
          aria-invalid={!!error}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
          className={`${base} ${borderClass}`}
          aria-invalid={!!error}
        />
      )}
      {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
    </div>
  )
}
