// Service worker — cachea la app para que funcione sin internet.
const CACHE = 'psystudio-v1';
const CORE = [
  './',
  './index.html',
  './psytrance_studio.html',
  './manifest.webmanifest',
  './icon.svg',
  './libs/butterchurn.min.js',
  './libs/butterchurnPresets.min.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // Misma estrategia para todo: probar cache, si no fetch y guardar copia.
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res && res.ok && new URL(req.url).origin === location.origin) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    }).catch(() => hit))
  );
});
