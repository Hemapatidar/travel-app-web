'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "68f558f6026a7df56eb25c76aa4d59ad",
"assets/assets/images/balloning.jpg": "d4a3567fd3dbd6d83f00df235761ff5c",
"assets/assets/images/beach.jpg": "b5e8a85b6a7622abd12b84bb05469bde",
"assets/assets/images/beach1.jpg": "ed1517499e140817e3d9a5561cfaf0e3",
"assets/assets/images/beach2.jpg": "cbf25087a6f9fad63620321cfb08e983",
"assets/assets/images/beach3.jpg": "1715e81f6cd4616678660b456e50c4c8",
"assets/assets/images/beach4.jpg": "66576311874ee4249665747feb76a3d1",
"assets/assets/images/beach5.jpg": "f300ae6d407debd679e21f8838f14c98",
"assets/assets/images/beach6.jpg": "8582cd045acea68c0fa9ffb52a54b218",
"assets/assets/images/beach7.jpg": "22b175ec858b5aac21ef4ce3cbdf2e88",
"assets/assets/images/bus.jpg": "7116fe00901acd5232846178d5aaff82",
"assets/assets/images/cloud.jpg": "4c71acf52aeb5b31a05256c6eb22aa0c",
"assets/assets/images/hiking.jpg": "03adcc2bdf17ec6b689e5c9844fc8e71",
"assets/assets/images/img_1.png": "fab974c06bf65577cd63e6e28ea86aa2",
"assets/assets/images/img_2.png": "496cca0ef830d8dfc0bb0cba4dd685b5",
"assets/assets/images/img_3.png": "1d5a19730335f526f3025213479c4abd",
"assets/assets/images/img_4.jpg": "b6a55760b0009eb72e427c909437c935",
"assets/assets/images/img_5.jpg": "0bf8be28d11892b2b10abdfb159c931a",
"assets/assets/images/img_6.jpg": "065f68fbeebf1d113843653a8ae740c6",
"assets/assets/images/img_7.jpg": "1571d446a025f552e885c24eac8b837b",
"assets/assets/images/img_response_button.jpg": "fdcede7be00a6abb2a26fc98205d07ca",
"assets/assets/images/kayaking.jpg": "2c92cf13bade095efe8d2f799a36f26d",
"assets/assets/images/mauntain5.jpg": "0017afdc801b7a076d5235cda2ce1fe2",
"assets/assets/images/mountain1.jpg": "f33106df0c702e16bc5d61d565b577be",
"assets/assets/images/mountain2.jpg": "d758d1ca4da2c0bd1c718dbc9843f768",
"assets/assets/images/mountain3.jpg": "77f3505b5600752133c2d29ca827def6",
"assets/assets/images/mountain4.jpg": "2938d2e68da8bc5a669b6a558eadbfef",
"assets/assets/images/mountain5.webp": "c1b3de9c3cf49f3ef70df3d7a1171a0c",
"assets/assets/images/snorkling.jpg": "d27a70c19f327402b53058cec780222c",
"assets/assets/images/snow1.jpg": "b3cb720500f9854568c590a44d4419a4",
"assets/assets/images/snow2.jpg": "8d920c1aeba3a2ea0556e853e074aa09",
"assets/assets/images/snow3.jpg": "36b733bbe3f8a9802c64754c055b753e",
"assets/assets/images/snow4.jpg": "745915c2c8fc9d9ba105e1b1b993e27a",
"assets/assets/images/snow5.jpg": "8b4da773b07b699b596d55bc8211dc05",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "4d5103f5f86f32018f7209e4aa97a9b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "69860440b90b936f03602aa22e92724b",
"/": "69860440b90b936f03602aa22e92724b",
"main.dart.js": "8f2fca359cbe9f51f0d37ab2b6032cd8",
"manifest.json": "d8bf31784ba3c89a3c9bc0ac954f8c49",
"version.json": "0e13c90c76931c5f580ac2a40cc49ada"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
