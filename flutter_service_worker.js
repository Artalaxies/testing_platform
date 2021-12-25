'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "d634d02b897de027408bafcb0b70ace3",
"main.dart.js_39.part.js": "179eefcf644abc208e91abf4fca5765d",
"main.dart.js_3.part.js": "8c99b0ead47948de8754f9a9ce44f029",
"main.dart.js_44.part.js": "39280176cd5d4064430c58d15adacb4f",
"main.dart.js_15.part.js": "3a9d4472175708e291b432426a2ebe4c",
"main.dart.js_48.part.js": "f5d546ab88605c351e83236645d5dc98",
"main.dart.js_32.part.js": "94fea80402ba35a6a74d0c46be09542e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_56.part.js": "e695dae8af36ba00ae50892797884991",
"main.dart.js_36.part.js": "6a5ffb8b38e8369068c49b984efaa2b3",
"main.dart.js": "31351d4b47f041c9f7ea5e3de6970e81",
"main.dart.js_57.part.js": "dbd42d98a46ec1ae99f8d673f4ebb17c",
"main.dart.js_9.part.js": "c2bc71916a073f721df60f98443c424c",
"main.dart.js_26.part.js": "d2429d8b4edbf2f2203c04f66091c5e5",
"main.dart.js_20.part.js": "75d40c09ded0d1db028ee0f0e25cd848",
"main.dart.js_58.part.js": "c294278a36e2d03f35fed906bcafb6aa",
"main.dart.js_61.part.js": "2b7b90257863139576c6775689bc291f",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "1f01e5b30c92e3c936b37b1f6e8cc9f0",
"main.dart.js_28.part.js": "2be74d75990b5ffdfc03d95300cefbfa",
"main.dart.js_45.part.js": "272735a8c59708191bd162cd3fa1ecdf",
"main.dart.js_59.part.js": "b39cbe128fed37c69f13ad349d97b719",
"main.dart.js_2.part.js": "6e571ec0d94f813101a3531fb8b11795",
"main.dart.js_17.part.js": "9e9ffd35796b7cc63c3fd0a379b8a671",
"main.dart.js_25.part.js": "2aead4386541d657c3f1962f3a48d273",
"main.dart.js_7.part.js": "4d37b9c60fa6c498321fab83c87178d7",
"main.dart.js_6.part.js": "85bdd5f67e79269e96ae633087640ef4",
"main.dart.js_49.part.js": "9ca8b3b40967f9b6402edf8a365c16eb",
"main.dart.js_22.part.js": "db8d55a26eb20772563f3f6aa963d0fc",
"manifest.json": "27a6598457ff96a3f3a6028a19be94b0",
"main.dart.js_51.part.js": "806efa53494dea7087cfbb6994718810",
"main.dart.js_1.part.js": "945117a37aeb89c7f413647595a26d9c",
"main.dart.js_31.part.js": "f411b82e9998f799d311c3b05efff2e0",
"main.dart.js_27.part.js": "019994d0295c8b830f11e0f1af3b0fdf",
"main.dart.js_37.part.js": "90447b3b26d9e43af555495666763b1e",
"main.dart.js_52.part.js": "6d864086deaf8fda0221a9ec16ee13d3",
"main.dart.js_53.part.js": "7c91108232a8750238a461cf424219b9",
"main.dart.js_14.part.js": "0066639e66530b45161158e04fae0c8b",
"main.dart.js_50.part.js": "982f60bc622f434412f9ea1992c3e5c2",
"main.dart.js_29.part.js": "647d3a600b31541c968f388f5255c831",
"main.dart.js_62.part.js": "3a201c5d6ffe2997e7941eeb095009d1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_60.part.js": "42e0b360b2da8c8d556246cd9b190b89",
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
"main.dart.js_47.part.js": "5d9e68e1d8fd3d65883766c95b6e022f",
"index.html": "ef5578d94b2b36f2b44c4d838c8e9d3b",
"/": "ef5578d94b2b36f2b44c4d838c8e9d3b",
"main.dart.js_16.part.js": "53ac46b3dd8a23e97cbb88955f126914",
"main.dart.js_23.part.js": "8c6850b60018a774c9da676740d13e4e",
"main.dart.js_55.part.js": "d0334a7de18c1e05fdc71b7fb8768d83",
"main.dart.js_13.part.js": "1d10c7491bf0e99543d1ecc51b626444",
"main.dart.js_11.part.js": "1f5e2e68e554a22eb6c8385bd45244cd",
"main.dart.js_64.part.js": "96e58a3c049cc80cd00532ce1eed506f",
"main.dart.js_54.part.js": "ce1611d28e496a4dd8b84f4f691d426e",
"main.dart.js_33.part.js": "5000624e7e72ed84ecc144c49f1c4b47",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "5420baff1f8d088ccdf16a46725d927e",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "74516d6b01e3a6a7808259c9e704df14",
"main.dart.js_21.part.js": "5fdfbb0bde2dff800b95db7fd75e48fc",
"main.dart.js_18.part.js": "9f8ff193fdbcd67f0a37127186e5330e",
"main.dart.js_34.part.js": "c12028a52b952230581c2a3682367b21",
"main.dart.js_5.part.js": "79686f9644948bf6e963ba968ea6e844",
"main.dart.js_10.part.js": "402faeadf8f1beaadfe2395dc10fa576",
"main.dart.js_40.part.js": "eadd838842064a31ec6acea569d3d3ec",
"main.dart.js_38.part.js": "75d1f584d88afe67ff68d6f38204dd4b",
"main.dart.js_12.part.js": "61970378f24201b6ecd8e4138bbb4397",
"main.dart.js_46.part.js": "f3240b88656419800f8f739996da41f6"
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
