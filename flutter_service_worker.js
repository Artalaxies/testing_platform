'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "9400f0560a50b773f7e3cf2145206c0e",
"main.dart.js_39.part.js": "bbb32aef451f04a0f0162642c362e494",
"main.dart.js_3.part.js": "1028029a4e06dfc9e5ec33a8074a46ae",
"main.dart.js_44.part.js": "939c8cc4fac1bfa889323c69e9523c29",
"main.dart.js_15.part.js": "720d10c2b347de8e91b0113fd5edd8b1",
"main.dart.js_32.part.js": "d92d4460ced5fdc30c45a377c98cccea",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_56.part.js": "2c00e96e8c448808da61542340ea5c10",
"main.dart.js_36.part.js": "600a164254eb3cd95a71a742906501a9",
"main.dart.js": "1a139c0e279ccbabc58c435508739a7d",
"main.dart.js_57.part.js": "96c65d1de4938007263d8bdbb56ec8c9",
"main.dart.js_9.part.js": "248b9f15ba62764f4fa3fe2f08784df8",
"main.dart.js_65.part.js": "245d757422879833a08e4b3212fe81c9",
"main.dart.js_26.part.js": "51126b95ddc3cc50a858b9e02b6c3d83",
"main.dart.js_20.part.js": "6255d9b2945b84025e3b5e293d7bae48",
"main.dart.js_58.part.js": "a9d610284766f1aef1573662245f57a1",
"main.dart.js_61.part.js": "bd449b704eec717d3d3b9d76a24716b6",
"version.json": "71155866f4251f77a6ec75577653be87",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "82e8606c20107ea75a99d70bb58c5dfc",
"main.dart.js_28.part.js": "2279d4ad22ee38a6924d1c0d64d79c3c",
"main.dart.js_45.part.js": "7b187db54db3be8cb0cfdad7aed35744",
"main.dart.js_2.part.js": "fb287b77fca82b0005983839ac8dcb36",
"main.dart.js_63.part.js": "67af140cbaacd7eea5dbb5a8960a8a12",
"main.dart.js_17.part.js": "e31d3d99f980afe10841461d04b8c416",
"main.dart.js_25.part.js": "f4f4a0e169d7eeee8af30ee17a50722f",
"main.dart.js_7.part.js": "89983cd1a4294b9fefeca36dbfcb12ee",
"main.dart.js_6.part.js": "3d805d7d39ed8ab7967a6d0e68aa8c34",
"main.dart.js_49.part.js": "9925961818519ee06bec12628c90eb9c",
"main.dart.js_22.part.js": "9ad68c59ed0b8b8588a2fd9659fac609",
"manifest.json": "e009b7a431dccb5cec4f59c332fc5f41",
"main.dart.js_51.part.js": "61e133aa251990d321dafa15ddbbdaea",
"main.dart.js_1.part.js": "b23026c87eb810a99674ec29118afd16",
"main.dart.js_41.part.js": "8cba47aa023d7c92febc61f9fcb36724",
"main.dart.js_43.part.js": "2ea0385ea796cfe4671dcaba57933de1",
"main.dart.js_31.part.js": "8ca1e9092de2446a1314f5d1716d8691",
"main.dart.js_27.part.js": "aaac8c43d473e1fc883eadeaed20a2f7",
"main.dart.js_37.part.js": "214bbb3d3eacc88411972e6335042e8d",
"main.dart.js_52.part.js": "e819404f486334de5cb21dcf14674ca9",
"main.dart.js_53.part.js": "14778a7c3134cd61a202a09695e26f96",
"main.dart.js_14.part.js": "08f31bcdd2523328da59bb25b1174251",
"main.dart.js_29.part.js": "3602f3718888a069d72e916d5eedb5a0",
"main.dart.js_62.part.js": "f6ae9c96766c5eee9f23a0ba1eb73ef5",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_60.part.js": "116a2910b40f25cda18e78b19f58d067",
"assets/images/9.png": "7aa4225a23c019e11dac44b6846eb6e9",
"assets/images/Union.svg": "b0874c213bbb229023231b97a6548515",
"assets/images/9(2).png": "3176195a5e654dc8188b2155bfff65e3",
"assets/images/W(2).png": "8dfd56ecdfb43b688ec4632f4b0d411e",
"assets/NOTICES": "352f9bbd4ae7c46925478495e27721f4",
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
"index.html": "d9ced0af4fdb88e4908f931c5250644f",
"/": "d9ced0af4fdb88e4908f931c5250644f",
"main.dart.js_16.part.js": "7dc345a8c4c9bd133764e57b01b9e0d0",
"main.dart.js_23.part.js": "b26f7d2b582b67e1d32492f267a82c6c",
"main.dart.js_55.part.js": "4811e84b24eda376253287549ab565db",
"main.dart.js_13.part.js": "59c3f6f8212b87dbd6e048b82efa593c",
"main.dart.js_11.part.js": "11475d2c819b7f37162e301cd23cf248",
"main.dart.js_54.part.js": "557866fa90fbd4a4c351790a09cb9db5",
"main.dart.js_33.part.js": "718160f40e45bdcd4a9f20c3fdc9f21b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "7f77ff73c5f28ad334f2d3a6cb79a44f",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_8.part.js": "31a08e93d8b3fee9ac174d9e529587ce",
"main.dart.js_21.part.js": "7022fcbf646632708b5fd47110d4af69",
"main.dart.js_42.part.js": "bb0cecb509b2d96c79280d845bfadb26",
"main.dart.js_18.part.js": "621756d39af581716a6f91d66dd0a3cc",
"main.dart.js_34.part.js": "3f5e29a2b7b549da3eac9628f2f62ac5",
"main.dart.js_5.part.js": "68d29c3b6c1ea27d90df6ac4dcc20b67",
"main.dart.js_10.part.js": "5aae5c8f71147ece6eb034393e4cc6e9",
"main.dart.js_40.part.js": "37ae8741f387cb5fdf7846272cf40a42",
"main.dart.js_38.part.js": "18962944cfc310cf781f3bd1e1edf374",
"main.dart.js_12.part.js": "b1e8e78097b603e2b79bf327ebd8e24c",
"main.dart.js_46.part.js": "6425827a924097f76fd4964081ba213c"
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
