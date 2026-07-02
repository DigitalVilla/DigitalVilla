import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Seo } from '@/components/seo/Seo'
import { PageHero } from '@/components/shared/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { CTASection } from '@/components/shared/CTASection'
import { pillars, values, story, whyChooseUs } from '@/data/company'
import { site } from '@/data/site'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

export default function CompanyPage() {
  return (
    <>
      <Seo
        title="Company"
        description="The story, mission, and values behind Digital Villa — a senior, remote-first software studio."
        path="/company"
      />

      <PageHero
        eyebrow="Our company"
        title="A studio built on craft, not headcount."
        description="Digital Villa pairs senior engineering with design and delivery — a small team that ships like a much larger one, without the overhead."
      />

      {/* Mission & Vision */}
      <section className="container-page py-16 md:py-24">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-5 md:grid-cols-2"
        >
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <motion.div key={p.label} variants={fadeUp}>
                <SpotlightCard className="h-full p-8 md:p-10">
                  <div className="grid size-12 place-items-center rounded-xl border border-border bg-surface-raised text-accent">
                    <Icon className="size-6" strokeWidth={1.75} />
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
                    {p.label}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-pretty leading-relaxed text-muted">
                    {p.body}
                  </p>
                </SpotlightCard>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* Values */}
      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="Values"
          title="The principles behind every decision."
        />
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2"
        >
          {values.map((v) => {
            const Icon = v.icon
            return (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="flex gap-5 rounded-2xl border border-border bg-surface/40 p-7"
              >
                <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
                    {v.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* Journey */}
      <section className="container-page py-16 md:py-24">
        <SectionHeading
          align="left"
          eyebrow="Our journey"
          title="From a one-person shop to a premium partner."
          className="max-w-2xl"
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {story.map((s, i) => (
            <motion.article
              key={s.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface/60 p-8"
            >
              <span className="font-mono text-sm font-medium text-accent">
                {s.year}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2.5 text-pretty text-sm leading-relaxed text-muted">
                {s.body}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="Why clients choose us"
          title="Senior engineering, without the agency overhead."
        />
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2"
        >
          {whyChooseUs.map((w, i) => (
            <motion.div key={w.title} variants={fadeUp} className="flex gap-5">
              <span className="font-mono text-sm font-medium text-subtle">
                0{i + 1}
              </span>
              <div className="border-t border-border pt-1">
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {w.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
                  {w.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Founder note */}
      <section className="container-page py-16 md:py-24">
        <motion.figure
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-border bg-surface/40 p-8 text-center md:p-14"
        >
          <Quote className="mx-auto size-9 text-accent" />
          <blockquote className="mt-6 text-balance font-display text-xl font-medium leading-relaxed tracking-tight md:text-2xl">
            “My commitment is simple: help you grow by focusing on what you do
            best, and leaving the technology to us. Remote or in-office, we
            build modern architectures and treat your product like our own.”
          </blockquote>
          <figcaption className="mt-7 text-sm">
            <span className="font-semibold text-foreground">
              {site.founder.name}
            </span>
            <span className="block text-muted">{site.founder.role}</span>
          </figcaption>
        </motion.figure>
      </section>

      <CTASection title="Want a partner who treats your product like their own?" />
    </>
  )
}
