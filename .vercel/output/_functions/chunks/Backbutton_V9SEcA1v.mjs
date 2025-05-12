import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_XpjfVGI5.mjs';
import 'kleur/colors';
import 'clsx';

const $$Backbutton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button class="bg-purple-500 text-white p-2 rounded m-4 cursor-pointer hover:bg-purple-600 transition-colors duration-300" onclick="window.history.back()">
Go back
</button>`;
}, "C:/Users/HP/Documents/Astro/Food website/src/components/Backbutton.astro", void 0);

export { $$Backbutton as $ };
