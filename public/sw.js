/*
 * Kill switch. This site no longer uses a service worker, but browsers that
 * installed one from an earlier build keep serving the cached app shell until
 * that worker is replaced. They re-check this URL on navigation, pick up this
 * file, and the new worker wipes every cache, unregisters itself, and reloads
 * any open tabs onto the live site.
 */
self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.map((key) => caches.delete(key)))
      await self.registration.unregister()
      const clients = await self.clients.matchAll({ type: 'window' })
      clients.forEach((client) => client.navigate(client.url))
    })()
  )
})
