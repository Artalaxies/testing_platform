'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "a091b7a1ef3cba6108b0b56bb68e0430",
"main.dart.js_39.part.js": "a8f426fd40a0da7e2e18af4524ff1024",
"main.dart.js_3.part.js": "adb0071ccedbbbc09726a3a6659ba847",
"main.dart.js_44.part.js": "2aec568024f2d883a757989387ef09cf",
"main.dart.js_15.part.js": "dc96f21d57a9d6b825083473767757a8",
"main.dart.js_32.part.js": "f3514b1f956767a772086f875169dd86",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_56.part.js": "c946ee2696d934d30b56d04d6d1f6272",
"main.dart.js_36.part.js": "6b0bfccfd4a637b3ad7cdabacdfce95e",
"main.dart.js": "c1451fbc7a576317c3c7bf16d117204b",
"main.dart.js_57.part.js": "80526a06b07c3b1b11a383c1cf226139",
"main.dart.js_9.part.js": "16caa59b900e90594b2c9ab4b1508709",
"main.dart.js_65.part.js": "3af0a7dc57adffd2cfac327620282198",
"main.dart.js_26.part.js": "95e257fc9492631f148d82db4ebb6eb0",
"main.dart.js_20.part.js": "17a57bb0ed0b095e5c62de72aa5661b2",
"main.dart.js_58.part.js": "60a2c0f7d97823085a4e2f88efeff65a",
"main.dart.js_61.part.js": "35f2590492a9679f4e10cd10d1c4585a",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "e1b77c978544682983e7849757ee67ec",
"main.dart.js_28.part.js": "34bf0050a29e5cda5b54629cf28e52e1",
"main.dart.js_45.part.js": "be3730701bc1bb9eaec50cc8e29e5695",
"main.dart.js_2.part.js": "2329b006efd56a62525a8714ab6a8765",
"main.dart.js_63.part.js": "d1a75ca5b1ff57e8d1e0b363404685e2",
"main.dart.js_17.part.js": "d684596408f052297886df18cbad5026",
"main.dart.js_25.part.js": "79091352ab0a90d8a161bed74c4c2e9b",
"main.dart.js_7.part.js": "9d13559068860428a686b6e80522d59f",
"main.dart.js_6.part.js": "24fac83f63b26605b6ad835fcc78b2ef",
"main.dart.js_49.part.js": "adaf2ce9761a40b67f74ac99fdcf8d9f",
"main.dart.js_22.part.js": "8b5c7f5518c0823854a4c58e28393026",
"manifest.json": "e009b7a431dccb5cec4f59c332fc5f41",
"main.dart.js_51.part.js": "6c6ee923344df3e2f710993ff424ca9b",
"main.dart.js_1.part.js": "8ae2b2a30341c7e0a5d11e105ee894da",
"main.dart.js_41.part.js": "4b8029c49ee2046c6a75845ceefec57b",
"main.dart.js_43.part.js": "b464a02966f013b692198e1bba845496",
"main.dart.js_31.part.js": "5390c950d2e438d1e12586669ad0ebba",
"main.dart.js_27.part.js": "236c55db9e345a3f92374b7c2f81601e",
"main.dart.js_37.part.js": "3f1a16ced8a0db12bd443c343b5f82a8",
"main.dart.js_52.part.js": "09a0852f8510c15d09e5f0733528f362",
"main.dart.js_53.part.js": "a7402f2582531237f550a9c0681406a8",
"main.dart.js_14.part.js": "70e5f42a7576da317bbc93289a1b07f5",
"main.dart.js_29.part.js": "1c40e918e1921c59fa3ac9b50eee7009",
"main.dart.js_62.part.js": "b1cf9f6f873f4f7029b4438163eaaac3",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_60.part.js": "495fe8686797053fa97033bc2a4e9a9d",
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
"index.html": "2de580f702d97d27142f38c3a474667c",
"/": "2de580f702d97d27142f38c3a474667c",
"main.dart.js_16.part.js": "dca092030d0b77397746f013181b17c4",
"main.dart.js_23.part.js": "887d43a7a66d0b5e49f429d31f9065a0",
"main.dart.js_55.part.js": "0463a982a87e241bc2cd2177461a31d1",
"main.dart.js_13.part.js": "f2027d91625fd1dde8c1608615c81a46",
"main.dart.js_11.part.js": "4fa0a7274ff7453eb6790db1e93ee654",
"main.dart.js_54.part.js": "f33d9bc4df53610f79701df3cad86504",
"main.dart.js_33.part.js": "a2015995380946ef36080509a16e9695",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "855c713892f9e8fc45d64ed7cba64991",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "fe540f6678bfd69d0bbd269792e183ce",
"main.dart.js_21.part.js": "b805438bb96aa0dc53a52b8d9edda834",
"main.dart.js_42.part.js": "c12b4e3f966d371ccd1e48ab7b17fae9",
"main.dart.js_18.part.js": "1d297241d3986834e7d8ed6dff452878",
"main.dart.js_34.part.js": "ecf39bb5cb765136aaade121b182e04a",
"main.dart.js_5.part.js": "f1970374ec5e2510664148d80715db9f",
"main.dart.js_10.part.js": "84341c44050c60848c50f56faae66e8e",
"main.dart.js_40.part.js": "f5770323d80adfa8bbab9f6ecd99821b",
"main.dart.js_38.part.js": "24cafeee660ef075a079a405f266bc4e",
"main.dart.js_12.part.js": "b928adfe7839386bbdf916c8a36f5eee",
"main.dart.js_46.part.js": "09e46a729231821d06a284604e17a761"
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
