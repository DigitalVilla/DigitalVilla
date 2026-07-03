import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { RevealText } from '@/components/ui/RevealText'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { Aurora } from '@/components/ui/Aurora'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { easeOutExpo } from '@/lib/motion'
import { site } from '@/data/site'

const trustedBy = ['lululemon', 'Panasonic', 'CPKC', 'Quantifi', 'NetLync']

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  // Scroll-driven parallax on the whole stage.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '34%'])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  // Cursor-driven spotlight + layered parallax.
  const mx = useSpring(useMotionValue(0.5), { stiffness: 120, damping: 30 })
  const my = useSpring(useMotionValue(0.5), { stiffness: 120, damping: 30 })

  const spotX = useTransform(mx, [0, 1], ['0%', '100%'])
  const spotY = useTransform(my, [0, 1], ['0%', '100%'])
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${spotX} ${spotY}, var(--accent-soft), transparent 65%)`

  const orbAX = useTransform(mx, [0, 1], [28, -28])
  const orbAY = useTransform(my, [0, 1], [22, -22])
  const orbBX = useTransform(mx, [0, 1], [-34, 34])
  const orbBY = useTransform(my, [0, 1], [-24, 24])

  function handleMouseMove(e: React.MouseEvent) {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="grain relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-24"
    >
      {/* Ambient layers */}
      <Aurora />
      <motion.div
        style={{ scale }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Grid */}
        <div className="bg-grid mask-fade-y absolute inset-0 opacity-70" />

        {/* Rotating conic glow ring behind the headline (desktop only) */}
        <div className="absolute left-1/2 top-1/2 -z-10 hidden size-[42rem] max-w-[120vw] -translate-x-1/2 -translate-y-1/2 md:block">
          <div
            className="spin-ambient absolute inset-0 rounded-full opacity-30 blur-2xl"
            style={{
              background:
                'conic-gradient(from 0deg, transparent, var(--accent), transparent 30%, var(--accent-2), transparent 65%)',
            }}
          />
        </div>

        {/* Large gradient glows drifting around the hero */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="animate-drift-c size-[40rem] max-w-[115vw] rounded-full opacity-30 blur-[70px] md:blur-[100px]"
            style={{
              background:
                'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            }}
          />
        </div>
        <div className="animate-drift-a absolute left-[8%] top-[16%] hidden md:block">
          <motion.div
            style={{ x: orbAX, y: orbAY }}
            className="size-60 rounded-full opacity-55 blur-[80px]"
          >
            <div
              className="size-full rounded-full"
              style={{
                background:
                  'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
              }}
            />
          </motion.div>
        </div>
        <div className="animate-drift-b absolute right-[8%] bottom-[14%] hidden md:block">
          <motion.div
            style={{ x: orbBX, y: orbBY }}
            className="size-72 rounded-full opacity-45 blur-[90px]"
          >
            <div
              className="size-full rounded-full"
              style={{
                background:
                  'radial-gradient(circle, var(--accent-2) 0%, transparent 70%)',
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Cursor spotlight */}
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 -z-10"
      />

      {/* Faint logo watermark */}
      <img
        src="/logo_DV.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[min(80vw,760px)] -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.045] invert dark:invert-0"
      />

      <motion.div
        style={{ y, opacity }}
        className="flex flex-col items-center text-center"
      >
        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm shadow-[var(--shadow-soft)]"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-medium text-foreground">
            Available for new projects
          </span>
          <span className="text-subtle" aria-hidden>
            ·
          </span>
          <span className="text-muted">
            {site.location.split('·')[0].trim()}
          </span>
        </motion.div>

        <h1 className="mt-8 max-w-[18ch] font-display text-[2.85rem] font-semibold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          <RevealText as="span" text="We engineer software" className="block" delay={0.15} />
          <RevealText
            as="span"
            text="that feels inevitable."
            className="text-gradient-animated block"
            delay={0.42}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95, ease: easeOutExpo }}
          className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted md:text-xl"
        >
          A full-stack studio crafting serverless web &amp; mobile products —
          engineered end-to-end, and trusted by Fortune&nbsp;500 teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: easeOutExpo }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <PremiumButton as="link" to="/contact" variant="accent" size="lg">
            Start a project
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </PremiumButton>
          <PremiumButton as="link" to="/work" variant="secondary" size="lg">
            Explore our work
          </PremiumButton>
        </motion.div>

        {/* Inline trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.35, ease: easeOutExpo }}
          className="mt-14 flex flex-col items-center gap-4"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-subtle">
            Trusted by teams at
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {trustedBy.map((brand) => (
              <span
                key={brand}
                className="font-display text-base font-medium tracking-tight text-muted/80 transition-colors hover:text-foreground md:text-lg"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 1 }}
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
