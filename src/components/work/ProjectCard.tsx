import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/types'
import { SmartImage } from '@/components/ui/SmartImage'
import { fadeUp } from '@/lib/motion'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article variants={fadeUp} className="group">
      <Link
        to={`/work/${project.slug}`}
        className="block overflow-hidden rounded-2xl border border-border bg-surface/50 transition-[translate,border-color,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-border-strong hover:shadow-[var(--shadow-lift)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <SmartImage
            src={project.image}
            alt={`${project.name} — ${project.tagline}`}
            tone={project.accent}
            wrapperClassName="h-full w-full"
            className="transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
          <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
            {project.category}
          </span>
          <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight className="size-4" />
          </span>
        </div>

        <div className="p-6">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-xl font-semibold tracking-tight">
              {project.name}
            </h3>
            <span className="shrink-0 text-sm text-subtle">{project.year}</span>
          </div>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
            {project.tagline}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-2.5 py-1 text-xs text-subtle"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
