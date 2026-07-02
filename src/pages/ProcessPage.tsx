import { motion } from 'framer-motion'
import { Seo } from '@/components/seo/Seo'
import { PageHero } from '@/components/shared/PageHero'
import { ProcessTimeline } from '@/components/process/ProcessTimeline'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTASection } from '@/components/shared/CTASection'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

const principles = [
  {
    title: 'Ship weekly',
    body: 'You see real, running software every week — not status decks. Momentum is the best risk management.',
  },
  {
    title: 'Decisions in the open',
    body: 'Architecture, trade-offs, and estimates are documented and shared. No black boxes, no surprises.',
  },
  {
    title: 'Quality is built in',
    body: 'Tests, performance budgets, and accessibility are part of definition-of-done — not a phase we skip when time is tight.',
  },
]

export default function ProcessPage() {
  return (
    <>
      <Seo
        title="Process"
        description="How Digital Villa works — a transparent, enterprise-grade process from discovery to long-term support."
        path="/process"
      />

      <PageHero
        eyebrow="Our process"
        title="A calm, transparent path from idea to launch."
        description="Seven deliberate phases that de-risk the work, build trust, and turn ambitious ideas into software you can rely on."
      />

      <section className="container-page py-16 md:py-24">
        <ProcessTimeline />
      </section>

      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="How we operate"
          title="The habits that make it work."
        />
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 md:grid-cols-3"
        >
          {principles.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-surface/40 p-7"
            >
              <h3 className="font-display text-lg font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-2.5 text-pretty text-sm leading-relaxed text-muted">
                {p.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <CTASection title="Ready to start with discovery?" />
    </>
  )
}
