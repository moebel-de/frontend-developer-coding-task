importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js')

if (workbox) {

workbox.routing.registerRoute(
  // Cache style resources, i.e. CSS files.
  ({request}) => request.destination === 'style',
  // Use cache but update in the background.
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'css-cache',
  })
)

workbox.routing.registerRoute(
  ({request}) => request.destination === 'script',
  new workbox.strategies.NetworkFirst()
)

workbox.routing.registerRoute(
  ({url}) => url.origin === 'https://fonts.googleapis.com',
  new workbox.strategies.CacheFirst({
      cacheName: 'google-fonts-stylesheets',
  })
)
workbox.routing.registerRoute(
  ({url}) => url.origin === 'http://localhost:3001',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'openweather-cache',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60,
      }),
    ]
  })
)
}
