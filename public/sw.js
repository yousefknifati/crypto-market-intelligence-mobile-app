// Minimal service worker: makes the app installable and shows an offline page
// when a navigation fails. Market data is intentionally never cached so users
// are not shown stale prices.
const CACHE_NAME = "cmi-offline-v1";
const OFFLINE_URL = "/offline";
const PRECACHE_URLS = [OFFLINE_URL, "/icons/icon-192.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode !== "navigate") return;

  event.respondWith(
    fetch(event.request).catch(async () => {
      const cache = await caches.open(CACHE_NAME);
      return (await cache.match(OFFLINE_URL)) ?? Response.error();
    }),
  );
});
