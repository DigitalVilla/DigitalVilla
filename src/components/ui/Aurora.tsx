import { cn } from '@/lib/utils'

/**
 * Soft, GPU-cheap ambient gradient blobs for hero/section backdrops.
 * Purely decorative — hidden from assistive tech.
 */
export function Aurora({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 -z-10 overflow-hidden',
        className
      )}
    >
      <div
        className="animate-drift-a absolute -top-1/4 left-1/5 size-[55vw] max-w-3xl rounded-full opacity-60 blur-[64px] md:blur-[100px]"
        style={{
          background:
            'radial-gradient(circle at center, var(--accent) 0%, transparent 70%)',
        }}
      />
      <div
        className="animate-drift-b absolute top-1/5 right-1/6 size-[45vw] max-w-2xl rounded-full opacity-50 blur-[64px] md:blur-[110px] [animation-delay:-8s]"
        style={{
          background:
            'radial-gradient(circle at center, var(--accent-2) 0%, transparent 70%)',
        }}
      />
      <div
        className="animate-drift-c absolute -bottom-1/5 left-1/3 size-[40vw] max-w-xl rounded-full opacity-40 blur-[72px] md:blur-[120px] [animation-delay:-5s]"
        style={{
          background:
            'radial-gradient(circle at center, var(--accent) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
