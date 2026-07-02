import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface SpotlightCardProps {
  children: React.ReactNode
  className?: string
  /** CSS color for the cursor glow. Defaults to the accent token. */
  glow?: string
}

/**
 * Card with a soft radial highlight that follows the cursor — the
 * Vercel/Linear "spotlight" hover. Falls back gracefully without JS motion.
 */
export function SpotlightCard({
  children,
  className,
  glow = 'var(--accent)',
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  function onMouseMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border bg-surface/60 transition-colors duration-300 hover:border-border-strong',
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, color-mix(in oklch, ${glow} 16%, transparent), transparent 70%)`,
        }}
        aria-hidden
      />
      {children}
    </div>
  )
}
