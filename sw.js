// Nome do cache
const CACHE_NAME = 'meu-pomar-cache-v1';

// Arquivos que você quer armazenar offline (AJUSTADOS PARA O GITHUB PAGES)
const urlsToCache = [
  '/Meu-Pomar/',
  '/Meu-Pomar/index.html',
  '/Meu-Pomar/icon-192.png',
  '/Meu-Pomar/icon-512.png'
];

// Evento install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Usamos cache.addAll para garantir que todos os itens sejam baixados
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento activate
self.addEventListener('activate', event => {
  console.log('Service Worker ativado para Meu Pomar');
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
