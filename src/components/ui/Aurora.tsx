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
        className="animate-aurora absolute -top-1/3 left-1/4 size-[55vw] max-w-3xl rounded-full opacity-60 blur-[100px]"
        style={{
          background:
            'radial-gradient(circle at center, var(--accent) 0%, transparent 70%)',
        }}
      />
      <div
        className="animate-aurora absolute top-1/4 right-1/5 size-[45vw] max-w-2xl rounded-full opacity-50 blur-[110px] [animation-delay:-6s]"
        style={{
          background:
            'radial-gradient(circle at center, var(--accent-2) 0%, transparent 70%)',
        }}
      />
      <div
        className="animate-aurora absolute -bottom-1/4 left-1/3 size-[40vw] max-w-xl rounded-full opacity-40 blur-[120px] [animation-delay:-12s]"
        style={{
          background:
            'radial-gradient(circle at center, var(--accent) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
