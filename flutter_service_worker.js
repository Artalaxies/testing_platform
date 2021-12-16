'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "a359a34e8c5f50d7b963f4b0f8f660c8",
"main.dart.js_19.part.js": "67f0581e5117f7b1032105d369ce1e69",
"main.dart.js_39.part.js": "c6e47259f0c9da755e2953aeda3fdce9",
"main.dart.js_3.part.js": "c37a06328a519428ceae363c5a214960",
"main.dart.js_15.part.js": "4f3ac065aee0e1b5e6c63ba6611085de",
"main.dart.js_32.part.js": "926418d32d36c1e0f3598f841dc0fd33",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_36.part.js": "5559283588f34d9fc55a01df6bdeff2c",
"main.dart.js": "ea73518861299ae6440f8bb2b038a2df",
"main.dart.js_9.part.js": "046d8b59a8650ee976b83fdc4c2231dc",
"main.dart.js_26.part.js": "63408360332a06d4378ccea6ab2ad533",
"main.dart.js_20.part.js": "db5103570848b30501c64f897f87f389",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "0704df0ea4371da758ad6de3f887621d",
"main.dart.js_28.part.js": "7418e9af788510c367b7f2aa288d851e",
"main.dart.js_2.part.js": "a8ec66f6ea74e27457f92a9c67dd10f8",
"main.dart.js_17.part.js": "ca4cbc101f1465058e54c7532d23ace7",
"main.dart.js_25.part.js": "f939e522d385a2f3b18ccc695118dab3",
"main.dart.js_7.part.js": "73ee1409550099eab9fc2b399bc4fb23",
"main.dart.js_6.part.js": "97b33537e38bda302a82324c3bd47bea",
"main.dart.js_22.part.js": "3222bf4e86dd448c5a9f1835013749c9",
"manifest.json": "27a6598457ff96a3f3a6028a19be94b0",
"main.dart.js_1.part.js": "aa3e432a9c8882c82b1d52f6da6ceb30",
"main.dart.js_31.part.js": "c00962eb17d8dfde1e6f31fdc30c2243",
"main.dart.js_27.part.js": "62f9d9224e5d8d5d1d01f2c36f4a4f0d",
"main.dart.js_37.part.js": "d2035f0b670932f907b76cb48bacc2ff",
"main.dart.js_14.part.js": "eb844246536376220848fca03e692435",
"main.dart.js_29.part.js": "e0666de488c400dc948bcc6ca7d0d7d3",
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
"index.html": "085eec0d89df024555fbae85650f1a16",
"/": "085eec0d89df024555fbae85650f1a16",
"main.dart.js_16.part.js": "94295bc9abb5b97c4392c68a7b3804cf",
"main.dart.js_23.part.js": "ac9d841a1fa7cd32ab93bdda05815640",
"main.dart.js_13.part.js": "09321c1c03dcf341b052333c5cb82526",
"main.dart.js_11.part.js": "a62a1744216b9a4a2e09ff5e126bd841",
"main.dart.js_33.part.js": "5c4dcd2b553766354fd32edf6900d2c9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "f32ecf94fd1a421073538fc711bc7c6e",
"main.dart.js_21.part.js": "5752236cab1acd1eb5093864380ad2e6",
"main.dart.js_42.part.js": "100cfdb312f8046296978f42abf84da1",
"main.dart.js_34.part.js": "2db750fda3df1d7fbca3dec119fc5d9c",
"main.dart.js_5.part.js": "5c0eb7b8675fc6bfae085948ee907e38",
"main.dart.js_10.part.js": "d7fcc7d8daf86b4ca34c534fa397dfe7",
"main.dart.js_40.part.js": "79ee4438432fdc120a53a31ed9d93550",
"main.dart.js_38.part.js": "a7a39f500f3e5f7342d62f2868f76de8",
"main.dart.js_12.part.js": "0c3dbf0c629238c782758b789431b259"
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
