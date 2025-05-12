import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_XpjfVGI5.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_DUYSzgNk.mjs';
import { $ as $$RecipeCard } from '../chunks/RecipeCard_akxH3KgZ.mjs';
import { $ as $$Layout } from '../chunks/Layout_DYi6AJP1.mjs';
/* empty css                                 */
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const data = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const { meals } = await data.json();
  const recipe = meals?.[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen" data-astro-cid-j7pv25f6> <div class="relative overflow-hidden 4 py-6 flex justify-between items-center min-h-screen flex-col lg:flex-row" data-astro-cid-j7pv25f6> <div class="sm:text-center lg:text-left min-w-xl  flex-1" data-astro-cid-j7pv25f6> <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl" data-astro-cid-j7pv25f6> <span class="block" data-astro-cid-j7pv25f6>Discover Amazing</span> <span class="block text-purple-500" data-astro-cid-j7pv25f6>Recipes</span> </h1> <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0" data-astro-cid-j7pv25f6>
Find inspiration for your next meal with our collection of delicious
          recipes from around the world.
</p> <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start" data-astro-cid-j7pv25f6> <div class="rounded-md shadow" data-astro-cid-j7pv25f6> <a href="/search" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10" data-astro-cid-j7pv25f6>
Browse Recipes
</a> </div> <div class="mt-3 sm:mt-0 sm:ml-3" data-astro-cid-j7pv25f6> <a href="/categories" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 md:py-4 md:text-lg md:px-10" data-astro-cid-j7pv25f6>
By Category
</a> </div> </div> </div> <div class="" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "width": 800, "height": 800 / 1.5, "format": "webp", "src": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", "alt": "Delicious food", "class": "rounded-2xl shadow-xl mb-6 aspect-thumbnail object-cover ", "data-astro-cid-j7pv25f6": true })} </div> </div> <div class="w-full px-4 sm:px-6 lg:px-8 py-12 bg-slate-200" data-astro-cid-j7pv25f6> <div class="text-center mb-12" data-astro-cid-j7pv25f6> <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl" data-astro-cid-j7pv25f6> <span class="block" data-astro-cid-j7pv25f6>Today's Featured</span> <span class="block text-purple-600" data-astro-cid-j7pv25f6>Recipe</span> </h2> <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto" data-astro-cid-j7pv25f6>
Discover something new to cook today!
</p> </div> ${recipe && renderTemplate`<div class="flex justify-center" data-astro-cid-j7pv25f6> <div class="w-full max-w-3xl" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "RecipeCard", $$RecipeCard, { "recipe": recipe, "data-astro-cid-j7pv25f6": true })} </div> </div>`} <div class="mt-12 text-center" data-astro-cid-j7pv25f6> <a href="/random" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700" data-astro-cid-j7pv25f6>
Show Me Another Random Recipe
<svg class="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-astro-cid-j7pv25f6> <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-j7pv25f6></path> </svg> </a> </div> </div> <div class="bg-gray-100" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-astro-cid-j7pv25f6> <div class="text-center mb-12" data-astro-cid-j7pv25f6> <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl" data-astro-cid-j7pv25f6> <span class="block" data-astro-cid-j7pv25f6>Popular Recipe</span> <span class="block text-purple-600" data-astro-cid-j7pv25f6>Categories</span> </h2> <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto" data-astro-cid-j7pv25f6>
Browse recipes by your favorite categories
</p> </div> <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6" data-astro-cid-j7pv25f6> <a href="/category/beef" class="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300" data-astro-cid-j7pv25f6> <div class="px-4 py-5 sm:p-6 text-center" data-astro-cid-j7pv25f6> <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 text-amber-600 mb-3" data-astro-cid-j7pv25f6>
🥩
</div> <h3 class="text-lg font-medium text-gray-900" data-astro-cid-j7pv25f6>Beef</h3> </div> </a> <a href="/category/chicken" class="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300" data-astro-cid-j7pv25f6> <div class="px-4 py-5 sm:p-6 text-center" data-astro-cid-j7pv25f6> <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600 mb-3" data-astro-cid-j7pv25f6>
🍗
</div> <h3 class="text-lg font-medium text-gray-900" data-astro-cid-j7pv25f6>Chicken</h3> </div> </a> <a href="/category/dessert" class="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300" data-astro-cid-j7pv25f6> <div class="px-4 py-5 sm:p-6 text-center" data-astro-cid-j7pv25f6> <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600 mb-3" data-astro-cid-j7pv25f6>
🍰
</div> <h3 class="text-lg font-medium text-gray-900" data-astro-cid-j7pv25f6>Dessert</h3> </div> </a> <a href="/category/vegetarian" class="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300" data-astro-cid-j7pv25f6> <div class="px-4 py-5 sm:p-6 text-center" data-astro-cid-j7pv25f6> <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-3" data-astro-cid-j7pv25f6>
🥗
</div> <h3 class="text-lg font-medium text-gray-900" data-astro-cid-j7pv25f6>Vegetarian</h3> </div> </a> <a href="/category/pasta" class="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300" data-astro-cid-j7pv25f6> <div class="px-4 py-5 sm:p-6 text-center" data-astro-cid-j7pv25f6> <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-3" data-astro-cid-j7pv25f6>
🍝
</div> <h3 class="text-lg font-medium text-gray-900" data-astro-cid-j7pv25f6>Pasta</h3> </div> </a> <a href="/category/seafood" class="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300" data-astro-cid-j7pv25f6> <div class="px-4 py-5 sm:p-6 text-center" data-astro-cid-j7pv25f6> <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-cyan-100 text-cyan-600 mb-3" data-astro-cid-j7pv25f6>
🦞
</div> <h3 class="text-lg font-medium text-gray-900" data-astro-cid-j7pv25f6>Seafood</h3> </div> </a> </div> <div class="mt-10 text-center" data-astro-cid-j7pv25f6> <a href="/categories" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700" data-astro-cid-j7pv25f6>
View All Categories
<svg class="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-astro-cid-j7pv25f6> <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-j7pv25f6></path> </svg> </a> </div> </div> </div> </main> ` })} `;
}, "C:/Users/HP/Documents/Astro/Food website/src/pages/index.astro", void 0);

const $$file = "C:/Users/HP/Documents/Astro/Food website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
