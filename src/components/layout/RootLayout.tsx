import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { GlassNavbar } from './GlassNavbar'
import { Footer } from './Footer'
import { PageTransition } from './PageTransition'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

export function RootLayout() {
  const { pathname } = useLocation()

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
        {/*
          The Suspense boundary sits *outside* the keyed transition wrapper on
          purpose. React Router navigates inside startTransition, so if a route
          chunk still has to be fetched the current page stays on screen until
          the new one is ready — instead of flashing an empty fallback.
        */}
        <Suspense fallback={<div className="min-h-dvh" aria-hidden />}>
          <PageTransition key={pathname}>
            <Outlet />
          </PageTransition>
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}
