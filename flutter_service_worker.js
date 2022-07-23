'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "b1507aaf372c7e9a8ab2756c1b8768e5",
"main.dart.js_40.part.js": "4b1318c4b0a69a85084a8a395f95dd8e",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_27.part.js": "48aab7aa57c7e35568d5490f5ceb426d",
"main.dart.js_2.part.js": "f27e31adf84dbc69ef47164eff926496",
"index.html": "94b8e359902c8737fbff822895b4ae22",
"/": "94b8e359902c8737fbff822895b4ae22",
"main.dart.js_22.part.js": "bde54a5bfabee069919e50724fd86349",
"main.dart.js_62.part.js": "4c4c2aef84aa5c1381207f2c9248a63a",
"main.dart.js_32.part.js": "f15a9f5e05eb46ec46e9387a6f6763ae",
"main.dart.js_59.part.js": "3e3c6397ee220a31579ed3718d660822",
"main.dart.js_3.part.js": "e844c710b0d58ebb0691beb48d8c229b",
"main.dart.js_50.part.js": "b81d8002ac6eda653e34a5a4ce1f36d5",
"main.dart.js_37.part.js": "66ec3bfad9ba7d421a7e378f38e6f5dd",
"main.dart.js_48.part.js": "5e6650c4df9e8e211d5c60e1a4d5819f",
"main.dart.js_31.part.js": "0f34c74d8f70bc13da59c76190e48a54",
"main.dart.js_44.part.js": "3014297357acd6bdd5502d42ff7a4cb3",
"main.dart.js_21.part.js": "655045de42d03b05513a1f40546a8b25",
"main.dart.js_24.part.js": "a5f7a98324dcf183c6b7a64e764488bf",
"main.dart.js_23.part.js": "9e5d0f7c83e88439afd1b26b4d5a589c",
"main.dart.js_26.part.js": "8b97f5a562cdc78a5c1b31806a95c8ce",
"main.dart.js_57.part.js": "9a63f6d3b21d5af6c5d0b04593bc4274",
"main.dart.js_30.part.js": "6530b48d6bff20962244e4837452253c",
"main.dart.js_29.part.js": "6d76f60251c73b442680d56586ca6b10",
"main.dart.js_33.part.js": "0b6c61b9a48f7733865e5764bf8e8d98",
"main.dart.js_38.part.js": "787afa6c69687c3812cc8062a20851ce",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "5a1c28522415a6e3344634c270ea0b21",
"main.dart.js_54.part.js": "278838fd9a1501fd43a0489958df848a",
"main.dart.js": "0ff8ef0a45b902324d22f61ee89848d3",
"main.dart.js_25.part.js": "bb9e3c97edc1bb1d2b3630f8467539c4",
"main.dart.js_14.part.js": "d4591109ebee6a4c431b6cc59c11945f",
"main.dart.js_1.part.js": "7b395ef12dde182bfd862751cc56d56d",
"main.dart.js_9.part.js": "915fc4d35b3b38fb549e8264c91dd326",
"manifest.json": "e009b7a431dccb5cec4f59c332fc5f41",
"main.dart.js_45.part.js": "a3b018c94a3d42383823c3f04cfb4146",
"LICENSE": "0d08d799c3aa0d044526e77b67c5eebc",
"main.dart.js_43.part.js": "d28ad137a75c7d108fb43ef9e6ba2c27",
"version.json": "89df59b9ad3673b473a908041304e259",
"main.dart.js_42.part.js": "e1c816bce7699f43b129516e9a9be5de",
"main.dart.js_52.part.js": "78e9b9344d78e34bf24dc3308a8a863a",
"main.dart.js_51.part.js": "d2ce9b644cca5338613f12b4fcf3b037",
"main.dart.js_56.part.js": "1414c34c8013c3862578b474ccd43553",
"main.dart.js_55.part.js": "9d74e678cc48a0c9baa0191ca01b3bbc",
"main.dart.js_53.part.js": "b3f3092180969af5a9e14984aba874a7",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_36.part.js": "2117f225e7f9934997f3e7a4b71f0237",
"icons/Icon-maskable-512.png": "049b52b8e7091fbe202416bb85d68be5",
"icons/Icon-512.png": "8aa6b8ca03b367dcf8eb4c487d0ae904",
"icons/Icon-maskable-192.png": "049b52b8e7091fbe202416bb85d68be5",
"icons/Icon-192.png": "8aa6b8ca03b367dcf8eb4c487d0ae904",
"main.dart.js_15.part.js": "801ba997817ee0708aa564cbf2541ed8",
"main.dart.js_8.part.js": "5893661e6f9fca3a5eb1fcf43d058361",
"main.dart.js_5.part.js": "f7154a2f005c55b52b6f2b13d6f52edc",
"main.dart.js_16.part.js": "c9b76e8f49e4e4fe408f9091fd2ca492",
"main.dart.js_20.part.js": "63999d810de1b0f81b24535e05c5f6af",
"main.dart.js_17.part.js": "0db6a830be85ce7288826b84e109572e",
"main.dart.js_64.part.js": "70402f3253579d1c9d843fe0c16c5f54",
"main.dart.js_34.part.js": "8142f589fdf85f0e87d9defb741070fc",
"main.dart.js_39.part.js": "dde04318f41ca657abe485e28cd3b2df",
"main.dart.js_13.part.js": "1094c88218c1cadd44b4a4795ce2d9f4",
"main.dart.js_61.part.js": "ccb26193fd48fbf99e19cbd029b32b90",
"main.dart.js_60.part.js": "6c4d0d1bf4720b9569fca96e35cad26c",
"main.dart.js_7.part.js": "b5a71625d5d5c3a8be1f86d6f5e4821c",
"main.dart.js_28.part.js": "c4e367b28c0f187298444cf40e778347",
"main.dart.js_41.part.js": "da7e39374d1faf3c8af82381b13b8daa",
"assets/FontManifest.json": "2eb4f865acee31d1af9c4001371142e1",
"assets/images/Union.svg": "b0874c213bbb229023231b97a6548515",
"assets/images/9(2).png": "3176195a5e654dc8188b2155bfff65e3",
"assets/images/9.png": "7aa4225a23c019e11dac44b6846eb6e9",
"assets/images/W(2).png": "8dfd56ecdfb43b688ec4632f4b0d411e",
"assets/NOTICES": "c5f0f9394ce3398567d6b52250f0166e",
"assets/fonts/Aldrich-Regular.ttf": "d95d3c0366bed65728b9968195c0ea11",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/TestnetDerivativeToken.json": "31e3b219fe44af0f0e0916ece3c19473",
"assets/assets/ArtalaxiesMarketV2.json": "54b5586e1a5227c2b1c8c3925685d570",
"assets/assets/IERC721Upgradeable.json": "456fb5d3eb1d647ea065470ec176761c",
"assets/assets/ArtalaxiesMarket.json": "2ad3103ec75574612e80a2009049c4e4",
"assets/assets/IERC721MetadataUpgradeable.json": "650126e266101a9bcfbf9a6201421474",
"assets/assets/space.riv": "19ebb50cac3f5949ba2e3776f1afad1b",
"assets/assets/TestnetDerivativeTokenV2.json": "30db4f8adf7064943a00271ae4d13da9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/cryptocurrency_network_utility/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/AssetManifest.json": "82c9b79de179af7612764f6a81b56b32",
"main.dart.js_10.part.js": "b5214bd384cb16e85269237d4c943ce8",
"main.dart.js_18.part.js": "9da0dd0b759756c6747cd057cbd31aa0",
"main.dart.js_6.part.js": "deef960d019cc58edf9e0044a3ffdb7c",
"main.dart.js_11.part.js": "ddfda1d8977787a4fbc1aaeb5972f5ab",
"README.md": "3e8c0876b3b9763e5113cc2d83f70b6a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
