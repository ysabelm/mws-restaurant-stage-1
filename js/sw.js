self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('app-static-1').then(function (cache) {
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
                'dbhelper.js',
                'main.js',
                'restaurant_info.js',
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
        }).catch(function(error) {
            console.log(error, 'no cache entry for: ', event.request.url);
        })
    );
});