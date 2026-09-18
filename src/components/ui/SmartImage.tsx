import { useState } from 'react'
import { cn } from '@/lib/utils'

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  /** Fallback gradient color while loading / on error. */
  tone?: string
  wrapperClassName?: string
  /**
   * Above-the-fold images should be fetched eagerly and at high priority
   * instead of waiting for the lazy-loading heuristics to kick in.
   */
  priority?: boolean
}

/**
 * Blur-up image with a graceful gradient fallback if the remote asset is
 * unavailable — keeps layouts stable and CLS at zero. Lazy by default; pass
 * `priority` for hero imagery.
 */
export function SmartImage({
  src,
  alt,
  tone = 'var(--accent)',
  className,
  wrapperClassName,
  priority = false,
  ...rest
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)

  return (
    <div className={cn('relative overflow-hidden', wrapperClassName)}>
      <div
        aria-hidden
        className={cn(
          'absolute inset-0 transition-opacity duration-700',
          loaded && !errored ? 'opacity-0' : 'opacity-100'
        )}
        style={{
          background: `radial-gradient(120% 120% at 30% 20%, color-mix(in oklch, ${tone} 40%, var(--surface)) 0%, var(--surface) 70%)`,
        }}
      />
      {!errored && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={cn(
            'relative h-full w-full object-cover transition-[opacity,transform] duration-700 ease-[var(--ease-out-expo)]',
            loaded ? 'opacity-100' : 'opacity-0',
            className
          )}
          {...rest}
        />
      )}
    </div>
  )
}
