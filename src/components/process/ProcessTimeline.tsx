import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { processSteps } from '@/data/process'
import { fadeUp, viewportOnce } from '@/lib/motion'

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 60%', 'end 60%'],
  })
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div ref={ref} className="relative">
      {/* Spine */}
      <div
        className="absolute left-[27px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-1/2"
        aria-hidden
      />
      <motion.div
        style={{ scaleY: lineScale }}
        className="absolute left-[27px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-accent to-accent-2 md:left-1/2 md:-translate-x-1/2"
        aria-hidden
      />

      <ol className="space-y-12 md:space-y-20">
        {processSteps.map((step, i) => {
          const Icon = step.icon
          const onLeft = i % 2 === 0
          return (
            <motion.li
              key={step.key}
              id={step.key}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="relative grid grid-cols-[56px_1fr] items-start gap-x-6 md:grid-cols-[1fr_56px_1fr] md:gap-x-8"
            >
              {/* Left column (desktop) */}
              <div className={`hidden md:block ${onLeft ? '' : 'md:order-3'}`}>
                <StepCard step={step} align={onLeft ? 'right' : 'left'} />
              </div>

              {/* Node */}
              <div className="relative z-10 flex justify-center md:order-2">
                <div className="grid size-14 place-items-center rounded-2xl border border-border bg-surface text-accent shadow-[var(--shadow-soft)]">
                  <Icon className="size-6" strokeWidth={1.75} />
                </div>
              </div>

              {/* Mobile / right column */}
              <div className={onLeft ? 'md:hidden' : 'md:order-1'}>
                <StepCard step={step} align="left" />
              </div>
            </motion.li>
          )
        })}
      </ol>
    </div>
  )
}

function StepCard({
  step,
  align,
}: {
  step: (typeof processSteps)[number]
  align: 'left' | 'right'
}) {
  return (
    <div className={align === 'right' ? 'md:text-right' : ''}>
      <span className="font-mono text-xs font-medium tracking-widest text-accent">
        {String(step.index).padStart(2, '0')}
      </span>
      <h3 className="mt-1.5 font-display text-2xl font-semibold tracking-tight">
        {step.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-muted">{step.summary}</p>
      <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
        {step.detail}
      </p>
      <ul
        className={`mt-4 flex flex-wrap gap-2 ${align === 'right' ? 'md:justify-end' : ''}`}
      >
        {step.deliverables.map((d) => (
          <li
            key={d}
            className="rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-subtle"
          >
            {d}
          </li>
        ))}
      </ul>
    </div>
  )
}
