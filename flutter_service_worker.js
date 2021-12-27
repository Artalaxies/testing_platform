'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "1c7ffabe299318a45392442c84d47384",
"main.dart.js_39.part.js": "9148d40ccbd7cdbd4396c3dbf140ab6b",
"main.dart.js_3.part.js": "4ab94283ded98eb780fe8f9b529c8797",
"main.dart.js_44.part.js": "07edacc3def753a4576c785d9df1fb3c",
"main.dart.js_15.part.js": "19fa5eddb116ce66e3984ef3dd4b44cc",
"main.dart.js_32.part.js": "f3514b1f956767a772086f875169dd86",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_56.part.js": "06da6a171275eacd4b8c94985ac3027e",
"main.dart.js_36.part.js": "30fe2f8291aaa917e87db527926207ac",
"main.dart.js": "7925df864badd3898ee95aa2c7c18820",
"main.dart.js_57.part.js": "f3c37bb187ff0c2495d67c57a377fadf",
"main.dart.js_9.part.js": "2b52a6b39aa4d2b56c3bf52c15dd4515",
"main.dart.js_65.part.js": "05132fb478e15a04b216eb96cb54e53c",
"main.dart.js_26.part.js": "20cb70be6c09604689664005e03ed36b",
"main.dart.js_20.part.js": "9284af36680f3baee863add38ffe1fd5",
"main.dart.js_58.part.js": "c0de9b388c78982cf1b9d7d19e5948e9",
"main.dart.js_61.part.js": "535656082ff63c74640dedc1c0fed305",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "3be535ae9b4b4528cee116a7bc2239d2",
"main.dart.js_28.part.js": "7a084fc1e604dc8c71b7184a1cf71f3d",
"main.dart.js_45.part.js": "a4741030a85d7467caea3532c3f17d73",
"main.dart.js_2.part.js": "d672db274318d94e579adcab3213fc18",
"main.dart.js_63.part.js": "56128d59cb752a520c545525cfd71e5f",
"main.dart.js_17.part.js": "b814f461b1e3e23d7360498d2aa7acb4",
"main.dart.js_25.part.js": "4bd39508f44b7c8cfb86fa12bf3e852b",
"main.dart.js_7.part.js": "850d860a8c595bafa341c7f03fa990ed",
"main.dart.js_6.part.js": "1bce1eca370f6812c174c078e5b7a58b",
"main.dart.js_49.part.js": "4d5675dfb2803c65b7233acbe962c321",
"main.dart.js_22.part.js": "7c115a910a145fe29692d7c0fab5383c",
"manifest.json": "e009b7a431dccb5cec4f59c332fc5f41",
"main.dart.js_51.part.js": "455b0542c9fd96626481a0c0a403483d",
"main.dart.js_1.part.js": "62ff9014683fb3f899546c6e1368bd30",
"main.dart.js_41.part.js": "af4ec19575a6f47d7d32739e06fd894e",
"main.dart.js_43.part.js": "2092622e383d58d3afa92add76aeabb8",
"main.dart.js_31.part.js": "b0aa24cb9d5fac4c99cf74a6b09ccb58",
"main.dart.js_27.part.js": "9da8772ed6edb7ab9f988729d6f50b7f",
"main.dart.js_37.part.js": "713e7377931cd7ca28996ecc2eee2399",
"main.dart.js_52.part.js": "9a87d292109bdfe4ef8b755b46e37bef",
"main.dart.js_53.part.js": "996ce5b1a01d616a0ef84a89d67e5f23",
"main.dart.js_14.part.js": "e18336c14decd5d426df817ecd7d4b7f",
"main.dart.js_29.part.js": "82fcb3f58d6369c3e0fc83d9ddc5d4b3",
"main.dart.js_62.part.js": "6e30439cc6cd544653b5cc3363832dab",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_60.part.js": "441ebfd6ac93131c8b04258ab066df3d",
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
"index.html": "ecb0fd64d465dcd4f224a493e3d9853c",
"/": "ecb0fd64d465dcd4f224a493e3d9853c",
"main.dart.js_16.part.js": "2f84131273c9dabc939ae9ac95b7a8e9",
"main.dart.js_23.part.js": "8f850fd267344b751cff6f0172dabc92",
"main.dart.js_55.part.js": "977fa3a3cca1523cf12fe8245d1a4fbf",
"main.dart.js_13.part.js": "e3cf7aceb6a984b70dcd47779e33508d",
"main.dart.js_11.part.js": "4978d21ba659c9eec72f482ee03d0589",
"main.dart.js_54.part.js": "deabe432b1d3c0532ad4f6b18897d4ad",
"main.dart.js_33.part.js": "633e2db200b2b141e2dc9f49d28cad88",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "718f6882de2f7e2ddbca61766fb6e371",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "daec125eaa76b57ef435e7fb361ff158",
"main.dart.js_21.part.js": "b805438bb96aa0dc53a52b8d9edda834",
"main.dart.js_42.part.js": "9ae03c45519ca87ca9257640233f3d79",
"main.dart.js_18.part.js": "b66f2473ba504f3db60647fab75a9097",
"main.dart.js_34.part.js": "723deb2e4388300046c857b59d885e92",
"main.dart.js_5.part.js": "666b011a6999759c74d08902e19b7614",
"main.dart.js_10.part.js": "c655cbaba7926ee370f6599b6f0ba38d",
"main.dart.js_40.part.js": "b1dfa8444ae5408ac615235611c2ff3c",
"main.dart.js_38.part.js": "48cdb177349650feef778dd0ab3cb29f",
"main.dart.js_12.part.js": "f18b565cacd1b7e17a2f0f49d718c842",
"main.dart.js_46.part.js": "8f59ca696f761758ed6d675d3a291c23"
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
