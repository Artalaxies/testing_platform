'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_60.part.js": "88d5b6cedf84d05073b07baf6e621e47",
"main.dart.js_6.part.js": "13b786a2c954c3caec49c1d4a46fdac7",
"icons/Icon-maskable-192.png": "049b52b8e7091fbe202416bb85d68be5",
"icons/Icon-512.png": "8aa6b8ca03b367dcf8eb4c487d0ae904",
"icons/Icon-maskable-512.png": "049b52b8e7091fbe202416bb85d68be5",
"icons/Icon-192.png": "8aa6b8ca03b367dcf8eb4c487d0ae904",
"main.dart.js_39.part.js": "4272a522ae9a462e77c4ced725cfdbfa",
"manifest.json": "e009b7a431dccb5cec4f59c332fc5f41",
"main.dart.js_32.part.js": "b3dc293d4be122df2cf640ecb58e604d",
"main.dart.js_29.part.js": "b1ac4ac2e275d6ad13f41b20f6d650b6",
"main.dart.js_34.part.js": "d8e95def5a5d0cb2f1ec7471fae5732a",
"main.dart.js_61.part.js": "f4a11e43cf9c38988744f21506bbf216",
"main.dart.js_54.part.js": "481535b73375332318a050c9c2562b0d",
"main.dart.js_2.part.js": "502b5255826b0d2aef896f0c865fb689",
"main.dart.js_56.part.js": "36672a7f20293134db991a2e5dab3b26",
"assets/AssetManifest.json": "82c9b79de179af7612764f6a81b56b32",
"assets/assets/ArtalaxiesMarket.json": "2ad3103ec75574612e80a2009049c4e4",
"assets/assets/ArtalaxiesMarketV2.json": "54b5586e1a5227c2b1c8c3925685d570",
"assets/assets/TestnetDerivativeTokenV2.json": "30db4f8adf7064943a00271ae4d13da9",
"assets/assets/space.riv": "19ebb50cac3f5949ba2e3776f1afad1b",
"assets/assets/IERC721Upgradeable.json": "456fb5d3eb1d647ea065470ec176761c",
"assets/assets/TestnetDerivativeToken.json": "31e3b219fe44af0f0e0916ece3c19473",
"assets/assets/IERC721MetadataUpgradeable.json": "650126e266101a9bcfbf9a6201421474",
"assets/NOTICES": "132792f6e7052af7d2407b76e6ff571f",
"assets/packages/cryptocurrency_network_utility/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "2eb4f865acee31d1af9c4001371142e1",
"assets/images/W(2).png": "8dfd56ecdfb43b688ec4632f4b0d411e",
"assets/images/9.png": "7aa4225a23c019e11dac44b6846eb6e9",
"assets/images/Union.svg": "b0874c213bbb229023231b97a6548515",
"assets/images/9(2).png": "3176195a5e654dc8188b2155bfff65e3",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Aldrich-Regular.ttf": "d95d3c0366bed65728b9968195c0ea11",
"index.html": "0f41427261a0423a1426e695764028fc",
"/": "0f41427261a0423a1426e695764028fc",
"main.dart.js_44.part.js": "2cb617d8c79190ef08ff5848556cc137",
"main.dart.js_40.part.js": "9beb72c938b702bc5f706edfc3a2a54f",
"main.dart.js_64.part.js": "0ea33fb74c90f1ea4aedc98ed348dc83",
"main.dart.js_21.part.js": "48848b4b88da17ea85c5c491085986a2",
"main.dart.js_62.part.js": "fc8387df53b65e5e08025c41b4ea140e",
"main.dart.js_41.part.js": "bfbd02409b17fd29689134bf41473cde",
"main.dart.js_31.part.js": "b529c808af576fa79b36f2dfe33ab54e",
"main.dart.js_16.part.js": "99f4c7ba7f9cb75a540859a458437dd9",
"main.dart.js_37.part.js": "b67224cafbd08fa9d86243e59376e66a",
"main.dart.js_42.part.js": "353dcab8fe96ecd779def9542ecb9f1d",
"main.dart.js_12.part.js": "a783dd3c8d9b7be6da3446ca917b117f",
"version.json": "71155866f4251f77a6ec75577653be87",
"README.md": "3e8c0876b3b9763e5113cc2d83f70b6a",
"main.dart.js_59.part.js": "ed67efbabc4ace0eac3a2666e7f53b6e",
"main.dart.js_20.part.js": "2114d58496839515d18fd0539478b084",
"main.dart.js_23.part.js": "4cf4e17131e73c49a6a60a008cb80df9",
"main.dart.js_11.part.js": "d51434abd8d55a972eca20eead0b06af",
"main.dart.js_53.part.js": "73bf64f48ddd2880737fcfe4e3c664b5",
"main.dart.js_5.part.js": "d6ca82e71d25ae8e04e042cc5251ff52",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_26.part.js": "1d7d436d126ac9d2277a6695ee4535e0",
"main.dart.js_36.part.js": "55c3fbcd0fef2219905c9c8de5579209",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_8.part.js": "06b9e7ebafe6b313b40b7e71816eaa6f",
"main.dart.js_24.part.js": "cccaab24e0fdb0f35ef90c687d80da02",
"main.dart.js_55.part.js": "46fb27e53d4084b5c55f644088e5f497",
"main.dart.js_51.part.js": "006a0f46f3dab65b217fe96353e7455b",
"main.dart.js_14.part.js": "c3dbf506ec8de98cbb0ddab3d8208841",
"main.dart.js_10.part.js": "c10d3366c3073415f8d6f7f83a55b18d",
"main.dart.js_3.part.js": "c3baf3ba91fbc134e7a5ca911331ad69",
"main.dart.js_13.part.js": "41457b22c49d807a6f5db2b52f7939ea",
"main.dart.js_30.part.js": "f517f625d518726cd197a83c3bbbbae6",
"main.dart.js_33.part.js": "5f1e544f11d7cae75136c1141b33c7de",
"main.dart.js_43.part.js": "cd1773a70340b66195452c57f248d062",
"main.dart.js_57.part.js": "0fa42ead131c1042b608026cb4bfb366",
"main.dart.js_1.part.js": "441cd92e7147488634757e44b636acb6",
"main.dart.js_17.part.js": "f726e38545c448aa7d26c31b8ff689c4",
"main.dart.js_52.part.js": "d03f69650d299117024fcf68cebcb017",
"LICENSE": "0d08d799c3aa0d044526e77b67c5eebc",
"main.dart.js_50.part.js": "0e37f85f318a4b3966770d8df5cc16ef",
"main.dart.js_15.part.js": "aea6ab757f44cb878f38625e26b41c9d",
"main.dart.js": "3046a78ab00595d0c5daaafedd60b8d4",
"main.dart.js_27.part.js": "e255cd3ca86eb72574867e00cff2d6cd",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_7.part.js": "081065b8331429598b961f784f027a93",
"main.dart.js_22.part.js": "c2e7b10b378fdc9e6b44bf874c9dda96",
"main.dart.js_25.part.js": "6f9ad08365478b9f18a9d48a46fdfc29",
"main.dart.js_18.part.js": "cfd4fd237dd550c0bce3017a785fb6a4",
"main.dart.js_48.part.js": "922c0e3628212fa94470c5dfeecb9df8",
"main.dart.js_45.part.js": "e5727b8fd00263ffff1e79d0e3a1cfc8",
"main.dart.js_38.part.js": "8a7c6a1f8fdd32fb11d0045dce25af81",
"main.dart.js_35.part.js": "a041631158871004d5cc67da03427c42",
"main.dart.js_9.part.js": "3cddf0a3aa98c9474b3ac011d4cec8ae",
"main.dart.js_28.part.js": "a3efe34ddd8c92d2d941c69e574a1e57"
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
