import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { reloadOnceForStaleBuild } from '@/lib/staleBuild'
import App from '@/App'
import '@/styles/globals.css'

// Vite fires this when a chunk's dependency fails to preload — after a deploy
// has replaced the hashed files this tab was built against.
window.addEventListener('vite:preloadError', (event) => {
  if (reloadOnceForStaleBuild()) event.preventDefault()
})

const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('Root element #root not found')

createRoot(rootEl).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
