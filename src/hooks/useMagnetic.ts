import { useRef } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

/**
 * Magnetic hover: the element drifts toward the cursor and springs back.
 * Returns a ref + reactive x/y motion values to bind to a motion element.
 */
export function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 })
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 })

  function onMouseMove(e: React.MouseEvent) {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set(relX * strength)
    y.set(relY * strength)
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return { ref, x, y, onMouseMove, onMouseLeave }
}
