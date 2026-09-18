import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { easeOutExpo } from '@/lib/motion'

// The very first page shouldn't fade in on top of its own hero choreography;
// only subsequent navigations get the enter transition.
let hasNavigated = false

/**
 * Enter-only route transition. There is deliberately no exit animation:
 * waiting for the old page to fade out before the new one could even start
 * loading added close to half a second of dead time to every navigation.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  const animateIn = hasNavigated

  useEffect(() => {
    hasNavigated = true
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <motion.main
      initial={animateIn ? { opacity: 0, y: 8 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: easeOutExpo }}
    >
      {children}
    </motion.main>
  )
}
