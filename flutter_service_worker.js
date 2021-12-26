'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "ab4a9ce12e56e7945a7f06bcf77fd8c8",
"main.dart.js_39.part.js": "f7542ab85c119460053ef1e1212e122a",
"main.dart.js_3.part.js": "a9c74c8755ecfd21683f3f7d8020f76f",
"main.dart.js_15.part.js": "dc4f5f2d8ddd8290320197cebc5fcc7d",
"main.dart.js_48.part.js": "20d7710ad126a2be34db81cb1104f3f4",
"main.dart.js_32.part.js": "b5751239f3295a46d4a33d69cacc989a",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_56.part.js": "6669303a261d42884949774874ebc96a",
"main.dart.js_36.part.js": "4a7a0b0b25a36060ab8bcd366e81df4c",
"main.dart.js": "2e66c929825f24f879520b9b46f81785",
"main.dart.js_57.part.js": "6743d61bdb15a0ba70a97baf2d92027d",
"main.dart.js_9.part.js": "ef5ef5dedb70a70fa51e1ba6ba43ffa5",
"main.dart.js_26.part.js": "db3cc7347a119b904d075c11d5ac7864",
"main.dart.js_58.part.js": "c6c90eaa16aa2e1bfe67bdc28807ae1c",
"main.dart.js_61.part.js": "b65f2a1f61d1c2d61518c77d98da77e3",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "b8033e9229ee135338916c363e24ac67",
"main.dart.js_28.part.js": "ce47ee541e52597216e22a5e17582530",
"main.dart.js_59.part.js": "5c86d44805105ec95dbf801d1a836459",
"main.dart.js_2.part.js": "1b6b7547e0b6562aeedb171cd891e8b9",
"main.dart.js_63.part.js": "a7949f875233879f578f576f1aad596a",
"main.dart.js_17.part.js": "ecc3341aea012de4e4f5f1e5d8eaf637",
"main.dart.js_25.part.js": "43b7c14d0f542496169a5d18498a2b84",
"main.dart.js_7.part.js": "130e9e04e9ae4b268337a930f41436ce",
"main.dart.js_6.part.js": "1e48ab1c588cad2519d511239e858db1",
"main.dart.js_49.part.js": "5ca90a6cda8acb73ef15c4f009ba6d0e",
"main.dart.js_22.part.js": "a68914f07043dfb4683c9a77858632ac",
"manifest.json": "27a6598457ff96a3f3a6028a19be94b0",
"main.dart.js_51.part.js": "15efc5009b8f362cc8ae033790e3963c",
"main.dart.js_1.part.js": "afea06672600deeae2a49468baf22473",
"main.dart.js_41.part.js": "00fdeb6ee5db0463adc766cf81f8d40e",
"main.dart.js_31.part.js": "5a61ff5c7e47c905ef17896ae36c0bbe",
"main.dart.js_27.part.js": "82ece5caf4ef5f68a669fe8d6976baa1",
"main.dart.js_37.part.js": "c01b54b67aa7b7447ed698ec4d67c224",
"main.dart.js_52.part.js": "ed45f7c7a3be78b593b349a1d56be81c",
"main.dart.js_53.part.js": "fc018628e801222cf08d0554be5aaa6a",
"main.dart.js_14.part.js": "f59ad797645af172d8aa6719dbeacda8",
"main.dart.js_50.part.js": "194005e31e8b3fc67ba0d62e8bb56108",
"main.dart.js_29.part.js": "28d01ff81d22f7b663773a3e5ce559de",
"main.dart.js_66.part.js": "c3f8c287f19c3c2e701e978b897fdd13",
"main.dart.js_62.part.js": "7d61b334b141e70764c048bdaf05ce5c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_60.part.js": "f34f310fc949d07d095219b0c5416e7b",
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
"main.dart.js_47.part.js": "4453f1b8b57225fa0ddf5dfcf65785a9",
"index.html": "ffd7cb742dc1edf03311a088e1697932",
"/": "ffd7cb742dc1edf03311a088e1697932",
"main.dart.js_16.part.js": "fa023179bbe605cea14532e347447a63",
"main.dart.js_23.part.js": "3c25aac6978952854a8268a1e78efd0d",
"main.dart.js_55.part.js": "04feb8d8213c547a669e929b5b420c41",
"main.dart.js_13.part.js": "6a48661b3f62a034ff05c9198aafc5e3",
"main.dart.js_11.part.js": "6c336f5045a8b47054809c956f30fb8f",
"main.dart.js_64.part.js": "55e1ff4b92e8acc4e88d60e0cc7c0c20",
"main.dart.js_54.part.js": "b9d8ab818e77a2bee679752b0c063166",
"main.dart.js_33.part.js": "f411b82e9998f799d311c3b05efff2e0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "66d3453d56f356d51f666ab29214c7ff",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "8e84e0b2ab232e044df2d2855570c5da",
"main.dart.js_21.part.js": "743ac60d8176b80654673e702909dfd5",
"main.dart.js_42.part.js": "d8d4a0a03173a5fdbb349c8f38a7800b",
"main.dart.js_18.part.js": "d769b3d5377662e986be405fb43c2cd9",
"main.dart.js_34.part.js": "19a3ecfea4f07058b3c8d3fbeab179f2",
"main.dart.js_5.part.js": "451ca3b9cb5a47123397f7fabd768baf",
"main.dart.js_10.part.js": "ab494989afa00f92f9b009d12dca4a1d",
"main.dart.js_40.part.js": "03f92a404d6f3f1b8355d87ba1247aa8",
"main.dart.js_38.part.js": "96be0a329a89fb240695a7061f1b2d15",
"main.dart.js_12.part.js": "8dd49607d53da03f4a0ac63d11cbb4a2",
"main.dart.js_46.part.js": "865b38b6968594ff945716c35afcfe3f"
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
