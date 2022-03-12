'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_28.part.js": "084b45265e485fa73a6bc624071b77c4",
"main.dart.js_34.part.js": "6e13ea51318eee9b959bd736c1bfe8f3",
"main.dart.js_53.part.js": "3f1fd73c06bdd03a4df8f0fb83f67f33",
"main.dart.js_1.part.js": "197c3ee423476ee8bdd6ddbb39006ab2",
"main.dart.js_27.part.js": "8d22b533b42fde7830966e18cb2aecb4",
"LICENSE": "0d08d799c3aa0d044526e77b67c5eebc",
"assets/assets/IERC721MetadataUpgradeable.json": "650126e266101a9bcfbf9a6201421474",
"assets/assets/space.riv": "19ebb50cac3f5949ba2e3776f1afad1b",
"assets/assets/TestnetDerivativeToken.json": "31e3b219fe44af0f0e0916ece3c19473",
"assets/assets/ArtalaxiesMarket.json": "2ad3103ec75574612e80a2009049c4e4",
"assets/assets/ArtalaxiesMarketV2.json": "54b5586e1a5227c2b1c8c3925685d570",
"assets/assets/TestnetDerivativeTokenV2.json": "30db4f8adf7064943a00271ae4d13da9",
"assets/assets/IERC721Upgradeable.json": "456fb5d3eb1d647ea065470ec176761c",
"assets/FontManifest.json": "2eb4f865acee31d1af9c4001371142e1",
"assets/packages/cryptocurrency_network_utility/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/images/W(2).png": "8dfd56ecdfb43b688ec4632f4b0d411e",
"assets/images/9(2).png": "3176195a5e654dc8188b2155bfff65e3",
"assets/images/Union.svg": "b0874c213bbb229023231b97a6548515",
"assets/images/9.png": "7aa4225a23c019e11dac44b6846eb6e9",
"assets/AssetManifest.json": "82c9b79de179af7612764f6a81b56b32",
"assets/NOTICES": "f0821d0c2c08fce66232ff459e73d76b",
"assets/fonts/Aldrich-Regular.ttf": "d95d3c0366bed65728b9968195c0ea11",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"main.dart.js_13.part.js": "9eb7076877d7a40fb240de16433a3c8b",
"main.dart.js_33.part.js": "3f9cdd3ca0e004d930d1d7cfe304dbc4",
"main.dart.js_43.part.js": "615b8651dc19e7a505faacc4e7d84c95",
"main.dart.js_16.part.js": "0303120d61a2e10567f8c88c53746395",
"main.dart.js_7.part.js": "a12509b60715d445d1101cd221b8a25c",
"CNAME": "8a2eebab510fd650c66a82b8306dc488",
"main.dart.js_14.part.js": "49b4d30509d0571dca4b0648413fbdf8",
"main.dart.js_54.part.js": "579ec1825fbaa13d2e04892dce3ad03e",
"main.dart.js_55.part.js": "b0f8a590a956368f737703741aad92bc",
"main.dart.js_21.part.js": "f4431d68bc1048518588bee4f22e8bac",
"main.dart.js_24.part.js": "d0e21e051605d41a8462da94347305e5",
"main.dart.js_57.part.js": "8ad3f4424fd15b64aac9939f649be914",
"main.dart.js_23.part.js": "76b6bb608e71698f1b0132e1111de05d",
"main.dart.js_61.part.js": "108e7b2d80df476cc27b133dcf75b31d",
"main.dart.js_29.part.js": "2bc62750f15c1be9f3a5d4b2b507f20a",
"index.html": "7fcd3fa02fbaca225e202895718dbfde",
"/": "7fcd3fa02fbaca225e202895718dbfde",
"main.dart.js_32.part.js": "d0b59a5555d4ce20e0a000e5cc408a7b",
"main.dart.js_3.part.js": "06a42e946ad34124bc87921793620e67",
"main.dart.js_50.part.js": "9d170f4ef33dd0cfb16accd0b678ad7f",
"version.json": "89df59b9ad3673b473a908041304e259",
"icons/Icon-maskable-192.png": "049b52b8e7091fbe202416bb85d68be5",
"icons/Icon-maskable-512.png": "049b52b8e7091fbe202416bb85d68be5",
"icons/Icon-512.png": "8aa6b8ca03b367dcf8eb4c487d0ae904",
"icons/Icon-192.png": "8aa6b8ca03b367dcf8eb4c487d0ae904",
"main.dart.js_56.part.js": "7f91f2f5d9dd3270c06953faccb39339",
"main.dart.js_17.part.js": "977f4d4225c36b1cdfa47003b4af0154",
"main.dart.js_45.part.js": "ad7565b825b8949be2743c3107d923ce",
"main.dart.js_48.part.js": "5d67bfd150f89db11e40d390a5302638",
"main.dart.js_20.part.js": "6ae1da471d2d4def8e20b9fb6939a2fc",
"main.dart.js_9.part.js": "c2fff2ee7d35e49b34bd113bd339b1b2",
"main.dart.js_60.part.js": "0546b1149268bafe842acb99f7510696",
"main.dart.js_35.part.js": "f0defc12fbcfb6c5cfc720912fcdc9f4",
"main.dart.js_15.part.js": "ce1ca81f71fd375da25b0f050560ec1b",
"main.dart.js_39.part.js": "d0d92812453d4be81cc3b1d7e8ee9c8f",
"main.dart.js_18.part.js": "4e92fb0adeeb14c36661c13831448274",
"main.dart.js": "cbe617d65740d7f5ece72b2e4be0a7d4",
"main.dart.js_42.part.js": "9120794bf4881fc8c0c153e00f0087de",
"main.dart.js_26.part.js": "403bffe9af098390e590781a8a43bb66",
"main.dart.js_10.part.js": "02fbb2c23bfd4ff4783f5e9bc7f58864",
"main.dart.js_6.part.js": "154ff4a75541d1d468fe0e77dc1fb14a",
"main.dart.js_51.part.js": "240d03f77c5e70af01942a6ccbee5973",
"main.dart.js_8.part.js": "4d2ccb4a09877f23c0dcf32f470d5739",
"main.dart.js_11.part.js": "3933bc4aa6c662eae4c6bd2f0cfab48a",
"main.dart.js_62.part.js": "d422b5694e92ea66deeecebce8eeb29e",
"main.dart.js_5.part.js": "1c5da8733cf4d7f32dd6abe0f95ada76",
"main.dart.js_38.part.js": "81c619d12f3ef0f22bb1d17c9d249e45",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_44.part.js": "84c0f8272f4f0b487146d5d7db1a715d",
"main.dart.js_52.part.js": "6e7914e0f4c857dfdefe255a1faa8fb2",
"main.dart.js_40.part.js": "acafbdd701efc98c9d6ad2e56bfa62eb",
"main.dart.js_30.part.js": "edf4fe0e587d04f21621d45745d753f1",
"main.dart.js_2.part.js": "cbe9e19340cc8606f32bf70f4ad8d1c6",
"main.dart.js_31.part.js": "011ea15eceb6f21f234a9a18c7e60c67",
"manifest.json": "e009b7a431dccb5cec4f59c332fc5f41",
"main.dart.js_25.part.js": "5b084471c60f9ac18ec7a023e8a8c047",
"main.dart.js_36.part.js": "720c3cbb4fa6a2864cd86771e37ca068",
"main.dart.js_64.part.js": "ead4747a32ae7af7e057297ac44d9050",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_41.part.js": "675566a34fd2b8c2210b798dc28976d2",
"README.md": "3e8c0876b3b9763e5113cc2d83f70b6a",
"main.dart.js_59.part.js": "c21828215d2d886c9e05fbeb5b630377",
"main.dart.js_22.part.js": "9c5cf0c8cd748815faf6b699a9b79a0c",
"main.dart.js_12.part.js": "b686e92365c5aeab12fbfb0b78430aea",
"main.dart.js_37.part.js": "b1e3f45d6da6a9beb2b379800d615bed"
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
