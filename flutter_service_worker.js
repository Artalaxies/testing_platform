'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "419ae6cc26e0e9e8b5e451bd556bc681",
"main.dart.js_39.part.js": "c505cc388bd66eafa0e819ff7ac7246a",
"main.dart.js_3.part.js": "a63ca3d70ccb179a906d81bedb14032b",
"main.dart.js_44.part.js": "9880048c0986d85c4cc97edc2831e4d3",
"main.dart.js_15.part.js": "0d52fce02db16b0864df509f6dcdec34",
"main.dart.js_32.part.js": "f3514b1f956767a772086f875169dd86",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_56.part.js": "50653ed4b38a7151a888e1a752cf1ac2",
"main.dart.js_36.part.js": "6b0bfccfd4a637b3ad7cdabacdfce95e",
"main.dart.js": "bba2faa6d668eac6ad8b16370954cf38",
"main.dart.js_57.part.js": "eced9ff7eab3cdb13b922e1885634e17",
"main.dart.js_9.part.js": "2ad1b9c366e84b95e4e3180fed9df55e",
"main.dart.js_65.part.js": "f34e0e31259d83cb5c35154742106d91",
"main.dart.js_26.part.js": "85c7a6e2e02f6bee1f973a1448eec0ef",
"main.dart.js_20.part.js": "17a57bb0ed0b095e5c62de72aa5661b2",
"main.dart.js_58.part.js": "fe6560c7ca60c63925e9c158945913e4",
"main.dart.js_61.part.js": "b74169cf68e47408b40965c846d14212",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "7c30cddf86d0ac9bde39910cb1265c78",
"main.dart.js_28.part.js": "d34b0501602cab7e5982dd7ca50034fc",
"main.dart.js_45.part.js": "a4741030a85d7467caea3532c3f17d73",
"main.dart.js_2.part.js": "7ba7943629887747944414cd02aaa6fe",
"main.dart.js_63.part.js": "c1d58339080e4c6f442fab0473a5c8ee",
"main.dart.js_17.part.js": "d684596408f052297886df18cbad5026",
"main.dart.js_25.part.js": "e41d349bcec1adf61a2135b449721328",
"main.dart.js_7.part.js": "850d860a8c595bafa341c7f03fa990ed",
"main.dart.js_6.part.js": "01abebdfb9dfbb51cd4a5537985fc200",
"main.dart.js_49.part.js": "cce34c5b40540fb13a524601405752ef",
"main.dart.js_22.part.js": "83ee4cecb835ba3d0ad7f8f38346ed63",
"manifest.json": "e009b7a431dccb5cec4f59c332fc5f41",
"main.dart.js_51.part.js": "fef6f1c53a2c10449e50981f15c5818a",
"main.dart.js_1.part.js": "818b610485065e801e73c95880a31472",
"main.dart.js_41.part.js": "be9ee0f72d4431adca96783c4dec3ba4",
"main.dart.js_43.part.js": "2499c10a4bc09642230b87dbdfc20285",
"main.dart.js_31.part.js": "e731ad3751c84727c5e36e16845615af",
"main.dart.js_27.part.js": "a88c0387a09f5f1bed4f751b4064e6b1",
"main.dart.js_37.part.js": "713e7377931cd7ca28996ecc2eee2399",
"main.dart.js_52.part.js": "9a87d292109bdfe4ef8b755b46e37bef",
"main.dart.js_53.part.js": "c2cf73855e63d2e2a11e6adf6cc7cd67",
"main.dart.js_14.part.js": "c6eae841e99a4630bcded062aaccc19d",
"main.dart.js_29.part.js": "1c40e918e1921c59fa3ac9b50eee7009",
"main.dart.js_62.part.js": "ca94866edd8d7acd14d1dfc2c36c3afd",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_60.part.js": "3e3e16f19d9cee7e92363a5a75ac1d3b",
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
"index.html": "3925da1429cb41d51c6699f3f889107c",
"/": "3925da1429cb41d51c6699f3f889107c",
"main.dart.js_16.part.js": "1a5e9abeebe77d16c3ff28db06e192f2",
"main.dart.js_23.part.js": "7b5ce889940a4a89f5cac237059c0abf",
"main.dart.js_55.part.js": "977fa3a3cca1523cf12fe8245d1a4fbf",
"main.dart.js_13.part.js": "6934405cf40c0adea2670177657f2d70",
"main.dart.js_11.part.js": "d0dccbed85a6bb9bf9a0c5fc87b6a64d",
"main.dart.js_54.part.js": "dd1253df51b047f43cf95983da52483a",
"main.dart.js_33.part.js": "5e8242c0de5551b2741338e0b1275294",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "884fc7a56653cd5542c5e5440b19caaa",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "464c05a470d9ab1d07a311fbde561ef2",
"main.dart.js_21.part.js": "b805438bb96aa0dc53a52b8d9edda834",
"main.dart.js_42.part.js": "b78e9f397107b788800649ee0e208ce9",
"main.dart.js_18.part.js": "1d297241d3986834e7d8ed6dff452878",
"main.dart.js_34.part.js": "62925cea4ebddb0421d5a63b319d2615",
"main.dart.js_5.part.js": "c3f35bbff0370e81b19836789dc83ac2",
"main.dart.js_10.part.js": "60cd12fb5df2fdd5182a9487a1f5f3a3",
"main.dart.js_40.part.js": "155c069bc3d1da700b41e3ac99fbf861",
"main.dart.js_38.part.js": "29265fb22598f5a5d5b5d66c6046ede7",
"main.dart.js_12.part.js": "255c133c16635a03df6f0a86272ac5e2",
"main.dart.js_46.part.js": "6c0520f640749b0c343f1af966f1bb82"
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
