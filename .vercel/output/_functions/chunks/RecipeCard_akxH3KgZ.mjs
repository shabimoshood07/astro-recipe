import { c as createComponent, a as createAstro, m as maybeRenderHead, b as renderComponent, d as addAttribute, r as renderTemplate } from './astro/server_XpjfVGI5.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_DUYSzgNk.mjs';

const $$Astro = createAstro();
const $$RecipeCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RecipeCard;
  const { recipe } = Astro2.props;
  const {
    strMeal: title,
    strMealThumb: image,
    idMeal: id,
    strCategory: category,
    strArea: area
  } = recipe;
  return renderTemplate`${maybeRenderHead()}<div class="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"> <div class="relative h-64 w-full overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": title, "width": 600, "height": 600 / 1.5, "format": "webp", "class": "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" })} <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> ${(category || area) && renderTemplate`<div class="absolute bottom-4 left-4 flex gap-2"> <span class="rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-800"> ${category} </span> <span class="rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-800"> ${area} </span> </div>`} </div> <div class="p-6"> <h2 class="mb-2 text-2xl font-bold text-gray-900 line-clamp-1">${title}</h2> <a${addAttribute(`/recipe/${id}`, "href")} class="mt-4 inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors">
View Recipe
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </a> </div> </div>`;
}, "C:/Users/HP/Documents/Astro/Food website/src/components/RecipeCard.astro", void 0);

export { $$RecipeCard as $ };
