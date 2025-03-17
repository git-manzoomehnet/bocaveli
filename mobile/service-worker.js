const CACHE_NAME = "pwa-cache-v1";
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png"
];

// ✅ نصب و کش کردن فایل‌ها
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching files...");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// ✅ فعال‌سازی و حذف کش‌های قدیمی
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cache) => cache !== CACHE_NAME) // حذف کش‌های قدیمی
          .map((cache) => caches.delete(cache))
      );
    })
  );
  return self.clients.claim();
});

// ✅ رهگیری درخواست‌ها و ارائه کش یا اینترنت
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request); // اگر در کش نبود، از اینترنت بگیر
    })
  );
});
