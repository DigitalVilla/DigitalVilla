import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useMagnetic } from '@/hooks/useMagnetic'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: React.ReactNode
  to?: string
  href?: string
  className?: string
  strength?: number
  onClick?: () => void
  ariaLabel?: string
}

/**
 * A magnetic CTA — the element eases toward the cursor and springs back.
 * Renders a router Link, anchor, or button depending on the props supplied.
 */
export function MagneticButton({
  children,
  to,
  href,
  className,
  strength = 0.4,
  onClick,
  ariaLabel,
}: MagneticButtonProps) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagnetic(strength)

  const classes = cn(
    'group relative inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[0.95rem] font-semibold text-accent-foreground shadow-[var(--shadow-glow)] will-change-transform',
    className
  )

  const inner = (
    <motion.span
      className="relative z-10 inline-flex items-center gap-2"
      style={{ x, y }}
    >
      {children}
    </motion.span>
  )

  const shared = {
    onMouseMove,
    onMouseLeave,
    className: classes,
    style: { x, y },
    'aria-label': ariaLabel,
  } as const

  if (to) {
    return (
      <motion.div
        ref={ref as React.Ref<HTMLDivElement>}
        {...shared}
        whileTap={{ scale: 0.97 }}
      >
        <Link to={to} className="contents" onClick={onClick}>
          {inner}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        {...shared}
        whileTap={{ scale: 0.97 }}
      >
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      {...shared}
      whileTap={{ scale: 0.97 }}
    >
      {inner}
    </motion.button>
  )
}
