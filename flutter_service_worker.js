'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_60.part.js": "bad124e061ac21f02ff99479b5552675",
"main.dart.js_6.part.js": "e4f75622ba2310fa9e0f3a508f898ee9",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_39.part.js": "b7480b82946c27f0878cec85da2da492",
"manifest.json": "e009b7a431dccb5cec4f59c332fc5f41",
"main.dart.js_32.part.js": "720ef09dea5b750f0e472e8979c6cdda",
"main.dart.js_29.part.js": "dbf5afa38fcf87afd4a33617467382bf",
"main.dart.js_34.part.js": "7a03d71ea956a4d364021e223e118314",
"main.dart.js_61.part.js": "cdbb26e019ff692ce43376efb883296c",
"main.dart.js_54.part.js": "481535b73375332318a050c9c2562b0d",
"main.dart.js_2.part.js": "a7663839e1df273326749c417b791c8b",
"main.dart.js_56.part.js": "ac0349863af70793dd17a30051214483",
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
"index.html": "880766f5ebcd842c69734a0b2a9d8b34",
"/": "880766f5ebcd842c69734a0b2a9d8b34",
"main.dart.js_44.part.js": "2cb617d8c79190ef08ff5848556cc137",
"main.dart.js_40.part.js": "9beb72c938b702bc5f706edfc3a2a54f",
"main.dart.js_64.part.js": "fccfb11f05b9091e989cf2969fb289a2",
"main.dart.js_21.part.js": "48848b4b88da17ea85c5c491085986a2",
"main.dart.js_62.part.js": "98895ab39e63d28ca4fdd45ff5d7148e",
"main.dart.js_41.part.js": "bfbd02409b17fd29689134bf41473cde",
"main.dart.js_31.part.js": "1c0983c6068d8a10df72e217ffbeee83",
"main.dart.js_16.part.js": "b15963a1c627fb64d352a4a7be20eb2b",
"main.dart.js_37.part.js": "66e5dfff2fed12290fdd05b437572b5f",
"main.dart.js_42.part.js": "96dd7788d62acfe981c4c154c05d23c5",
"main.dart.js_12.part.js": "de4b60f6280b9d97a26f2bb868dce66e",
"version.json": "71155866f4251f77a6ec75577653be87",
"README.md": "e64e610551272e175acb8fea09ca4b88",
"main.dart.js_59.part.js": "5bfffc35434da7fe7e793ad4dac73ca6",
"main.dart.js_20.part.js": "0589ad6c0127d89d86f308469a518a49",
"main.dart.js_23.part.js": "76c166baac9f1456358a7776b2cab301",
"main.dart.js_11.part.js": "25d35ccb4a5a58786ad1bf26aefce47a",
"main.dart.js_53.part.js": "b9a0cbb0e756008f9f2118b27d09c75e",
"main.dart.js_5.part.js": "6ee4de5bd1caf2c772c721f320bd9adc",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_26.part.js": "aeb37318b91e10a22862af4e6383cbeb",
"main.dart.js_36.part.js": "8aa33a918d941bcb705ab4387fdb69d0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_8.part.js": "ed3212f5ef94da2530dc83b806b79843",
"main.dart.js_24.part.js": "a137e0b3b413ff7ad42249cd5fb80d7c",
"main.dart.js_55.part.js": "3eb55d43f5382c0a4b140ff98f64783e",
"main.dart.js_51.part.js": "006a0f46f3dab65b217fe96353e7455b",
"main.dart.js_14.part.js": "74cc0d3e3d3f6df56779f259a29e5d95",
"main.dart.js_10.part.js": "863eadd413391020b3b488f3c24e8a5a",
"main.dart.js_3.part.js": "ef025853b8b36c360be0f9052ccf0854",
"main.dart.js_13.part.js": "8248f70e8d4eaad5960ab55995730df2",
"main.dart.js_30.part.js": "f0aea4e8003ba1cdf2da0b74aa7dd339",
"main.dart.js_33.part.js": "6225f196b338d738f20f678d7490590e",
"main.dart.js_43.part.js": "cd1773a70340b66195452c57f248d062",
"main.dart.js_57.part.js": "5c4731a3dabdbd23d5c86956bc2d55d7",
"main.dart.js_1.part.js": "bc1521cb3f96ee8af4797a6d567494c9",
"main.dart.js_17.part.js": "f726e38545c448aa7d26c31b8ff689c4",
"main.dart.js_52.part.js": "f768fde857575dffc37b83492f970b1e",
"LICENSE": "0d08d799c3aa0d044526e77b67c5eebc",
"main.dart.js_50.part.js": "353ad1bc71a3105a1791fc5e3dd3d53b",
"main.dart.js_15.part.js": "aea6ab757f44cb878f38625e26b41c9d",
"main.dart.js": "6e0777b211337b7df2b0148071c09d06",
"main.dart.js_27.part.js": "eae6d196371b753eaee55bd465f26f29",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_7.part.js": "081065b8331429598b961f784f027a93",
"main.dart.js_22.part.js": "c0b1f30dcc447efaf46b498405380328",
"main.dart.js_25.part.js": "e64fd9093e43e79b087d187c6c25c95c",
"main.dart.js_18.part.js": "cfd4fd237dd550c0bce3017a785fb6a4",
"main.dart.js_48.part.js": "4415f29250a91e597977d23f1fbfab8c",
"main.dart.js_45.part.js": "f4ebe63c036452cd2052334450aba221",
"main.dart.js_38.part.js": "af511f43162e8e82eb7c7c2431f5bf98",
"main.dart.js_35.part.js": "a041631158871004d5cc67da03427c42",
"main.dart.js_9.part.js": "e61e47c8e77e6825978b409545d2c4f4",
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
