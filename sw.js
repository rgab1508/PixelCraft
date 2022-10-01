const cacheName = "files";

addEventListener("fetch", (fetchEvent) => {
  const request = fetchEvent.request;
  if (request.method !== "GET") {
    return;
  }
  fetchEvent.respondWith(
    (async function () {
      const responseFromFetch = fetch(request);
      fetchEvent.waitUntil(
        (async function () {
          const responseCopy = (await responseFromFetch).clone();
          const myCache = await caches.open(cacheName);
          await myCache.put(request, responseCopy);
        })()
      );
      if (request.headers.get("Accept").includes("text/html")) {
        try {
          return await responseFromFetch;
        } catch (error) {
          return caches.match(request);
        }
      } else {
        const responseFromCache = await caches.match(request);
        return responseFromCache || responseFromFetch;
      }
    })()
  );
});