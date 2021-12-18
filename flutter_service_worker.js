'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "0c628f5ad3eefa151d16d90a96fd8e99",
"main.dart.js_19.part.js": "6f816f862765a15ebb7de563b36c67c8",
"main.dart.js_39.part.js": "89c77312dad8339b050dc7a80cdfa908",
"main.dart.js_3.part.js": "d51795cb73b3be9e83f7697555bd2e36",
"main.dart.js_15.part.js": "f62325803baf65474c8b1bfa71e515be",
"main.dart.js_32.part.js": "89efdef68faed6f391ee292a4e700c9b",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_36.part.js": "5d42069bbf60b5ed75cba67a7eed7c29",
"main.dart.js": "9205ae7f0ddda7e77fbdbbbbf24eadc0",
"main.dart.js_9.part.js": "79f08d8ab80a48ed598fd805d75b5ca2",
"main.dart.js_26.part.js": "320e1595a98ba9d6f94b7a9a28c18e3f",
"main.dart.js_20.part.js": "1faa34b770eefa85c0b8d4e480aa11c9",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "c94e627e44a01bfa94fe9aa8f5e1c8bd",
"main.dart.js_28.part.js": "5ad42e4e39aa3fa48aaeda84c9582a85",
"main.dart.js_2.part.js": "cfa30dca77d885e3b2b58918bfa31816",
"main.dart.js_17.part.js": "06b2dafa905120df709ba255cbc7c7d8",
"main.dart.js_25.part.js": "40b9c47b3e77523abafb2995bd460b47",
"main.dart.js_7.part.js": "bd0cee2e82917b33cd07d69209198c7e",
"main.dart.js_6.part.js": "8180ae10c9c9825fa81dba5262716218",
"main.dart.js_22.part.js": "ed6c94fcc39a315f838e514b5f4608d2",
"manifest.json": "27a6598457ff96a3f3a6028a19be94b0",
"main.dart.js_1.part.js": "eb5eaaf02620f38da8aebe21728821f4",
"main.dart.js_31.part.js": "3c083d75ffd943cadaa733600ae64f56",
"main.dart.js_27.part.js": "c36dc11c0f3650748a245199d28ef142",
"main.dart.js_37.part.js": "a2b37b866f37cea0167fda460083a20e",
"main.dart.js_14.part.js": "113cfa09ab0361a0fb3569cdecfcd923",
"main.dart.js_29.part.js": "7b24499ed254eba735a9be06fccaa620",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/images/9.png": "7aa4225a23c019e11dac44b6846eb6e9",
"assets/images/Union.svg": "b0874c213bbb229023231b97a6548515",
"assets/images/9(2).png": "3176195a5e654dc8188b2155bfff65e3",
"assets/images/W(2).png": "8dfd56ecdfb43b688ec4632f4b0d411e",
"assets/NOTICES": "95dd791cf37fd8049fce6a55398dd1bb",
"assets/AssetManifest.json": "f5550d397c96a087c4ca6c80bb4ec182",
"assets/FontManifest.json": "2eb4f865acee31d1af9c4001371142e1",
"assets/assets/ArtalaxiesMarketV2.json": "2243e2b8b6d870c6216ef7c9460d9e74",
"assets/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/assets/space.riv": "19ebb50cac3f5949ba2e3776f1afad1b",
"assets/assets/ERC721Upgradeable.json": "4d7a1d9eff59f3fee6c0d06a81a2f3b9",
"assets/fonts/Aldrich-Regular.ttf": "d95d3c0366bed65728b9968195c0ea11",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/cryptocurrency_network_utility/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"index.html": "dbe90049d7d1f3a0c65daa14c6cbd593",
"/": "dbe90049d7d1f3a0c65daa14c6cbd593",
"main.dart.js_16.part.js": "0b8261f23014ca4595ea906595a77c9f",
"main.dart.js_23.part.js": "4614e87df546ca77118cfe065d53b545",
"main.dart.js_13.part.js": "8171c7e208704397ace8d402d2351f53",
"main.dart.js_11.part.js": "4364a496901deb1b4542eb4a40cc905e",
"main.dart.js_33.part.js": "9d76863a79c4cfa630159786270d4b62",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "5e5683f4772910e0116ab0bdb7a2d1ff",
"main.dart.js_21.part.js": "af38246f8810b2b25904bf85b76836f2",
"main.dart.js_42.part.js": "3ba623275a8e04109c44af7eb6fcbe59",
"main.dart.js_34.part.js": "5cbc8e5fb42706967cda7455c1f79a99",
"main.dart.js_5.part.js": "866989520d45dabdd5bf4a0c92bb5aa9",
"main.dart.js_10.part.js": "8213803b157171111a5daf9d455a6efc",
"main.dart.js_40.part.js": "cc83ed334d46ec50e89c3c99dd8e70a5",
"main.dart.js_38.part.js": "081f4a1b068ba7efae58b7b0344722f0",
"main.dart.js_12.part.js": "8bb54baec317be44899c032eec5f52b5"
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
