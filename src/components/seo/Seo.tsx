import { useEffect } from 'react'
import { site } from '@/data/site'

interface SeoProps {
  title: string
  description?: string
  path?: string
  image?: string
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  )
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.rel = 'canonical'
    document.head.appendChild(el)
  }
  el.href = href
}

/**
 * Document-head SEO controller. Keeps title, description, canonical and
 * social tags in sync per route — no external dependency needed.
 */
export function Seo({ title, description, path = '/', image }: SeoProps) {
  const fullTitle =
    title === site.name ? site.name : `${title} · ${site.name}`
  const desc = description ?? site.description
  const url = `${site.url}${path}`
  const img = image ?? 'https://assets.digitalvilla.ca/images/nebula-lg.jpg'

  useEffect(() => {
    document.title = fullTitle
    upsertMeta('name', 'description', desc)
    upsertCanonical(url)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', desc)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', img)
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', desc)
    upsertMeta('name', 'twitter:image', img)
  }, [fullTitle, desc, url, img])

  return null
}
