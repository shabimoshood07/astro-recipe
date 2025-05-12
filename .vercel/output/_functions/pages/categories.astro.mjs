import { c as createComponent, a as createAstro, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_XpjfVGI5.mjs';
import 'kleur/colors';
import { $ as $$Backbutton } from '../chunks/Backbutton_V9SEcA1v.mjs';
import { $ as $$Layout } from '../chunks/Layout_DYi6AJP1.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$Categories = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Categories;
  const data = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const { categories } = await data.json();
  if (!categories) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "All Categories" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Backbutton", $$Backbutton, {})} ${maybeRenderHead()}<div class="px-4 py-8 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h1 class="text-4xl font-bold text-purple-500 mb-4">All Categories</h1> <p class="text-lg text-gray-600 max-w-2xl mx-auto">
Explore our collection of delicious recipe categories from around the
        world
</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"> ${categories.map((category) => renderTemplate`<a${addAttribute(`/category/${category.strCategory.toLowerCase()}`, "href")} class="group relative block overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300"> <div class="relative h-48 overflow-hidden"> <img${addAttribute(category.strCategoryThumb, "src")}${addAttribute(category.strCategory, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy"> <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div> </div> <div class="p-6"> <h3 class="text-xl font-bold text-gray-900 mb-2"> ${category.strCategory} </h3> <p class="text-gray-600 line-clamp-3 text-sm"> ${category.strCategoryDescription} </p> <div class="mt-4"> <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
Explore Recipes
<svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-3 w-3" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> </span> </div> </div> </a>`)} </div> </div> ` })}`;
}, "C:/Users/HP/Documents/Astro/Food website/src/pages/categories.astro", void 0);

const $$file = "C:/Users/HP/Documents/Astro/Food website/src/pages/categories.astro";
const $$url = "/categories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Categories,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
