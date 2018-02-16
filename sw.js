var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  'vendor/jquery/jquery.min.js',
  'vendor/tether/tether.min.js',
  'vendor/bootstrap/js/bootstrap.min.js',
  'vendor/jquery-easing/jquery.easing.min.js',
  'js/jqBootstrapValidation.js',
  'js/contact_me.js',
  'js/freelancer.min.js',
  'vendor/bootstrap/css/bootstrap.min.css',
  'vendor/font-awesome/css/font-awesome.min.css',
  'css/freelancer.min.css'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});