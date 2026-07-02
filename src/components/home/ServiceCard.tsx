import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import type { Service } from '@/types'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { fadeUp } from '@/lib/motion'

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <motion.div variants={fadeUp} className="h-full">
      <SpotlightCard className="h-full p-7">
        <div className="grid size-12 place-items-center rounded-xl border border-border bg-surface-raised text-accent transition-colors group-hover:border-accent/40">
          <Icon className="size-6" strokeWidth={1.75} />
        </div>
        <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
          {service.title}
        </h3>
        <p className="mt-2.5 text-pretty text-sm leading-relaxed text-muted">
          {service.description}
        </p>
        <ul className="mt-5 space-y-2">
          {service.capabilities.map((cap) => (
            <li key={cap} className="flex items-center gap-2 text-sm text-subtle">
              <Check className="size-3.5 shrink-0 text-accent" strokeWidth={2.5} />
              {cap}
            </li>
          ))}
        </ul>
      </SpotlightCard>
    </motion.div>
  )
}
