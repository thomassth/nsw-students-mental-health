//force https on all visits

if (location.protocol !== "https:") {
  location.replace(
    `https:${location.href.substring(location.protocol.length)}`
  );
}

// Install service worker for offline use and caching
//if ("serviceWorker" in navigator) {
  //navigator.serviceWorker.register("js/sw.js", { scope: "/" });
//}

var CACHE_VERSION = 1;
var CURRENT_CACHES = {
  prefetch: 'prefetch-cache-v' + CACHE_VERSION
};

self.addEventListener('install', function(event) {
  var urlsToPrefetch = [
    './css',
    '/js',
    'https://www.chromium.org/_/rsrc/1302286216006/config/customLogo.gif'
  ];

console.log('Handling install event. Resources to pre-fetch:', urlsToPrefetch);

  event.waitUntil(
    caches.open(CURRENT_CACHES['prefetch']).then(function(cache) {
      return cache.addAll(urlsToPrefetch.map(function(urlToPrefetch) {
        return new Request(urlToPrefetch, {mode: 'no-cors'});
      })).then(function() {
        console.log('All resources have been fetched and cached.');
      });
    }).catch(function(error) {
      console.error('Pre-fetching failed:', error);
    })
  );
});

//Click to load YouTube
$(".YouTubeVid").one("click",loadVid);


function loadVid() {
  var value = $(this).attr("data-id");
  $(this).html(
    "<iframe loading='lazy' src='https://www.youtube-nocookie.com/embed/" +
      value +
      "?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
  );
}

