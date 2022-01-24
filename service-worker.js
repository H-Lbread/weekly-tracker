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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a6a92b881b98a1d4ee1cc2bf7a07bb8d"
  },
  {
    "url": "articles-template.html",
    "revision": "f24501b89835f256b77408a729f38257"
  },
  {
    "url": "assets/css/0.styles.75f1e615.css",
    "revision": "5d227091aa4235ee9b88c2e91fa884c0"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/bg.a382c67a.svg",
    "revision": "a382c67ad2cb860076c270502b258bb1"
  },
  {
    "url": "assets/js/1.12f2c4fd.js",
    "revision": "8cb765a59abd183aec0c0a596b08aded"
  },
  {
    "url": "assets/js/10.c1ac867e.js",
    "revision": "3ffe0c37f6d1ef8a5f30d40602bd6acb"
  },
  {
    "url": "assets/js/11.d6542dd9.js",
    "revision": "304274ec199b713e41f4ea208bf27a5d"
  },
  {
    "url": "assets/js/12.788a3c48.js",
    "revision": "2cc450a642eb63a216cbf38c64b2dcc9"
  },
  {
    "url": "assets/js/13.16cac26a.js",
    "revision": "f3cef4266837b6cdac429b2005d03cbd"
  },
  {
    "url": "assets/js/14.87b08f6a.js",
    "revision": "c34476c0d095b4451be373aca8e2b71c"
  },
  {
    "url": "assets/js/15.83233e68.js",
    "revision": "43dc8aa53126cb04c67202a5c24f2c74"
  },
  {
    "url": "assets/js/16.f287cf2d.js",
    "revision": "7b7a1e274eba6436cb84622fb843ce8f"
  },
  {
    "url": "assets/js/17.01d2d2b6.js",
    "revision": "2ceb9acdcc3a75bfabd66614485ef1d9"
  },
  {
    "url": "assets/js/18.53a7d1f1.js",
    "revision": "cbd09298ca2482bc818d5d6ae3533845"
  },
  {
    "url": "assets/js/19.a4eaa72f.js",
    "revision": "0ec8d0ac1280ba9e9719b51e41f06841"
  },
  {
    "url": "assets/js/2.d2beb245.js",
    "revision": "6e3afad2d8e7bed5085e8c089e493f8a"
  },
  {
    "url": "assets/js/20.874f4d74.js",
    "revision": "78da86b9ed2c8a1b0d6070255c17a511"
  },
  {
    "url": "assets/js/21.95143036.js",
    "revision": "f0134ece0b65a1a9e6c9a76190c813f8"
  },
  {
    "url": "assets/js/22.4a9b5b0f.js",
    "revision": "8f7629381d80dfb0c5a60cfa9250ae29"
  },
  {
    "url": "assets/js/23.9e178b69.js",
    "revision": "4e4d13bf754f4cde92a09e3c091b520a"
  },
  {
    "url": "assets/js/24.0eb378ef.js",
    "revision": "4f6c255b33ba07fd86df33edd93b9189"
  },
  {
    "url": "assets/js/25.9bfffe2b.js",
    "revision": "c7bc9ba0f6b8c7abc196ed41758f3730"
  },
  {
    "url": "assets/js/26.ecd0f04d.js",
    "revision": "e8ab0850175f61d9b7e21c62bd36f403"
  },
  {
    "url": "assets/js/27.3ef52370.js",
    "revision": "99b93669ccc5a8f50acdf69a318070c6"
  },
  {
    "url": "assets/js/28.d86d94c9.js",
    "revision": "78e2e3289cdcf7979afb255f8241614c"
  },
  {
    "url": "assets/js/29.969304b2.js",
    "revision": "1dff3660605bc56116304078870b3d2e"
  },
  {
    "url": "assets/js/30.07cc6c2d.js",
    "revision": "93abf373e665a48aeffd61b2311a7080"
  },
  {
    "url": "assets/js/31.da2d70ec.js",
    "revision": "be7c01f24e40bc96f0de7a23bdf95b0f"
  },
  {
    "url": "assets/js/32.01f0ae46.js",
    "revision": "d1f3be18d043bdba335514df70220123"
  },
  {
    "url": "assets/js/33.4aaaef7b.js",
    "revision": "f109ecd9be6c6f2bd4381cb45e0b1547"
  },
  {
    "url": "assets/js/34.010cded7.js",
    "revision": "24b19580787f5334fbaa583308fe8c94"
  },
  {
    "url": "assets/js/35.c73945ec.js",
    "revision": "ebb7e21c2aad01c058039f19176a2e9c"
  },
  {
    "url": "assets/js/36.02077d01.js",
    "revision": "f79b513456ad75fd3a7304893ce3b37a"
  },
  {
    "url": "assets/js/37.e12cbbeb.js",
    "revision": "a4c5797fb7c9f6f24a1f4061e9d60882"
  },
  {
    "url": "assets/js/38.2074ca8f.js",
    "revision": "d7ae79e0b154e02fc00db3043100ae6f"
  },
  {
    "url": "assets/js/39.518f42ba.js",
    "revision": "5fd844ddd70152a27faf43899d72c861"
  },
  {
    "url": "assets/js/4.872a6d2d.js",
    "revision": "d65df399e838270732f9f50353eb03af"
  },
  {
    "url": "assets/js/40.e7af3899.js",
    "revision": "846a8d6bdd5514ef95a29e846bc983c8"
  },
  {
    "url": "assets/js/41.36589256.js",
    "revision": "fc0ddadaa38193b64e8671b213d6f263"
  },
  {
    "url": "assets/js/42.729ae18b.js",
    "revision": "aee9706c3d2c0aecad52ab6e5f715d0d"
  },
  {
    "url": "assets/js/43.172544bd.js",
    "revision": "1e1600d724493e50bd9aaccdc2d6afb7"
  },
  {
    "url": "assets/js/44.0644b407.js",
    "revision": "c1aa1e3ab77d81e52639b35da2ffcc31"
  },
  {
    "url": "assets/js/45.243e5391.js",
    "revision": "9878f6fc7fc29a6597af569aabc54c41"
  },
  {
    "url": "assets/js/46.6fccfeff.js",
    "revision": "5deffbeecd6a197cf961eb5fe9d76970"
  },
  {
    "url": "assets/js/47.649e877e.js",
    "revision": "bbe4608055bb97cdcdc5de97112c1991"
  },
  {
    "url": "assets/js/48.b2fa8633.js",
    "revision": "2f46d09fadfe7e488cb62f6aa13e0978"
  },
  {
    "url": "assets/js/49.10cda153.js",
    "revision": "78e554f24e065f26847b4a4e9eb4fef3"
  },
  {
    "url": "assets/js/5.99fb7b4f.js",
    "revision": "904f414aa9fa8dc4e9692beffd99fa29"
  },
  {
    "url": "assets/js/50.bb37f805.js",
    "revision": "f7002bf3a8ec476deecf608423d52656"
  },
  {
    "url": "assets/js/51.84bc3a75.js",
    "revision": "51e4d134674bd223ba42663159d98745"
  },
  {
    "url": "assets/js/52.449daa00.js",
    "revision": "fb1be9fa0b42f3789a10fe2094b8aa4f"
  },
  {
    "url": "assets/js/53.f8f111f1.js",
    "revision": "e7ec63f6f9c5c57a4632533909d70ca7"
  },
  {
    "url": "assets/js/54.c7013078.js",
    "revision": "b47887eb42df6c8bf4df7966defa07e7"
  },
  {
    "url": "assets/js/55.ec6df2ae.js",
    "revision": "c94ecbf2d13a5baed0b6d0a801635c83"
  },
  {
    "url": "assets/js/6.feb34efe.js",
    "revision": "3bba4e2578565a2ec356cf4d99503299"
  },
  {
    "url": "assets/js/7.3fa19c7b.js",
    "revision": "32dfee1a6fa717d1f362a12c04f7d2f0"
  },
  {
    "url": "assets/js/8.95041957.js",
    "revision": "7aa6c0ac5ff099d5d355aac0cf99b208"
  },
  {
    "url": "assets/js/9.a984a877.js",
    "revision": "999b6e34e274b121adf87854f1c6323c"
  },
  {
    "url": "assets/js/app.8238c862.js",
    "revision": "fe217729d0e8d156b0795e459fd3bbe9"
  },
  {
    "url": "categories/CSS Weekly/index.html",
    "revision": "a682708ab511845fe8d126eed5d3c38e"
  },
  {
    "url": "categories/Frontend Focus/index.html",
    "revision": "4a8664532b670eb38e78689bf58637fe"
  },
  {
    "url": "categories/index.html",
    "revision": "bec0574ffbf6d3fb1dc53b09f78bf523"
  },
  {
    "url": "categories/JavaScript Weekly/index.html",
    "revision": "96a74c54598fd797a49a628ff32534a8"
  },
  {
    "url": "categories/Mobile Dev Weekly/index.html",
    "revision": "1f526966805de774368b5ee37f782cc9"
  },
  {
    "url": "categories/Node Weekly/index.html",
    "revision": "6b10f4d2a4522532699f0d92c1f0a3d7"
  },
  {
    "url": "categories/React Status/index.html",
    "revision": "e6c9abb16a07a93d1ad96ca6d40a54a1"
  },
  {
    "url": "css_weekly/485/dynamic_color_manipulation_with_css_relative_colors.html",
    "revision": "a9d0e0c2bf6f215e2ce86f6eab9fd6a0"
  },
  {
    "url": "css_weekly/485/index.html",
    "revision": "89f14283fd11a601e69e9455b1e1836d"
  },
  {
    "url": "css_weekly/486/compat_2021_holiday_update.html",
    "revision": "547c0aa78c8b57c6adabfdf9ee88cd03"
  },
  {
    "url": "css_weekly/486/css_me_not.html",
    "revision": "f20798c80043933f5f9c898846747b0b"
  },
  {
    "url": "css_weekly/486/cutsom_properties.html",
    "revision": "19afa82c23ebca61a27f84399c512ad1"
  },
  {
    "url": "css_weekly/486/has_selector.html",
    "revision": "6a01178e0d1bdae8e2ffbd604cffe9fe"
  },
  {
    "url": "css_weekly/486/index.html",
    "revision": "da143230bde4b7121e0f5079c19f9bee"
  },
  {
    "url": "css_weekly/486/preference_queries.html",
    "revision": "f4f88e7d0a4b625f955a839a8308d718"
  },
  {
    "url": "css_weekly/486/smoothly_reverting_css_animations.html",
    "revision": "d4fabc961a0dc40905da6c4c2f160556"
  },
  {
    "url": "css_weekly/486/SVGcode.html",
    "revision": "f09b579d45498fe7a9042568281265b4"
  },
  {
    "url": "css_weekly/486/tailwind_and_the_femininity_of_CSS.html",
    "revision": "bc7f65ff4d4372c5e6066c2a4f19f1d1"
  },
  {
    "url": "frontend_focus/514/index.html",
    "revision": "5bfbd4af3385cb330e24ec646e6baa0d"
  },
  {
    "url": "frontend_focus/514/status_targeted_caching_headers.html",
    "revision": "33f1f0b3b485e73606b14ee3c24690f6"
  },
  {
    "url": "frontend_focus/523/frontend_web_performance.html",
    "revision": "d2cccca7aa2f1659560255c4d9754190"
  },
  {
    "url": "frontend_focus/523/index.html",
    "revision": "2160b7d22eee0d3418986c5a69f44f8d"
  },
  {
    "url": "images/logo.png",
    "revision": "67d6738dce3ba181d73067fe3010039c"
  },
  {
    "url": "images/organization.png",
    "revision": "e54d5badf04c3086a9c398bb7481d7a3"
  },
  {
    "url": "index.html",
    "revision": "6c06954e3585f6fc037be67825eff229"
  },
  {
    "url": "javascript_weekly/399/index.html",
    "revision": "efedbc60c6cd7156764b0df678b0c26d"
  },
  {
    "url": "javascript_weekly/399/js_engine_optimizing_prototype.html",
    "revision": "3c84d22fcc2c4221b267e1a09da8b2e7"
  },
  {
    "url": "javascript_weekly/399/js_engine_shape_and_inline_caches.html",
    "revision": "4d6a090c28a0e5fa0be19e2075bc6199"
  },
  {
    "url": "javascript_weekly/523/index.html",
    "revision": "81e7c38bab60796dc44a30ab93cfa0f3"
  },
  {
    "url": "javascript_weekly/523/undefined_VS_null.html",
    "revision": "e2cce0a7ab398940b7e7a616a1a5bbb4"
  },
  {
    "url": "javascript_weekly/554/ES2022_Feature_Class_Static_Initialization_Blocks.html",
    "revision": "b01e2caa45b67d9fe6d5d4d53e42fbfd"
  },
  {
    "url": "javascript_weekly/554/index.html",
    "revision": "4f19bc2f76971d85b1bf8248a6f15955"
  },
  {
    "url": "javascript_weekly/570/build_tools_compare.html",
    "revision": "a23d857c9075424a070dbae4803a1249"
  },
  {
    "url": "javascript_weekly/570/ES2021_new_feature.html",
    "revision": "7910f28e9ec4f1f9e376b795b7f8e7e7"
  },
  {
    "url": "javascript_weekly/570/index.html",
    "revision": "e0a735e666745d81ec3fbb53c12c3401"
  },
  {
    "url": "javascript_weekly/570/svelte_vs_react.html",
    "revision": "125d85b6fcc9c57a627945352e470041"
  },
  {
    "url": "javascript_weekly/570/ternary.html",
    "revision": "020d36b7cd374f9cef9aa1c800da226c"
  },
  {
    "url": "javascript_weekly/571/flatMap.html",
    "revision": "645ccd9b1d34bc01576312987b59e0dc"
  },
  {
    "url": "javascript_weekly/571/fuite.html",
    "revision": "ab561a946a291adcb23076a63af64ddc"
  },
  {
    "url": "javascript_weekly/571/index.html",
    "revision": "3eb3cbe6bf693a34137ca1310a56a939"
  },
  {
    "url": "mobile_dev_weekly/382/index.html",
    "revision": "f68d57dbb1ac52b8f600a4ef8521969f"
  },
  {
    "url": "mobile_dev_weekly/382/webrtc.html",
    "revision": "04f74dbe744c0a9e22ca28ca3058144b"
  },
  {
    "url": "mobile_dev_weekly/383/bashful_button.html",
    "revision": "e89934fb862e72097050e253cdcc80cf"
  },
  {
    "url": "mobile_dev_weekly/383/index.html",
    "revision": "510b223767945b7fc4d9b28a945686b9"
  },
  {
    "url": "mobile_dev_weekly/383/modile_first_or_desktop_first.html",
    "revision": "e52957f9db0a516e78bfa1318432cb36"
  },
  {
    "url": "node_weekly/417/index.html",
    "revision": "b92afbe2edc4b3f20451c95573bffe5d"
  },
  {
    "url": "node_weekly/417/Nodejs_memory_limits_what_you_should_know.html",
    "revision": "573b397b84e0e5c00c24b564d1e8dde0"
  },
  {
    "url": "node_weekly/419/index.html",
    "revision": "2874800aa66e35863ca7b2f219d4ad5c"
  },
  {
    "url": "node_weekly/419/Nodejs_Framework_Selection_Guide.html",
    "revision": "e6a293aa3384260c41940ee9c496c0e0"
  },
  {
    "url": "react_status/271/A_Visual_Guide_to_useEffect.html",
    "revision": "78999d5e395e1cef8f49b63875611749"
  },
  {
    "url": "react_status/271/index.html",
    "revision": "dd9ebbfad4b75ad4acf472a821f22679"
  },
  {
    "url": "tag/babel/index.html",
    "revision": "9d37f8c3f5a13420e8879b52cf4910ef"
  },
  {
    "url": "tag/Babel/index.html",
    "revision": "bc29c4d016991ead1e45a4d5c0dbb3dc"
  },
  {
    "url": "tag/Chrome/index.html",
    "revision": "85471b2f0bac52eeacc871e6ef941e35"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "c9bc0e141164f5d791a2b71885723233"
  },
  {
    "url": "tag/CSS/page/2/index.html",
    "revision": "ae4ec7185fc74cbfda5cf6420d6f38b1"
  },
  {
    "url": "tag/ECMAScript/index.html",
    "revision": "a7cac79b4bbfcdf837bf8a553201ad92"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "fc5661088800a4c018b3043357ee4f0f"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "ef8f12868bcbc76eb846dea9ec53c10e"
  },
  {
    "url": "tag/index.html",
    "revision": "2950e724e66935125bbd49e250af63a2"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "2782e8668d60713704b52acd7cd467af"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "d8d3e9a212dd55bccdeb4b09c625ca33"
  },
  {
    "url": "tag/node/index.html",
    "revision": "e6afcfa3d663c27735c892b76e203149"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "12cebf01c8a7f66ea0f5b164e2b49dac"
  },
  {
    "url": "tag/Parcel/index.html",
    "revision": "9e4c2563b0a2007774b9c59793c17c0f"
  },
  {
    "url": "tag/React/index.html",
    "revision": "7eeb10371f001d9876353e16e3117255"
  },
  {
    "url": "tag/Rollup/index.html",
    "revision": "39fe36505cacdb5113df8958e916e859"
  },
  {
    "url": "tag/Svelte/index.html",
    "revision": "ea9523d79125a34c8164684434a810a1"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "eaeb9b11eb85cd67d53074b569e0ab66"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "7ed7bfb008891a6f2a5adae38ace65e0"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "2473d715030c14647a992753030593f1"
  },
  {
    "url": "tag/Vite/index.html",
    "revision": "64969f2641cc643a0cdcb22577682cf6"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "bfc5f7cfbdeca5a63a75d982b1777682"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "44a303505ac41dd9bb37da67bf74ee09"
  },
  {
    "url": "tag/游览器/index.html",
    "revision": "4b15e1149bc90eddb7d6d45d8c33eb09"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "23fa34434388c5cbbf5aebaa27af3553"
  },
  {
    "url": "timeline/index.html",
    "revision": "039d47146ac007577e36c333da8b6b9d"
  }
].concat(self.__precacheManifest || []);
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
