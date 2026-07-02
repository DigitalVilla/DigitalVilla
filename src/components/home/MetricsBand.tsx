import { motion } from 'framer-motion'
import { metrics } from '@/data/services'
import { Counter } from '@/components/ui/Counter'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

export function MetricsBand() {
  return (
    <motion.dl
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4"
    >
      {metrics.map((m) => (
        <motion.div
          key={m.label}
          variants={fadeUp}
          className="flex flex-col gap-2 bg-surface/60 p-7 text-center md:p-9"
        >
          <dd className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            <Counter
              value={m.value}
              prefix={m.prefix}
              suffix={m.suffix}
            />
          </dd>
          <dt className="text-sm text-muted">{m.label}</dt>
        </motion.div>
      ))}
    </motion.dl>
  )
}
