// We need to store the HTML, CSS, JavaScript, images, web fonts, etc. into a cache
// when offline or bad connexion
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('app-static-1').then(function (cache) {
            console.log('Opened cache');
            return cache.addAll([
                '/',
                'css/styles.css',
                'img/1.jpg',
                'img/2.jpg',
                'img/3.jpg',
                'img/4.jpg',
                'img/5.jpg',
                'img/6.jpg',
                'img/7.jpg',
                'img/8.jpg',
                'img/9.jpg',
                'img/10.jpg',
                'img/light-1.jpg',
                'img/light-2.jpg',
                'img/light-3.jpg',
                'img/light-4.jpg',
                'img/light-5.jpg',
                'img/light-6.jpg',
                'img/light-7.jpg',
                'img/light-8.jpg',
                'img/light-9.jpg',
                'img/light-10.jpg',
                'js/dbhelper.js',
                'js/main.js',
                'js/restaurant_info.js',
                'index.html',
                'restaurant.html'
            ]);
        })
    );
});



self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (response) {
            return response || fetch(event.request);
        }).catch(function (error) {
            console.log(error, 'no cache entry for: ', event.request.url);
        })
    );
});