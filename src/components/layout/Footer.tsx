import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { navLinks, site, socials } from '@/data/site'
import { Logo } from './Logo'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-surface/30">
      <div className="container-page py-16 md:py-20">
        <AnimatedSection className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center" aria-label={`${site.name} home`}>
              <Logo />
            </Link>
            <p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-muted">
              {site.tagline} Senior, remote-first engineering from{' '}
              {site.location}.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
              Connect
            </h3>
            <ul className="mt-4 space-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {s.label}
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              ))}
              <li className="pt-1 text-sm text-muted">{site.phone}</li>
            </ul>
          </div>
        </AnimatedSection>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-7 text-xs text-subtle md:flex-row md:items-center">
          <p>
            © {site.founded}–present {site.name}. Crafted with care.
          </p>
          <p>{site.founder.name} · {site.founder.role}</p>
        </div>
      </div>
    </footer>
  )
}
