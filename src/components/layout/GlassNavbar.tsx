import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { navLinks, site } from '@/data/site'
import { Logo } from './Logo'
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { Aurora } from '@/components/ui/Aurora'
import { cn } from '@/lib/utils'

const spring = { type: 'spring', stiffness: 400, damping: 28 } as const

export function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))
  useEffect(() => setOpen(false), [location.pathname])

  // Lock scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-page">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className={cn(
            'mt-3 flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 md:mt-4 md:px-5',
            scrolled
              ? 'glass shadow-[var(--shadow-soft)]'
              : 'border border-transparent bg-transparent'
          )}
        >
          <Link
            to="/"
            className="flex items-center pl-1"
            aria-label={`${site.name} home`}
          >
            <Logo wordmarkClassName="hidden sm:inline" />
          </Link>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'text-foreground'
                        : 'text-muted hover:text-foreground'
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-surface-raised"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      {link.label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <PremiumButton as="link" to="/contact" variant="accent" size="sm" className="hidden md:inline-flex">
              Start a project
            </PremiumButton>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="relative grid size-10 place-items-center rounded-full border border-border bg-surface/50 text-foreground transition-colors hover:border-accent md:hidden"
            >
              <span className="relative block h-3.5 w-5" aria-hidden>
                <motion.span
                  className="absolute left-0 top-1/2 h-0.5 w-full -mt-px rounded-full bg-current"
                  animate={open ? { y: 0, rotate: 45 } : { y: -5, rotate: 0 }}
                  transition={spring}
                />
                <motion.span
                  className="absolute left-0 top-1/2 h-0.5 w-full -mt-px rounded-full bg-current"
                  animate={open ? { opacity: 0, scaleX: 0.3 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.15 }}
                />
                <motion.span
                  className="absolute left-0 top-1/2 h-0.5 w-full -mt-px rounded-full bg-current"
                  animate={open ? { y: 0, rotate: -45 } : { y: 5, rotate: 0 }}
                  transition={spring}
                />
              </span>
            </button>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col overflow-hidden bg-background/90 backdrop-blur-2xl md:hidden"
          >
            <Aurora className="opacity-50" />

            <div className="flex flex-1 flex-col px-6 pb-10 pt-28">
              <nav className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.07 * i + 0.12, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        cn(
                          'group flex items-center justify-between border-b border-border py-5 transition-colors',
                          isActive ? 'text-foreground' : 'text-muted'
                        )
                      }
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-xs font-medium text-accent">
                          0{i + 1}
                        </span>
                        <span className="font-display text-4xl font-medium tracking-tight">
                          {link.label}
                        </span>
                      </span>
                      <ArrowUpRight className="size-6 text-subtle transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.07 * navLinks.length + 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="mt-auto space-y-7 pt-12"
              >
                <PremiumButton as="link" to="/contact" variant="accent" size="lg" className="w-full">
                  Start a project
                  <ArrowRight className="size-4" />
                </PremiumButton>

                <div className="flex flex-col gap-2 text-sm">
                  <a
                    href={`mailto:${site.email}`}
                    className="w-fit text-muted transition-colors hover:text-foreground"
                  >
                    {site.email}
                  </a>
                  <a
                    href="tel:+15878878781"
                    className="w-fit text-muted transition-colors hover:text-foreground"
                  >
                    {site.phone}
                  </a>
                  <span className="text-subtle">{site.location}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
