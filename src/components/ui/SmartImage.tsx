import { useState } from 'react'
import { cn } from '@/lib/utils'

interface SmartImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  /** Fallback gradient color while loading / on error. */
  tone?: string
  wrapperClassName?: string
}

/**
 * Lazy, blur-up image with a graceful gradient fallback if the remote
 * asset is unavailable — keeps layouts stable and CLS at zero.
 */
export function SmartImage({
  src,
  alt,
  tone = 'var(--accent)',
  className,
  wrapperClassName,
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
          loading="lazy"
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
