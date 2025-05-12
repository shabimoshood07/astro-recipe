import { r as renderers } from './chunks/internal_BsTt5pTQ.mjs';
import { c as createExports } from './chunks/entrypoint__h8fUiSc.mjs';
import { manifest } from './manifest_BzqjC-M4.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/categories.astro.mjs');
const _page2 = () => import('./pages/category/_category_.astro.mjs');
const _page3 = () => import('./pages/recipe/_id_.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/categories.astro", _page1],
    ["src/pages/category/[category].astro", _page2],
    ["src/pages/recipe/[id].astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c6815906-6ea9-49d8-93ef-a9d37b855024",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
