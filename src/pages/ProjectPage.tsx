import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Seo } from '@/components/seo/Seo'
import { SmartImage } from '@/components/ui/SmartImage'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { CTASection } from '@/components/shared/CTASection'
import { AnimatedSection, AnimatedItem } from '@/components/ui/AnimatedSection'
import { projects, getProject } from '@/data/projects'
import { fadeUp, easeOutExpo } from '@/lib/motion'

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProject(slug) : undefined

  if (!project) return <Navigate to="/work" replace />

  const index = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  const sections = [
    { label: 'The problem', body: project.problem },
    { label: 'Our solution', body: project.solution },
    { label: 'Architecture', body: project.architecture },
    { label: 'Impact', body: project.impact },
  ]

  return (
    <>
      <Seo
        title={project.name}
        description={`${project.name} — ${project.tagline}`}
        path={`/work/${project.slug}`}
        image={project.image}
      />

      <article className="px-6 pt-32 md:pt-40">
        <div className="container-page">
          <Link
            to="/work"
            className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            All work
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="mt-8 flex flex-col gap-5"
          >
            <Eyebrow>{project.category}</Eyebrow>
            <h1 className="max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              {project.name}
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted">
              {project.tagline}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-subtle">
              <span>{project.client}</span>
              <span aria-hidden>·</span>
              <span>{project.year}</span>
              {project.url && (
                <>
                  <span aria-hidden>·</span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1 text-accent hover:underline"
                  >
                    Visit live site
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </>
              )}
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: easeOutExpo }}
            className="mt-12"
          >
            <SmartImage
              src={project.image}
              alt={`${project.name} — ${project.tagline}`}
              tone={project.accent}
              wrapperClassName="aspect-[16/9] w-full rounded-[1.75rem] border border-border"
            />
          </motion.div>

          {/* Outcomes */}
          <AnimatedSection
            stagger
            className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3"
          >
            {project.outcomes.map((o) => (
              <AnimatedItem key={o.label} className="bg-surface/60 p-6">
                <p className="font-display text-xl font-semibold tracking-tight">
                  {o.value}
                </p>
                <p className="mt-1 text-sm text-muted">{o.label}</p>
              </AnimatedItem>
            ))}
          </AnimatedSection>

          {/* Narrative */}
          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
            <div className="space-y-12">
              {sections.map((s) => (
                <motion.section
                  key={s.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {s.label}
                  </h2>
                  <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground/90">
                    {s.body}
                  </p>
                </motion.section>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-border bg-surface/40 p-6">
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
                  Technologies
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                {project.url && (
                  <PremiumButton
                    as="a"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    variant="secondary"
                    size="sm"
                    className="mt-6 w-full"
                  >
                    Visit live site
                    <ArrowUpRight className="size-4" />
                  </PremiumButton>
                )}
              </div>
            </aside>
          </div>

          {/* Next project */}
          <Link
            to={`/work/${next.slug}`}
            className="group mt-20 flex items-center justify-between gap-6 rounded-2xl border border-border bg-surface/40 p-7 transition-all duration-300 hover:border-border-strong hover:bg-surface/70 md:p-9"
          >
            <div>
              <p className="text-sm text-subtle">Next project</p>
              <p className="mt-1 font-display text-2xl font-semibold tracking-tight">
                {next.name}
              </p>
            </div>
            <span className="grid size-12 shrink-0 place-items-center rounded-full border border-border text-foreground transition-transform group-hover:translate-x-1">
              <ArrowRight className="size-5" />
            </span>
          </Link>
        </div>
      </article>

      <CTASection />
    </>
  )
}
