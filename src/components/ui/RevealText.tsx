import { motion } from 'framer-motion'
import { easeOutExpo } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface RevealTextProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

/**
 * Word-by-word reveal — each word rises and fades in with a clip mask,
 * the signature Apple-style headline entrance.
 */
export function RevealText({
  text,
  className,
  delay = 0,
  stagger = 0.045,
  as = 'h1',
}: RevealTextProps) {
  const words = text.split(' ')
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      animate="show"
      aria-label={text}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="mr-[0.25em] inline-block overflow-hidden pb-[0.12em] align-bottom"
          aria-hidden
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '110%' },
              show: {
                y: 0,
                transition: { duration: 0.7, ease: easeOutExpo },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}
