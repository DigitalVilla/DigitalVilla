import { Suspense } from 'react'
import { useOutlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { GlassNavbar } from './GlassNavbar'
import { Footer } from './Footer'
import { PageTransition } from './PageTransition'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

export function RootLayout() {
  const outlet = useOutlet()
  const location = useLocation()

  return (
    <div className="relative flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <GlassNavbar />
      <div id="main" className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <PageTransition key={location.pathname}>
            <Suspense fallback={<div className="min-h-dvh" />}>{outlet}</Suspense>
          </PageTransition>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  )
}
