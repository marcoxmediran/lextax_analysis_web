'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e53f86601be13d447c0e600d47e85248",
"version.json": "c8404c8f510f940aecc7d962c21c2e1a",
"index.html": "31f7ef6f647dc17ad55806c97a1f5e53",
"/": "31f7ef6f647dc17ad55806c97a1f5e53",
"main.dart.js": "ec45f52cca854c1546646640ec6a6c91",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "765b35dfa60645ba8b81541b2561f315",
".git/config": "6c14a022b7613e020f07d5063e4a37c9",
".git/objects/04/036756a286a1306eb8f8dfb70817300af0526e": "14a146f98926ecef36e42a0c7090ed9e",
".git/objects/0b/c8dc65a986928928b71df5765c72a81ef81ad4": "985fc86126e3355a59a93535978d9691",
".git/objects/0b/bdaec955e4774440bc06464d661a525f29a58d": "92ba27e9b01529e123034796db7a5699",
".git/objects/b3/5219f7c51046856494f614c3791eab6b8ffbb8": "f974cb502d52053df8d2fe6e844074a9",
".git/objects/e3/db9afaaa4135058da999b58f4cf8f513987040": "a852b3ce76ad8c1badaed47bef98dae0",
".git/objects/e4/bebd1d642f4d2f79caa27c0a9ce6f6ced98b68": "29f8ca00ed0fcc255d69f1f5de9bf872",
".git/objects/c6/97871c1240eaeeb16b9f0aaa8921a074e0e343": "cb13c7fa5cf22603e82b62a122d168b1",
".git/objects/pack/pack-38e55a291a8313eae75e645aed7dcd5356db58ac.pack": "2f643ed2642820830c4ab04040b0a894",
".git/objects/pack/pack-38e55a291a8313eae75e645aed7dcd5356db58ac.idx": "2697a6b037e056aa5376d585b8942cd5",
".git/objects/7d/f89a66257940ec8204450895670e3030915063": "95b6cfefca3c1cffa0cdba614ed26e16",
".git/objects/7c/2a1b3cb8955fd2c118c3948f532e1463ce27fc": "2d291bfcc0954d8cd8426bbb7d32283b",
".git/objects/89/310d07b02d056f9a057b88df7fc27256c13c8c": "43cc45bd02da36c83fa92d0f3809c5dd",
".git/objects/4c/97acdf1061c7d813994dec0cd5ec2ce076d1a2": "7f3cdbc2e5329a9e2708b0fe1223b86d",
".git/objects/44/c7f52300b6283d5222e36efb4dec9a0787283c": "31f39fe356c0e78eb333bc9ddbfec79c",
".git/objects/6e/baf3bbcd403c0a5b6d7e6e9795847434487f97": "d92771416644faf6dadc46e5600257be",
".git/objects/53/7a22c4d552ec2749ec6335233db22b2fc3237d": "66102d00eb10eaabff4da8b748759724",
".git/objects/90/67f4c82f5b31fb8b36b9f806c3104263b0ef62": "93bde87f6e998d1e1668e40a2c957f0e",
".git/objects/ff/8b396a8f6293246a3629c8a1621cf8988dbe30": "bc971f537102dac6dca629dbdd143d8c",
".git/objects/83/b39a167b0870066136eb2cbefa92f8daa00853": "fea5427c91a21bf44cf6fe3ae6362fe7",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "312607a594fbb4bb56428f0f8a733457",
".git/logs/refs/heads/gh-pages": "312607a594fbb4bb56428f0f8a733457",
".git/logs/refs/remotes/origin/gh-pages": "dc4bf3ef843c2e7049f400fa0bffffaf",
".git/logs/refs/remotes/origin/HEAD": "5680a35aa2c256380fd7230c6ac11126",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "9c1c1befc15c62e68ebd963f7adcc1f9",
".git/refs/remotes/origin/gh-pages": "9c1c1befc15c62e68ebd963f7adcc1f9",
".git/refs/remotes/origin/HEAD": "b501512a260537c5e52df65d2a034251",
".git/index": "5c56c386d7a1d873bfd446e16e704d57",
".git/packed-refs": "a44b94d160a4460f1d80e8c240a44f59",
".git/COMMIT_EDITMSG": "e226e71c6a75e5b32e31bb0a1daa36f7",
"assets/AssetManifest.json": "29c66fe2d306d23607fb1778974a57a5",
"assets/NOTICES": "37550bd50af0be8354d916feab684ae9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "97a4e7b42b1d723fc9c97a0cb41cc733",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/quill_native_bridge_linux/assets/xclip": "d37b0dbbc8341839cde83d351f96279e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "47fea2a340aeaddb10742dc5a133b1e9",
"assets/fonts/MaterialIcons-Regular.otf": "10a2510b46528ec6650ee01836607da4",
"assets/assets/xbox_logo.png": "b5ebd71ed410b853634d2892e7f88e39",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
