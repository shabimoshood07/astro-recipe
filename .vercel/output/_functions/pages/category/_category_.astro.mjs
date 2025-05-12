import { c as createComponent, a as createAstro, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_XpjfVGI5.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DYi6AJP1.mjs';
import { $ as $$RecipeCard } from '../../chunks/RecipeCard_akxH3KgZ.mjs';
import { $ as $$Backbutton } from '../../chunks/Backbutton_V9SEcA1v.mjs';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  const { meals } = await data.json();
  if (!meals) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": category }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Backbutton", $$Backbutton, {})} ${maybeRenderHead()}<div class="px-4 py-8 sm:px-6 lg:px-8"> <h1 class="text-4xl font-bold capitalize text-purple-500 mb-10 underline underline-offset-2"> ${category} </h1> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[2000px]"> ${meals.map((meal) => renderTemplate`${renderComponent($$result2, "RecipeCard", $$RecipeCard, { "recipe": meal })}`)} </div> </div> ` })}`;
}, "C:/Users/HP/Documents/Astro/Food website/src/pages/category/[category].astro", void 0);

const $$file = "C:/Users/HP/Documents/Astro/Food website/src/pages/category/[category].astro";
const $$url = "/category/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
