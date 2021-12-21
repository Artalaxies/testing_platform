'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "fbd651e2b8e6227e00d3bc87d7b78041",
"main.dart.js_19.part.js": "61e2a350ebf6537765cca2b7c30e78c2",
"main.dart.js_3.part.js": "e131d5fe53d7f078f3f42592e0e1d9d8",
"main.dart.js_44.part.js": "815eee16ee8f06b7e1b74f71e6c3848b",
"main.dart.js_15.part.js": "16780822294a8c54150c918410a041b0",
"main.dart.js_48.part.js": "4efd37ac7f17371cf8d7ef4c4d6d3034",
"main.dart.js_32.part.js": "8239e13d5fac1b92bde6cf78dd7a2d96",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_36.part.js": "579109bb5227264cec359239585b0b27",
"main.dart.js": "f102a41791ab7c9baee11c758904b096",
"main.dart.js_9.part.js": "d3f456814f6dd45be6b316c3b37479e8",
"main.dart.js_26.part.js": "4bc12d58d076b189885e71edc96f22a3",
"main.dart.js_20.part.js": "dd79104cd35b2681a083855b65fab9e4",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "0e59a3a3c9b70c00a318683356dfd5c3",
"main.dart.js_28.part.js": "5ab94912a404904948abdd48451518b0",
"main.dart.js_45.part.js": "5d42e4011a6f1448d8e609c944100490",
"main.dart.js_2.part.js": "4f7e54eae5664aeb799fabde44140861",
"main.dart.js_17.part.js": "3e020edff05a497d40c76c5775076b4a",
"main.dart.js_25.part.js": "d5afd57571d7002eb7f9530669443cac",
"main.dart.js_7.part.js": "29e0d29e373d0c4309c6c6096a0870ce",
"main.dart.js_6.part.js": "aa86114811b69374db1b4ba87f00a147",
"main.dart.js_49.part.js": "92d089a58290a50acdb0ef9d77355561",
"main.dart.js_22.part.js": "fa76a459095f9bdcc5223e22ba47b498",
"manifest.json": "27a6598457ff96a3f3a6028a19be94b0",
"main.dart.js_1.part.js": "daf2be30112ba26b053af3a2648e3164",
"main.dart.js_41.part.js": "18513bff97e90e95664556fd4af2a91d",
"main.dart.js_43.part.js": "e51fc96fe79df91f436120b921c6bde9",
"main.dart.js_31.part.js": "ea29edd538a9a9e890065d72c715b6eb",
"main.dart.js_27.part.js": "dc85413970718cd04435fe34f164f0af",
"main.dart.js_37.part.js": "ea3d54cb3007ed878347558d12abef5b",
"main.dart.js_52.part.js": "b159ea7382ea7b2f54a60e1a6dc34092",
"main.dart.js_14.part.js": "edf51d27a41d976c77bea630820437ec",
"main.dart.js_50.part.js": "dfe841542b5758a920baf1f8e4806283",
"main.dart.js_29.part.js": "7737143dfdf7a76604818690ebfbd84a",
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
"main.dart.js_47.part.js": "f438927be9909dd47e8e5c3ac79ad17a",
"index.html": "9ead7157836a67867d7ece3adc3fbd28",
"/": "9ead7157836a67867d7ece3adc3fbd28",
"main.dart.js_16.part.js": "fa3e7ad6e5f25803c0e49e2833f3acc2",
"main.dart.js_23.part.js": "1afc8773ed32d3b1d48717a6625c2f6b",
"main.dart.js_13.part.js": "d72192572199a84a1cf0c28d99238653",
"main.dart.js_11.part.js": "81c7d1e8d4696418185588b6d8e63948",
"main.dart.js_33.part.js": "dcccb616b8ae3c04ccd0f21883a8eb44",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "985ea96cc20f32f079c65e957738a467",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "bd633a6731bf86d6c2d09ea6e4fe1d0e",
"main.dart.js_21.part.js": "693294848494027e1973731b1571d28d",
"main.dart.js_42.part.js": "efc148935ac796432d3fbfdfdca1865b",
"main.dart.js_34.part.js": "9f3a86b56fdc06cd658a6f2cb774a82d",
"main.dart.js_5.part.js": "ceab834534aae06426e279673c8f983c",
"main.dart.js_10.part.js": "73adcabd2b41d3a128ad885540391893",
"main.dart.js_40.part.js": "adb5d87e26248ae258c842327b0bd226",
"main.dart.js_12.part.js": "0cb60f8e223408c306fa2506b7c3b38c",
"main.dart.js_46.part.js": "d68f1d255f8f75206870229534701cd1"
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
