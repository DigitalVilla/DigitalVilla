import { lazy, useEffect } from 'react'
import type { ComponentType } from 'react'
import { Routes, Route } from 'react-router-dom'
import { RootLayout } from '@/components/layout/RootLayout'
import { reloadOnceForStaleBuild } from '@/lib/staleBuild'
import HomePage from '@/pages/HomePage'

type PageModule = { default: ComponentType }

/**
 * `lazy()` that copes with deploys: if this tab's chunk has been replaced on
 * the server, reload once to pick up the new build instead of crashing.
 */
function lazyRoute(load: () => Promise<PageModule>) {
  return lazy(() =>
    load().catch((error: unknown) => {
      if (reloadOnceForStaleBuild()) return new Promise<PageModule>(() => {})
      throw error
    })
  )
}

/**
 * The landing page is imported statically so the first paint never waits on a
 * second round-trip. Interior routes stay code-split, but their loaders live
 * in one map so we can warm every chunk once the browser is idle — after that,
 * changing pages never touches the network.
 */
const routeLoaders = {
  company: () => import('@/pages/CompanyPage'),
  work: () => import('@/pages/WorkPage'),
  project: () => import('@/pages/ProjectPage'),
  process: () => import('@/pages/ProcessPage'),
  contact: () => import('@/pages/ContactPage'),
  notFound: () => import('@/pages/NotFoundPage'),
}

const CompanyPage = lazyRoute(routeLoaders.company)
const WorkPage = lazyRoute(routeLoaders.work)
const ProjectPage = lazyRoute(routeLoaders.project)
const ProcessPage = lazyRoute(routeLoaders.process)
const ContactPage = lazyRoute(routeLoaders.contact)
const NotFoundPage = lazyRoute(routeLoaders.notFound)

function preloadRoutes() {
  for (const load of Object.values(routeLoaders)) {
    load().catch(() => {
      /* Best-effort: a failed preload simply retries on navigation. */
    })
  }
}

function usePreloadRoutes() {
  useEffect(() => {
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(preloadRoutes, { timeout: 3000 })
      return () => window.cancelIdleCallback(id)
    }
    const id = window.setTimeout(preloadRoutes, 1500)
    return () => window.clearTimeout(id)
  }, [])
}

export default function App() {
  usePreloadRoutes()

  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="company" element={<CompanyPage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="work/:slug" element={<ProjectPage />} />
        <Route path="process" element={<ProcessPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
