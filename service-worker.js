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
    "revision": "7b9b46fda93b93917c9e48938de1e54f"
  },
  {
    "url": "assets/css/0.styles.dc8d652a.css",
    "revision": "413f24e6128c52e6cb5d20b4e9e400cc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.0d3d5260.js",
    "revision": "bda9049b5237f6f27680829aab6485fd"
  },
  {
    "url": "assets/js/100.add34758.js",
    "revision": "fb6eb7cba80076b5c87205896bcdb602"
  },
  {
    "url": "assets/js/101.735db2a0.js",
    "revision": "cdc43e46b3e1c4991101391c52fa935f"
  },
  {
    "url": "assets/js/102.d44facbf.js",
    "revision": "21787471defc51af036b7e1ea6b0e17a"
  },
  {
    "url": "assets/js/103.94243800.js",
    "revision": "3cf33bb83f090e92c846b7de3d835769"
  },
  {
    "url": "assets/js/104.43ab7702.js",
    "revision": "770543d6b5fc5b02c221cf2ec6e8fcb2"
  },
  {
    "url": "assets/js/105.a6f1748a.js",
    "revision": "3d2e629cd1876309e78f68b7d7f8367f"
  },
  {
    "url": "assets/js/106.668d73b7.js",
    "revision": "5c17aa1bc1e908ba4ec9fe83fac39173"
  },
  {
    "url": "assets/js/107.a0c0fe12.js",
    "revision": "6ab66a455b57109938330f3b6dc064d7"
  },
  {
    "url": "assets/js/108.d974b850.js",
    "revision": "2a70f7b62af1062153377b12cedb100f"
  },
  {
    "url": "assets/js/109.e439cccc.js",
    "revision": "487d210b85b1e9c8c882c6cd78338d51"
  },
  {
    "url": "assets/js/11.f7d259a7.js",
    "revision": "d328fd8604187bded640989913379265"
  },
  {
    "url": "assets/js/110.15a75869.js",
    "revision": "2482f53995b221c3bb192110744214e2"
  },
  {
    "url": "assets/js/111.48ddd793.js",
    "revision": "4252baf6e8b9b515d89fd67b3edb910f"
  },
  {
    "url": "assets/js/112.e66aab6b.js",
    "revision": "1cbc5c905349f083457a4a003349f066"
  },
  {
    "url": "assets/js/113.bdc0ddbf.js",
    "revision": "d5faa466ef0b5a2b895bd8ab031296e9"
  },
  {
    "url": "assets/js/114.b82454b1.js",
    "revision": "7486deb89b58cb628800d05a185164b4"
  },
  {
    "url": "assets/js/115.d3e1036b.js",
    "revision": "d1b9820d36e74572372fc9dab8aba44c"
  },
  {
    "url": "assets/js/116.d511c33b.js",
    "revision": "01d5de705d16e4379c081852ac2813b6"
  },
  {
    "url": "assets/js/117.e7709ff9.js",
    "revision": "9df97a2e5f68c0c3ea8b0469f4054d68"
  },
  {
    "url": "assets/js/118.0ea3aa33.js",
    "revision": "74d54d862f464bcab4494428242fabc0"
  },
  {
    "url": "assets/js/119.12228829.js",
    "revision": "4cbfcb9d45af3f9bd92e5483014bf01f"
  },
  {
    "url": "assets/js/12.a1977597.js",
    "revision": "78ea8fea2bec953b25f7fbe76667473f"
  },
  {
    "url": "assets/js/120.18d7618b.js",
    "revision": "28bb7f74d1dfad3a74f508bad8fe372c"
  },
  {
    "url": "assets/js/121.423996f3.js",
    "revision": "1a6cb40478702f40bb0b67656edd1e43"
  },
  {
    "url": "assets/js/122.b2a4af5d.js",
    "revision": "3e1a1221ec167682a8757130ccc2526c"
  },
  {
    "url": "assets/js/123.792f8b61.js",
    "revision": "74c68844818005d7d5b7b9a4c35def27"
  },
  {
    "url": "assets/js/124.be45fe7c.js",
    "revision": "38b6f6580d75e5781e7cd64f6aff1f86"
  },
  {
    "url": "assets/js/125.ab9d678c.js",
    "revision": "b1c5eb1ebb46fbeb34e87c0c03508576"
  },
  {
    "url": "assets/js/126.1e7620d1.js",
    "revision": "d7705ec20d87a594a43a2e666447d6f9"
  },
  {
    "url": "assets/js/127.724282bd.js",
    "revision": "82e10ac70b9d700d8458d9384b278822"
  },
  {
    "url": "assets/js/128.79198460.js",
    "revision": "cf2f4815d364247d6be220d1783be65f"
  },
  {
    "url": "assets/js/129.7776a93b.js",
    "revision": "60bd630f412ac623c9df22c28c13db83"
  },
  {
    "url": "assets/js/13.2259ff62.js",
    "revision": "4aad864c6585c5a46e80a809b4e2718c"
  },
  {
    "url": "assets/js/130.13815091.js",
    "revision": "19e6db3009ba999c1525bd3fdd0991c9"
  },
  {
    "url": "assets/js/131.0b24fb2d.js",
    "revision": "5b276f2648d8f6f7ed1c89762f75a822"
  },
  {
    "url": "assets/js/132.fbaea41b.js",
    "revision": "ada93b42800d075b798d8786dd78d631"
  },
  {
    "url": "assets/js/133.9bc6ca4a.js",
    "revision": "c755c6ac9e07a4106aacb97701e54700"
  },
  {
    "url": "assets/js/134.07b4bfe1.js",
    "revision": "eb7a342c8a7022e19eb3572daaab1211"
  },
  {
    "url": "assets/js/135.3dea51b7.js",
    "revision": "dc9ee04238edc755ae5c1d9d29352083"
  },
  {
    "url": "assets/js/136.b6245bc4.js",
    "revision": "126fcbf89e301abe6faaa0048654f95f"
  },
  {
    "url": "assets/js/137.5a39ee12.js",
    "revision": "94a036bb22eafd18c4ff234cabe64ded"
  },
  {
    "url": "assets/js/138.1df31f9d.js",
    "revision": "54f19a776d901f757cc1c11b04ec5a2f"
  },
  {
    "url": "assets/js/139.ce6a8bec.js",
    "revision": "e08d86f1d61f62a685afc41b3eb5c144"
  },
  {
    "url": "assets/js/14.b4f779f1.js",
    "revision": "864ffac0141aede7fe81cdf7b01dcd63"
  },
  {
    "url": "assets/js/140.3d70b7ce.js",
    "revision": "1948098cf35d304bb520c725f75cfeb5"
  },
  {
    "url": "assets/js/141.835b8e82.js",
    "revision": "a4808418f052e7c151acc54976876432"
  },
  {
    "url": "assets/js/142.079a9f16.js",
    "revision": "8677b8132912af3711500d725dd2f2df"
  },
  {
    "url": "assets/js/143.d42d7aba.js",
    "revision": "127769a3dfd25d9d2da7358ebc22ed43"
  },
  {
    "url": "assets/js/144.7c38cb56.js",
    "revision": "ed69392660a6119e071ee8b31e517201"
  },
  {
    "url": "assets/js/145.2e74f089.js",
    "revision": "3b3336363d787d303f8f3b486cfa0374"
  },
  {
    "url": "assets/js/146.4b2a62dd.js",
    "revision": "4ced5304014e9541149363b5cda1bd3d"
  },
  {
    "url": "assets/js/147.621e9232.js",
    "revision": "713ff403c0a232b013683a63d6333741"
  },
  {
    "url": "assets/js/148.0cd18cb7.js",
    "revision": "9abb21e159f38fcddb6be5ef2b0cc83b"
  },
  {
    "url": "assets/js/149.cc0e7ac0.js",
    "revision": "a05e7b902e7365dcdb7b600a447b0bd8"
  },
  {
    "url": "assets/js/15.78b0158a.js",
    "revision": "0e209a38a007fa0e21a66d23dacb9627"
  },
  {
    "url": "assets/js/150.4887ed75.js",
    "revision": "63e175d55e7ef6be203d7ee864dd3e09"
  },
  {
    "url": "assets/js/151.f5afb8aa.js",
    "revision": "6d3879da886f79c1897c9d363225df9b"
  },
  {
    "url": "assets/js/152.2409840a.js",
    "revision": "d598b6924fa05f47f2bb4a408dd06d53"
  },
  {
    "url": "assets/js/16.d689d1cb.js",
    "revision": "4e86f262e5fc39ded341cc2cb0378a88"
  },
  {
    "url": "assets/js/17.454e9eb6.js",
    "revision": "b33f02408d4d88dbbc861273a7374892"
  },
  {
    "url": "assets/js/18.6eb75d69.js",
    "revision": "175a508f8e06f3cbb9c0432a470d46f6"
  },
  {
    "url": "assets/js/19.535f1364.js",
    "revision": "aef9ec991977f0bca74565fb9af55a90"
  },
  {
    "url": "assets/js/2.891cdfc8.js",
    "revision": "5a79306a00f6ca5ca89a01aa3fd20e25"
  },
  {
    "url": "assets/js/20.8788c91c.js",
    "revision": "6cff35e907109f3521737af4c94431bb"
  },
  {
    "url": "assets/js/21.b5d953da.js",
    "revision": "25634b02eae0dd123d18c58151a202d3"
  },
  {
    "url": "assets/js/22.2011f33a.js",
    "revision": "fc44d1bcc9da025f3d9f57cdc948137b"
  },
  {
    "url": "assets/js/23.c7b9dc15.js",
    "revision": "d3bbc7749c4d0a8debb40baa0ae56ec7"
  },
  {
    "url": "assets/js/24.a3adf2bb.js",
    "revision": "a31b765dff7392fe65d6f234a1954d01"
  },
  {
    "url": "assets/js/25.d5aae36b.js",
    "revision": "5bed89367233b7aaf0cc78f1d9eff06b"
  },
  {
    "url": "assets/js/26.633988bf.js",
    "revision": "47a76888d627d9281e40b77782bcb790"
  },
  {
    "url": "assets/js/27.3abe878d.js",
    "revision": "b8ef80513f0cdf53f8099d34e6c77a5a"
  },
  {
    "url": "assets/js/28.434a15a9.js",
    "revision": "837272e4be072b367c882fbeeefd4bd1"
  },
  {
    "url": "assets/js/29.e038ad80.js",
    "revision": "6735aae932896bba168fc6f0e7df2ee1"
  },
  {
    "url": "assets/js/3.2e6760cf.js",
    "revision": "33046f8a23f72d55f6176f6c5a0ea2cb"
  },
  {
    "url": "assets/js/30.d59b8d76.js",
    "revision": "347542cfe826ed473dc84ce1b20d6e63"
  },
  {
    "url": "assets/js/31.4957c686.js",
    "revision": "ccc36f74415f88805edd33aa08d16b47"
  },
  {
    "url": "assets/js/32.a52bb94d.js",
    "revision": "9d91d6f8483a543c91dd6fd4c1c49eee"
  },
  {
    "url": "assets/js/33.5c5b45dc.js",
    "revision": "7e0e80816dd524cf1168c160ca0eee00"
  },
  {
    "url": "assets/js/34.c3381bbf.js",
    "revision": "1037914e415d905c2f62e3ddc1b78812"
  },
  {
    "url": "assets/js/35.c43a4cf4.js",
    "revision": "e93f3bf29a30e25374396d6929916c38"
  },
  {
    "url": "assets/js/36.0b1d7308.js",
    "revision": "b077445bf456bfd3a424e74510b28d56"
  },
  {
    "url": "assets/js/37.47513132.js",
    "revision": "c2c618c8d3869d5bd190c6e5fd79946b"
  },
  {
    "url": "assets/js/38.a784c48c.js",
    "revision": "9e1d4292cfdce501b91d7472ea9e127d"
  },
  {
    "url": "assets/js/39.53f53ea6.js",
    "revision": "3cf5db8b97a1e67452da6a79f44745fd"
  },
  {
    "url": "assets/js/4.0892267b.js",
    "revision": "63d69ef3205ae4b9a56a5298d97c85d4"
  },
  {
    "url": "assets/js/40.7901af8e.js",
    "revision": "df72f19f5ed7a15d01b381667381f17d"
  },
  {
    "url": "assets/js/41.196ba948.js",
    "revision": "95763fed78257afc010def58868f3a75"
  },
  {
    "url": "assets/js/42.c0002978.js",
    "revision": "9b81626481ca02e1ef4bcd8ab95c1b58"
  },
  {
    "url": "assets/js/43.ad75de41.js",
    "revision": "32ae34062d88d6fb8ee76e4b808f7829"
  },
  {
    "url": "assets/js/44.ae2adafe.js",
    "revision": "e150828c408294c3c448338eeb163d42"
  },
  {
    "url": "assets/js/45.834fd86b.js",
    "revision": "aa73c2642985e158d70b5a1c529dc170"
  },
  {
    "url": "assets/js/46.0558a3b8.js",
    "revision": "1505f67eb08e812342e1c72926f73125"
  },
  {
    "url": "assets/js/47.f15e549b.js",
    "revision": "ff38771b99089f926f3211fcc3f08cad"
  },
  {
    "url": "assets/js/48.c872b22b.js",
    "revision": "ab6b776898cbfb9889eaeccfbeab506f"
  },
  {
    "url": "assets/js/49.3270d92c.js",
    "revision": "3e4f9f14878a8dfb65167be0356d8b6b"
  },
  {
    "url": "assets/js/5.c5dd80f4.js",
    "revision": "984ac949fd48b7c93ad012b421291789"
  },
  {
    "url": "assets/js/50.22388880.js",
    "revision": "fe84823483ea10cb7310d46b745395ba"
  },
  {
    "url": "assets/js/51.02733a98.js",
    "revision": "521be22f7ad0672d7cca2d02d4e3afdb"
  },
  {
    "url": "assets/js/52.40c83d66.js",
    "revision": "662186e049bf8c1f1084cd6011d3e92e"
  },
  {
    "url": "assets/js/53.b2fd88ab.js",
    "revision": "1005a04bb614600ffc3d79369878ffc3"
  },
  {
    "url": "assets/js/54.3140f419.js",
    "revision": "6e8abc8e385e90f75ace0ea45c5c0e6d"
  },
  {
    "url": "assets/js/55.0c0c70fe.js",
    "revision": "be30ff1b66f0a728a08565c547e6db63"
  },
  {
    "url": "assets/js/56.a6496606.js",
    "revision": "05ce89385b46c53cf85e704a52b52623"
  },
  {
    "url": "assets/js/57.2bd16517.js",
    "revision": "70bdb48e56afc1d51fa82436c8f3ecf7"
  },
  {
    "url": "assets/js/58.1bb61ce1.js",
    "revision": "c26ee830a11fe7658b2953682b20dc31"
  },
  {
    "url": "assets/js/59.3ea8b86f.js",
    "revision": "ee819cd07d83a7bf28e3fba753023ffc"
  },
  {
    "url": "assets/js/6.f1fe53c9.js",
    "revision": "7ac5f95d9ae03e6169216c178496ab92"
  },
  {
    "url": "assets/js/60.6233f332.js",
    "revision": "0395149fe238336781588499f7afcc1d"
  },
  {
    "url": "assets/js/61.87ce79c1.js",
    "revision": "45896b2f1e9129dea8cbe85d622953c3"
  },
  {
    "url": "assets/js/62.2c58c9e3.js",
    "revision": "50f113006ed39621f2e7c5979f59511b"
  },
  {
    "url": "assets/js/63.635923f0.js",
    "revision": "b8c2ae9833fc8c3051a037833c1041c4"
  },
  {
    "url": "assets/js/64.97be79e8.js",
    "revision": "be8bfcef3956ad739691d2933cf7163c"
  },
  {
    "url": "assets/js/65.d115b53e.js",
    "revision": "783aca350c31ca0d3b950f38e8c3466d"
  },
  {
    "url": "assets/js/66.6f685412.js",
    "revision": "9daccc8fc003dba0607a2ebf1d925333"
  },
  {
    "url": "assets/js/67.b1349e61.js",
    "revision": "04ea72293b923204aa025f6376169756"
  },
  {
    "url": "assets/js/68.d8167adc.js",
    "revision": "00c072626f6cade6bc19cd7634865a86"
  },
  {
    "url": "assets/js/69.17568d5f.js",
    "revision": "76de1e6da4e347aa082e1bde1a5be779"
  },
  {
    "url": "assets/js/7.561e4e5b.js",
    "revision": "ae0cc3284283658bcf538f97fe923664"
  },
  {
    "url": "assets/js/70.2e18f000.js",
    "revision": "899e511750332d8a89c6a71209fc0806"
  },
  {
    "url": "assets/js/71.657336e4.js",
    "revision": "8ac612a510a4b0e19b1627593c856ab9"
  },
  {
    "url": "assets/js/72.48bdb34f.js",
    "revision": "6966b94b606d703107c5e0b75309bfff"
  },
  {
    "url": "assets/js/73.dd7977bc.js",
    "revision": "e42a6ffab23662df9ba5f4fab7da6d5a"
  },
  {
    "url": "assets/js/74.fbfff468.js",
    "revision": "2180b94aa82bb5fffef64d9646af3702"
  },
  {
    "url": "assets/js/75.a8205c9c.js",
    "revision": "7504af051319f5a410be6d651713bf68"
  },
  {
    "url": "assets/js/76.677b499b.js",
    "revision": "642c35b1addfb6d8a6307b4f10aa4077"
  },
  {
    "url": "assets/js/77.d1a16203.js",
    "revision": "24c697c136837df6d709e8092e8ef147"
  },
  {
    "url": "assets/js/78.e1a1e3ee.js",
    "revision": "6cfc208fef10c2850088f2458c8f0c3d"
  },
  {
    "url": "assets/js/79.c63b5cf9.js",
    "revision": "e6fc161af70634207234748e237508dd"
  },
  {
    "url": "assets/js/8.c5bd91eb.js",
    "revision": "fdd7fb1776ff7617a01b08b024a1878f"
  },
  {
    "url": "assets/js/80.37fa1f90.js",
    "revision": "d071992de89b768b6ee9368dab37624a"
  },
  {
    "url": "assets/js/81.29c36ca7.js",
    "revision": "5df8b35e7a39b2891dfe18edd5f5ac0e"
  },
  {
    "url": "assets/js/82.e4ee8418.js",
    "revision": "3934279e6215b8e4b42058437ae6d777"
  },
  {
    "url": "assets/js/83.413d8567.js",
    "revision": "a1051f72e6423a85ff894184f6e2f915"
  },
  {
    "url": "assets/js/84.b43b68e6.js",
    "revision": "170e90cf2ca29700f51b7830bc98a679"
  },
  {
    "url": "assets/js/85.d3c55360.js",
    "revision": "a5cd8662310c779ec83af7d259cd3e55"
  },
  {
    "url": "assets/js/86.cdcaaab2.js",
    "revision": "cdc15bfd6e725a15e9c6f7c5742f8185"
  },
  {
    "url": "assets/js/87.7bc67f57.js",
    "revision": "78f10acf5557bcc2c8df42fd7fc588f5"
  },
  {
    "url": "assets/js/88.5b9305ae.js",
    "revision": "b8f52143861f0efd047a42a9d35978c0"
  },
  {
    "url": "assets/js/89.c815c848.js",
    "revision": "b970c94e1633d2da80499ee6b97677a6"
  },
  {
    "url": "assets/js/90.429ecaa4.js",
    "revision": "063eeee417e343e514a4ad0015e1fc44"
  },
  {
    "url": "assets/js/91.e8d3d517.js",
    "revision": "477fc6e9876c91e5706c654238292a21"
  },
  {
    "url": "assets/js/92.da056c2d.js",
    "revision": "a63bbd350135cd8bc6ab77903a4a02c6"
  },
  {
    "url": "assets/js/93.4ec384a5.js",
    "revision": "e09bcf03ca49e347ab03b0c6ddab426b"
  },
  {
    "url": "assets/js/94.6252ca25.js",
    "revision": "906241861fc7e92d71476c13f395aa0d"
  },
  {
    "url": "assets/js/95.c7cb1509.js",
    "revision": "2c713b3f49ab91bcf26b990300e60608"
  },
  {
    "url": "assets/js/96.4b48bffa.js",
    "revision": "6da4d62f146730b5167234dd5efbd69f"
  },
  {
    "url": "assets/js/97.05b912d4.js",
    "revision": "b3bbb7fdf976a6da393ba0596b145afd"
  },
  {
    "url": "assets/js/98.d7e17cc7.js",
    "revision": "15c8d5c4fb8c036d99ffea7a6b64e7e6"
  },
  {
    "url": "assets/js/99.3f704aba.js",
    "revision": "60944e1ef122af9818b194626bea6446"
  },
  {
    "url": "assets/js/app.e30e8bfb.js",
    "revision": "fe5883a0de389171dce1f289a6e8b2b8"
  },
  {
    "url": "assets/js/vendors~docsearch.d4d0a48a.js",
    "revision": "4cc0bd32b1bb6eaa9c9f3420bd6aba55"
  },
  {
    "url": "de/api/Detect.html",
    "revision": "cbf87112a8115e3155b7f5a29629c8e7"
  },
  {
    "url": "de/api/Guidelines.html",
    "revision": "17e0a17e1875d3813623d0313501daee"
  },
  {
    "url": "de/api/Ui.html",
    "revision": "7bcd05ebdf2ecf9b7e5fae8c7d5124cf"
  },
  {
    "url": "de/effects/API.html",
    "revision": "fe388079e131e91167866fc92c2242c0"
  },
  {
    "url": "de/effects/index.html",
    "revision": "22371cc37e9a21d988e5113dac8ba95e"
  },
  {
    "url": "de/effects/OurFirstEffect.html",
    "revision": "4dda3772a8a977e08fcfc120f4223f81"
  },
  {
    "url": "de/index.html",
    "revision": "1e6f4691c3e545fc584863f7da947205"
  },
  {
    "url": "de/json/Authentication.html",
    "revision": "ecd12def54ff0c462d617bf807deeac7"
  },
  {
    "url": "de/json/Control.html",
    "revision": "b1e4d3bd4ba79af5c59b3fb106a0530b"
  },
  {
    "url": "de/json/index.html",
    "revision": "c9587a65bce1544969f083f89595712b"
  },
  {
    "url": "de/json/ServerInfo.html",
    "revision": "075a8a64343c6fb330ab2ec35545c1c5"
  },
  {
    "url": "de/json/Subscribe.html",
    "revision": "ec867fd7d5c6fc998cd14c62cbc309f2"
  },
  {
    "url": "de/user/advanced/Advanced.html",
    "revision": "af03f35ff7d7a48c8ace695af42cb072"
  },
  {
    "url": "de/user/advanced/CLI.html",
    "revision": "c764cc1729d5689d25dc113708a51104"
  },
  {
    "url": "de/user/advanced/Support.html",
    "revision": "8b4ac569faf806ba59cb23c7ed281e4b"
  },
  {
    "url": "de/user/advanced/Testing.html",
    "revision": "69e1ac7433cb718a282bd653dfae38bd"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "86f5335c3e055a0783f5def34ff87101"
  },
  {
    "url": "de/user/index.html",
    "revision": "ba6f06aa29a39881a410ef1b4127fb74"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "d17bb6f2a061e337b7ce17bad5337726"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "8f998d13a9ceb178eb58df0e08163b8e"
  },
  {
    "url": "de/user/leddevices/index.html",
    "revision": "e6dc0c00fee28d1b69ed1933d2a50851"
  },
  {
    "url": "de/user/leddevices/network/atmoorb.html",
    "revision": "124bff82e8e1a31e6afcae64bca73a31"
  },
  {
    "url": "de/user/leddevices/network/cololight.html",
    "revision": "e53eb4b4c44d5dd92ec88fec596b4f02"
  },
  {
    "url": "de/user/leddevices/network/fadecandy.html",
    "revision": "7bf3c1491180ec0c5131ab2673b238d2"
  },
  {
    "url": "de/user/leddevices/network/nanoleaf.html",
    "revision": "01d136b639e5d94b166f61f3a85e35cb"
  },
  {
    "url": "de/user/leddevices/network/philipshue.html",
    "revision": "d278d11be81ab929002f55c1dd5bfcdb"
  },
  {
    "url": "de/user/leddevices/network/razer.html",
    "revision": "4a9199590c1dfa84293cbe381dd11aef"
  },
  {
    "url": "de/user/leddevices/network/tinkerforge.html",
    "revision": "2e2e23d000910b54953f04e15f63315d"
  },
  {
    "url": "de/user/leddevices/network/tpm2net.html",
    "revision": "3515af444eddd368816f6f89371e6279"
  },
  {
    "url": "de/user/leddevices/network/udpartnet.html",
    "revision": "76cabd44857b96f283cca521db1635fd"
  },
  {
    "url": "de/user/leddevices/network/udpddp.html",
    "revision": "7878e3d6ab22985db8beaa38bd53c059"
  },
  {
    "url": "de/user/leddevices/network/udpe131.html",
    "revision": "d57d59ddd13cef7d1fb76a88bb045239"
  },
  {
    "url": "de/user/leddevices/network/udph801.html",
    "revision": "cbcf219dabf79c9438eefca2a7039ccd"
  },
  {
    "url": "de/user/leddevices/network/udpraw.html",
    "revision": "3d4a3f495502210523c2fdc460949b2d"
  },
  {
    "url": "de/user/leddevices/network/wled.html",
    "revision": "53a7aea0d248717f2e8a1fb4ac1b0fbe"
  },
  {
    "url": "de/user/leddevices/network/yeelight.html",
    "revision": "6ab9ac3b5c6c018f4a324ce8579214ca"
  },
  {
    "url": "de/user/leddevices/others/debug.html",
    "revision": "bd772633cf84c75f1e5e23eaf6f740e6"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa102.html",
    "revision": "8cb903b784ad595c293eba570799f782"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa104.html",
    "revision": "22d0454376cab7a788f7de9106b5626e"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "afd0ab3ee4a89c2360b320597f3be8a3"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "abcdc46bd8e7995fa3d0fba4a04333a6"
  },
  {
    "url": "de/user/leddevices/spi_pwm/p9813.html",
    "revision": "b0d1da462bb41eb5b4200dfaf295ad89"
  },
  {
    "url": "de/user/leddevices/spi_pwm/piblaster.html",
    "revision": "5a5f25c92127619ad0eab10196f17826"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6812.html",
    "revision": "34f83f0809ee8d2a6d1be069c722ebac"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6822.html",
    "revision": "05750ebdb9e2de4fea1563aa104f7a9e"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk9822.html",
    "revision": "ab9fc91acd3e81bb2774dfd678f08a7a"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2801.html",
    "revision": "b159abc9fedf17ba92754397c20da9f8"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2812.html",
    "revision": "a8eeab0d0993c8a7049e562b3d74a1bd"
  },
  {
    "url": "de/user/leddevices/usb/adalight.html",
    "revision": "955ba96ace46fe824269d4d36f6a885b"
  },
  {
    "url": "de/user/leddevices/usb/atmo.html",
    "revision": "e25e33ce387275f61279de9904bc9cc5"
  },
  {
    "url": "de/user/leddevices/usb/dmx.html",
    "revision": "5f03fabf383dd4420a9889de83025fc8"
  },
  {
    "url": "de/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "5b7897fec225926ba3aac6782dce510c"
  },
  {
    "url": "de/user/leddevices/usb/karate.html",
    "revision": "824fd301ad463a181c06c135cbc9dff7"
  },
  {
    "url": "de/user/leddevices/usb/lightpack.html",
    "revision": "ca2452c604e9d93023a533c2d6a994bc"
  },
  {
    "url": "de/user/leddevices/usb/multilightpack.html",
    "revision": "15478aae3935b451477122deb17a81c3"
  },
  {
    "url": "de/user/leddevices/usb/paintpack.html",
    "revision": "dc6e26747abcb3f51dc7737847011b7a"
  },
  {
    "url": "de/user/leddevices/usb/rawhid.html",
    "revision": "e6ff2cd51345d50f949c84423eb36cda"
  },
  {
    "url": "de/user/leddevices/usb/sedu.html",
    "revision": "9ab0c57ff862336a7b8e0499905808f9"
  },
  {
    "url": "de/user/leddevices/usb/tpm2.html",
    "revision": "44591b832131faf3a3ae217d3c14c609"
  },
  {
    "url": "en/addons/API.html",
    "revision": "0802db4881ac5ecb82fa41da923b4f8b"
  },
  {
    "url": "en/addons/index.html",
    "revision": "eecf9bd810a352245431252752b6da14"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "bb877d628457c4b84eb02b34fc83ffd3"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "04adbcfc498e35380d72ebfb661800d3"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "fb7c8441648798884de0bdfd158cdd7b"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "debd44d727c281ff194b3e5d11fa7807"
  },
  {
    "url": "en/effects/API.html",
    "revision": "6eb58c8d7506454087ce3a1df9a4ce98"
  },
  {
    "url": "en/effects/index.html",
    "revision": "9cb3bfb2e5c365c2015f21ebc90a524a"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "17eacfde7161b1e389dbc19896a8d9f5"
  },
  {
    "url": "en/json/Authentication.html",
    "revision": "880717fcef74412f30817b4c4be3a577"
  },
  {
    "url": "en/json/Control.html",
    "revision": "6eb92e9c0ebd297b4e3bb22a017a4cbe"
  },
  {
    "url": "en/json/index.html",
    "revision": "586d17803f1306eee500ed86950e78c5"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "5db1fcc038d27989a93e4224266f1ca5"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "7ccfa7c2bb4552aef38c388e681bb2d9"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "f197eb4f794e0ea10530ef6f63ae24fd"
  },
  {
    "url": "en/user/advanced/CLI.html",
    "revision": "b77842313eec00e709ad2cc09cff4c88"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "7a752ccb5abc2ee8c72ae76fc52533fb"
  },
  {
    "url": "en/user/advanced/Testing.html",
    "revision": "fce76e0c6fefd3d17b7cfe0816a43d69"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "40d18e199fce27276663e875887a200e"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "0ba6e31bd07472dfdb66a1456f7dafb3"
  },
  {
    "url": "en/user/index.html",
    "revision": "8bf5d92ca731cb3617c6b6be7cd0b084"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "01fc08e4b70ddb135e18e771420db5cf"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "12a650a1e5849a32211043dfc6043294"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "402e864b8076e44b59947cc891a1b0e2"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "316784ee931da0488d0d829f4e4af4ef"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "955eadf7c5528e25074d4215015599e1"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "06fbbced3ecf86ea2fbb29c474b55f50"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "b6388ade35c1322344948915fd1002b8"
  },
  {
    "url": "en/user/leddevices/network/razer.html",
    "revision": "4bfd906c080c9a2378e97bad56095b95"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "b2327e66f77d62bd8239c16095fcec22"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "408742bc19de6647d967368d43cc8f8f"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "eb56cb1de53207fe66ee18f0aae9cd96"
  },
  {
    "url": "en/user/leddevices/network/udpddp.html",
    "revision": "6d838a8a4b83fd79a06ac68e52075076"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "a4ecd39c3c75c161c0070649918fcd33"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "ed3e29f75ba1147703a470a7fd4450ac"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "d9558c49fab48f9276b1d5763b178e21"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "e8a611e5351832f1b110cde947b2ed78"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "c347a86c07dd2c76c02de6e5472c355d"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "45fe550e656eb958826f9c8d5ee7936f"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa102.html",
    "revision": "2d25b636516a8e14a224e2c800da19f8"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa104.html",
    "revision": "d43f2170592c5d9143c27ca64c7e1c4a"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "6c36ec42935f8333844bd0ab5884a2a7"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "312e5c79df3a9c4c80fdd08a0eb67976"
  },
  {
    "url": "en/user/leddevices/spi_pwm/p9813.html",
    "revision": "053b46c4d06a5176f02c3049ffb98c49"
  },
  {
    "url": "en/user/leddevices/spi_pwm/piblaster.html",
    "revision": "dfb83cc0d216b1f49c79e3cf176f5c3b"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6812.html",
    "revision": "4e8555ddfdd0102ec28089c99774d24f"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6822.html",
    "revision": "a8c599ea7d46c70ace3b289a68d390d4"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk9822.html",
    "revision": "b877c2537c53fdd49ebd352a6b127397"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2801.html",
    "revision": "a48c5b076160737d904084c642505729"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2812.html",
    "revision": "45ea54d58f324a9df1db1fb0b2609d14"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "83a1250e30b3cca4458b707049a8493a"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "089c6e0f93eb0d82fdcdd0d3ccd4fd15"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "40cf8b9d744835c44824b6f12cab2e8e"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "286901eec8977f838ca870bf97d81ff1"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "01440efcb5557b3c123abe8b7da12851"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "4dd34405070047698af4b34766f8d7fc"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "b5aa7a160dcd3b786288e8eb965c6692"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "34884979453268908e70e5e98472f665"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "75425b728e561f9caf357c494b1243bd"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "b96bb73944f8ba2ad357ce7883b1b404"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "9edc5442cd5cfabf03317f352b657a10"
  },
  {
    "url": "hyperion_logo_dark_dynamic.png",
    "revision": "5144c189e57bc6ebcc2e9c242a6d88cd"
  },
  {
    "url": "hyperion_logo_dark_static.png",
    "revision": "002fd7f8af81855feddb69dc92febb0c"
  },
  {
    "url": "hyperion_logo_light_dynamic.png",
    "revision": "a1d006af8975d2f83de583d8f779b34d"
  },
  {
    "url": "hyperion_logo_light_static.png",
    "revision": "2812c09870a7a84dea88b57776bdfa70"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "5e1e9bb3baacce6670406f1d42bb7177"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "2a78e0cc6a0296e2f453358d2c4d86ca"
  },
  {
    "url": "icons/apple-icon-167x167.png",
    "revision": "4537db323d098e6ec9186345c62bc594"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "65e328eb3ac563c40fff352eac1ebe31"
  },
  {
    "url": "icons/apple-launch-1125x2436.png",
    "revision": "7c76bb2da1bf063068e4c73459b614cd"
  },
  {
    "url": "icons/apple-launch-1242x2208.png",
    "revision": "61d0bb9cde264e1b1dd963971df55bd2"
  },
  {
    "url": "icons/apple-launch-1242x2688.png",
    "revision": "a4415665e9bd2bfef4c81a56f7253e9b"
  },
  {
    "url": "icons/apple-launch-1536x2048.png",
    "revision": "e5f187adff88099d65cda39d4d370d6c"
  },
  {
    "url": "icons/apple-launch-1668x2224.png",
    "revision": "98e31d8ccaab2bd0376f9e66dd0c781b"
  },
  {
    "url": "icons/apple-launch-1668x2388.png",
    "revision": "62f2562ec45458d562cfbdc7ce49b83b"
  },
  {
    "url": "icons/apple-launch-2048x2732.png",
    "revision": "59cf420a057b00ffbc4299c902e30297"
  },
  {
    "url": "icons/apple-launch-640x1136.png",
    "revision": "06935b9d3118d6a165bee1b28b3e9944"
  },
  {
    "url": "icons/apple-launch-750x1334.png",
    "revision": "65ddce5962aebe47ff1fafabced21b4e"
  },
  {
    "url": "icons/apple-launch-828x1792.png",
    "revision": "fd9d1e7433a0d6a243504f84bf528760"
  },
  {
    "url": "icons/favicon-128x128.png",
    "revision": "1f67931e9f8f5859f0a326de9695f996"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "41d819752d98a5e8f8ca8a79a20ea095"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "a0d026eea3e0e0236872028561624c86"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "e85956a895cea454c0361a867df96b2a"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "d024af605d3ba562f86c5c6c29720a4d"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "4310df837ffb78ac982eb4151309d70a"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "c8e09f3c73e3a914bae1a3d00ad2c090"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "203f32e2af95629ffe0e4afb07638326"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "43cb3b7a8ba9e081827c249e969692f0"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "cffb030240897a3ffe9df38694205c23"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "a87900de9189b99f164b409015f24d05"
  },
  {
    "url": "images/de/http_jsonrpc.jpg",
    "revision": "2d708be5aad53591bc698927dc05b07f"
  },
  {
    "url": "images/de/user_config_access.jpg",
    "revision": "27c7d7dba632794776545806cf9d7e9b"
  },
  {
    "url": "images/de/user_config_dash.jpg",
    "revision": "059ac4a0371f77c252c24f55f150f647"
  },
  {
    "url": "images/de/user_config_lang.jpg",
    "revision": "e96abe0016d26e8c156969a5161b57fa"
  },
  {
    "url": "images/de/user_events_cec.png",
    "revision": "ef45e959a80f8eec10cbb006b2234376"
  },
  {
    "url": "images/de/user_events_scheduled.png",
    "revision": "c01f385004e90630ee18a734d943e544"
  },
  {
    "url": "images/de/user_ledlayout3.jpg",
    "revision": "74ed7256f5679c12c068ff5135758bf0"
  },
  {
    "url": "images/en/avahi-browse.jpg",
    "revision": "92014da9d4fb709b5f0b619127260f50"
  },
  {
    "url": "images/en/http_jsonrpc.jpg",
    "revision": "7cf6e7293af8779f6bcf12f86e34bb6b"
  },
  {
    "url": "images/en/owneff_1.jpg",
    "revision": "42df0877dec353c8928386585e8b29b5"
  },
  {
    "url": "images/en/owneff_2.jpg",
    "revision": "95b8085101c2786b888e4ed29482dac5"
  },
  {
    "url": "images/en/owneff_3.gif",
    "revision": "94cd6cf07479827a49482b8c66fb66d8"
  },
  {
    "url": "images/en/owneff_4.gif",
    "revision": "86b86b1d3c2fb754c6c9b2ead9ea43a0"
  },
  {
    "url": "images/en/user_bbmodes.jpg",
    "revision": "e9c2447c1192cb239ba701ae90144624"
  },
  {
    "url": "images/en/user_config_access.jpg",
    "revision": "97deff23547985f04788bb02002ff21c"
  },
  {
    "url": "images/en/user_config_dash.jpg",
    "revision": "040c1fa6da9d630755663abeeb67e96c"
  },
  {
    "url": "images/en/user_config_lang.jpg",
    "revision": "a2e03ebed148ab935371059e38925326"
  },
  {
    "url": "images/en/user_events_cec.png",
    "revision": "13f81bcbb18d0b5220ab7325b2b19a05"
  },
  {
    "url": "images/en/user_events_scheduled.png",
    "revision": "dceff86ef3509fc2af3f4b330b802cef"
  },
  {
    "url": "images/en/user_gammacurve.png",
    "revision": "1bc6325ef5dd3cafa09d40d0e4f65d8b"
  },
  {
    "url": "images/en/user_ledlayout.jpg",
    "revision": "2815e5ab254a09a7c24af33d169c0e66"
  },
  {
    "url": "images/en/user_ledlayout1.jpg",
    "revision": "6da17c4ff33ca70b66709f4d924ae865"
  },
  {
    "url": "images/en/user_ledlayout2.jpg",
    "revision": "fa9d66601d016ac2ed520b93eff35bee"
  },
  {
    "url": "images/en/user_ledlayout3.jpg",
    "revision": "c5f22ed1186b14a06b3aa1ce17420f86"
  },
  {
    "url": "index.html",
    "revision": "c327fa30f4cd97609f5b773c1508b3d9"
  },
  {
    "url": "not_found_dark.png",
    "revision": "b3c830790f3ca0106f3abf45ce34f5bb"
  },
  {
    "url": "not_found_light.png",
    "revision": "b7ff198048be214b3c0dcc864a215ebd"
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
