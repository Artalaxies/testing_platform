'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "25ec43fe72f50116af8560adbef3adde",
"main.dart.js_39.part.js": "adeac8f28cda38b60548e6e73f750c49",
"main.dart.js_3.part.js": "405cc62a8704b6b57161d39a327585f8",
"main.dart.js_15.part.js": "1613f6374b57257d491d2bc33ab9c431",
"main.dart.js_48.part.js": "1c2a345eb337425934cef7d94237cb61",
"main.dart.js_32.part.js": "4b568c7df830bda85db94e7078a3c25d",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_56.part.js": "a600030bc5591d9dace7885432c8e1f5",
"main.dart.js_36.part.js": "e403bcba5641e898d924a2ecf0eaa2a8",
"main.dart.js": "f3d748364db554fa9b32fce420bad749",
"main.dart.js_57.part.js": "b2405256218c246489ecf5b672d79178",
"main.dart.js_9.part.js": "6dee571131927c8e56f6eaaa7a89858c",
"main.dart.js_65.part.js": "671941c20dbdc6ffc20db51cebca03c2",
"main.dart.js_26.part.js": "682c0b9946c501dd2e99ffd34060e480",
"main.dart.js_58.part.js": "174cc00ba3ff64dc33403454425ef464",
"main.dart.js_61.part.js": "337c549bf108bd88bec1a648c77957e7",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "65bd39e4d3979342598c3c53eb674061",
"main.dart.js_28.part.js": "a57af235da02c8008d27fec378afb61d",
"main.dart.js_45.part.js": "23d0ebaa350c65ec546fb623dda5bd09",
"main.dart.js_59.part.js": "f34f310fc949d07d095219b0c5416e7b",
"main.dart.js_2.part.js": "b4ad9e8eadb300d4e14f27206801d4de",
"main.dart.js_63.part.js": "826935d08bafb9b78e144a0b73674fc8",
"main.dart.js_17.part.js": "2bb50eda93f72351bc9fd5575889717c",
"main.dart.js_25.part.js": "ef16d69583a9c04a45916a89b5f935aa",
"main.dart.js_7.part.js": "12b196d6d37297a8876eef3ece7187eb",
"main.dart.js_6.part.js": "7513b3c1bbcb59e0b847c180d9739874",
"main.dart.js_49.part.js": "99ca963e4b1442058078fc71f7751ad5",
"main.dart.js_22.part.js": "8ed23fa47de21a4a6c6a10bfc6325585",
"manifest.json": "27a6598457ff96a3f3a6028a19be94b0",
"main.dart.js_51.part.js": "9e90ee79d0fd3a8dedd41683c3a98643",
"main.dart.js_1.part.js": "6b0cc5d827ab30ff3498bc79ae7e172f",
"main.dart.js_41.part.js": "21350b7dfd053ebe4964461f000ffc9c",
"main.dart.js_31.part.js": "0edebc03c50b65ed520dd83ef9936548",
"main.dart.js_27.part.js": "0f0a4bb84472cfd713313bb2ee61b16b",
"main.dart.js_37.part.js": "77be301fc157760e8746344379b9e690",
"main.dart.js_52.part.js": "1cf3a3e14333b843f63ee26108c5433d",
"main.dart.js_53.part.js": "977fa3a3cca1523cf12fe8245d1a4fbf",
"main.dart.js_14.part.js": "9e7dd72cf290f0b90ce4253f5713d00e",
"main.dart.js_50.part.js": "d1d823c42da7e310d15d1965893506c6",
"main.dart.js_29.part.js": "b2f8f4977e229ad3b4ab2dae0afa2f0e",
"main.dart.js_62.part.js": "71861bf6988c088beecaf2a9882c3c0f",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_60.part.js": "d7969d374f9ded8d3a6c5af851526726",
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
"main.dart.js_47.part.js": "5df4773adf82ec4ddefa36e31437fa5c",
"index.html": "8aa4ab3f0e4325c4c5a7397817196c58",
"/": "8aa4ab3f0e4325c4c5a7397817196c58",
"main.dart.js_16.part.js": "266e3ad2dc44c0b73d19b909c856edad",
"main.dart.js_23.part.js": "f8491cf486f388ab4e86ddb4d7fb5875",
"main.dart.js_55.part.js": "1e9a055a7cacdf7e6fa1431e2af698e5",
"main.dart.js_13.part.js": "a7c550bfaeaeea900a8af9cdd0beaa51",
"main.dart.js_11.part.js": "51cdc314f194a6e80f55908dbdd82a8e",
"main.dart.js_54.part.js": "7d93f7d4b0e90a09fa3bdedafc1dcae3",
"main.dart.js_33.part.js": "aa0cb00ee43523526dba5955380a7538",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "99bc600abb4e84d8ac6a38d8349b44bb",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "aacc046abe97a59cd9815178ebc875bb",
"main.dart.js_21.part.js": "b0cb391081a77d6aa9f26b4117b13dab",
"main.dart.js_18.part.js": "e91f739fc486e135b1affffc5604669c",
"main.dart.js_34.part.js": "45f9633ba69576c6ce66b81bacfd4df9",
"main.dart.js_5.part.js": "a57971f5a2feddf40f8bfde06eed1a9f",
"main.dart.js_10.part.js": "155cb84e7b4fc597ea413f225b2dc4b6",
"main.dart.js_40.part.js": "2e4773a782dc4b5f8c987b5eb7ca7a95",
"main.dart.js_38.part.js": "7dcc7fbeba6cfd7fcd7f0ec27bffaed1",
"main.dart.js_12.part.js": "9db05736f6b319d042905b9af965edf3",
"main.dart.js_46.part.js": "9e3f38e6252c99132b2fa838ce7e4361"
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
