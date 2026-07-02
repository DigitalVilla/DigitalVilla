import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CounterProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

/** Counts up from 0 → value once it scrolls into view. */
export function Counter({
  value,
  prefix = '',
  suffix = '',
  duration = 1.8,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(0)
  const decimals = value % 1 !== 0 ? 1 : 0

  useEffect(() => {
    if (!inView) return
    let raf = 0
    let start: number | null = null
    // expo-out — matches the site's signature easing curve
    const ease = (t: number) => 1 - Math.pow(1 - t, 3)
    const tick = (now: number) => {
      if (start === null) start = now
      const progress = Math.min((now - start) / (duration * 1000), 1)
      setDisplay(value * ease(progress))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}
