'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "0e2156af6bc3df915a146c4a6a71cba1",
"main.dart.js_39.part.js": "eddd908cc26ef92a6791087aef9ba20c",
"main.dart.js_3.part.js": "713a819a270486e8c4e60589e9880ba0",
"main.dart.js_44.part.js": "76c68c7c4ac15e96673929e10320616a",
"main.dart.js_15.part.js": "ea3bcc94f26a68a579bd6a352a0dbda1",
"main.dart.js_32.part.js": "f3514b1f956767a772086f875169dd86",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_56.part.js": "2295fe747d49225e197108f9cad25337",
"main.dart.js_36.part.js": "b24bed920da6cbd1338c68ec30974461",
"main.dart.js": "80954de3319230c4334937e1286c99fc",
"main.dart.js_57.part.js": "c233ec6e5e7dccd5aed808fb993fe63e",
"main.dart.js_9.part.js": "1ef96a1dbe7937f8eb487f624f7a5c31",
"main.dart.js_65.part.js": "b3d83f1376446646535f20f83a5c8ffc",
"main.dart.js_26.part.js": "59b7e212bcf6a0b7703da71877560bb4",
"main.dart.js_20.part.js": "57eaa9e77e43b7d1bd8c96b0918d06d3",
"main.dart.js_58.part.js": "3f660a7271ce3e7daedfe92bfdcb45c3",
"main.dart.js_61.part.js": "d63529d5d5608217312e5a3fc1a85bd4",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "0d08d799c3aa0d044526e77b67c5eebc",
"main.dart.js_24.part.js": "fe7f72e0470a17555cbf266637735d5d",
"main.dart.js_28.part.js": "1e0313443c6ed204c3b4e16f85335630",
"main.dart.js_45.part.js": "3f8338ace67bf6cea411a4655e4bf0ab",
"main.dart.js_2.part.js": "f1bca9e60df01e3ce6c0766fef0bea7f",
"main.dart.js_63.part.js": "d095a21efeb6c0e6558ce800b40f25e6",
"main.dart.js_17.part.js": "37db3a2035de4d48bc92eaa6db37ec94",
"main.dart.js_25.part.js": "7b8695c894e81c52b32d729097961ccb",
"main.dart.js_7.part.js": "9dd7e9733bac4cf7be141f50b3702e1d",
"main.dart.js_6.part.js": "9efb7309b7622685381f76b316689cb2",
"main.dart.js_49.part.js": "b9b6f0f4dc42efb1582f6d8fc6f4a46f",
"main.dart.js_22.part.js": "6976253497fece2f4188b66b9f23822a",
"manifest.json": "e009b7a431dccb5cec4f59c332fc5f41",
"main.dart.js_51.part.js": "fddf88e15c5c73df479ba2f043502631",
"main.dart.js_1.part.js": "caa0a0a79d2f6dddf3288bdbb14bae21",
"main.dart.js_41.part.js": "ccb29adddef7a7bd24f809f4598b1d16",
"main.dart.js_43.part.js": "8f9acf1c67019b71f55c90445325c04e",
"main.dart.js_31.part.js": "1cba7e1fc318b212d9e5c8ce15b56e57",
"main.dart.js_27.part.js": "17a8cde4fa97c96dd0a9f6f7a0a2f61f",
"main.dart.js_37.part.js": "713e7377931cd7ca28996ecc2eee2399",
"main.dart.js_52.part.js": "831863de1804091aafebf01b4cad5f9a",
"main.dart.js_53.part.js": "d2a88283e936015b85898c557638854d",
"main.dart.js_14.part.js": "e2e3d25ddc7bc58fdd16f4af73caf1e5",
"main.dart.js_29.part.js": "74eb2c1f029e21b94e4dec2347cd1e9e",
"main.dart.js_62.part.js": "da3ceeada4694587f0058906d86a6a91",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_60.part.js": "91912655ad285470516668074e06dad5",
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
"index.html": "b07d569542d1c7e8b7a1ff6b28540718",
"/": "b07d569542d1c7e8b7a1ff6b28540718",
"main.dart.js_16.part.js": "27131b5a26c21643c8f5f84719b84a4f",
"main.dart.js_23.part.js": "a1406ccc1f8c10d28890f3a7f50f62e4",
"main.dart.js_55.part.js": "66bbd65dba98784d1a9a31ea74b879d0",
"main.dart.js_13.part.js": "f6054b8ceaaa121adaaa3ee2b8e39edf",
"main.dart.js_11.part.js": "8b77772a6157f53eec3bdb2a2c8ce1c6",
"README.md": "e64e610551272e175acb8fea09ca4b88",
"main.dart.js_54.part.js": "bcacd5dca14ba035b3a8e0de703dfafc",
"main.dart.js_33.part.js": "25c6d92662b97c9db3839675a5086a41",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "685b3c1b7a588c18054a588da2a59f1b",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "88c0b4829c727f588f8f6fda4740a6ae",
"main.dart.js_21.part.js": "35d3cdcbd49118f2eab9bf09873ab5ba",
"main.dart.js_42.part.js": "c12b4e3f966d371ccd1e48ab7b17fae9",
"main.dart.js_18.part.js": "c63404f947d91e3592ae65a806b3d953",
"main.dart.js_34.part.js": "7d4134fe62e65059acf345baf0f97659",
"main.dart.js_5.part.js": "970dda5f970e6735d333c28afbc595ba",
"main.dart.js_10.part.js": "dbdf85570517d7c27073c70e50ebdfcd",
"main.dart.js_40.part.js": "aa8bea84753506ead07bad49710f9687",
"main.dart.js_38.part.js": "8d6bc0b4b6d72711745dff05bf1c1cbf",
"main.dart.js_12.part.js": "71520731b4e3fdcd15c24a0ac45637de",
"main.dart.js_46.part.js": "56567e1cbac3ce19a5f87a50771df6e9"
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
