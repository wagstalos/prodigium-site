var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
   'index.html',
  'css/froala_blocks.css',
  'css/style.css',
  'css/bootstrap.min.css',
  'js/jquery-3.2.1.min.js',
  'js/popper.min.js',
  'js/bootstrap.min.js',
  'js/particles.js',
  'js/app.js',
  'js/tilt.jquery.js',
  'js/wow.min.js',
  'js/jquery.nicescroll.min.js',
  'js/sw.js',
  'img/touch/homescreen192.png',
  'img/touch/homescreen168.png',
  'img/touch/homescreen144.png',
  'img/touch/homescreen96.png',
  'img/touch/homescreen72.png',
  'img/touch/homescreen48.png',
  'img/astro.svg',
  'img/cd-arrow-bottom.svg',
  'img/down-arrow.svg',
  'img/flip.png',
  'img/fundo.png',
  'img/fundo.svg',
  'img/fundo2.png',
  'img/img2.svg',
  'img/jogo.png',
  'img/combo2.png',
  'img/combo3.png',
  'img/combo4.png',
  'img/combo5.png',
  'img/combo6.png',
  'img/logo1.png',
  'img/menu.svg',
  'img/space-ship.svg',
  'img/startup.svg',
  'img/wpsgamesicon.png'

];

self.addEventListener('install', function(event) {
  event.waitUntil( /* Este método estende o evento ONINSTALL e aplica um estado ao evento chamado ONINSTALLING */
    caches.open(CACHE_NAME) /* O objeto caches é criado com um namespace e retorna uma Promise */
      .then(function(cache) {
        console.log('Cache aberto jogos');
        return cache.addAll(urlsToCache); /* E por fim, conseguimos manipular o objeto de cache corrente */
      })
  );
});