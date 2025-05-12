import { c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderTemplate, a as createAstro, e as renderScript, b as renderComponent, f as renderHead, g as renderSlot } from './astro/server_XpjfVGI5.mjs';
import 'kleur/colors';
/* empty css                              */
import 'clsx';

const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const data = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
  );
  const { meals } = await data.json();
  return renderTemplate`${maybeRenderHead()}<header class="bg-purple-500 h-screen w-full max-w-60 sticky top-0"> <nav class="flex flex-col items-center p-4 gap-y-2 mx-auto my-8"> <a href="/" class="text-base text-gray-100 w-full text-left">Home</a> <ul class="space-y-2 flex flex-col justify-start items-start w-full"> ${meals.map((category) => renderTemplate`<li class="w-full hover:bg-gray-200 transition-all duration-300 rounded-md  group cursor-pointer"> <a${addAttribute(`/category/${category.strCategory}`, "href")} class="text-base text-gray-100 group-hover:text-purple-500 w-full block p-2 "> ${category.strCategory} </a> </li>`)} </ul> </nav> </header>`;
}, "C:/Users/HP/Documents/Astro/Food website/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/HP/Documents/Astro/Food website/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/HP/Documents/Astro/Food website/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<title>Food Recipes</title>${renderHead()}</head> <body class="min-h-screen"> <div class="flex"> ${renderComponent($$result, "Header", $$Header, {})} <div class="w-full flex-1 p-6"> ${renderSlot($$result, $$slots["default"])} </div> </div> </body></html>`;
}, "C:/Users/HP/Documents/Astro/Food website/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
