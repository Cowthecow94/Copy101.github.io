// The service worker for Ultraviolet
// This handles the requests for the proxy

importScripts('./classwork/cw.bundle.js');
importScripts('./classwork/cw.config.js');
importScripts(__uv$config.sw || './classwork/cw.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
