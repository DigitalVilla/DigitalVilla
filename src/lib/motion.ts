import type { Variants, Transition } from 'framer-motion'

/** Apple-flavoured expo-out easing reused across the site. */
export const easeOutExpo = [0.16, 1, 0.3, 1] as const
export const easeInOutSoft = [0.65, 0, 0.35, 1] as const

export const springSoft: Transition = {
  type: 'spring',
  stiffness: 220,
  damping: 30,
  mass: 0.9,
}

/** Fade + rise — the workhorse reveal. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutExpo },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: easeOutExpo } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: easeOutExpo },
  },
}

/** Parent that staggers its children's reveal. */
export const staggerContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
})

/**
 * Reveal as soon as the element's top edge is ~12% into the viewport.
 * Using `amount: 'some'` with a margin (rather than a fraction of the element)
 * means tall sections — a six-card grid on a phone — start animating when they
 * arrive instead of once a third of them is already on screen.
 */
export const viewportOnce = {
  once: true,
  amount: 'some',
  margin: '0px 0px -12% 0px',
} as const
