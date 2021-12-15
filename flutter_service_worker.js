'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "3d5f8492f1705f107bbe728554d466f2",
"main.dart.js_39.part.js": "6a9dd7f068812b95bd7630d6bf829d25",
"main.dart.js_3.part.js": "dd4a20549b08b3084a841e5730f5dc23",
"main.dart.js_15.part.js": "8ac9b4cf14295d53e550d5e9bef2282d",
"main.dart.js_32.part.js": "96aa7ffdb2aedf760068100443ce6c18",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_36.part.js": "cf9471a45f3800b6a3c13cddafb18db9",
"main.dart.js": "216fd9f11fb6a9f59814267737e65f95",
"main.dart.js_9.part.js": "34747bd3c43039a327b8e3a6b3bafa35",
"main.dart.js_26.part.js": "fae297f54ea15c4a4082f4109c5c3a5a",
"main.dart.js_20.part.js": "abe8734675ac8939dd3ef646108e0a25",
"main.dart.js_4.part.js": "725ecaa9c210ce5ea880adf4e917788c",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "01d44509b477226419d7476f89f4a98b",
"main.dart.js_28.part.js": "f0879025b730d86959e9f7d66fd91fa7",
"main.dart.js_2.part.js": "800725c89f197e171eb3e96431d8532f",
"main.dart.js_17.part.js": "1193185d3ab6c83a1fad5c883162b75b",
"main.dart.js_25.part.js": "d3398fc7dec472bfa87e4aa54ec38375",
"main.dart.js_7.part.js": "4648289c32f0e8b413e62700d64d6ff2",
"main.dart.js_22.part.js": "a020f4ce1bbc6e32f962e1d119796dc5",
"manifest.json": "27a6598457ff96a3f3a6028a19be94b0",
"main.dart.js_1.part.js": "9a29d399e3eb376efb48294eec2b3ad1",
"main.dart.js_31.part.js": "32d193f9eb041a113ae2d9fb6ef0bc36",
"main.dart.js_27.part.js": "d65832c4110bf92eccfdc28581bfff9b",
"main.dart.js_37.part.js": "69701aab302114578222eef422de1454",
"main.dart.js_14.part.js": "cd71d67b78d47593c51ddf0a40bb07de",
"main.dart.js_29.part.js": "65635e85919152cad73d35c21ff513cd",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/images/9.png": "7aa4225a23c019e11dac44b6846eb6e9",
"assets/images/Union.svg": "b0874c213bbb229023231b97a6548515",
"assets/images/9(2).png": "3176195a5e654dc8188b2155bfff65e3",
"assets/images/W(2).png": "8dfd56ecdfb43b688ec4632f4b0d411e",
"assets/NOTICES": "95dd791cf37fd8049fce6a55398dd1bb",
"assets/AssetManifest.json": "db74574688cf81f80e44f8deed2ff664",
"assets/FontManifest.json": "2eb4f865acee31d1af9c4001371142e1",
"assets/assets/ArtalaxiesMarketV2.json": "2243e2b8b6d870c6216ef7c9460d9e74",
"assets/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/assets/space.riv": "19ebb50cac3f5949ba2e3776f1afad1b",
"assets/fonts/Aldrich-Regular.ttf": "d95d3c0366bed65728b9968195c0ea11",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/cryptocurrency_network_utility/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"index.html": "94b9db82522146159957922c4aa25948",
"/": "94b9db82522146159957922c4aa25948",
"main.dart.js_23.part.js": "7f7af9f4cd2b2322878a471f0bbe0638",
"main.dart.js_13.part.js": "36bad174f7c8514b45bcb8bb54cf0b37",
"main.dart.js_11.part.js": "e4654ea6a8aeae08ea159f1a9fb2c8c5",
"main.dart.js_33.part.js": "402d77bf9706ce3a1d58d746ead051cc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "5f79214363295065c36d1caadde248e1",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "7ebc57bc0510d5e3da44cc6409c30565",
"main.dart.js_21.part.js": "65f9967300b7a4e07bb49e81efc561be",
"main.dart.js_18.part.js": "57642c0ea960193dc7843c9d13fe125a",
"main.dart.js_34.part.js": "c6bf3f89406e107ecabe68b94dea4f22",
"main.dart.js_5.part.js": "67da36ca20e0d334152723626d86c951",
"main.dart.js_10.part.js": "0d5de8b7c94010ce6636e23a0fe17948",
"main.dart.js_12.part.js": "c03fd10fcb918e3d22e7cc375f598ba0"
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
