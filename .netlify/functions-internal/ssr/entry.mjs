import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DbuhMYkr.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BSm9-zcp.mjs');
const _page1 = () => import('./chunks/404_HvLb1SFP.mjs');
const _page2 = () => import('./chunks/about_COLZ1-xc.mjs');
const _page3 = () => import('./chunks/search_CPHatPWg.mjs');
const _page4 = () => import('./chunks/_.._BvHR4yJK.mjs');
const _page5 = () => import('./chunks/index_C5MdX0cE.mjs');
const _page6 = () => import('./chunks/_.._DnDiJKTU.mjs');
const _page7 = () => import('./chunks/index_DXuuAPJc.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/articles/search.astro", _page3],
    ["src/pages/articles/tag/[...tag].astro", _page4],
    ["src/pages/articles/index.astro", _page5],
    ["src/pages/articles/[...slug].astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "d30290f2-cc88-41d3-8b4f-872215c81648"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
