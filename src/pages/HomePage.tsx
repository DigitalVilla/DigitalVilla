import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '@/components/seo/Seo'
import { Hero } from '@/components/home/Hero'
import { MetricsBand } from '@/components/home/MetricsBand'
import { ServiceCard } from '@/components/home/ServiceCard'
import { TechnologyGrid } from '@/components/home/TechnologyGrid'
import { ProjectCard } from '@/components/work/ProjectCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTASection } from '@/components/shared/CTASection'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Marquee } from '@/components/shared/Marquee'
import { services } from '@/data/services'
import { featuredProjects } from '@/data/projects'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

const clients = [
  'lululemon',
  'Panasonic',
  'NetLync',
  'CPKC Rail',
  'Robots & Pencils',
  'Winsight Media',
]

export default function HomePage() {
  return (
    <>
      <Seo
        title="Digital Villa"
        description="Digital Villa is a full-stack software studio building serverless web & mobile products for ambitious teams."
        path="/"
      />

      <Hero />

      {/* Positioning statement */}
      <section className="container-page py-24 md:py-32">
        <motion.div
          variants={staggerContainer(0.04)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-4xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-center font-display text-2xl font-medium leading-[1.35] tracking-tight text-balance sm:text-3xl md:text-[2.5rem] md:leading-[1.3]"
          >
            For over a decade we’ve shipped scalable software for{' '}
            <span className="text-muted">
              Fortune 500 brands and high-growth startups
            </span>{' '}
            — taking the technology off your plate so you can focus on what you
            do best, while we engineer the rest.
          </motion.p>
        </motion.div>
      </section>

      {/* Trust marquee */}
      <section aria-label="Trusted by" className="py-6">
        <p className="container-page mb-8 text-center text-sm uppercase tracking-[0.18em] text-subtle">
          Trusted by enterprise teams across retail, rail, fintech & media
        </p>
        <Marquee items={clients} />
      </section>

      {/* Metrics */}
      <section className="container-page py-24 md:py-28">
        <MetricsBand />
      </section>

      {/* Featured work */}
      <section className="container-page py-16 md:py-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Selected work"
            title="Products we're proud to have shipped."
            description="A look at the platforms, apps, and experiences we've engineered for our partners."
            className="max-w-2xl"
          />
          <Link
            to="/work"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-foreground"
          >
            View all work
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-2"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </section>

      {/* Services */}
      <section className="container-page py-24 md:py-32">
        <SectionHeading
          eyebrow="What we do"
          title="One team for the entire stack."
          description="From design systems to serverless infrastructure, we own the whole journey — no hand-offs, no gaps."
        />
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </section>

      {/* Tech stack */}
      <section className="container-page py-16 md:py-24">
        <AnimatedSection className="overflow-hidden rounded-[2rem] border border-border bg-surface/30 px-6 py-16 md:px-12 md:py-20">
          <SectionHeading
            eyebrow="Technology"
            title="Modern tools, chosen with intent."
            description="We pick boring-where-it-counts, cutting-edge-where-it-matters — always type-safe, always tested."
          />
          <div className="mt-12">
            <TechnologyGrid />
          </div>
        </AnimatedSection>
      </section>

      <CTASection />
    </>
  )
}
