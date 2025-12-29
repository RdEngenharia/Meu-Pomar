// Nome do cache
const CACHE_NAME = 'meu-pomar-cache-v1';
// Arquivos que você quer armazenar offline
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',   // se tiver
  '/icon-192.png',
  '/icon-512.png'
];

// Evento install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento activate
self.addEventListener('activate', event => {
  console.log('Service Worker ativado');
});

// Evento fetch (intercepta requisições)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
