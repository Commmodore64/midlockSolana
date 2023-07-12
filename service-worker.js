self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("cache-name").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        // Agrega aquí los archivos que deseas cachear
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
