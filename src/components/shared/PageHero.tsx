import { motion } from 'framer-motion'
import { RevealText } from '@/components/ui/RevealText'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Aurora } from '@/components/ui/Aurora'
import { easeOutExpo } from '@/lib/motion'

interface PageHeroProps {
  eyebrow: string
  title: string
  description?: string
  children?: React.ReactNode
}

/** Consistent, animated hero header for interior pages. */
export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <header className="relative overflow-hidden px-6 pt-36 pb-12 md:pt-44 md:pb-16">
      <Aurora className="opacity-60" />
      <div className="bg-grid mask-fade-y pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div className="container-page flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>
        <RevealText
          as="h1"
          text={title}
          delay={0.1}
          className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
        />
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: easeOutExpo }}
            className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted"
          >
            {description}
          </motion.p>
        )}
        {children}
      </div>
    </header>
  )
}
