'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "2c31afa28037f71fc5bcc9b689451c93",
"main.dart.js_39.part.js": "24cdbc4a5385c02780f39997457a0157",
"main.dart.js_3.part.js": "405cc62a8704b6b57161d39a327585f8",
"main.dart.js_15.part.js": "fceba91f27b7c29d6a07e5c764d74ec8",
"main.dart.js_48.part.js": "1c2a345eb337425934cef7d94237cb61",
"main.dart.js_32.part.js": "f411b82e9998f799d311c3b05efff2e0",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_56.part.js": "9c0a123636cf85430da2dc68907b0733",
"main.dart.js_36.part.js": "e403bcba5641e898d924a2ecf0eaa2a8",
"main.dart.js": "977ce46f4f2f65cc8a14460ca6ee9f15",
"main.dart.js_57.part.js": "327954280ef29f71835808ee4095f805",
"main.dart.js_9.part.js": "e102c23d4664e1b5177c17a758a1c1e4",
"main.dart.js_65.part.js": "7e5ad88244c117dd02417a4b795d7eb1",
"main.dart.js_26.part.js": "2063378c678306c04d20b8449ace53a1",
"main.dart.js_58.part.js": "781995d4a523f62d128d490d0237cbb0",
"main.dart.js_61.part.js": "337c549bf108bd88bec1a648c77957e7",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "8158395c3f5fbc4150952540e8f82dcb",
"main.dart.js_28.part.js": "23b4b5e9ad60ce0636836ee7f4cecb97",
"main.dart.js_45.part.js": "1b8155e0cb16d28cb9b400859b2b4460",
"main.dart.js_59.part.js": "f34f310fc949d07d095219b0c5416e7b",
"main.dart.js_2.part.js": "8437c7c0a81be977912c3e4dd843d07e",
"main.dart.js_63.part.js": "6cbc7373d318422a747f1ae41795d84d",
"main.dart.js_17.part.js": "8e1e7b11f5921c8b07634538bf98363f",
"main.dart.js_25.part.js": "ef16d69583a9c04a45916a89b5f935aa",
"main.dart.js_7.part.js": "12b196d6d37297a8876eef3ece7187eb",
"main.dart.js_6.part.js": "67acca1280a2b5399f4fe8bd27e5140d",
"main.dart.js_49.part.js": "bdeb80cc08cbbcd5760d0aa1cd4d610a",
"main.dart.js_22.part.js": "bad07d65b1fc4cb12583a2f91158fe9d",
"manifest.json": "27a6598457ff96a3f3a6028a19be94b0",
"main.dart.js_51.part.js": "4f399ff79e0ec2fc0e5f6a4a827e0cb6",
"main.dart.js_1.part.js": "35dc58c1688c00d07e5b6dbd4de52eb5",
"main.dart.js_41.part.js": "b7659c4b8797e9bb60bd648bfa0fbc06",
"main.dart.js_31.part.js": "01bd038df770123553c312191d774210",
"main.dart.js_27.part.js": "b3be83cf6c1d75e0b994a76508fd49c4",
"main.dart.js_37.part.js": "bdbfd9cbcf4402b1f4bcefbde8d09d88",
"main.dart.js_52.part.js": "1cf3a3e14333b843f63ee26108c5433d",
"main.dart.js_53.part.js": "39f84c2d9b5e92aab1e7f6c2e4183951",
"main.dart.js_14.part.js": "d357bb8eef25cd34ac426c51ef24aa54",
"main.dart.js_50.part.js": "ae2be23de79202a7b12f1bf5caa7aee0",
"main.dart.js_29.part.js": "b2f8f4977e229ad3b4ab2dae0afa2f0e",
"main.dart.js_62.part.js": "c62d4080418126e347964454f2cfaf31",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_60.part.js": "d278d7491dab7461ce879a3b420996d8",
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
"main.dart.js_47.part.js": "861a72fd69a9e56141bad27fbbc90bd7",
"index.html": "95e6c9f08d092b4b202250f05775c9a5",
"/": "95e6c9f08d092b4b202250f05775c9a5",
"main.dart.js_16.part.js": "ce73eb6e657dff23c03db2c7b57a93e0",
"main.dart.js_23.part.js": "7437ed900e216be8b4197dea9dfc314a",
"main.dart.js_55.part.js": "c4966e0d400756cc4a5e70e0a26087e6",
"main.dart.js_13.part.js": "e59a22f0739eaceecf1cf87fdec51bdf",
"main.dart.js_11.part.js": "824e7e5f56697f47b6fb1ecfa2e39a1c",
"main.dart.js_54.part.js": "8bb794a8c4b0dee77a32c5bfd9f3ee32",
"main.dart.js_33.part.js": "8b05c579d398436c5e3d9b7f08a01ca7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "7bec4d0507265d82a5db218769752aaf",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "8bc808753282d660903d3cb81712f60a",
"main.dart.js_21.part.js": "858e27d4e2a61eb18c9398e717014434",
"main.dart.js_18.part.js": "fddff9f201b71207540403b66cbf7186",
"main.dart.js_34.part.js": "22209642437bbf2a139aec1468520909",
"main.dart.js_5.part.js": "7e114d94e55c681aa32827a30ca0de28",
"main.dart.js_10.part.js": "d88d71df59d5a18b520cee9bf76370b6",
"main.dart.js_40.part.js": "2e4773a782dc4b5f8c987b5eb7ca7a95",
"main.dart.js_38.part.js": "0946d33805ddd90b54526e0b53349786",
"main.dart.js_12.part.js": "9e13d1f686a0724b539027ef2068df99",
"main.dart.js_46.part.js": "1d2a02febc0630d7f7f1716677d5a50c"
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
