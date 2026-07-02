import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { Aurora } from '@/components/ui/Aurora'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

interface CTASectionProps {
  title?: string
  description?: string
}

export function CTASection({
  title = "Let's build something exceptional.",
  description = 'Tell us what you’re working on. We’ll bring senior engineering, design, and delivery — and treat your product like our own.',
}: CTASectionProps) {
  return (
    <section className="container-page py-24 md:py-32">
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative overflow-hidden rounded-[2rem] border border-border bg-surface/40 px-6 py-16 text-center md:px-16 md:py-24"
      >
        <Aurora className="opacity-70" />
        <div className="bg-dotted pointer-events-none absolute inset-0 -z-10 opacity-40" />
        <motion.h2
          variants={fadeUp}
          className="mx-auto max-w-3xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.05]"
        >
          {title}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted md:text-lg"
        >
          {description}
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton to="/contact">
            Start a project
            <ArrowRight className="size-4" />
          </MagneticButton>
          <PremiumButton as="link" to="/work" variant="secondary">
            See our work
          </PremiumButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
