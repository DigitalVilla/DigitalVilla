import { cn } from '@/lib/utils'

/** Small uppercase label that sits above section headings. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted backdrop-blur',
        className
      )}
    >
      <span className="size-1.5 rounded-full bg-accent" aria-hidden />
      {children}
    </span>
  )
}
