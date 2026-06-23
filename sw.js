// Parla Italiano — Service Worker v4
const CACHE = 'parla-v4';

// ملفات الأساس — بيتخزّنوا فوراً عند التثبيت عشان التطبيق يشتغل أوفلاين
const CORE_FILES = [
  './parla.html',
  './sentences.js'
];

// ===== INSTALL: خزّن الملفات الأساسية فوراً =====
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c =>
      Promise.all(CORE_FILES.map(f => c.add(f).catch(() => {})))
    )
  );
  self.skipWaiting();
});

// ===== ACTIVATE: امسح الكاش القديم =====
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ===== FETCH =====
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);

  // ① نفس المصدر (Netlify — HTML + JS):
  //    جرّب النت أول، لو مفيش نت رجّع المخزّن
  if (url.hostname === self.location.hostname) {
    e.respondWith(
      fetch(e.request)
        .then(resp => {
          if (resp.ok) caches.open(CACHE).then(c => c.put(e.request, resp.clone()));
          return resp;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // ② CDN (Whisper + مكتبات + خطوط): خزّن أول نزلة
  const CDN = ['cdn.jsdelivr.net','huggingface.co','fonts.googleapis.com','fonts.gstatic.com'];
  if (CDN.some(h => url.hostname.includes(h))) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(resp => {
          if (resp.ok) caches.open(CACHE).then(c => c.put(e.request, resp.clone()));
          return resp;
        });
      })
    );
  }
});
