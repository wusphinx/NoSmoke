/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f21b44cf0d5c46af747f7caf0f7717bd"
  },
  {
    "url": "assets/css/0.styles.3be960c8.css",
    "revision": "55ced107c3a0cc38abdb7ca8a554bd37"
  },
  {
    "url": "assets/generated_output.png",
    "revision": "f3c20eaa6ef4fddae066f67a7d7707e8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4cc9447c.js",
    "revision": "fd3821dee4e052fe125f27c4da4a00f7"
  },
  {
    "url": "assets/js/11.7feae348.js",
    "revision": "c922194fab219d98658d9dcada56b408"
  },
  {
    "url": "assets/js/12.1c66dc10.js",
    "revision": "8597d25a7ed16ad85059229bbf939a9a"
  },
  {
    "url": "assets/js/13.301c7e72.js",
    "revision": "4eaa9405fb473357f482c95e08618d2b"
  },
  {
    "url": "assets/js/14.d3cd5f38.js",
    "revision": "bad43572210c6f628c409b7741d1a157"
  },
  {
    "url": "assets/js/15.18b84e40.js",
    "revision": "82df6d9ccdab2f019b8c8db1d3329ddb"
  },
  {
    "url": "assets/js/16.f639bdb0.js",
    "revision": "53890af6da0d07b0b5cf723b410a2431"
  },
  {
    "url": "assets/js/17.596fb315.js",
    "revision": "e8b2065600ecc5966742e1c67c25d9e1"
  },
  {
    "url": "assets/js/18.90d4a0dd.js",
    "revision": "5f73e6d52023dd15cee94149550999b7"
  },
  {
    "url": "assets/js/19.2692b24d.js",
    "revision": "8d836237fb10eb1cb2d02dfe05a54198"
  },
  {
    "url": "assets/js/2.0435a083.js",
    "revision": "8f265611657e1a7af270952db67ef914"
  },
  {
    "url": "assets/js/3.eacb4186.js",
    "revision": "5aaa2d6115bfbee3426df9085460b8d8"
  },
  {
    "url": "assets/js/4.7cc6a826.js",
    "revision": "47d99727f999794b4017391afada1420"
  },
  {
    "url": "assets/js/5.2782473b.js",
    "revision": "ed7653f9d04f950307c0e35b118e0c6f"
  },
  {
    "url": "assets/js/6.b6072875.js",
    "revision": "33fc9a9d6ba6d01565aaa585ece3f0ab"
  },
  {
    "url": "assets/js/7.0edbbcc2.js",
    "revision": "698e649c5272ba53a889d51dfe2c7ffc"
  },
  {
    "url": "assets/js/8.6c5b4dfd.js",
    "revision": "aefa9abada20e1b310f8ec50e687a14a"
  },
  {
    "url": "assets/js/9.8fb54c5f.js",
    "revision": "120abfa01fbec35e877e399acad0167c"
  },
  {
    "url": "assets/js/app.7887e2d8.js",
    "revision": "d9921587cd5ee674ea983b06f78ba291"
  },
  {
    "url": "assets/macaca-architecture-2.0.png",
    "revision": "196aa63a061930c2c838d05cf3f088ec"
  },
  {
    "url": "assets/new_report_layout.png",
    "revision": "6b89e34146bf9b2bb3902528c87e2042"
  },
  {
    "url": "assets/nosmoke-2.0.png",
    "revision": "21d85f66bc9b95fa843e2d828a89b6f5"
  },
  {
    "url": "assets/nosmoke-hook-2.0.png",
    "revision": "85fbe8277bcac3d90500caaf804a7c37"
  },
  {
    "url": "guide/configuration.html",
    "revision": "ac077ea2236ed8ce8009595058f8daa6"
  },
  {
    "url": "guide/continious-integration.html",
    "revision": "8b92f1c0ed180e9f6bd354f846917434"
  },
  {
    "url": "guide/cross-platform.html",
    "revision": "720bc13f9b8a00bd79c6853bd9a34e6d"
  },
  {
    "url": "guide/hooks.html",
    "revision": "ee3908d8ef87342a4a7921fe099b98cd"
  },
  {
    "url": "guide/index.html",
    "revision": "756e16d5af9c1acbaac984d4fd4d1bd0"
  },
  {
    "url": "guide/quick-start.html",
    "revision": "bfa9276ec294edf7af9529b44a0c7092"
  },
  {
    "url": "guide/roadmap.html",
    "revision": "384418aa156e2b1b9856d05392647771"
  },
  {
    "url": "index.html",
    "revision": "f764a6750e901957414cf890393c49fb"
  },
  {
    "url": "zh/guide/configuration.html",
    "revision": "e5e5a68c468da4d6e29793af39542ddd"
  },
  {
    "url": "zh/guide/continious-integration.html",
    "revision": "394642779dfba1b83f2cfe9e4539b32f"
  },
  {
    "url": "zh/guide/cross-platform.html",
    "revision": "e6888dfe5e1f633459cca0ea99f617bd"
  },
  {
    "url": "zh/guide/hooks.html",
    "revision": "2fc6c24a1b3a9d5615d9bc8577db33e1"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "272a1c34ba4ca5cac1f0c9df26e87cb0"
  },
  {
    "url": "zh/guide/quick-start.html",
    "revision": "04904ecbf2239025ae43557fa7a78cab"
  },
  {
    "url": "zh/guide/roadmap.html",
    "revision": "c3dbf7fe8fd409f448c4586b2ec0cbad"
  },
  {
    "url": "zh/index.html",
    "revision": "c7cb859ea5ffe4a9644d81bac463b82c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
