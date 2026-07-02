import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  /** When true, children animate in a staggered sequence. */
  stagger?: boolean
  staggerAmount?: number
  delay?: number
  variants?: Variants
  as?: 'section' | 'div' | 'article' | 'header' | 'footer'
  id?: string
}

/** Reveal-on-scroll wrapper with optional staggered children. */
export function AnimatedSection({
  children,
  className,
  stagger = false,
  staggerAmount = 0.1,
  delay = 0,
  variants,
  as = 'section',
  id,
}: AnimatedSectionProps) {
  const MotionTag = motion[as]
  const resolved =
    variants ?? (stagger ? staggerContainer(staggerAmount, delay) : fadeUp)

  return (
    <MotionTag
      id={id}
      className={cn(className)}
      variants={resolved}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </MotionTag>
  )
}

/** Child reveal item — pair with <AnimatedSection stagger>. */
export function AnimatedItem({
  children,
  className,
  variants = fadeUp,
}: {
  children: React.ReactNode
  className?: string
  variants?: Variants
}) {
  return (
    <motion.div className={cn(className)} variants={variants}>
      {children}
    </motion.div>
  )
}
