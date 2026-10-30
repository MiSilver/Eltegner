// Fejlfinder: appen virker uden net. Kortbilleder og projekter gemmes af appen selv (IndexedDB).
const CACHE = 'fejlfinder-v0.4.2';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './jspdf.umd.min.js', './pdf-fonts.js', './pdf.min.js', './pdf.worker.min.js'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (u.origin !== location.origin || e.request.method !== 'GET') return;
  // net først (så nye versioner kommer med det samme), ellers det gemte
  e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(CACHE).then(cc => cc.put(e.request, c)); return r; })
    .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html'))));
});
