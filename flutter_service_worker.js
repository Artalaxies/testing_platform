'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "9380384a13e14a3ebed89884baa7a628",
"main.dart.js_19.part.js": "e4315e4428434c14275cf5a21f9d3803",
"main.dart.js_39.part.js": "d380f1d63f976d23bc41334967f833d7",
"main.dart.js_3.part.js": "4e554791a2848e8fb72b254ee439f3d5",
"main.dart.js_15.part.js": "812bad67e0f06d82de8fd3f1e7d63609",
"main.dart.js_32.part.js": "6c67c3b30fab46e33e9e13a160eeaffe",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js": "2185119474dbc64e42e38b04a03d9d1c",
"main.dart.js_9.part.js": "233d39133152707a2b793638c1f57f22",
"main.dart.js_26.part.js": "7fb2b8582766fcb20c78f0deb5fbf219",
"main.dart.js_20.part.js": "130014b394fec235d862170870235c05",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "fe813a9b74b6de1e99a548b8247694b4",
"main.dart.js_28.part.js": "80f5ead8d2794b6d094997b791afefa8",
"main.dart.js_2.part.js": "aa429431c1a013e8eb64b923fa9a7dfc",
"main.dart.js_17.part.js": "eabd29fbe332d5979d42bc598dc10d8f",
"main.dart.js_25.part.js": "8ab16285db8ab1602deb29f76e8fb1da",
"main.dart.js_7.part.js": "0ac49b07e69b5e2d331a14c530fc3ff0",
"main.dart.js_6.part.js": "4dd7285f5a26d387b9aa138690b922e0",
"main.dart.js_22.part.js": "157a9e729dc73c661528de87d01b43e0",
"manifest.json": "27a6598457ff96a3f3a6028a19be94b0",
"main.dart.js_1.part.js": "e5fbaf2739a603b46889a7416ec13a5a",
"main.dart.js_41.part.js": "01c34d9442982f35f67ae569b5f8cfe2",
"main.dart.js_43.part.js": "a9ff9bfcefbd522408bb57b349eae01f",
"main.dart.js_31.part.js": "cf386ede2f5d7e3cbba1ff910f432bc9",
"main.dart.js_27.part.js": "6914462e845fa478a9e748361d27c6c5",
"main.dart.js_37.part.js": "1f027deb5723edbafe3e9b2e70cf8eae",
"main.dart.js_14.part.js": "c3f061d7949295c888bd8cc94a5d2add",
"main.dart.js_29.part.js": "588ba371f23913f8b3174041d4aade18",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
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
"index.html": "98283da42c6a017cf35b902fa617952e",
"/": "98283da42c6a017cf35b902fa617952e",
"main.dart.js_16.part.js": "1288e1ff0388f23c1e2bc099cd007467",
"main.dart.js_23.part.js": "d1481193bd2aea053e4b47f0decb8926",
"main.dart.js_13.part.js": "f25cb34af19aee192b21dbb195243e6b",
"main.dart.js_11.part.js": "4ed61ca724fdc181b5c67a2a2c061e55",
"main.dart.js_33.part.js": "5586ea4f1f4cbc8a7afaba165802a8ba",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "87848a94d8584302a497b11a591de360",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "2d737aaaf781bd43d8f99c89bc77b337",
"main.dart.js_21.part.js": "ee31faf5a2aebe8bb10f3f3cf912bad6",
"main.dart.js_18.part.js": "80f4ab01663f83b431ac15d384d76a51",
"main.dart.js_34.part.js": "8a1a488ea96200f243149da462d8b4a3",
"main.dart.js_5.part.js": "66f8b3c9a89f1bea8b9bc7e8a49a8f5d",
"main.dart.js_10.part.js": "252810e1077a527ebccb4143175803ff",
"main.dart.js_40.part.js": "32171c46f7f7061de58b10a3bf55f307",
"main.dart.js_38.part.js": "2362308185fe8f4001b3158e6047d69d",
"main.dart.js_12.part.js": "82edd8928669075c1c44d27989361f1e"
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
