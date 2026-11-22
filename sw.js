// بساتين الحفّاظ: the service worker that lets the site be put on the phone's screen like an app.
// It keeps nothing: the page's own requests go straight to the site (so every update arrives as before), and the server's are left alone.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== self.location.origin) return;
  e.respondWith(fetch(r));
});
