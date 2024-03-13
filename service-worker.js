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
    "revision": "6da6f0ac77d4f29fbecb9c6267bfa4bd"
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
    "url": "assets/js/101.a9fca17e.js",
    "revision": "ab8c9b76270a9c1e0d35191221763694"
  },
  {
    "url": "assets/js/102.965171db.js",
    "revision": "09f0892285170de608e113676cbde0bd"
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
    "url": "assets/js/108.92673015.js",
    "revision": "1dc8300425476e33a7333147560744cf"
  },
  {
    "url": "assets/js/109.d8acf7d7.js",
    "revision": "fe2afabc4b9810ffdc22048002713e8e"
  },
  {
    "url": "assets/js/11.f7d259a7.js",
    "revision": "d328fd8604187bded640989913379265"
  },
  {
    "url": "assets/js/110.fc702919.js",
    "revision": "84ff2156f4c09156bc23975ad96e9b5e"
  },
  {
    "url": "assets/js/111.ab0669f6.js",
    "revision": "f921145147cfdd58052e543f0a709c12"
  },
  {
    "url": "assets/js/112.297f431f.js",
    "revision": "4d5e815885c3073d70a12bac2f863cae"
  },
  {
    "url": "assets/js/113.dc4255c2.js",
    "revision": "b41e4b06108dee074be9420fa9c28f84"
  },
  {
    "url": "assets/js/114.8958bcaf.js",
    "revision": "478e0631266e9232925d2dccaf3fe6cb"
  },
  {
    "url": "assets/js/115.bfbc7ce5.js",
    "revision": "702cfcce23308c86acd67dc5a6cb0f02"
  },
  {
    "url": "assets/js/116.4a80a166.js",
    "revision": "2e8f72c07b84ee6f1ec978b73c59c01c"
  },
  {
    "url": "assets/js/117.e23f6549.js",
    "revision": "45b89eefd4870a976803a0c60073cac5"
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
    "url": "assets/js/122.0d655c4c.js",
    "revision": "a052667f4a25ca418841650675bd705d"
  },
  {
    "url": "assets/js/123.792f8b61.js",
    "revision": "74c68844818005d7d5b7b9a4c35def27"
  },
  {
    "url": "assets/js/124.ccb9d840.js",
    "revision": "9cab9bc1ab2ab42001d3d02d1e797f16"
  },
  {
    "url": "assets/js/125.639b53d4.js",
    "revision": "5a96a179a54b0df377347418a89cba5f"
  },
  {
    "url": "assets/js/126.9bd0cb03.js",
    "revision": "4bff4d2d4fdfa0087fe6e334dd9e6b60"
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
    "url": "assets/js/129.ae63a8e3.js",
    "revision": "3f8af4a70729a07e4158956c859f6f61"
  },
  {
    "url": "assets/js/13.2259ff62.js",
    "revision": "4aad864c6585c5a46e80a809b4e2718c"
  },
  {
    "url": "assets/js/130.bd636956.js",
    "revision": "08df4a14571e1706c043615485c879d8"
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
    "url": "assets/js/134.57190ce8.js",
    "revision": "7fbd80e46907d09a28836be8a0b4900b"
  },
  {
    "url": "assets/js/135.3dea51b7.js",
    "revision": "dc9ee04238edc755ae5c1d9d29352083"
  },
  {
    "url": "assets/js/136.d51378b1.js",
    "revision": "e172d9e531d3275f530b3170679910d5"
  },
  {
    "url": "assets/js/137.5a39ee12.js",
    "revision": "94a036bb22eafd18c4ff234cabe64ded"
  },
  {
    "url": "assets/js/138.788037fc.js",
    "revision": "97a21ca92a9df9d8731d8ef1a8f5919b"
  },
  {
    "url": "assets/js/139.09c8b6bd.js",
    "revision": "df1207c5c2c82f22fa74717941f971cd"
  },
  {
    "url": "assets/js/14.b4f779f1.js",
    "revision": "864ffac0141aede7fe81cdf7b01dcd63"
  },
  {
    "url": "assets/js/140.df216496.js",
    "revision": "874b86977896bc0f1a86749124d0f1b3"
  },
  {
    "url": "assets/js/141.a1fbe6bd.js",
    "revision": "c9c417d81de1c83c173ca7bd90739130"
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
    "url": "assets/js/145.fea98978.js",
    "revision": "0c7bac9a4c5f4d84c7b0d444d8a0eee8"
  },
  {
    "url": "assets/js/146.05fb4df1.js",
    "revision": "371a080f7c0c201e6923322558ab89b4"
  },
  {
    "url": "assets/js/147.b4dfea75.js",
    "revision": "a503dab4ce88c4c781e3902a4604f209"
  },
  {
    "url": "assets/js/148.90c1d38c.js",
    "revision": "b63b5a87871e12488d1b158d195189fa"
  },
  {
    "url": "assets/js/149.8ea67124.js",
    "revision": "b19a3c2bbe7b7df5e3d0d75d69505aea"
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
    "url": "assets/js/31.f4af6832.js",
    "revision": "44308eb429f6fb28565678ebd2715293"
  },
  {
    "url": "assets/js/32.e2551a54.js",
    "revision": "61d9bf339e601e26a435d2ca21666383"
  },
  {
    "url": "assets/js/33.5c5b45dc.js",
    "revision": "7e0e80816dd524cf1168c160ca0eee00"
  },
  {
    "url": "assets/js/34.9c516721.js",
    "revision": "84cd8d657b6db4df3226543f9037ce89"
  },
  {
    "url": "assets/js/35.fe3369a4.js",
    "revision": "3579f85f9541d07aba6062165e5081fa"
  },
  {
    "url": "assets/js/36.fa78c013.js",
    "revision": "ca48ce9d8fc77c566ad176d33c02dc20"
  },
  {
    "url": "assets/js/37.eebdaeb3.js",
    "revision": "2006eafa94488527235eb1138e7ff973"
  },
  {
    "url": "assets/js/38.a784c48c.js",
    "revision": "9e1d4292cfdce501b91d7472ea9e127d"
  },
  {
    "url": "assets/js/39.54369356.js",
    "revision": "ff517435f7c3a3100d4cf4a7e81b16b7"
  },
  {
    "url": "assets/js/4.0892267b.js",
    "revision": "63d69ef3205ae4b9a56a5298d97c85d4"
  },
  {
    "url": "assets/js/40.bcfaa5a0.js",
    "revision": "297c48ff295b6d1baf5f798d54c539e8"
  },
  {
    "url": "assets/js/41.ae8fa072.js",
    "revision": "c22d3a86ddbf5a83d61264589b7a79e0"
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
    "url": "assets/js/45.834fd86b.js",
    "revision": "aa73c2642985e158d70b5a1c529dc170"
  },
  {
    "url": "assets/js/46.b6052502.js",
    "revision": "90af22444e37c79c410dded2130ab9a3"
  },
  {
    "url": "assets/js/47.6d93cfac.js",
    "revision": "b1c5778bab3286b263068f48ef13f113"
  },
  {
    "url": "assets/js/48.56ea8974.js",
    "revision": "84b426a1275c57595a4b4f274fbbb76c"
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
    "url": "assets/js/52.b8ccefec.js",
    "revision": "e064b70376b4028bb98bee7ae264d7ff"
  },
  {
    "url": "assets/js/53.e9159218.js",
    "revision": "d74550eb41dd5c7ff9a5ea4c539aee82"
  },
  {
    "url": "assets/js/54.1d5a8825.js",
    "revision": "e5c1656e8fd9c0836ae8a08e9a54a11d"
  },
  {
    "url": "assets/js/55.4ad5c2a4.js",
    "revision": "bb33180860c0a72023f39bb44c33b4ed"
  },
  {
    "url": "assets/js/56.778acff2.js",
    "revision": "2b6377ddb1e8c09c0530f7765a9fb2c5"
  },
  {
    "url": "assets/js/57.4dcc49f0.js",
    "revision": "24069c52bb03a43cda22efc392c53bfe"
  },
  {
    "url": "assets/js/58.79cdbcde.js",
    "revision": "05c34f1be73aa80f3c9556eab7f69007"
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
    "url": "assets/js/60.45bc8f2f.js",
    "revision": "d9cc6b6070280b8a25b2c1d4f80b5f86"
  },
  {
    "url": "assets/js/61.fef26baf.js",
    "revision": "d3a3b335039b0e3755f1fbb9c7428eff"
  },
  {
    "url": "assets/js/62.8e9cfd8d.js",
    "revision": "3f913fe876f6de77aa777289d045006f"
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
    "url": "assets/js/67.157dd09b.js",
    "revision": "2e19b630e5133396140919875d94e069"
  },
  {
    "url": "assets/js/68.561ae9f6.js",
    "revision": "7ed4520fb2a2322e5f4219a08ab3f1bd"
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
    "url": "assets/js/73.1dab4b69.js",
    "revision": "4368c99659f2d2a2c26f5951e0be7429"
  },
  {
    "url": "assets/js/74.466a4abd.js",
    "revision": "ddb193d269c6fd12b36e571c9641203f"
  },
  {
    "url": "assets/js/75.a845fb4e.js",
    "revision": "e6c828fe419b765d35cf95f565d79f89"
  },
  {
    "url": "assets/js/76.7f9c2118.js",
    "revision": "756271da9de30fcb3b6a65fcad1203ab"
  },
  {
    "url": "assets/js/77.fc0d17da.js",
    "revision": "79d5b26fc033ff8ba12cd4c6da0d8f25"
  },
  {
    "url": "assets/js/78.898ad36a.js",
    "revision": "228482122c493e854de6ed6859eb565d"
  },
  {
    "url": "assets/js/79.d3f71ba4.js",
    "revision": "55ed93a57859c1cb2439f1167be2d2c0"
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
    "url": "assets/js/81.d466bc4c.js",
    "revision": "2345c6e3a5ab5a32bfb2d2ffb787cda5"
  },
  {
    "url": "assets/js/82.3697c764.js",
    "revision": "b8bf0c0fbf495ff9f1b6502ec010dc6a"
  },
  {
    "url": "assets/js/83.80a14c28.js",
    "revision": "1ce8bd4b7d300522c728cf1761562b47"
  },
  {
    "url": "assets/js/84.5da18f10.js",
    "revision": "c5c9d424c3fd04a4a1c29b8842996b07"
  },
  {
    "url": "assets/js/85.e595d648.js",
    "revision": "7c952bc9e7f68ee7a41878db27d0f0ea"
  },
  {
    "url": "assets/js/86.b3a60f84.js",
    "revision": "55dcf140f831d608f1ac2033acf9916f"
  },
  {
    "url": "assets/js/87.2aaed9d0.js",
    "revision": "08c59fdb6b7361b56129240a708a08e2"
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
    "url": "assets/js/97.2a34cbcc.js",
    "revision": "346cd5df3abd4f46ce3731a6509e83e9"
  },
  {
    "url": "assets/js/98.e281f68a.js",
    "revision": "08b22254ca12804dcd5e1458e802caea"
  },
  {
    "url": "assets/js/99.3f704aba.js",
    "revision": "60944e1ef122af9818b194626bea6446"
  },
  {
    "url": "assets/js/app.632bbee6.js",
    "revision": "8762420d873b911d27299beaae37bab2"
  },
  {
    "url": "assets/js/vendors~docsearch.d4d0a48a.js",
    "revision": "4cc0bd32b1bb6eaa9c9f3420bd6aba55"
  },
  {
    "url": "de/api/Detect.html",
    "revision": "5d156e0df866558b5f1ed0c48ba9b2b4"
  },
  {
    "url": "de/api/Guidelines.html",
    "revision": "5c995df0c352684b8759492ad174c63c"
  },
  {
    "url": "de/api/Ui.html",
    "revision": "b3be5ae83aa619d0dbf00c995bf07b09"
  },
  {
    "url": "de/effects/API.html",
    "revision": "649e1bbae062f4ee74f923c859d03833"
  },
  {
    "url": "de/effects/index.html",
    "revision": "ba54b4001d2aa9e4b20477606fe84491"
  },
  {
    "url": "de/effects/OurFirstEffect.html",
    "revision": "0e4489b5efbf042532d1558f29188159"
  },
  {
    "url": "de/index.html",
    "revision": "a6ffe3dfcfdd869eaba72f15cc09a418"
  },
  {
    "url": "de/json/Authentication.html",
    "revision": "5774bb57e05f5b790ef4205aa8e7ba82"
  },
  {
    "url": "de/json/Control.html",
    "revision": "1522dd57b71496d7091a2e36d250b435"
  },
  {
    "url": "de/json/index.html",
    "revision": "aee65b8164693c37045330aa91814301"
  },
  {
    "url": "de/json/ServerInfo.html",
    "revision": "1677bcadd2ff5f9b4556e6108c2ef33c"
  },
  {
    "url": "de/json/Subscribe.html",
    "revision": "8661a816394cc3a7c801258309217af6"
  },
  {
    "url": "de/user/advanced/Advanced.html",
    "revision": "2098e581467ba2db5a931a0d7392f1dc"
  },
  {
    "url": "de/user/advanced/CLI.html",
    "revision": "639681551ab3de4744e14706f692e31c"
  },
  {
    "url": "de/user/advanced/Support.html",
    "revision": "2b30709c94c912c0446e677aee330a74"
  },
  {
    "url": "de/user/advanced/Testing.html",
    "revision": "0f5c08968859fb84e7d5da7f18fe30ad"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "07c7050f36c3bfb28664b5ea9a7c227c"
  },
  {
    "url": "de/user/index.html",
    "revision": "69310f142de9347bf82873987f7de9ee"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "e33f32776781e9f0702817cc71bc44e7"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "0b6984abd62c33ccbc0fd1f10dcbef58"
  },
  {
    "url": "de/user/leddevices/index.html",
    "revision": "a59935f21301cbc3ec7d85c28708c1b7"
  },
  {
    "url": "de/user/leddevices/network/atmoorb.html",
    "revision": "6b2f8e2a05f8dc548c604b6874cbe46c"
  },
  {
    "url": "de/user/leddevices/network/cololight.html",
    "revision": "e5847e9a41ae51276fbbc31220b1d9a1"
  },
  {
    "url": "de/user/leddevices/network/fadecandy.html",
    "revision": "44373c019709dc8bd813675acf3f1215"
  },
  {
    "url": "de/user/leddevices/network/nanoleaf.html",
    "revision": "52652511b3b377258b90724b792c61e0"
  },
  {
    "url": "de/user/leddevices/network/philipshue.html",
    "revision": "32d143752266f71ee31b12d1722a7c39"
  },
  {
    "url": "de/user/leddevices/network/razer.html",
    "revision": "0f0d8829f8cb0c20d327227870e48bf3"
  },
  {
    "url": "de/user/leddevices/network/tinkerforge.html",
    "revision": "1a8ed0146ff6d87aba80cd50133b214c"
  },
  {
    "url": "de/user/leddevices/network/tpm2net.html",
    "revision": "534e00e2c04c9a04c47f691fcda33bfa"
  },
  {
    "url": "de/user/leddevices/network/udpartnet.html",
    "revision": "f9279aba3c5f82f87d772c528d02cb14"
  },
  {
    "url": "de/user/leddevices/network/udpddp.html",
    "revision": "c7390f0da21404d4f128279173c95e22"
  },
  {
    "url": "de/user/leddevices/network/udpe131.html",
    "revision": "2a58fabb0e98f8859822177daa4d40a5"
  },
  {
    "url": "de/user/leddevices/network/udph801.html",
    "revision": "a84f316c6ce249e614e27aca7ebc916f"
  },
  {
    "url": "de/user/leddevices/network/udpraw.html",
    "revision": "10612ff15a2650721f89e70781221bbe"
  },
  {
    "url": "de/user/leddevices/network/wled.html",
    "revision": "e972803b0b5fca929c268b82d5ed8fdc"
  },
  {
    "url": "de/user/leddevices/network/yeelight.html",
    "revision": "029d44cf316d91c9eba8b66fc60ef55f"
  },
  {
    "url": "de/user/leddevices/others/debug.html",
    "revision": "d434efbef58c1af41696bbda51c8cdba"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa102.html",
    "revision": "35a9ba405d2f12b56db55b508a274918"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa104.html",
    "revision": "e2f9fb1e1a96fe4983943e82d37667e8"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "a41559d084c0d67c51b5bf02153bb39a"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "c5836fd5126bf286ca3934d4aab09e82"
  },
  {
    "url": "de/user/leddevices/spi_pwm/p9813.html",
    "revision": "485ee0e4d1a361edee05e25036b0a6f0"
  },
  {
    "url": "de/user/leddevices/spi_pwm/piblaster.html",
    "revision": "93b852975df2b42ee595708db14b7644"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6812.html",
    "revision": "9b2a4b40ff1a05a0a381cb740f51923d"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6822.html",
    "revision": "428200c9122e62651c96c8ffd286813f"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk9822.html",
    "revision": "439f0ecd2102b1f6cf8bd7f66d5342fd"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2801.html",
    "revision": "b5da228d5b8ebbe8ff944128d404b07d"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2812.html",
    "revision": "25ec8dc579c1dfe92c46afb914bd558b"
  },
  {
    "url": "de/user/leddevices/usb/adalight.html",
    "revision": "710fdca1043bae57e4adbbeb19384b95"
  },
  {
    "url": "de/user/leddevices/usb/atmo.html",
    "revision": "0b1694c843115c5a2a027d6a6b40282d"
  },
  {
    "url": "de/user/leddevices/usb/dmx.html",
    "revision": "cc895e626afdf08815c3bca683fec233"
  },
  {
    "url": "de/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "dbf2cf9bb7837042809447d7529191bc"
  },
  {
    "url": "de/user/leddevices/usb/karate.html",
    "revision": "b593d8507c5de973aeb8ce3378b63234"
  },
  {
    "url": "de/user/leddevices/usb/lightpack.html",
    "revision": "f26b638570ecbd68be80049be09753b9"
  },
  {
    "url": "de/user/leddevices/usb/multilightpack.html",
    "revision": "cc3a6fdd7028a78cc5bb4f7fc59ff6e6"
  },
  {
    "url": "de/user/leddevices/usb/paintpack.html",
    "revision": "484933fbb8b4e8f393158981389023fd"
  },
  {
    "url": "de/user/leddevices/usb/rawhid.html",
    "revision": "80b389f11b8075ecf495367838734e4b"
  },
  {
    "url": "de/user/leddevices/usb/sedu.html",
    "revision": "4e3041502893903b1deae9445a9651c4"
  },
  {
    "url": "de/user/leddevices/usb/tpm2.html",
    "revision": "83c404052d71ddd3ff940f7f28648a00"
  },
  {
    "url": "en/addons/API.html",
    "revision": "2e11c98395ad213f5331500d9ccad7bc"
  },
  {
    "url": "en/addons/index.html",
    "revision": "56a7d0fa563764447cdd0b69a8a28369"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "0ae3ef4a262cc70037687869feb4742b"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "d40172e63608ed38e241a3538fa0aedf"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "80038ab464398e99890de05b61e155ad"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "9985d2adfdf76fda72c453f3515032e7"
  },
  {
    "url": "en/effects/API.html",
    "revision": "b6d7f3dd3e9471df8a5602c6cc32d277"
  },
  {
    "url": "en/effects/index.html",
    "revision": "77613981036e2a9a43c1282870208997"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "f1bee5f39c2bad5235da48050c71a940"
  },
  {
    "url": "en/json/Authentication.html",
    "revision": "83db5e57f75e620a9927d5af9e3aab87"
  },
  {
    "url": "en/json/Control.html",
    "revision": "c1c02b451dae437ed9a24d360cb237b9"
  },
  {
    "url": "en/json/index.html",
    "revision": "5f17624288330cf5d1c5d5f1b6e32282"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "2c6e63498713196ca3a743cd3b3a2689"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "ec51e865a3ed07c76d08e9cc8704f20f"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "ccccfa3f75f461147948849374124d0c"
  },
  {
    "url": "en/user/advanced/CLI.html",
    "revision": "0c24296e69c8b38cd7747f07906fccce"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "3afae127cee630d1731e5c52c366763b"
  },
  {
    "url": "en/user/advanced/Testing.html",
    "revision": "06f45ba7248cf838e9839db306641f7e"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "2576fc5cc6c07a04e64fd2d38c73b99a"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "bd958f9815627355af9cdf57b19ea77b"
  },
  {
    "url": "en/user/index.html",
    "revision": "3077c79764f852b20007f6ee260b5d61"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "0def0a6446af8ca7e5c380e851e8d5d2"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "7578a2b84debcf1ba61ad25194db7aa9"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "8799397ee99cb23c6578867e62e4738b"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "ffc43f74114986c8c580cd0377705fba"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "c8c07888ac5ee059704af2da39a7af24"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "797755dfae3333594e135b61ed548e05"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "8f21472a0e0359d315e18113ec3a3e5a"
  },
  {
    "url": "en/user/leddevices/network/razer.html",
    "revision": "4e41970f4cd47d0f61cf5deaa3f5baa6"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "2027aa0ec51ba646e9b05f8561646681"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "8bff57dc90def9f8ee971b41160ceb0c"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "fde67ac91e985128a2ff44d46239c308"
  },
  {
    "url": "en/user/leddevices/network/udpddp.html",
    "revision": "ca57ceb3c30c9ccc0f721becab50bd03"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "5f12b286937867bfae6f313e35b2d20e"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "bf06c9ecf83d6df8fad120931a4f6f75"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "f68ea835033f28c756ec38847ae796b7"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "06e2ab09d62186fea54214ea93aed5a3"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "711e6a36229a85c0cd78c905837dfba8"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "5abcb84234c76ba7484a5e4645640389"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa102.html",
    "revision": "e8c3b1a3c570e46533e7358b83cc20b6"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa104.html",
    "revision": "20f14e9cedd64e5eb33777514ae4bccb"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "3230bdc66fbeb1e8a15f0d48cdb83909"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "9b06b65f6b22836ebbb5088068eee645"
  },
  {
    "url": "en/user/leddevices/spi_pwm/p9813.html",
    "revision": "4678d33703e935d276a72cad4a25a8f5"
  },
  {
    "url": "en/user/leddevices/spi_pwm/piblaster.html",
    "revision": "2bdacd15a5696892a09752b0cebaf4e1"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6812.html",
    "revision": "df98b5573c1076a132646aeb9da81b51"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6822.html",
    "revision": "f41f32ce4980aabac50964f06a2bb63c"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk9822.html",
    "revision": "726f98b533826691edbd527b71762d5e"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2801.html",
    "revision": "1c8dca68930eb9ea070eef3922229c79"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2812.html",
    "revision": "b7efdd3762d7e75543ad797e01371574"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "07b41077967f32fff2242cf5981c0440"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "fabd0c8b8d4c0f6f426884394b981c72"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "b20745efe572aefafbec0f5dfb8d3509"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "f4cc0e255444ea30e9812d9229bc916a"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "a8818c4d82855f45df8f2925c3eba5bd"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "d61722da285f769d3c46d0197504c6eb"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "d01533e550cfe43e1c539cfbbc61c545"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "96c15aff257e47d6a7d6184422b061ab"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "cab83481d9636d6b04d14769e8e02426"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "864877234413ee4d1649d75c777ad2b0"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "983f9189af37f4e6717de4fa0180b965"
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
    "revision": "897c4d8122901cbb9dc74bdc42254e88"
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
