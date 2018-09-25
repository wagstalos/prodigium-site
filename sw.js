var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/aplicativo/index.html',
  '/aplicativo/css/animate.css',
  '/aplicativo/css/materialize.css',
  '/aplicativo/js/init.js',
  '/aplicativo/js/materialize.js'

];

self.addEventListener('install', function(event) {
  event.waitUntil( /* Este método estende o evento ONINSTALL e aplica um estado ao evento chamado ONINSTALLING */
    caches.open(CACHE_NAME) /* O objeto caches é criado com um namespace e retorna uma Promise */
      .then(function(cache) {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache); /* E por fim, conseguimos manipular o objeto de cache corrente */
      })
  );
});