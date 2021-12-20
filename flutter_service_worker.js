'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "7a585bc459e4c403eb645c3e448cdf1f",
"main.dart.js_19.part.js": "949386e09e181d4f78ce944c5efe71f5",
"main.dart.js_39.part.js": "5ff58d7364397502f9d91aad3339e357",
"main.dart.js_3.part.js": "a76b7162d4a050fefb286a74c5b13299",
"main.dart.js_44.part.js": "4d6c0a9ceb6c9427671ffde16b8a8c51",
"main.dart.js_15.part.js": "e3df34e01199ffbb7ebeb89addb4174b",
"main.dart.js_32.part.js": "d540adda824368b0cd03f9886be3505d",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js": "62d5a519e4404e66f37d0b4d4a421e98",
"main.dart.js_9.part.js": "f5e10df9e00099b1a81ac6f2a1c25813",
"main.dart.js_26.part.js": "21f760e58765f0b0cb3c3a351e7523da",
"main.dart.js_20.part.js": "76d5642d89b09e3ec74752416e362cb1",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "912bcb112ab51106150aa92b3f045fc2",
"main.dart.js_28.part.js": "fcc245dd55833dc6bde5119fcbd0a548",
"main.dart.js_2.part.js": "d72ee1047b08f48102d9ed95d49a2358",
"main.dart.js_17.part.js": "fc25ba9bfafd6d0029ecc74acbfd8936",
"main.dart.js_25.part.js": "dc1a063555b67a77fad8d55f30864467",
"main.dart.js_7.part.js": "37e26ccc140c411851bb4df3713b6225",
"main.dart.js_6.part.js": "e308c4c4c55daf8a1c41dba4a28fe3d4",
"main.dart.js_22.part.js": "33801ffa7a53228cd52dcf487ccb5982",
"manifest.json": "27a6598457ff96a3f3a6028a19be94b0",
"main.dart.js_1.part.js": "ab7c5354d3e049ab22e38269fb0d6ab6",
"main.dart.js_41.part.js": "9d6e70a5f2ee6064250d44b6288dba92",
"main.dart.js_31.part.js": "8c7460e82fe66fec00e53b602a49464d",
"main.dart.js_27.part.js": "3db2130025605a2931ce9f712bc6bc45",
"main.dart.js_37.part.js": "fcfd1ea77746c2e84f3d5c2e8569fad0",
"main.dart.js_14.part.js": "6bcd81085ef23e4408eec751bba741ec",
"main.dart.js_29.part.js": "c884171dfa0cfd4f197e6b485d518bfb",
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
"index.html": "ecaa805523c6ec983a2b32a08367530e",
"/": "ecaa805523c6ec983a2b32a08367530e",
"main.dart.js_16.part.js": "1237a650e196a45c68b13f028ff94dac",
"main.dart.js_23.part.js": "7ba5b52481cb2a866d35514a8e517591",
"main.dart.js_13.part.js": "fff24c22157b1d867cdd39fd2c2288f1",
"main.dart.js_11.part.js": "49e868ae4b29c0d69280dc41ccd63033",
"main.dart.js_33.part.js": "b7bc89f44dc7cbd704ed4834f37e193e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "3af8987665bbea4816cb480c55b512e2",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "6c7fee5aa6213d18eac96452c44e15e5",
"main.dart.js_21.part.js": "300c9c4eee040e2f3b3d703fcef9b78c",
"main.dart.js_42.part.js": "e2c0cde4d963586bb73419bd81f3d3e5",
"main.dart.js_18.part.js": "9b101b93ab7487d0598bcac6438d8d67",
"main.dart.js_34.part.js": "b0d156e391fc7be0929f28416847f1e0",
"main.dart.js_5.part.js": "f0da0eb815c2db433449b40cad1c1c67",
"main.dart.js_10.part.js": "aa998876d62ac581b9693553d4661b8d",
"main.dart.js_40.part.js": "96496e27a33db198d1f4b8c52e5a0ddb",
"main.dart.js_38.part.js": "3316c92772bdc25150cbb1618efe89eb",
"main.dart.js_12.part.js": "a0c95343d557ec22b4f2b82c44602867"
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
