self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('tecnova-cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/style.css',
        '/js/script.js',
        '/img/favicon.ico',
        '/img/icon-192x192.png',
        '/img/icon-512x512.png',
        'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css',
        'https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
