'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "e3d41b346914df59bf933422c0496a0e",
"main.dart.js_19.part.js": "ad2416bc19561b2c3a33ccd25adda264",
"main.dart.js_3.part.js": "1d5f704dd880a5f575e0ac8894e37b85",
"main.dart.js_44.part.js": "26bd374582a0cbb8a3135afc7e98d11a",
"main.dart.js_15.part.js": "359fd7701f13cb6e18be4ed39ab40191",
"main.dart.js_48.part.js": "fd44b361ced635946e3d0f86c6e46c96",
"main.dart.js_32.part.js": "f5f25f30307a9dd6ad2b2230af379b46",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_36.part.js": "4084a09c8b1d12d3979151da329c85a9",
"main.dart.js": "09b7b2d76c6f9349cb683adab8489131",
"main.dart.js_9.part.js": "e7f527d0ea4833c5312d242289ecd2c0",
"main.dart.js_26.part.js": "651d0e8972c885b441f242f4911f523b",
"main.dart.js_20.part.js": "29a1cd6ac877e6e9de02397c3122ab66",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "ce753eeb75886518eaf3e6e3e67b3bad",
"main.dart.js_28.part.js": "91849f56881b5f467390eddb76f7f046",
"main.dart.js_45.part.js": "4a2b12e2318691fb67625142a8aae5b1",
"main.dart.js_2.part.js": "4f8b5868133e13ae701c3444f38f8748",
"main.dart.js_17.part.js": "312695053408bd22966def58b30e50fb",
"main.dart.js_25.part.js": "c21172f8d1dfd2f2505f5254438320fe",
"main.dart.js_7.part.js": "0d5a1077f6329223fc851e605753ca51",
"main.dart.js_6.part.js": "d35f8118bcc5496d1e45f623de1ee88b",
"main.dart.js_49.part.js": "765d18bcaa3446b2b837693806869739",
"main.dart.js_22.part.js": "3ca0e7e7d3a4af3ee5fa47551cf5bc0e",
"manifest.json": "27a6598457ff96a3f3a6028a19be94b0",
"main.dart.js_1.part.js": "bb44cfd3834bfaea706c696ca9ba1e9e",
"main.dart.js_41.part.js": "2fbf4b4d94aceadd41a59877299afe69",
"main.dart.js_43.part.js": "d4dacfc5e95de1943c159cdb727e211c",
"main.dart.js_31.part.js": "3065bc19943d11187194561916241ced",
"main.dart.js_27.part.js": "fb2b45148c48d149feee19bd77b27c67",
"main.dart.js_37.part.js": "9f25ac50d5e2b3dbdc608d7afe6d60d3",
"main.dart.js_52.part.js": "070bc7670d5683bc5160d1d08ce024a3",
"main.dart.js_14.part.js": "ce9dbbdcb6a77421698bbddc1f8e68e3",
"main.dart.js_50.part.js": "8331412616e5b6dc8f6588f801f3c788",
"main.dart.js_29.part.js": "fd7e7906570b9dc9c6e4d1ba6581fc25",
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
"main.dart.js_47.part.js": "e3f806c4cad48aacccf4af7b9a9e5e4e",
"index.html": "41804539c1ee731693f39e7a9ea0d778",
"/": "41804539c1ee731693f39e7a9ea0d778",
"main.dart.js_16.part.js": "ab2678645f57668f082c9ca52519ad44",
"main.dart.js_23.part.js": "8c2194a9b6f691bebcaeee90b0123de2",
"main.dart.js_13.part.js": "2ec539948aa9821c2503b0e0cc54f898",
"main.dart.js_11.part.js": "4589759d397e9781bf119fc4130f2fdf",
"main.dart.js_33.part.js": "5728fdcb535535e85b1e24d6b9247a6f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "bc95789f6048b0792fd4ed1d1cf76706",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "232f980210de5eae34b1e1bb83ee36f1",
"main.dart.js_21.part.js": "3d72b3c3051ebde335e835930b2ce02e",
"main.dart.js_42.part.js": "1034a458661128e4a5ee7fae5cf219ed",
"main.dart.js_34.part.js": "939fd6eb430a24ee24b667b2140a5335",
"main.dart.js_5.part.js": "0259b83aa35f6ea1bc091374732faa8a",
"main.dart.js_10.part.js": "4a7ef321f2255f8f96ebb6d4b9b49d87",
"main.dart.js_40.part.js": "331b22ce7dd1e393e94498719ad91c9f",
"main.dart.js_12.part.js": "03a70c0884e5db00b4766a350a2a4c17",
"main.dart.js_46.part.js": "4e749dc691bba34e256fc07206ba391b"
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
