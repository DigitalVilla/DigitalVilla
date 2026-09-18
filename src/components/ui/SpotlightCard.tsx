import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface SpotlightCardProps {
  children: React.ReactNode
  className?: string
  /** CSS color for the cursor glow. Defaults to the accent token. */
  glow?: string
}

/**
 * Card with a soft radial highlight that follows the cursor — the
 * Vercel/Linear "spotlight" hover.
 *
 * The cursor position is written straight to CSS custom properties on the
 * element rather than held in React state, so tracking the mouse never
 * re-renders the card (or the icon, heading and list inside it).
 */
export function SpotlightCard({
  children,
  className,
  glow = 'var(--accent)',
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border bg-surface/60 transition-colors duration-300 hover:border-border-strong',
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in oklch, ${glow} 16%, transparent), transparent 70%)`,
        }}
        aria-hidden
      />
      {children}
    </div>
  )
}
