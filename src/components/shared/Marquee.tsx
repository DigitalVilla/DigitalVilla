import { cn } from '@/lib/utils'

interface MarqueeProps {
  items: string[]
  className?: string
}

/**
 * Infinite horizontal marquee of labels. Duplicates the list so the
 * CSS `marquee` keyframe (translateX -50%) loops seamlessly. Pauses on hover.
 */
export function Marquee({ items, className }: MarqueeProps) {
  const doubled = [...items, ...items]
  return (
    <div className={cn('mask-fade-edges group relative overflow-hidden', className)}>
      <div className="animate-marquee flex w-max items-center gap-12 group-hover:[animation-play-state:paused] md:gap-20">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap font-display text-lg font-medium tracking-tight text-subtle transition-colors hover:text-foreground md:text-2xl"
            aria-hidden={i >= items.length}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
