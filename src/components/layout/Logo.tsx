import { site } from '@/data/site'
import { cn } from '@/lib/utils'

interface LogoProps {
  /** Show the "Digital Villa" wordmark next to the mark. */
  showWordmark?: boolean
  className?: string
  markClassName?: string
  /** Extra classes on the wordmark — e.g. to hide it responsively. */
  wordmarkClassName?: string
}

/**
 * Brand lockup. The source logo is white artwork on transparency, so it's
 * inverted to dark in light mode and left white in dark mode.
 */
export function Logo({
  showWordmark = true,
  className,
  markClassName,
  wordmarkClassName,
}: LogoProps) {
  return (
    <span className={cn('flex items-center gap-2', className)}>
      <img
        src="/logo_DV.png"
        alt=""
        width={560}
        height={315}
        decoding="async"
        className={cn(
          'h-6 w-auto object-contain invert dark:invert-0',
          markClassName
        )}
      />
      {showWordmark && (
        <span
          className={cn(
            'font-display text-base font-semibold tracking-tight',
            wordmarkClassName
          )}
        >
          {site.name}
        </span>
      )}
    </span>
  )
}
