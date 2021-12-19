'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "db5f57785d4a3aa8d0210a406fa1079e",
"main.dart.js_19.part.js": "a55b457b9d5bb7ee77bc71dbdbad06b0",
"main.dart.js_39.part.js": "d7ad9ddfb5af93386279ee69972981ba",
"main.dart.js_3.part.js": "c13a3e6b389447eb28a661526e87ee9a",
"main.dart.js_15.part.js": "425b401ffe19f2aa237ddcacf0917fde",
"main.dart.js_32.part.js": "6c67c3b30fab46e33e9e13a160eeaffe",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js": "16655f4e65c1a36d61476a90bc5c3806",
"main.dart.js_9.part.js": "ac39a1eafb4ccb706685ead56a390dd5",
"main.dart.js_26.part.js": "50b81b74a15dfe8f2dcdc460c0e1f094",
"main.dart.js_20.part.js": "b4359b341e7934a516808a77cc9b1339",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "29784ba3bfe14027400958018e909592",
"main.dart.js_28.part.js": "69af27f51d7029f76980c960f586034b",
"main.dart.js_2.part.js": "2112ab752ca3632c385977a076ba34fa",
"main.dart.js_17.part.js": "4ea5934e8258c78b2252bd543abbf430",
"main.dart.js_25.part.js": "4f9697d1135225f72ba9ea268edad91e",
"main.dart.js_7.part.js": "0ac49b07e69b5e2d331a14c530fc3ff0",
"main.dart.js_6.part.js": "c724ee2977cd1e66c6f3e2653e77cb08",
"main.dart.js_22.part.js": "56bddb02c490f08c822cbb2a8efbfec2",
"manifest.json": "27a6598457ff96a3f3a6028a19be94b0",
"main.dart.js_1.part.js": "8c743add85f7e5319a7816ab1c125b18",
"main.dart.js_41.part.js": "b7c4e96f23c8d88e384c925ba8bf0a36",
"main.dart.js_43.part.js": "5e4b658ba35f96a0f577d89f47df22b4",
"main.dart.js_31.part.js": "b292c30b1d73f8ceab5b56c104f283f1",
"main.dart.js_27.part.js": "50970bc6def9a66ff2625d8b785ba301",
"main.dart.js_37.part.js": "0a18e42a5f34d64b69b0f52ea07ea633",
"main.dart.js_14.part.js": "36be03c3936de6652f0d9fcf6c93a939",
"main.dart.js_29.part.js": "f068cd5659728ad3877a1ae1f2e98476",
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
"index.html": "6f81d8904093b3f77779bb21a9e3ecca",
"/": "6f81d8904093b3f77779bb21a9e3ecca",
"main.dart.js_16.part.js": "c59b9a71c028cc875665684f7719099f",
"main.dart.js_23.part.js": "24f3d206307cef58362f2c4e86105a00",
"main.dart.js_13.part.js": "26075a165afa8b79a22e04b85926847a",
"main.dart.js_11.part.js": "266314e092b01cbcdb81125b9750789c",
"main.dart.js_33.part.js": "b25d9343365ee2bc7b9f79b336140819",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "87848a94d8584302a497b11a591de360",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "9ec4c45e78d535bd37ba57f579186fc4",
"main.dart.js_21.part.js": "ecba8943a09c7584e6683979780d4c85",
"main.dart.js_18.part.js": "22b4383ab97acb98980bc64231ed8eb2",
"main.dart.js_34.part.js": "cf1eafd37ef495a6485add9b188dfee1",
"main.dart.js_5.part.js": "df7ac0957d73e659df623a88628bf565",
"main.dart.js_10.part.js": "cb904a5cccb0d61a153c8336fba6600a",
"main.dart.js_40.part.js": "9f081de57dd45ec1f8d3804b175fa7f7",
"main.dart.js_38.part.js": "4f1e9fd6d89e8772da85aca8154d569c",
"main.dart.js_12.part.js": "06894e4bb31157d290bbb5729e35adf4"
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
