'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "fbd651e2b8e6227e00d3bc87d7b78041",
"main.dart.js_19.part.js": "3da6e3bfd4d4f298d6b41dfca19b5987",
"main.dart.js_3.part.js": "f9971183d85a83677f9a18bc13518cf4",
"main.dart.js_44.part.js": "4019e6abce7f8a155b5ab0315aef54b6",
"main.dart.js_15.part.js": "67ded921f78296c237a77f86950c3374",
"main.dart.js_48.part.js": "3291455f9fcc0eeb820d2817bdc7f1fc",
"main.dart.js_32.part.js": "ff0e9a584ca5088cbb558a4a0ca8a69f",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_36.part.js": "f3f1fc560d4b8fbccfc6bfecc99dbee3",
"main.dart.js": "c5c10046031c050f12ae42eccfb1d98b",
"main.dart.js_9.part.js": "9a69786fb51d3a1a5dd5151952ab17fb",
"main.dart.js_26.part.js": "6d9e76572eef50ab0a59daa1446267f4",
"main.dart.js_20.part.js": "b5782db161401fc475113db535d6e7c0",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "1d0c587f1256e0a16655ef2bf5c0914f",
"main.dart.js_28.part.js": "71bbfdfa82ecc61972371b47b52aafa8",
"main.dart.js_45.part.js": "92c85a655de29708097bef9790eb9c1b",
"main.dart.js_2.part.js": "e9680cddb14391c3845d3bd6fe401a66",
"main.dart.js_17.part.js": "97bc2619489b713c53540d9c327c088c",
"main.dart.js_25.part.js": "d5afd57571d7002eb7f9530669443cac",
"main.dart.js_7.part.js": "8b5aa09e6d824fde9a6b73205ec6f97f",
"main.dart.js_6.part.js": "75f2e50a92656225d56360958548c606",
"main.dart.js_49.part.js": "4bbf957c0966a09fe6be26e9b002750e",
"main.dart.js_22.part.js": "3d3ec6ca4d2e7913fc7f0263b5b42b49",
"manifest.json": "27a6598457ff96a3f3a6028a19be94b0",
"main.dart.js_51.part.js": "03137aad597ab7976b6275667f6e7398",
"main.dart.js_1.part.js": "5afcbd21b1a75260a191a7946c30a8f4",
"main.dart.js_41.part.js": "6801bb3498f20544d977f72d98842c14",
"main.dart.js_43.part.js": "60c46dc619e3c7eff62f6fe74d7e4638",
"main.dart.js_31.part.js": "08258a576d613dffcc7ba9dd18233f53",
"main.dart.js_27.part.js": "7ffd3a3e1a87a1560ee67d037a4801d7",
"main.dart.js_37.part.js": "579109bb5227264cec359239585b0b27",
"main.dart.js_53.part.js": "18a5a9b284d76b4f90231070c3764e14",
"main.dart.js_14.part.js": "4d9626fe1ddd6d32cbc8673ed43c4572",
"main.dart.js_50.part.js": "579fb573d25fd476216f2abe8ff42277",
"main.dart.js_29.part.js": "7737143dfdf7a76604818690ebfbd84a",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/images/9.png": "7aa4225a23c019e11dac44b6846eb6e9",
"assets/images/Union.svg": "b0874c213bbb229023231b97a6548515",
"assets/images/9(2).png": "3176195a5e654dc8188b2155bfff65e3",
"assets/images/W(2).png": "8dfd56ecdfb43b688ec4632f4b0d411e",
"assets/NOTICES": "95dd791cf37fd8049fce6a55398dd1bb",
"assets/AssetManifest.json": "83a0c9c723960c0f6f857356f96a0040",
"assets/FontManifest.json": "2eb4f865acee31d1af9c4001371142e1",
"assets/assets/IERC721Upgradeable.json": "75e144a466aff39db5d3d3ee1a4acb25",
"assets/assets/ArtalaxiesMarketV2.json": "2243e2b8b6d870c6216ef7c9460d9e74",
"assets/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/assets/IERC721MetadataUpgradeable.json": "d5e0f1f90320fced9958f64e617b5624",
"assets/assets/space.riv": "19ebb50cac3f5949ba2e3776f1afad1b",
"assets/fonts/Aldrich-Regular.ttf": "d95d3c0366bed65728b9968195c0ea11",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/cryptocurrency_network_utility/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"main.dart.js_47.part.js": "ad6b6b2e5b634a6ac3aff5c909f4b927",
"index.html": "ce637980845849ad02869fe61acad197",
"/": "ce637980845849ad02869fe61acad197",
"main.dart.js_16.part.js": "aa00d698edb4ee43efa034712b975685",
"main.dart.js_23.part.js": "b49c41f31abec6a20df568a422a94a23",
"main.dart.js_13.part.js": "d72192572199a84a1cf0c28d99238653",
"main.dart.js_11.part.js": "39aca93b95a2455d4a684994d0b2dfe2",
"main.dart.js_33.part.js": "dcc63a5464494d1b2c974165389b58b1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "5bf6f597bc1e3fbaa47f2e10d134f68b",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "823af80d34e7f051df79ae26b2ad9520",
"main.dart.js_21.part.js": "6501bac383f22ca9c4bc13aa16cbc751",
"main.dart.js_42.part.js": "9321be358014fda4935707500040114a",
"main.dart.js_34.part.js": "63496d68b7f3b9037052ea0953b61f4d",
"main.dart.js_5.part.js": "76f452865597728595002ef7f2311bd4",
"main.dart.js_10.part.js": "1497ae9dee29664e5f11c93f70e769d5",
"main.dart.js_38.part.js": "a4b58be8bc191ac670114b9e86092782",
"main.dart.js_12.part.js": "fcf7273c7c3390c072916f9ba89b201a",
"main.dart.js_46.part.js": "8b47512102c0d18fd0b0f35413e764bb"
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
