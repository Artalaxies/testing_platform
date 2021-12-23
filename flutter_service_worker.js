'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "86107b09d88cb9422e35ec85bc9bcc13",
"main.dart.js_39.part.js": "3e0634bc43e7ea69bf5af193f4c8d4bd",
"main.dart.js_3.part.js": "219c166dd8be3399d5d106dd5c5249b2",
"main.dart.js_44.part.js": "e56cea25310c2d44bc53a5069f813216",
"main.dart.js_15.part.js": "65825f66b99ce0d6635d473934bb05a7",
"main.dart.js_48.part.js": "1d13238c8d23393a78c19fe44c261b6a",
"main.dart.js_32.part.js": "b0587e5996fa488c39ba801e4fb24e99",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_36.part.js": "5025b45bb46948910eabefafd3f6e591",
"main.dart.js": "7fd41f548d39199b2f4b96ec9bfbc1d5",
"main.dart.js_57.part.js": "350e1b0f7585a2c02fa03c1ce02fc8ff",
"main.dart.js_9.part.js": "e3dd550b6577e87231f279c113708842",
"main.dart.js_26.part.js": "d3d8b3036945acf480b8167738fcb392",
"main.dart.js_20.part.js": "5dea0e56812b4ff095fde4c39b630d9e",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "37615ce9338943dc3e7c38a0eb91bbf1",
"main.dart.js_28.part.js": "88a62c249e2ca096de46bc9b91591bac",
"main.dart.js_45.part.js": "d6163e03458579aad88995a9f0d4005f",
"main.dart.js_2.part.js": "0fbaac76765fc9f68888d800cff31a92",
"main.dart.js_17.part.js": "7dd84036753cc59634f38e7a814207b9",
"main.dart.js_25.part.js": "ae1d68a95203932cbe8f646072bd1efe",
"main.dart.js_7.part.js": "932014ac520fbc2c5dc16abb2d1ee7fe",
"main.dart.js_6.part.js": "81035f1a3eb568c9996c07eb6494daf1",
"main.dart.js_49.part.js": "06912bf0a6b6bd2bb33bdc8c680d039e",
"main.dart.js_22.part.js": "57e964bbcff260a73239a57a23e3d707",
"manifest.json": "27a6598457ff96a3f3a6028a19be94b0",
"main.dart.js_51.part.js": "1e86aaf0f50ef9471075a10f780c7eeb",
"main.dart.js_1.part.js": "11e580b37634e9e4e12d146979bf074e",
"main.dart.js_43.part.js": "e80ecff6099fb8744da3873593f61e45",
"main.dart.js_31.part.js": "203b8e3b79a233c494f5c3f13e67188a",
"main.dart.js_27.part.js": "c06c87713173d81c80c3d9f076d25ccd",
"main.dart.js_37.part.js": "bc01c13835cb550394646af57559512e",
"main.dart.js_52.part.js": "238008cfb40efcaba879632a74ff25b9",
"main.dart.js_53.part.js": "fc7fd47ad8ea387939c3d21f62dde690",
"main.dart.js_14.part.js": "723ba979f147cd628dd0fd589524c18d",
"main.dart.js_50.part.js": "37035c535ca085d27f2f8638a94b902c",
"main.dart.js_29.part.js": "fe6374d5071054897720c43111c8fa9c",
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
"main.dart.js_47.part.js": "88b92e2725dd4a8f0313f25b4d45fd2b",
"index.html": "48064110fc0dc225f452c9956b03ed44",
"/": "48064110fc0dc225f452c9956b03ed44",
"main.dart.js_16.part.js": "ca65a5b9ce57ded66cd7fb553679bb46",
"main.dart.js_23.part.js": "615d77d15eb12d1d0f007fb9ee88ac57",
"main.dart.js_55.part.js": "0f932b488d4e3714756568da8d53eea6",
"main.dart.js_13.part.js": "34b391083f90b1fb3c6fe338c9cb6386",
"main.dart.js_11.part.js": "dd8dcc2f6086891d9984f00f9667292c",
"main.dart.js_54.part.js": "7d886eb6111a74b947c78471207f3c61",
"main.dart.js_33.part.js": "943973e4f739c0f16ab04c3cb23638d2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "a8b8441bcb241105ab5a0862d927e2ce",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "8d7c83948b905b711014004cb8ca243e",
"main.dart.js_21.part.js": "6500e67d2acad89cf2026ceaa57b034f",
"main.dart.js_18.part.js": "eeb88f3d1878818c58fe76fd4b2d773d",
"main.dart.js_34.part.js": "92cc4b342459946199fa8fba308656d4",
"main.dart.js_5.part.js": "2e7450f86e3f04edd493e762ff7bb3c6",
"main.dart.js_10.part.js": "dd1a12aa75d68fda4553fbb130682569",
"main.dart.js_40.part.js": "847bd0443cec149768ccb61b583bfcbd",
"main.dart.js_38.part.js": "e10970407ffbc56f493cca7a52dd608f",
"main.dart.js_12.part.js": "c6fa04534def06c9b70126304f1c75f9",
"main.dart.js_46.part.js": "72aa891cc603bfb08283537132b10576"
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
