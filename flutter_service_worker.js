'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a1169dde67fb0b23b22cc4189eaa1719",
"version.json": "c8404c8f510f940aecc7d962c21c2e1a",
"index.html": "31f7ef6f647dc17ad55806c97a1f5e53",
"/": "31f7ef6f647dc17ad55806c97a1f5e53",
"main.dart.js": "79f675a2a20937affd38584e4c36a383",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "765b35dfa60645ba8b81541b2561f315",
".git/ORIG_HEAD": "f1ba547f4a2364ad96571ff8aa5ec259",
".git/config": "7dbf722fbeb70ecad6280a4ebcd44666",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/9b/c80765cf2f4845a9aa6cb545456976ac5898f8": "bc47e3aac7998f92e8039589b7cddfb1",
".git/objects/0b/b5bd62613cac554d7c9c3407c559a332f29647": "a3b001fcfc20d8ce7dbae115308d2e3b",
".git/objects/60/b6bf86984a4cf9ea7ed0aaa5057b2f789b15c5": "4edbd299d20e46ae88fde3f6f69ff284",
".git/objects/33/3b1380b5026f16728b54d61766d39cbf7a9a68": "c5b52d953b6c8187eff48225783a1820",
".git/objects/33/50f7bf260189a871292aff890a00dc49f9eb7a": "a81484e16c6f91dbb82047b0b21ef449",
".git/objects/d9/8848034747c819b13062006b3b714170365ee7": "60066bc94b00a5d6312a0c8b5fa1e085",
".git/objects/eb/b96046a3dff5fbf035dadc5d3da5d5a93c62ea": "6fc7db0b4482c05aea589061e0c97a9d",
".git/objects/c7/e2b85d892136c696487c92bf648020eca67527": "d89b5decaf5eeff7c9e9051ef8328c70",
".git/objects/f2/af3a16ec5d2f0f3725e36235cc7a38a5d126d1": "96314589b732d8fc0e1943833e90f6e2",
".git/objects/e3/f3347e7270b8ae45f233eea0cdaec3fd1be745": "65ee99923cd6f01d44e6bd7c412a7640",
".git/objects/e4/68da6f1122e26123052e7b2ae8da523e34b44c": "5e538b0d1d33f81157d3bcecc071a11f",
".git/objects/fe/264880a1382e826f5b3a18852542b706a196ca": "4c7e5b2ab20de3148d475d76b96fd274",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/83d65c73aa0367a1c95fa6446a5d05acd546a4": "0349a9380795b16cdbfd14e0391672dd",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/4b/21149c671d337bd3fb3c93bd672a7d28d9847e": "333b7cda416ced45262f35718bfcb707",
".git/objects/pack/pack-75d5197dd648d5ba9c57b767af478335789ab413.idx": "aedb5c2a6edb659bf599c43b5cccd083",
".git/objects/pack/pack-75d5197dd648d5ba9c57b767af478335789ab413.pack": "4e7936c27c8b9214416411cf2588e375",
".git/objects/29/c8dd1471cbe4650d5dd72ef921a719c42309fa": "955dcb1ace77a1cfeda426ca49835a01",
".git/objects/29/b5dc233b05d4432c5c5bb244a2093935b1920c": "af20ac9f90c5a9b5226048e545eb0c28",
".git/objects/7c/fb6e725a0061a2b19475f3567cf54b1c47aaac": "8ca2552254042bca810e7f38ecfcb723",
".git/objects/45/d72bda4787b944627a18461a41ba4497b60224": "a2bd164821ddc10f045514779a21d9dd",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/17/c4d447ff0a1999a55a95d5646d0a18b269556f": "d333f9d5c6ebfce2707f1f0626dc3171",
".git/objects/19/24416b794961fdb08a704ded12a89066b891a9": "a9960d851118d5084c3b752e0363b97c",
".git/objects/4c/4561ab47fb63f4018b80f97bf2dc5c7b05af0a": "4e746ef371696b3dbb02115bf9b32396",
".git/objects/4d/7455730e5518ab7d27d80f536a677c7cc8ea77": "559ca171b9b4f5b1f7e203c8399e8260",
".git/objects/2a/e41d53827a58e20b8bc7b8977071b18d4e1427": "aa42ebbdbefbb6c782aeb1d32829a874",
".git/objects/9f/487d84c5b8d36f9afe07949fa308235095c047": "ff6af88f23489dd51a96557df0f73f82",
".git/objects/6e/4ec143e2983d77a25cd9c24e1039eb4bfed801": "7db5ddf8d362b97caeddc07700b1f323",
".git/objects/9a/9534da151d09b129b52de8aa29384f05627ed6": "d32a25e57f292af7dd05d23a70a04dc5",
".git/objects/31/f2d7ac54c2ef2059654e34579a04322e0efa44": "bc650c4f085414c16985946190c9b926",
".git/objects/65/9b0fd649e83a8753c66fe18a4c11fc92c039b2": "c5e82d4c63432eb1c8476f70ca35e60d",
".git/objects/65/74818d08218dd616b9c3e916e86597e5cf7be6": "b341b6a45d1dbf43329233fb98708403",
".git/objects/96/d00900b319e62b1aa6d11ffcb8d3869522fc88": "05cdb581fe1aa928841517aa47f8df63",
".git/objects/3f/867e50383812e604a0cce010db27b64b7d4ce1": "88f0a4f5c6199cd31ce0fec27f71bcc8",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/23f70a818eb9fc44cd5452f26d08a68f512795": "5587a360aaab53cabd1bfe2ff83e619d",
".git/objects/99/aa7d2a5baf3de90e95456abca908971273f905": "75a3c2c25da76da154da714838a4897d",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/0f/1d16c866eedf1563b91e37878577ce91a2f4ed": "7f0ad5d636eeea67b03a02b506e44301",
".git/objects/90/57ba750c771357c7bf71a7a165545ee84ddd82": "7e387e6620b2bf2bc81f4d0bf8d3dd75",
".git/objects/bf/d8b0c7c67be99ed77ac636f0f973e86587ac18": "8c8aa09345453a70ca5d6551d64c6f39",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/dd/f552858e792b9d4cb4bf5df590ebc44203f9b3": "67132e0be46d4d3ea41962e175a112b0",
".git/objects/aa/42ccb4072ff8f15842a02a6988ffe9bd77208c": "40435ea7d8f80715c9e040e8afe5d473",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/a8/f638b3b9d11f3f0bf64a7ef656bb73f8fbf39b": "d8e83d4a8478af727480da2a66f66d5f",
".git/objects/b0/5bca4f4dcb838848e28ebb8e64b88f7e6395bb": "bc8aeb15a3413cedcc7097d0e2ab50a0",
".git/objects/a1/0b2766af288d8380dcdab4f61a736b0f4285c3": "1057385a1183459995065bc3a67e3b5a",
".git/objects/a1/1680b6532b3d8a38806463c2cab4f6110473bf": "310a0f96475dae16218589e9b746e0cd",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/79c22758762eef9b7b3d38dbf979532e4eb58c": "beba0d30ff0b7c8ed4d895902e75a5e4",
".git/objects/e8/06ff98bad29519fb0d40d22b92380adf8368ef": "3425b23bc5b5df162841556c77637d97",
".git/objects/e8/6a09e1add1e644e350b9f3d0bbcb64031b8fa7": "990671426c37833a98e12157fc5637dc",
".git/objects/c2/257f4630ba302e7d18a185c694a7391b1e382e": "dfb7fd1638168f8228134b2d59223dda",
".git/objects/46/18c8069dc771d9ec652013339cb6ce213c183b": "2101223226ddc963c1f77945cbedcdce",
".git/objects/79/6924d518b0ada6afa765701b1dbe398422867b": "ba8a5752bbe648ddb022a4c6f26ebf56",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/71/88aa8be4ad67d46d9ab84a2f67a0004d8f7177": "ba0d35c403628265f885706593df0170",
".git/objects/76/d9b76ed374940f141366802cf452636f8a8c83": "377213b06c2c9143fd2f15370d8db5ca",
".git/objects/76/bd5922da79e8af432c2e754da5b3d9bfb9c141": "136b84875a3d794f801dceef05bf943a",
".git/objects/76/19475e5ba601d2bd46bd6f9f1073c9d97e5475": "b741bb507a8b2fa29835dcb0ad7921c5",
".git/objects/49/768786480a09d62277dcee0b794c362e839c9f": "cf6be711bc21edd139598e8b37406c81",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/47/ac0d9fc5ac1300a7e58116b532e55167f7ac10": "f0771e15381eccfb972b735f54611948",
".git/objects/78/3c253e9fafa8529516051576bf65d999ca041b": "b5e70a75d97ee3fb3f798de72c52f298",
".git/objects/22/cabe7558848da61e81b5d55ef4df35ae0a2689": "c521f459863274a6c2869907dac4802c",
".git/objects/25/482dcca802b127edae316212995821796feeb5": "6257064fa8e97db5b1bcc8c3a22dea99",
".git/objects/25/2d5a09f0e2295249084d4e373d692fbb41035c": "2fd028689f8950e0da857a27220ce4bf",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f5ba61b8ca17eb377d587c20252fd6f1",
".git/logs/refs/heads/gh-pages": "f5ba61b8ca17eb377d587c20252fd6f1",
".git/logs/refs/remotes/origin/gh-pages": "714efdfde7f69791e01f680aff3027d9",
".git/logs/refs/remotes/origin/HEAD": "23a0a9fdacc7172ffb1a62d562d40a9d",
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
".git/refs/heads/gh-pages": "f1ba547f4a2364ad96571ff8aa5ec259",
".git/refs/remotes/origin/gh-pages": "f1ba547f4a2364ad96571ff8aa5ec259",
".git/refs/remotes/origin/HEAD": "b501512a260537c5e52df65d2a034251",
".git/index": "8ca841f3af2233326e199b210e75d10f",
".git/packed-refs": "8fee05fa501693172f9fff2414587b29",
".git/COMMIT_EDITMSG": "6fbc05d9e6afec65a2065a02e68fbaeb",
".git/FETCH_HEAD": "75a84877a81dc5e79f2b0cabc28ffbba",
"assets/AssetManifest.json": "b7b23f792c27946b54b1b2e580a55f48",
"assets/NOTICES": "fc9ffd5720902444df509cfa3d5dfdc6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0a3eccff447c542c4db90849c8bb15fb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/quill_native_bridge_linux/assets/xclip": "d37b0dbbc8341839cde83d351f96279e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c007c2131d5af09b9188431a6056d4a4",
"assets/fonts/MaterialIcons-Regular.otf": "140fbec4fe240e732e1fbdc106f7e5f0",
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
