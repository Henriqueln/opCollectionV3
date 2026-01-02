
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/opCollectionV3/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/opCollectionV3"
  },
  {
    "renderMode": 2,
    "route": "/opCollectionV3/sets"
  },
  {
    "renderMode": 2,
    "route": "/opCollectionV3/sets-create"
  },
  {
    "renderMode": 2,
    "route": "/opCollectionV3/cards"
  },
  {
    "renderMode": 2,
    "route": "/opCollectionV3/support-strings"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 723, hash: '04ab04f922b06e088cc1638423ffa8b8ccac4847a11288908016d5c4b61c98f9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 967, hash: '9cbc0933ac745ceaae55a256b8d3bbf9867b67eaece18cc9f550c87091d0baa4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sets-create/index.html': {size: 99096, hash: 'b39a423e5c070dc553d48cee45093adca85e8aac0fb3c5c10672e28066ecbafe', text: () => import('./assets-chunks/sets-create_index_html.mjs').then(m => m.default)},
    'support-strings/index.html': {size: 96632, hash: 'ec62f21bd71872ee62169c8396f97f4e59733b9e7b5fb047ecd210f833026c34', text: () => import('./assets-chunks/support-strings_index_html.mjs').then(m => m.default)},
    'index.html': {size: 136091, hash: 'c19919c48087e562f8093e91ef7fe25b8ac3dca8060d110ba69122cc5c645ea1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sets/index.html': {size: 136118, hash: 'd2085c60f454a16c09e1fbe8dcb764552f79bd27b217d1fb83b6f630959d2b19', text: () => import('./assets-chunks/sets_index_html.mjs').then(m => m.default)},
    'cards/index.html': {size: 441032, hash: '8433bf279332375ad1d683f1c7453e4626e9d41cff2b06d7042558b1a3dba85e', text: () => import('./assets-chunks/cards_index_html.mjs').then(m => m.default)},
    'styles-K67QX5PQ.css': {size: 13262, hash: 'lIqpECkKKCQ', text: () => import('./assets-chunks/styles-K67QX5PQ_css.mjs').then(m => m.default)}
  },
};
