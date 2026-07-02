import { motion } from 'framer-motion'
import { Seo } from '@/components/seo/Seo'
import { PageHero } from '@/components/shared/PageHero'
import { ProjectCard } from '@/components/work/ProjectCard'
import { CTASection } from '@/components/shared/CTASection'
import { projects } from '@/data/projects'
import { staggerContainer, viewportOnce } from '@/lib/motion'

export default function WorkPage() {
  return (
    <>
      <Seo
        title="Work"
        description="Selected case studies from Digital Villa — fintech platforms, consumer apps, and high-performance websites."
        path="/work"
      />

      <PageHero
        eyebrow="Our work"
        title="Case studies in shipping the right thing."
        description="Every project here started with a real problem. Explore how we solved them — the architecture, the trade-offs, and the impact."
      />

      <section className="container-page py-12 md:py-16">
        <motion.div
          variants={staggerContainer(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </section>

      <CTASection title="Have a project that belongs on this page?" />
    </>
  )
}
