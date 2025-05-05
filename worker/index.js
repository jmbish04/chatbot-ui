import { createResponse } from '../lib/server/server-utils';

self.addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  if (url.pathname === '/ai-model') {
    const response = await fetchAIModel();
    return createResponse(response, 200);
  }

  return createResponse({ message: 'Not Found' }, 404);
}

async function fetchAIModel() {
  // Placeholder for Cloudflare Worker AI model fetching logic
  return { model: 'Cloudflare Worker AI Model' };
}
