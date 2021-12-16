'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "0b072d8c191d4c0f11381f86a8399992",
"main.dart.js_19.part.js": "7f76cb7639067ad8f1440f9680b005f4",
"main.dart.js_39.part.js": "c6e47259f0c9da755e2953aeda3fdce9",
"main.dart.js_3.part.js": "c37a06328a519428ceae363c5a214960",
"main.dart.js_15.part.js": "7435cf8772525687b29120cd79ccadcd",
"main.dart.js_32.part.js": "926418d32d36c1e0f3598f841dc0fd33",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_36.part.js": "6e800be76e7d4100ade4d38eb199fada",
"main.dart.js": "32ace4adfb39d6ad67232dc8299508bb",
"main.dart.js_9.part.js": "9431ba6d297dba0e63c5233bcc757e4a",
"main.dart.js_26.part.js": "63408360332a06d4378ccea6ab2ad533",
"main.dart.js_20.part.js": "5e94c1dcedfea6c770c11ae137dc8f56",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "38dbb427bb0059afea7dc8e0fb6aa65e",
"main.dart.js_28.part.js": "74a224c3fab2ad59af2cefc66ba54063",
"main.dart.js_2.part.js": "459dd7b1c700a6bf603868193f3387ec",
"main.dart.js_17.part.js": "6df194ec2a010d7d204b6b2b01e16656",
"main.dart.js_25.part.js": "f939e522d385a2f3b18ccc695118dab3",
"main.dart.js_7.part.js": "73ee1409550099eab9fc2b399bc4fb23",
"main.dart.js_6.part.js": "ca99f38a52e138dfa071d1c09f108171",
"main.dart.js_22.part.js": "3222bf4e86dd448c5a9f1835013749c9",
"manifest.json": "27a6598457ff96a3f3a6028a19be94b0",
"main.dart.js_1.part.js": "9a4d7447bb5911c25a0bc6b55e046648",
"main.dart.js_31.part.js": "3c664714966d50afde6628dcdbe30b93",
"main.dart.js_27.part.js": "62f9d9224e5d8d5d1d01f2c36f4a4f0d",
"main.dart.js_37.part.js": "d5ba0d0a9632ffa39d7fcc513f2c03e0",
"main.dart.js_14.part.js": "5037b31c366cceebfb5b11b2ce4a14d9",
"main.dart.js_29.part.js": "e7025e2c5cc8e5a57f48d2a4beb67e64",
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
"index.html": "d5beee3b9c5ee95b0db56500375ba0f6",
"/": "d5beee3b9c5ee95b0db56500375ba0f6",
"main.dart.js_16.part.js": "94295bc9abb5b97c4392c68a7b3804cf",
"main.dart.js_23.part.js": "df04d93fdfab45cc1154747dad2f7991",
"main.dart.js_13.part.js": "00ccee22d1109750799adb71649ea6db",
"main.dart.js_11.part.js": "2f0f99825f10a21b1d5061f7517c45bb",
"main.dart.js_33.part.js": "f949e14d73ad5c8046ebd76f65c14613",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "ce3fc45348efcbd93dc6a0d94238e068",
"main.dart.js_21.part.js": "51e523f0f3b822af8feecfea3f9cac49",
"main.dart.js_42.part.js": "59bc756ecf588dce75766e6d7a45f797",
"main.dart.js_34.part.js": "2db750fda3df1d7fbca3dec119fc5d9c",
"main.dart.js_5.part.js": "81e1993a1272cc3e08c756c8621a1741",
"main.dart.js_10.part.js": "48653b5ecbfe4ac526c1d96c378bfff2",
"main.dart.js_40.part.js": "b144301bf4e84b1cfc1a79119c5652ed",
"main.dart.js_38.part.js": "0b5a55e4f7ebc618884464175be25fee",
"main.dart.js_12.part.js": "0f648b822db52e800f378ddbd3eb2873"
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
