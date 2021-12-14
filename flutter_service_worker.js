'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "fb42cf7b394089ac30cbee0ae9e78b3b",
"main.dart.js_19.part.js": "aa9abbe0521b56bb7d12f983849b7999",
"main.dart.js_3.part.js": "707badfd7519cd78f3080046bea5384b",
"main.dart.js_32.part.js": "417867747b95871227be8ad1cebce457",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_36.part.js": "fc8e782347bd78a8b1199c8b17b94599",
"main.dart.js": "69456e231554f73e33419b94aa0fc6ae",
"main.dart.js_9.part.js": "0401afd96a6b1171d686d2838c186fc2",
"main.dart.js_26.part.js": "0fad0c16342cc653e48bf3f560fffb77",
"main.dart.js_20.part.js": "b91aa4aa6308917b07e7bdf57f9a148f",
"main.dart.js_4.part.js": "a48d93070d5051692b808a8db1e65ab3",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "d219961c5fc685cf39b2ebfa95dd70cc",
"main.dart.js_28.part.js": "e7d85341204eb0ea542499ef30df1571",
"main.dart.js_2.part.js": "f9b76d50e4e495e1021bfa18d97b2401",
"main.dart.js_17.part.js": "505574de663d54f59bee521f1f0e2cad",
"main.dart.js_25.part.js": "c560302f73d4fd3fcb55ed8902940e32",
"main.dart.js_7.part.js": "7ca0eb9fc3c4b2fb0a72f2f7c1023c2a",
"main.dart.js_22.part.js": "c395cca68a83500d15fd98b13a047ea3",
"manifest.json": "27a6598457ff96a3f3a6028a19be94b0",
"main.dart.js_1.part.js": "7f7bd6cd2543894ac965ac020d4d2686",
"main.dart.js_31.part.js": "24761ea48a6e30bb82bd32320bbe36d2",
"main.dart.js_27.part.js": "cbdc1d79ef92329323e3e8a6dc445f36",
"main.dart.js_14.part.js": "c160a8be7794e9d646ff39959d936fb8",
"main.dart.js_29.part.js": "6dc59993de8609bf8cbd8397b3b15dc1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/images/9.png": "7aa4225a23c019e11dac44b6846eb6e9",
"assets/images/Union.svg": "b0874c213bbb229023231b97a6548515",
"assets/images/9(2).png": "3176195a5e654dc8188b2155bfff65e3",
"assets/images/W(2).png": "8dfd56ecdfb43b688ec4632f4b0d411e",
"assets/NOTICES": "aeaeec62021f234bf828b0fbb99abfb2",
"assets/AssetManifest.json": "3241e7e1abecf59c70cbaf9a04b46eba",
"assets/FontManifest.json": "2eb4f865acee31d1af9c4001371142e1",
"assets/assets/ArtalaxiesMarketV2.json": "2243e2b8b6d870c6216ef7c9460d9e74",
"assets/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/assets/space.riv": "19ebb50cac3f5949ba2e3776f1afad1b",
"assets/fonts/Aldrich-Regular.ttf": "d95d3c0366bed65728b9968195c0ea11",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/cryptocurrency_network_utility/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"index.html": "d3fbddd93fda42bbc1ebbf3151d510d9",
"/": "d3fbddd93fda42bbc1ebbf3151d510d9",
"main.dart.js_16.part.js": "7ce3cd4a234455c899a4d833bc928876",
"main.dart.js_23.part.js": "0d28b1a84d87abc93738d8e2176b24cc",
"main.dart.js_13.part.js": "9a739bca37cd10e9baedb21810b36af1",
"main.dart.js_11.part.js": "a1f1935081f993db444ee6ba2a768107",
"main.dart.js_33.part.js": "54a6959938e400654ceedc581301926d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "f214d841d588986bc60f3125550d22bb",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "9cb99a3b4db464fc069c01be0ee55333",
"main.dart.js_21.part.js": "130497f3bd63d33ba8842c91141b645c",
"main.dart.js_34.part.js": "dbec54e9aacd139d21259575bfa609de",
"main.dart.js_5.part.js": "d14a76a45c190b7af8ef0ebf25298b8b",
"main.dart.js_10.part.js": "7c6c21db0f7714fe0ba2886dd24d3d59",
"main.dart.js_12.part.js": "80a4a4646c4fc10435245672902a8478"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
