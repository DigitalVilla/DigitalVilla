import { motion } from 'framer-motion'
import { technologies } from '@/data/services'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

export function TechnologyGrid() {
  return (
    <motion.div
      variants={staggerContainer(0.03)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="flex flex-wrap justify-center gap-2.5"
    >
      {technologies.map((tech) => (
        <motion.span
          key={tech.name}
          variants={fadeUp}
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-2 text-sm text-muted transition-[color,border-color,translate] duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-foreground"
        >
          <span className="size-1.5 rounded-full bg-subtle transition-colors group-hover:bg-accent" />
          {tech.name}
        </motion.span>
      ))}
    </motion.div>
  )
}
