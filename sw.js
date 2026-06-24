// Parla Italiano — Service Worker v4
const SHELL_CACHE = 'parla-shell-v4';  // يتغير مع كل إصدار جديد
const MODEL_CACHE = 'parla-models-v1'; // ثابت — مش بيتمسح أبدًا

const CORE_FILES = ['./parla.html', './sentences.js'];
const CDN = ['cdn.jsdelivr.net', 'huggingface.co', 'fonts.googleapis.com', 'fonts.gstatic.com'];

// ===== INSTALL: خزّن الملفات الأساسية =====
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(SHELL_CACHE).then(c =>
      Promise.all(CORE_FILES.map(f => c.add(f).catch(() => {})))
    )
  );
  self.skipWaiting();
});

// ===== ACTIVATE: امسح الشيل القديم بس، واحمي كاش الموديلات =====
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(k => k !== SHELL_CACHE && k !== MODEL_CACHE)
          .map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ===== FETCH =====
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);

  // ① نفس المصدر (HTML + JS): نت أول، لو مفيش نت → الكاش
  if (url.hostname === self.location.hostname) {
    e.respondWith(
      fetch(e.request)
        .then(resp => {
          if (resp.ok) caches.open(SHELL_CACHE).then(c => c.put(e.request, resp.clone()));
          return resp;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // ② CDN (Whisper + مكتبات + خطوط): كاش أول، لو مفيش → نزّل وخزّن في MODEL_CACHE
  if (CDN.some(h => url.hostname.includes(h))) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(resp => {
          if (resp.ok) caches.open(MODEL_CACHE).then(c => c.put(e.request, resp.clone()));
          return resp;
        });
      })
    );
  }
});
