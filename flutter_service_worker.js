'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "82fcb3f58d6369c3e0fc83d9ddc5d4b3",
"main.dart.js_19.part.js": "3b5bfb722df6259fdafdb4149e08eb80",
"main.dart.js_39.part.js": "81dd7044787e050f16b704501e448d4f",
"main.dart.js_3.part.js": "f973656101ee5177b0d24b753b9d818e",
"main.dart.js_44.part.js": "07edacc3def753a4576c785d9df1fb3c",
"main.dart.js_15.part.js": "9b705dd058d1f44b9d2e8b3fbff84815",
"main.dart.js_32.part.js": "c74229fb1008264811cb6c87ea978aea",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_56.part.js": "f3889b1eb1a6e7a83fdd442042c4f5ba",
"main.dart.js_36.part.js": "30fe2f8291aaa917e87db527926207ac",
"main.dart.js": "59f772b9f9ba7c4031c4f3f98d38b000",
"main.dart.js_57.part.js": "8b7ac8b9e186d793e3a498cf242eb53b",
"main.dart.js_9.part.js": "28ba7dd7f5b266a98e5a9995fda650be",
"main.dart.js_65.part.js": "a30e194b4b5eeff746694cf7183de9c5",
"main.dart.js_26.part.js": "278280f38221321fb7f7b34cd630dfed",
"main.dart.js_58.part.js": "8de39bb1680562c22e225a0a0737392c",
"main.dart.js_61.part.js": "89bbebfa05b1259d09a23859337b6e16",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "31ee0d16628dbda8f6ef4ff02ab11e38",
"main.dart.js_28.part.js": "dd9283e30fde5fa1170885fef6ff7778",
"main.dart.js_45.part.js": "a4741030a85d7467caea3532c3f17d73",
"main.dart.js_2.part.js": "b31edb6032bd21fea4b52d5e7626f421",
"main.dart.js_63.part.js": "e546145a1606f255f2dbcb8994c16dec",
"main.dart.js_17.part.js": "0e50dac7c2352b31be1bb8ace9eddf3b",
"main.dart.js_25.part.js": "d616d2ae366ae4215cf61d0f5293659d",
"main.dart.js_7.part.js": "850d860a8c595bafa341c7f03fa990ed",
"main.dart.js_6.part.js": "cf2e3123793c99fcdbb187377d7eb8f3",
"main.dart.js_49.part.js": "6fb16e32fbef84e5a16a04e36121227c",
"main.dart.js_22.part.js": "b805438bb96aa0dc53a52b8d9edda834",
"manifest.json": "27a6598457ff96a3f3a6028a19be94b0",
"main.dart.js_51.part.js": "cb06b5b6afb0ed9d64d0d5722ea0daa8",
"main.dart.js_1.part.js": "74d6ffcd8be4997e1e704b966a4728ea",
"main.dart.js_41.part.js": "af4ec19575a6f47d7d32739e06fd894e",
"main.dart.js_43.part.js": "2cf86eaa0b194b057290856b8a2fe241",
"main.dart.js_31.part.js": "29e117ff0df8ac5dc79cd224e475a6d0",
"main.dart.js_27.part.js": "9e71bc24f5268409ebb10304351780c7",
"main.dart.js_37.part.js": "b7a622f59e274731212cf7f1b716075c",
"main.dart.js_52.part.js": "9a87d292109bdfe4ef8b755b46e37bef",
"main.dart.js_53.part.js": "1019818ddcea2449c4495928c749777d",
"main.dart.js_14.part.js": "fbce4cefcd44c0cf31d575e356e0f983",
"main.dart.js_29.part.js": "09543a057c6b7386c308d750e41523f3",
"main.dart.js_62.part.js": "0a2ae6d20c0715a7ef3bbdb38a6df864",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_60.part.js": "8d53a1adf9673c89627e8c8bb035ca4c",
"assets/images/9.png": "7aa4225a23c019e11dac44b6846eb6e9",
"assets/images/Union.svg": "b0874c213bbb229023231b97a6548515",
"assets/images/9(2).png": "3176195a5e654dc8188b2155bfff65e3",
"assets/images/W(2).png": "8dfd56ecdfb43b688ec4632f4b0d411e",
"assets/NOTICES": "95dd791cf37fd8049fce6a55398dd1bb",
"assets/AssetManifest.json": "43359bf9dfc196bbcc706130394af9e0",
"assets/FontManifest.json": "2eb4f865acee31d1af9c4001371142e1",
"assets/assets/IERC721Upgradeable.json": "75e144a466aff39db5d3d3ee1a4acb25",
"assets/assets/ArtalaxiesMarketV2.json": "2243e2b8b6d870c6216ef7c9460d9e74",
"assets/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/assets/IERC721MetadataUpgradeable.json": "d5e0f1f90320fced9958f64e617b5624",
"assets/assets/space.riv": "19ebb50cac3f5949ba2e3776f1afad1b",
"assets/assets/TestnetDerivativeToken.json": "d4c9bc8277c3b515c87a27ab2a15aa6d",
"assets/fonts/Aldrich-Regular.ttf": "d95d3c0366bed65728b9968195c0ea11",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/cryptocurrency_network_utility/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"index.html": "7e9725e5e75b095937a09a6e291d2a40",
"/": "7e9725e5e75b095937a09a6e291d2a40",
"main.dart.js_16.part.js": "2512e11b2b1fe6d368bbd95413ba093d",
"main.dart.js_23.part.js": "d14068fa47319ba0302a88ff2e6f6108",
"main.dart.js_55.part.js": "977fa3a3cca1523cf12fe8245d1a4fbf",
"main.dart.js_13.part.js": "b07dbc96a10bc0f836d72edf9d74071b",
"main.dart.js_11.part.js": "34e8f57f05a9976dd6104a721295bde5",
"main.dart.js_54.part.js": "1e7248abc84622b79a34be5f0a4b707b",
"main.dart.js_33.part.js": "f3514b1f956767a772086f875169dd86",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "72df75ff2bde47d3b729349813130bde",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "03ff812fd979029f9297774c096adaa6",
"main.dart.js_21.part.js": "fd3f06e30f5b4034d59108bd6f25bd18",
"main.dart.js_42.part.js": "84d6167ed8d32a9c88dd91ed579fdc9f",
"main.dart.js_18.part.js": "b814f461b1e3e23d7360498d2aa7acb4",
"main.dart.js_34.part.js": "1792d11d90a6c3e70f30bf301cb38e34",
"main.dart.js_5.part.js": "55e441d2ff72db1c35e6e629fef4b5a8",
"main.dart.js_10.part.js": "97e394cd4cfb04246672aca9528af7bc",
"main.dart.js_40.part.js": "6f3f815eed11148d9e361f801c6e8c36",
"main.dart.js_38.part.js": "835dabdf974bd1283ab62b274411a1c7",
"main.dart.js_12.part.js": "63aee490c983df61dbb1595783e446ab",
"main.dart.js_46.part.js": "9972a5da1d39df47d3eb5ef5dd77660a"
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
