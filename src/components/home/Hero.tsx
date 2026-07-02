import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { RevealText } from '@/components/ui/RevealText'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { Aurora } from '@/components/ui/Aurora'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { easeOutExpo } from '@/lib/motion'
import { site } from '@/data/site'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '32%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <section
      ref={ref}
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20"
    >
      <Aurora />
      <motion.div
        style={{ scale }}
        className="bg-grid mask-fade-y pointer-events-none absolute inset-0 -z-10"
      />

      <motion.div style={{ y, opacity }} className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
        >
          <Eyebrow>
            <Sparkles className="size-3" />
            Full-stack software studio · {site.location.split('·')[0].trim()}
          </Eyebrow>
        </motion.div>

        <h1 className="mt-7 max-w-5xl font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.25rem]">
          <RevealText
            as="span"
            text="We engineer software"
            className="block"
            delay={0.15}
          />
          <RevealText
            as="span"
            text="that feels inevitable."
            className="text-gradient block"
            delay={0.45}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: easeOutExpo }}
          className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted md:text-xl"
        >
          Digital Villa is a full-stack studio building serverless web & mobile
          products — engineered end-to-end with the polish your brand deserves.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease: easeOutExpo }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton to="/contact">
            Start a project
            <ArrowRight className="size-4" />
          </MagneticButton>
          <PremiumButton as="link" to="/work" variant="secondary">
            Explore our work
          </PremiumButton>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <div className="flex h-9 w-5.5 items-start justify-center rounded-full border border-border-strong p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="size-1.5 rounded-full bg-muted"
          />
        </div>
      </motion.div>
    </section>
  )
}
