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
    "revision": "0d209d4b395b52c5c6ab858e5eebd114"
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
    "url": "assets/js/100.983d8f49.js",
    "revision": "470bcf6ebacc4f4ab759ae3a83d068f2"
  },
  {
    "url": "assets/js/101.735db2a0.js",
    "revision": "cdc43e46b3e1c4991101391c52fa935f"
  },
  {
    "url": "assets/js/102.40950cb0.js",
    "revision": "bc6c94112d2aef1de546a42aa5c9929b"
  },
  {
    "url": "assets/js/103.3140e5df.js",
    "revision": "ad2b663bd2e28313299c48a613514865"
  },
  {
    "url": "assets/js/104.cfb4f647.js",
    "revision": "0a788dacaa7d83b5e0936d6b2c7e6272"
  },
  {
    "url": "assets/js/105.76fbc51f.js",
    "revision": "04286bdfd3b32e12cd2d79e6acc9fb9c"
  },
  {
    "url": "assets/js/106.0dd2682e.js",
    "revision": "bf2aa6f90d267148de17f94bf33bc87e"
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
    "url": "assets/js/111.ab0669f6.js",
    "revision": "f921145147cfdd58052e543f0a709c12"
  },
  {
    "url": "assets/js/112.45275985.js",
    "revision": "cb8da9cc62d7496c96749221af29915c"
  },
  {
    "url": "assets/js/113.5c9e096d.js",
    "revision": "a89fc4ae44da1050b6fbb66445f287dd"
  },
  {
    "url": "assets/js/114.e6fe248b.js",
    "revision": "bb96f85b2d9ea361fea9f389ea68b74d"
  },
  {
    "url": "assets/js/115.03f218d5.js",
    "revision": "b937c31aa90be2307c6a9512c5c71b61"
  },
  {
    "url": "assets/js/116.d511c33b.js",
    "revision": "01d5de705d16e4379c081852ac2813b6"
  },
  {
    "url": "assets/js/117.eb613fc3.js",
    "revision": "303f01417fa9fa0d41748333ba36a4a4"
  },
  {
    "url": "assets/js/118.85d1e112.js",
    "revision": "6c6f5aab8593d0ef69e1c9779e2fb924"
  },
  {
    "url": "assets/js/119.a9c15e20.js",
    "revision": "d35d1597647806d75d76b963cf8d2f88"
  },
  {
    "url": "assets/js/12.a1977597.js",
    "revision": "78ea8fea2bec953b25f7fbe76667473f"
  },
  {
    "url": "assets/js/120.25b63811.js",
    "revision": "22de905adfd0179348dcdc4e4f855bab"
  },
  {
    "url": "assets/js/121.6008c893.js",
    "revision": "dbaa3050569ba877f6df43b9e39e4d5c"
  },
  {
    "url": "assets/js/122.d81783e1.js",
    "revision": "c28722d5988afff71bdc29fd6081d929"
  },
  {
    "url": "assets/js/123.792f8b61.js",
    "revision": "74c68844818005d7d5b7b9a4c35def27"
  },
  {
    "url": "assets/js/124.4c83fc5d.js",
    "revision": "581fe898a395c745700965fece57e2e6"
  },
  {
    "url": "assets/js/125.ab9d678c.js",
    "revision": "b1c5eb1ebb46fbeb34e87c0c03508576"
  },
  {
    "url": "assets/js/126.7fe84590.js",
    "revision": "f31b4e84d161ca34a1285ded854c0f39"
  },
  {
    "url": "assets/js/127.d1018768.js",
    "revision": "c90cf27df6f0d79be7c1b0dcb8a2c21f"
  },
  {
    "url": "assets/js/128.79198460.js",
    "revision": "cf2f4815d364247d6be220d1783be65f"
  },
  {
    "url": "assets/js/129.c4009253.js",
    "revision": "937ceee167266b13640ef9f83a4ce2fd"
  },
  {
    "url": "assets/js/13.2259ff62.js",
    "revision": "4aad864c6585c5a46e80a809b4e2718c"
  },
  {
    "url": "assets/js/130.2a46e3d1.js",
    "revision": "7f687859bafe7c8e172fe08f9400da09"
  },
  {
    "url": "assets/js/131.0549b8f6.js",
    "revision": "f815765958d49e21dc40ea586c148e18"
  },
  {
    "url": "assets/js/132.ec57e910.js",
    "revision": "f84a8594afff29cc5954f6b532a118b3"
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
    "url": "assets/js/139.ec8b408b.js",
    "revision": "7fb0c345dacaaa52115a27bbcf4d90bd"
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
    "url": "assets/js/141.f3eb8170.js",
    "revision": "7eb685e83165e66916d13354efeadeb2"
  },
  {
    "url": "assets/js/142.c80cc94b.js",
    "revision": "dcf8c3f72be8b35aed0070b8adf6b526"
  },
  {
    "url": "assets/js/143.61c8d8e6.js",
    "revision": "4cb70f28afa3697df223ef788d5caaf1"
  },
  {
    "url": "assets/js/144.d912fc67.js",
    "revision": "b04e922c65993dc8768caa336ba19b80"
  },
  {
    "url": "assets/js/145.c8f51f29.js",
    "revision": "052287f3d53256677c4884431f67db5f"
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
    "url": "assets/js/151.bb1a8a3f.js",
    "revision": "586415308742059ce8f74f022be5817e"
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
    "url": "assets/js/32.2257b181.js",
    "revision": "a29ec65c39cd456de2b131c40a470411"
  },
  {
    "url": "assets/js/33.bfa937e0.js",
    "revision": "54ebf78f5de12959a0d7159f4def4f70"
  },
  {
    "url": "assets/js/34.c3381bbf.js",
    "revision": "1037914e415d905c2f62e3ddc1b78812"
  },
  {
    "url": "assets/js/35.c87faed9.js",
    "revision": "f93b859781e635a888561c92d2a79a50"
  },
  {
    "url": "assets/js/36.1acc6339.js",
    "revision": "7545f7478a9254d16d5f2f2968a957d1"
  },
  {
    "url": "assets/js/37.4ae8e8f0.js",
    "revision": "34d11ad61f254e57a54e8280e11efd6f"
  },
  {
    "url": "assets/js/38.965fd0cc.js",
    "revision": "e5d953bd971027ee2dfde3bc6120664d"
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
    "url": "assets/js/41.f836e671.js",
    "revision": "58b9f13c724360cdaf1e19b72ddf8d20"
  },
  {
    "url": "assets/js/42.41de1f66.js",
    "revision": "c083658ea6bf4a5bfb54efe04a0ce632"
  },
  {
    "url": "assets/js/43.5f29aca1.js",
    "revision": "2c718fdb5de6de5db809bf5dc919d1e8"
  },
  {
    "url": "assets/js/44.e61b1699.js",
    "revision": "87ef9fc99515a7857bdd7541b66126c5"
  },
  {
    "url": "assets/js/45.05693636.js",
    "revision": "6b743b2ac30b0f3368453faaefe92aa1"
  },
  {
    "url": "assets/js/46.fef05857.js",
    "revision": "ce47f639846eed9f7107bdcf3f5b0fc7"
  },
  {
    "url": "assets/js/47.6d93cfac.js",
    "revision": "b1c5778bab3286b263068f48ef13f113"
  },
  {
    "url": "assets/js/48.05227816.js",
    "revision": "d3c2aaf6d9b736ab93eb08b312a4588f"
  },
  {
    "url": "assets/js/49.77ad194e.js",
    "revision": "efa0c62787a0989c54499dd5b6334ba7"
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
    "url": "assets/js/51.162c2fcf.js",
    "revision": "79d0aaa6793a78ee102405353d9ae15b"
  },
  {
    "url": "assets/js/52.8162c9c4.js",
    "revision": "b5b1ac85453ee839c321a2b510f45d17"
  },
  {
    "url": "assets/js/53.e9159218.js",
    "revision": "d74550eb41dd5c7ff9a5ea4c539aee82"
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
    "url": "assets/js/56.9a64c96a.js",
    "revision": "b1e67ffde69cfa99e42747d58ced040f"
  },
  {
    "url": "assets/js/57.2bd16517.js",
    "revision": "70bdb48e56afc1d51fa82436c8f3ecf7"
  },
  {
    "url": "assets/js/58.7a46c727.js",
    "revision": "2f70ddb1ce76f8c73eddc78dee0ea5a6"
  },
  {
    "url": "assets/js/59.a1eb12a4.js",
    "revision": "c6727340062b5c2be590805b9cc40623"
  },
  {
    "url": "assets/js/6.f1fe53c9.js",
    "revision": "7ac5f95d9ae03e6169216c178496ab92"
  },
  {
    "url": "assets/js/60.45bc8f2f.js",
    "revision": "d9cc6b6070280b8a25b2c1d4f80b5f86"
  },
  {
    "url": "assets/js/61.013bf164.js",
    "revision": "f8e43f4eca8a56e47b12c0102dcafb3b"
  },
  {
    "url": "assets/js/62.83a77d03.js",
    "revision": "e2178a134593b8db5b72f062d6bca2d1"
  },
  {
    "url": "assets/js/63.26a7ae4c.js",
    "revision": "9ae807abf2d95721af05dd7435f2fe99"
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
    "url": "assets/js/69.8cfc1eca.js",
    "revision": "705d8ceef3e5face2434395f007fe1af"
  },
  {
    "url": "assets/js/7.561e4e5b.js",
    "revision": "ae0cc3284283658bcf538f97fe923664"
  },
  {
    "url": "assets/js/70.cb0c9e9b.js",
    "revision": "976cc62a65a7f7571a1b0cb032fd5378"
  },
  {
    "url": "assets/js/71.2f615c43.js",
    "revision": "aa1f393e65560c02aa002b12091b6180"
  },
  {
    "url": "assets/js/72.5e857d83.js",
    "revision": "fb8d770bf163b99f8e9d4ef2944cac66"
  },
  {
    "url": "assets/js/73.9743ba45.js",
    "revision": "d410db52b1f9faa8067087aaa0859962"
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
    "url": "assets/js/76.beb1ca7f.js",
    "revision": "b834b1604a0d4bff28fe16173057c5e4"
  },
  {
    "url": "assets/js/77.c010ed54.js",
    "revision": "a8c7cb3ea4475f06675219ffffe7dcfb"
  },
  {
    "url": "assets/js/78.e0395e68.js",
    "revision": "737a55b7fe0766602a25eaf4580564ef"
  },
  {
    "url": "assets/js/79.ed493416.js",
    "revision": "e5050f17feed6c28236eb0a9e98a7b55"
  },
  {
    "url": "assets/js/8.c5bd91eb.js",
    "revision": "fdd7fb1776ff7617a01b08b024a1878f"
  },
  {
    "url": "assets/js/80.2ef41c26.js",
    "revision": "03051f038386a02f1b94a0c4e65dd81d"
  },
  {
    "url": "assets/js/81.fac646e0.js",
    "revision": "14fbaeee1fc57b77fa77f03f5a7f46e4"
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
    "url": "assets/js/86.457382d4.js",
    "revision": "907723c34dd47ec2b93eb32b67bf9a25"
  },
  {
    "url": "assets/js/87.2aaed9d0.js",
    "revision": "08c59fdb6b7361b56129240a708a08e2"
  },
  {
    "url": "assets/js/88.ab9b531c.js",
    "revision": "a5edcb563ba86b57e92d5abcf0844124"
  },
  {
    "url": "assets/js/89.29b0b6ee.js",
    "revision": "28e1c7d309712f34ba0cdfdcb9e98679"
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
    "url": "assets/js/96.f63cad0b.js",
    "revision": "12ae778014074049307c53ba9e7fdf0e"
  },
  {
    "url": "assets/js/97.05b912d4.js",
    "revision": "b3bbb7fdf976a6da393ba0596b145afd"
  },
  {
    "url": "assets/js/98.2f342b2e.js",
    "revision": "7878cff4d2b448cc9c4b305037929b21"
  },
  {
    "url": "assets/js/99.3f704aba.js",
    "revision": "60944e1ef122af9818b194626bea6446"
  },
  {
    "url": "assets/js/app.25aefa62.js",
    "revision": "9fb22627d7b2b4d88c7a6c5f3f72be46"
  },
  {
    "url": "assets/js/vendors~docsearch.d4d0a48a.js",
    "revision": "4cc0bd32b1bb6eaa9c9f3420bd6aba55"
  },
  {
    "url": "de/api/Detect.html",
    "revision": "a71090e989361424986bb0c8dd17d0f3"
  },
  {
    "url": "de/api/Guidelines.html",
    "revision": "db77fcc8a221e7afae1fd2385bcbbdd0"
  },
  {
    "url": "de/api/Ui.html",
    "revision": "57752567cd0f4cc545f8ec4875fc45a4"
  },
  {
    "url": "de/effects/API.html",
    "revision": "4168b161c7cc4655f21c9117198c2459"
  },
  {
    "url": "de/effects/index.html",
    "revision": "00811cb3cd58d4a71b5c3ec1a9c33d5e"
  },
  {
    "url": "de/effects/OurFirstEffect.html",
    "revision": "775faed9f5be0f83e85527cbdd2e12fe"
  },
  {
    "url": "de/index.html",
    "revision": "b10a5a7f240e1acde00ce75991e08417"
  },
  {
    "url": "de/json/Authentication.html",
    "revision": "56aff18cf9d61b4f8e8cbb5aa312b635"
  },
  {
    "url": "de/json/Control.html",
    "revision": "c4b7c1799f785d0fc689cc41e0e3a59e"
  },
  {
    "url": "de/json/index.html",
    "revision": "667bfa8b7bcd4bfa762281a125a747e2"
  },
  {
    "url": "de/json/ServerInfo.html",
    "revision": "413a92126dabbc24bb8cdd1ed7d895b8"
  },
  {
    "url": "de/json/Subscribe.html",
    "revision": "c7cf1f399842ee2cba8784b8baaf5d9f"
  },
  {
    "url": "de/user/advanced/Advanced.html",
    "revision": "d43bc4c50b4efeae55e14b3743c3ea36"
  },
  {
    "url": "de/user/advanced/CLI.html",
    "revision": "971c5d321b505c7dd0f53d2df30a1ca2"
  },
  {
    "url": "de/user/advanced/Support.html",
    "revision": "38f9c77b290fed99f01c62df133a8a96"
  },
  {
    "url": "de/user/advanced/Testing.html",
    "revision": "59ba0bf39c095daa9c2692b7c10585f6"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "2eac053258d629d5225f69031d2801ed"
  },
  {
    "url": "de/user/index.html",
    "revision": "2ffaa819f6c0136a630b6b9dfeb88223"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "90450615d2b867e3894aafaf31f80099"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "1f488adc2ac112c3255c4732ead8f39f"
  },
  {
    "url": "de/user/leddevices/index.html",
    "revision": "261a4fe2f0b36306afb12564f3ef7236"
  },
  {
    "url": "de/user/leddevices/network/atmoorb.html",
    "revision": "313345cd4818ea2d9b3f03723e84a527"
  },
  {
    "url": "de/user/leddevices/network/cololight.html",
    "revision": "3ac05d0d07229e1029a87d89342653ba"
  },
  {
    "url": "de/user/leddevices/network/fadecandy.html",
    "revision": "078b3135fdc0a894bfaed1cac79b6db1"
  },
  {
    "url": "de/user/leddevices/network/nanoleaf.html",
    "revision": "0bfa0e56db8f2c6f8ef948601eb6eb41"
  },
  {
    "url": "de/user/leddevices/network/philipshue.html",
    "revision": "065eb09b87201061e3b6dfafdfdfa88a"
  },
  {
    "url": "de/user/leddevices/network/razer.html",
    "revision": "f880d32620bbbacfca23c2e50cb90ce9"
  },
  {
    "url": "de/user/leddevices/network/tinkerforge.html",
    "revision": "3c462a28466f1765c8c5f80132092f76"
  },
  {
    "url": "de/user/leddevices/network/tpm2net.html",
    "revision": "2a6f91f4eeac88eb29f41773c1d1032b"
  },
  {
    "url": "de/user/leddevices/network/udpartnet.html",
    "revision": "0ad00dcdd372086b70ae90df890cb663"
  },
  {
    "url": "de/user/leddevices/network/udpddp.html",
    "revision": "ced1b55f4b11e91fc814fd940af0174e"
  },
  {
    "url": "de/user/leddevices/network/udpe131.html",
    "revision": "5835b29b4e5d59690a9cf4f4789901a6"
  },
  {
    "url": "de/user/leddevices/network/udph801.html",
    "revision": "082157eb7186f594c4fe83b6cdd1b6d5"
  },
  {
    "url": "de/user/leddevices/network/udpraw.html",
    "revision": "f05af73a6bbc6bed5c00bca0ad93131c"
  },
  {
    "url": "de/user/leddevices/network/wled.html",
    "revision": "ea4200a96a9c1113793591b02450210f"
  },
  {
    "url": "de/user/leddevices/network/yeelight.html",
    "revision": "76262e451c1bf7a00a91571d98ba529d"
  },
  {
    "url": "de/user/leddevices/others/debug.html",
    "revision": "be7e7195555e8ecbed7b269c3ae5c9dc"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa102.html",
    "revision": "c1b3a5cc08b9b352978fbe90f8b55831"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa104.html",
    "revision": "6ce6da8c0f1fc9b793d7a771e0d42ab5"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "8694e9dd40dc5b3a5f279f463a7d190d"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "b3c7e2c25effac3a7cf8dddd670bedec"
  },
  {
    "url": "de/user/leddevices/spi_pwm/p9813.html",
    "revision": "2abc385758c7529796a3c7028af173a4"
  },
  {
    "url": "de/user/leddevices/spi_pwm/piblaster.html",
    "revision": "1fd208050c855d6a038686e36d58ad0f"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6812.html",
    "revision": "09abfff8f7304171e0edb081525ec627"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6822.html",
    "revision": "f73b44d79bee4f2dde3f01ec23e1679b"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk9822.html",
    "revision": "76d83c72c6d7c56302dfbabcc88e2264"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2801.html",
    "revision": "70cf26839b5a953b47ece9738008fc1d"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2812.html",
    "revision": "0a8f31e5613ab645eb5a9d3d29dd3c36"
  },
  {
    "url": "de/user/leddevices/usb/adalight.html",
    "revision": "effcfa2b3eb8b32b9472f147e60e0107"
  },
  {
    "url": "de/user/leddevices/usb/atmo.html",
    "revision": "41f7decaadd3d6a51588518fcdacc2d5"
  },
  {
    "url": "de/user/leddevices/usb/dmx.html",
    "revision": "91108e872f8e11695eecce7b63bd2532"
  },
  {
    "url": "de/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "742e481a5f3df2f86def8fed8468228f"
  },
  {
    "url": "de/user/leddevices/usb/karate.html",
    "revision": "ebe0f92b05152437d2024fe89e9a36ba"
  },
  {
    "url": "de/user/leddevices/usb/lightpack.html",
    "revision": "c7b937f01907834440af7c2dc9b93f75"
  },
  {
    "url": "de/user/leddevices/usb/multilightpack.html",
    "revision": "b02c19e3178b498954a2c7e1ca87cc4b"
  },
  {
    "url": "de/user/leddevices/usb/paintpack.html",
    "revision": "ba749a9858a6247f32812e5f3991880b"
  },
  {
    "url": "de/user/leddevices/usb/rawhid.html",
    "revision": "aa2b64717f950115f5a4e286ecc6347f"
  },
  {
    "url": "de/user/leddevices/usb/sedu.html",
    "revision": "720f2ba1e87f3e0a397c2bab9b375ff1"
  },
  {
    "url": "de/user/leddevices/usb/tpm2.html",
    "revision": "54131fc83f6585a6f2358067893d6936"
  },
  {
    "url": "en/addons/API.html",
    "revision": "2245148a42498f4f703b077d2f154b1c"
  },
  {
    "url": "en/addons/index.html",
    "revision": "4f51b7c40c20742a1a322a1dc758f79a"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "375ded008c418d8a4e5af0cd87d2ef98"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "6bb288ddbd5e5016bb710a75eeaac971"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "81c28ec424e9b1096ec8d14c2bd8e344"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "db3b4b78c66bc0f2b4da74b8358394c8"
  },
  {
    "url": "en/effects/API.html",
    "revision": "3741647f5efdc9865b7722caad159932"
  },
  {
    "url": "en/effects/index.html",
    "revision": "285d6bd946379090f1fa8c03b78cc39a"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "f6640068f099be53607c596e71bd428b"
  },
  {
    "url": "en/json/Authentication.html",
    "revision": "f56d99438455a653d84294d2b6bbe925"
  },
  {
    "url": "en/json/Control.html",
    "revision": "7d14d57414c34097de5066c58421bfe2"
  },
  {
    "url": "en/json/index.html",
    "revision": "81cc9adcbde7a51604958ffaa03ac780"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "955038872399fc63c3445b5eb8834036"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "bd527d8db8504d7fc62352606d7c784a"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "db72c2a23cc350922285665584c66b99"
  },
  {
    "url": "en/user/advanced/CLI.html",
    "revision": "35bbdfeaf33c8f46d5ec4b5760ce335f"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "6d3d01ba73551262f3c71c944af6068a"
  },
  {
    "url": "en/user/advanced/Testing.html",
    "revision": "231784beb771518e5c918dc4165cde67"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "5ed458c58d8a9eb88d868951bf70596d"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "054f82256c74f096189651024050aa1c"
  },
  {
    "url": "en/user/index.html",
    "revision": "95ac5f405afb1d32a01292b95fedeeee"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "f71797ce8657720c6041b0d116d461ff"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "631f9435f4d84627d1fd439a951647b9"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "ca319cf54443e7d026ccbba01d9d9eb4"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "4b06d1f70c2751694614d6be0e029063"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "450d21d70d8fdf4b24a239cb4541b25c"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "fb1d720009825420ed59587932ea1167"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "758769189d58c38027f3e7293d861ae4"
  },
  {
    "url": "en/user/leddevices/network/razer.html",
    "revision": "f4564eed3d9d4ba969dc54edcb238e0a"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "a677643718bfe6ae7b291e35fd24e765"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "848d6ea50e292e51979a997da5e07573"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "4887d3320eeb22598cc4c8703fd56bf3"
  },
  {
    "url": "en/user/leddevices/network/udpddp.html",
    "revision": "af57e63b7db2ead9b0baff654f8875dc"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "49179475cf501177a3d0d3386f47bf2d"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "e4e83057bb564a6782bbe494c3d243f2"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "d3a6bd692d30d4b260fa38c6b60fcf6a"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "8d486cf546264e46b5c0ab693ec9d822"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "22c80007f12c120a6891122ad2e3f632"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "6ae8e35d779a5dbbc1928fd05dbd2621"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa102.html",
    "revision": "fa7f196e37777233f8d421981206fa4c"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa104.html",
    "revision": "8ddd3b8403e649c8da53e2c77b9a79ab"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "be2303c2278d7b5a2a216b460f051c27"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "a7313e4c1e8ed2647166174c32e328be"
  },
  {
    "url": "en/user/leddevices/spi_pwm/p9813.html",
    "revision": "34b9c93aee05800dff9126e64cc807e5"
  },
  {
    "url": "en/user/leddevices/spi_pwm/piblaster.html",
    "revision": "c4ad1f207609a0c7c26029610b069a4c"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6812.html",
    "revision": "3411a068717bf1c9bf01bc2e47b25bc1"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6822.html",
    "revision": "e2e9d843a7e10fedfa193767f1d0e0ec"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk9822.html",
    "revision": "b9c5b0a573e25682178c117075061182"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2801.html",
    "revision": "183ca5109ffae66f894530ee35dbd2af"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2812.html",
    "revision": "d9ebcb18caa1d93fd47ec6a215c55333"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "4a79fa7ad15da0ca99455b48ca2da43c"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "4a9d6bb22ececf7f07839600e053dc35"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "d939ea7c6adc225f8a09fe8dbb4c70be"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "1af71ffd6143321819c633097517e962"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "02998200055a479cddf1768371f932de"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "7e7b5ab79f941bb187ebc4f9717ba56b"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "157b37ee3dffe8c640a3d1794e59e48d"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "af9c779ce8bf9760bf02b09f09a2b861"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "ab6c82c27ede55dfff8d558f8a9f3342"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "5bc0ee18f627a9ae901918d89436245a"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "eaa0827b3e7d9cc72fb9adaed172abf6"
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
    "revision": "729c329b0471755f2b64d76f8982b5f6"
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
