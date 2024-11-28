self.addEventListener('install', event => {
    console.log('Service worker instalado');
    event.waitUntil(
        caches.open('v60').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/style/style.css',
                '/js/main.js',
                '/img/android-chrome-192x192.png',
                '/img/android-chrome-512x512.png',
            ])
        })
    )
});

// Activación del Service Worker
self.addEventListener('activate', event => {
    console.log('Service Worker activado');
    // Elimina cachés antiguas si es necesario
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cacheName => {
                    return cacheName !== 'v60';
                }).map(cacheName => {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});




// Interceptar y manejar las solicitudes de red
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response =>{
            return response || fetch(event.request);
        })
    );
});

