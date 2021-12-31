'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "c5ec3c4e136656c72e6dd56eef4b84aa",
"main.dart.js_39.part.js": "072bad496eb6188ddece65d9b654c38f",
"main.dart.js_3.part.js": "713a819a270486e8c4e60589e9880ba0",
"main.dart.js_44.part.js": "76c68c7c4ac15e96673929e10320616a",
"main.dart.js_15.part.js": "ea3bcc94f26a68a579bd6a352a0dbda1",
"main.dart.js_32.part.js": "f3514b1f956767a772086f875169dd86",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_56.part.js": "17cad89ff6806bad049947933770ab1e",
"main.dart.js_36.part.js": "b24bed920da6cbd1338c68ec30974461",
"main.dart.js": "c7707193beb2e44afed7061f84861a15",
"main.dart.js_57.part.js": "f060dbba1d0ea3b23bb111940337d3c2",
"main.dart.js_9.part.js": "67ed0c6829af141d00be20b25e7e22f5",
"main.dart.js_65.part.js": "8548bdf5fea5aabfaae4c68622f8f48a",
"main.dart.js_26.part.js": "3493e096ccb128826df1c38d2b51cd0a",
"main.dart.js_20.part.js": "8b56b9a1861f4f2ac203aa1a737213e7",
"main.dart.js_58.part.js": "823e985ae302cad2ddaf8533f09400ba",
"main.dart.js_61.part.js": "461cbfcc4ef0e6af7562287b573a6120",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "0d08d799c3aa0d044526e77b67c5eebc",
"main.dart.js_24.part.js": "65f4cc7e1f172c571b20cc52e8973593",
"main.dart.js_28.part.js": "51de2052ddec63b899b17ef3cda0e87e",
"main.dart.js_45.part.js": "3f04f53a413b688698b983b6dd9a9985",
"main.dart.js_2.part.js": "579a3bab7497b660ce2f573487ff0328",
"main.dart.js_63.part.js": "baf1f76bfafbc4608cfe487ee100a1fe",
"main.dart.js_17.part.js": "410c63986d8e630b3e17ec6ed57a549d",
"main.dart.js_25.part.js": "f20f58f5bc887a4482c09474a726f7c8",
"main.dart.js_7.part.js": "9dd7e9733bac4cf7be141f50b3702e1d",
"main.dart.js_6.part.js": "5ebee88c4aee86cddb03e62de429f806",
"main.dart.js_49.part.js": "24193f01a6c66e213600c19245ff6c78",
"main.dart.js_22.part.js": "cd58de44ae267dc1db550a22314822de",
"manifest.json": "e009b7a431dccb5cec4f59c332fc5f41",
"main.dart.js_51.part.js": "f3e35f21b2ac96e280c73a98cc441d6e",
"main.dart.js_1.part.js": "c616855ee3886dbfef8e3fc6be91d134",
"main.dart.js_41.part.js": "ccb29adddef7a7bd24f809f4598b1d16",
"main.dart.js_43.part.js": "c02ef526e04c2929a7fc5e571d3ec5ae",
"main.dart.js_31.part.js": "ebcccbd606efcd17478f3c7203c0af4d",
"main.dart.js_27.part.js": "da82950dfbd11f576ab8965460ecd9d3",
"main.dart.js_37.part.js": "b956c778d5cf811bdb74973b8ff71048",
"main.dart.js_52.part.js": "831863de1804091aafebf01b4cad5f9a",
"main.dart.js_53.part.js": "37cb93721ba138352c1c6ed9dfb0f904",
"main.dart.js_14.part.js": "7db85dbbd14390adaab94e21f82110d6",
"main.dart.js_29.part.js": "74eb2c1f029e21b94e4dec2347cd1e9e",
"main.dart.js_62.part.js": "1ea2410b7263847110d9907b16de9078",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_60.part.js": "953bd86347fddefd57b0cbdc52d585d7",
"assets/images/9.png": "7aa4225a23c019e11dac44b6846eb6e9",
"assets/images/Union.svg": "b0874c213bbb229023231b97a6548515",
"assets/images/9(2).png": "3176195a5e654dc8188b2155bfff65e3",
"assets/images/W(2).png": "8dfd56ecdfb43b688ec4632f4b0d411e",
"assets/NOTICES": "132792f6e7052af7d2407b76e6ff571f",
"assets/AssetManifest.json": "82c9b79de179af7612764f6a81b56b32",
"assets/FontManifest.json": "2eb4f865acee31d1af9c4001371142e1",
"assets/assets/IERC721Upgradeable.json": "456fb5d3eb1d647ea065470ec176761c",
"assets/assets/ArtalaxiesMarketV2.json": "54b5586e1a5227c2b1c8c3925685d570",
"assets/assets/ArtalaxiesMarket.json": "2ad3103ec75574612e80a2009049c4e4",
"assets/assets/IERC721MetadataUpgradeable.json": "650126e266101a9bcfbf9a6201421474",
"assets/assets/TestnetDerivativeTokenV2.json": "30db4f8adf7064943a00271ae4d13da9",
"assets/assets/space.riv": "19ebb50cac3f5949ba2e3776f1afad1b",
"assets/assets/TestnetDerivativeToken.json": "31e3b219fe44af0f0e0916ece3c19473",
"assets/fonts/Aldrich-Regular.ttf": "d95d3c0366bed65728b9968195c0ea11",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/cryptocurrency_network_utility/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"index.html": "fe4197ebb7a0a7cc379621acc9f3bc70",
"/": "fe4197ebb7a0a7cc379621acc9f3bc70",
"main.dart.js_16.part.js": "c4b58ee71bf5ac4deffc8b1c511883f7",
"main.dart.js_23.part.js": "be86ced42548a83c19142329d29d6886",
"main.dart.js_55.part.js": "66bbd65dba98784d1a9a31ea74b879d0",
"main.dart.js_13.part.js": "3b26653763e79b8c5bb16af5e2bced53",
"main.dart.js_11.part.js": "f493a9b3be0ab39b19b85219b1b7f554",
"README.md": "e64e610551272e175acb8fea09ca4b88",
"main.dart.js_54.part.js": "0c8d59048b19e33b386e9366c7c89bdc",
"main.dart.js_33.part.js": "06316e70a7087e282bece2fb5456108f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "68e4975c7a9bbbd1ca467be83068e970",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "ff34f3b5ab0c9ad97a54c8214a2dc8bc",
"main.dart.js_21.part.js": "35d3cdcbd49118f2eab9bf09873ab5ba",
"main.dart.js_42.part.js": "c12b4e3f966d371ccd1e48ab7b17fae9",
"main.dart.js_18.part.js": "c63404f947d91e3592ae65a806b3d953",
"main.dart.js_34.part.js": "ced8cc9133d3879819e9fcd69178ee73",
"main.dart.js_5.part.js": "aeecd4c79d85538212fe3fe766115c52",
"main.dart.js_10.part.js": "7edf381b02f0d166a50dd7db61570491",
"main.dart.js_40.part.js": "1387382540b8a62c7d05f1356312cc61",
"main.dart.js_38.part.js": "a2e99d9d748d375fa8bf34fab2de1a74",
"main.dart.js_12.part.js": "d95e1ccffcf0d8d3f7580798b9653327",
"main.dart.js_46.part.js": "6a3f3a8086e13b5cecf83e6190d23b28"
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
