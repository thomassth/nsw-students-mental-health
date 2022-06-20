const OFFLINE_URL = "/mysite/offline";
const CACHE_NAME = "mysite-static-v1";

self.addEventListener("install", event => {
  event.waitUntil(
    // Cache the offline page when installing the service worker
    fetch(OFFLINE_URL, { credentials: "include" }).then(response =>
      caches.open(CACHE_NAME).then(cache => cache.put(OFFLINE_URL, response))
    )
  );
});

self.addEventListener("fetch", event => {
  const requestURL = new URL(event.request.url);

  if (requestURL.origin === location.origin) {
    // Load static assets from cache if network is down
    if (/\.(css|js|woff|woff2|ttf|eot|svg)$/.test(requestURL.pathname)) {
      event.respondWith(
        caches.open(CACHE_NAME).then(cache =>
          caches.match(event.request).then(result => {
            if (navigator.onLine === false) {
              // We are offline so return the cached version immediately, null or not.
              return result;
            }
            // We are online so let's run the request to make sure our content
            // is up-to-date.
            return fetch(event.request).then(response => {
              // Save the result to cache for later use.
              cache.put(event.request, response.clone());
              return response;
            });
          })
        )
      );
      return;
    }
  }

  if (event.request.mode === "navigate") {
    return event.respondWith(
      fetch(event.request).catch(() => caches.match(OFFLINE_URL))
    );
  }

  // Passthrough for everything else
  event.respondWith(fetch(event.request));
});
