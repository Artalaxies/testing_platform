'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "0798b9963217f4785e8e7c383cbf013a",
"main.dart.js_39.part.js": "0f8419dcf496c20bdeaba4d0df089f62",
"main.dart.js_3.part.js": "eb7f816c8bd90bfbe27fce29f987cf81",
"main.dart.js_44.part.js": "2aec568024f2d883a757989387ef09cf",
"main.dart.js_15.part.js": "67ab248e094f4383ef26f5b441363fdb",
"main.dart.js_32.part.js": "f3514b1f956767a772086f875169dd86",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_56.part.js": "009da521bcee404beb2a38b78f7b8455",
"main.dart.js_36.part.js": "6b0bfccfd4a637b3ad7cdabacdfce95e",
"main.dart.js": "1e30f52287b786f938280bb59ea725b1",
"main.dart.js_57.part.js": "c116dc78a1e7b071c893cc4f5d36d8be",
"main.dart.js_9.part.js": "4cd4fbfa2f4e2fd0baa54f30f1efffe7",
"main.dart.js_65.part.js": "e7aa78bd7c7e793816d482f8d025c3f7",
"main.dart.js_26.part.js": "96a22b205b5027dae5c72bbc04c6848e",
"main.dart.js_20.part.js": "17a57bb0ed0b095e5c62de72aa5661b2",
"main.dart.js_58.part.js": "89ff5bd6c15720877ec5304ebe10d44b",
"main.dart.js_61.part.js": "35f2590492a9679f4e10cd10d1c4585a",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "510e000803fbd7cd5aea172a511554ba",
"main.dart.js_28.part.js": "9592683ec5cad6e79ffcce883bf68fd4",
"main.dart.js_45.part.js": "a4741030a85d7467caea3532c3f17d73",
"main.dart.js_2.part.js": "642601d4c48c5fcb47017fd4470b2948",
"main.dart.js_63.part.js": "b9f49778c4a4dead1809f807ef1a5c56",
"main.dart.js_17.part.js": "d684596408f052297886df18cbad5026",
"main.dart.js_25.part.js": "09bc39d69ce0faa469651ec1e8cabc09",
"main.dart.js_7.part.js": "9d13559068860428a686b6e80522d59f",
"main.dart.js_6.part.js": "24fac83f63b26605b6ad835fcc78b2ef",
"main.dart.js_49.part.js": "0574c2519a5314f2b2ee0cc37a18403d",
"main.dart.js_22.part.js": "aefafd55d0cadd6d992033937ef7fdbb",
"manifest.json": "e009b7a431dccb5cec4f59c332fc5f41",
"main.dart.js_51.part.js": "51be65df9726c2a8b1091bc3fd0795dd",
"main.dart.js_1.part.js": "05bd2b76a0736061e7fe24ddfcd7f444",
"main.dart.js_41.part.js": "41dc501d7f129c19e1e826988014ba30",
"main.dart.js_43.part.js": "7a67073c79c9aa523c8d5dc728d29ba6",
"main.dart.js_31.part.js": "6152f4b1d1c1c50d112a5fc2241bc592",
"main.dart.js_27.part.js": "1a16da758c09c54fa7a5caa86b6aa396",
"main.dart.js_37.part.js": "713e7377931cd7ca28996ecc2eee2399",
"main.dart.js_52.part.js": "9a87d292109bdfe4ef8b755b46e37bef",
"main.dart.js_53.part.js": "5e254f0fd2e10a4db391f0ab317b6936",
"main.dart.js_14.part.js": "7704c1d149a8d8432c21cf5f678a174e",
"main.dart.js_29.part.js": "1c40e918e1921c59fa3ac9b50eee7009",
"main.dart.js_62.part.js": "7073a31fa49fb6fd9389970fbcab219d",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_60.part.js": "cb47eb6c072c799b1775cd1a3c3e50f7",
"assets/images/9.png": "7aa4225a23c019e11dac44b6846eb6e9",
"assets/images/Union.svg": "b0874c213bbb229023231b97a6548515",
"assets/images/9(2).png": "3176195a5e654dc8188b2155bfff65e3",
"assets/images/W(2).png": "8dfd56ecdfb43b688ec4632f4b0d411e",
"assets/NOTICES": "132792f6e7052af7d2407b76e6ff571f",
"assets/AssetManifest.json": "82c9b79de179af7612764f6a81b56b32",
"assets/FontManifest.json": "2eb4f865acee31d1af9c4001371142e1",
"assets/assets/IERC721Upgradeable.json": "456fb5d3eb1d647ea065470ec176761c",
"assets/assets/ArtalaxiesMarketV2.json": "54b5586e1a5227c2b1c8c3925685d570",
"assets/assets/ArtalaxiesMarket.json": "2ad3103ec75574612e80a2009049c4e4",
"assets/assets/IERC721MetadataUpgradeable.json": "650126e266101a9bcfbf9a6201421474",
"assets/assets/TestnetDerivativeTokenV2.json": "30db4f8adf7064943a00271ae4d13da9",
"assets/assets/space.riv": "19ebb50cac3f5949ba2e3776f1afad1b",
"assets/assets/TestnetDerivativeToken.json": "31e3b219fe44af0f0e0916ece3c19473",
"assets/fonts/Aldrich-Regular.ttf": "d95d3c0366bed65728b9968195c0ea11",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/cryptocurrency_network_utility/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"index.html": "ca6e0def48bcbd0db8015418de25ec30",
"/": "ca6e0def48bcbd0db8015418de25ec30",
"main.dart.js_16.part.js": "ff385bb7bfbda8889ca83263b2ffb207",
"main.dart.js_23.part.js": "11402bdf07bb65898f17d200344b354c",
"main.dart.js_55.part.js": "66bbd65dba98784d1a9a31ea74b879d0",
"main.dart.js_13.part.js": "24ac002e19b27f1dca4222633dd433d1",
"main.dart.js_11.part.js": "e9c7ec735e93d433818b14b0b890f88a",
"README.md": "aff70bea969b14fb5c8bccfb61c3d6e9",
"main.dart.js_54.part.js": "f33d9bc4df53610f79701df3cad86504",
"main.dart.js_33.part.js": "6eb47ea3fbc9ff774ff62693a06c2fa4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "67d7e7cba3f65e6e4ce765da6d80578d",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "a2632536748ec8642f691b650a143bbc",
"main.dart.js_21.part.js": "b805438bb96aa0dc53a52b8d9edda834",
"main.dart.js_42.part.js": "c12b4e3f966d371ccd1e48ab7b17fae9",
"main.dart.js_18.part.js": "1d297241d3986834e7d8ed6dff452878",
"main.dart.js_34.part.js": "abb8e5b74aef86fef889ba429e487809",
"main.dart.js_5.part.js": "6dd5816ca5a1d269486e997c11137e13",
"main.dart.js_10.part.js": "56bc1704c610bf4153e18a760e15396e",
"main.dart.js_40.part.js": "249212cf45112f55038cd7466abfa57c",
"main.dart.js_38.part.js": "adb0a380ae01900808e51f892714db9e",
"main.dart.js_12.part.js": "ee0faf41c6d8d09c814324d2072f99d5",
"main.dart.js_46.part.js": "92b69cbca1edd2e2a1a8c21d0921d9ce"
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
