import { c as createComponent, a as createAstro, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_XpjfVGI5.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../../chunks/_astro_assets_DUYSzgNk.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DYi6AJP1.mjs';
import { $ as $$Backbutton } from '../../chunks/Backbutton_V9SEcA1v.mjs';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const { meals } = await data.json();
  const recipe = meals?.[0];
  if (!recipe) {
    return Astro2.redirect("/404");
  }
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({ ingredient, measure });
    }
  }
  const instructions = recipe.strInstructions.split("\r\n").filter((step) => step.trim() !== "");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": recipe.strMeal }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Backbutton", $$Backbutton, {})} ${maybeRenderHead()}<div class="max-w-6xl px-4 py-8 sm:px-6 lg:px-8"> <div class="mb-10 space-y-6"> <h1 class="text-4xl font-bold text-gray-900">${recipe.strMeal}</h1> <div class="flex gap-2"> <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800"> ${recipe.strCategory} </span> <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800"> ${recipe.strArea} </span> </div> ${recipe.strTags && renderTemplate`<p class="text-gray-500">
Tags: ${recipe.strTags.split(",").join(", ")} </p>`} </div> <!-- Main Content Grid --> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <!-- Left Column - Image --> <div class="lg:col-span-2"> <div class="rounded-xl overflow-hidden shadow-lg"> ${renderComponent($$result2, "Image", $$Image, { "src": recipe.strMealThumb, "alt": recipe.strMeal, "width": 600, "height": 600, "loading": "eager", "class": "w-full" })} </div> <!-- Video Embed --> ${recipe.strYoutube && renderTemplate`<div class="mt-8"> <h2 class="text-2xl font-bold mb-4">Video Tutorial</h2> <div class=" relative h-0 aspect-h-9 pb-[56.25%] rounded-xl overflow-hidden shadow-lg"> <iframe${addAttribute(`https://www.youtube.com/embed/${recipe.strYoutube.split("v=")[1]}`, "src")} class=" absolute top-0 left-0 rounded-xl w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div> </div>`} </div> <!-- Right Column - Recipe Info --> <div class="lg:col-span-1"> <!-- Ingredients Card --> <div class="bg-white p-6 rounded-xl shadow-md sticky top-4"> <h2 class="text-2xl font-bold mb-4 text-gray-800">Ingredients</h2> <ul class="space-y-2"> ${ingredients.map((item) => renderTemplate`<li class="flex items-start"> <span class="inline-block w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2"></span> <span> <span class="font-medium">${item.measure}</span>${" "} ${item.ingredient} </span> </li>`)} </ul> </div> </div> </div> <!-- Instructions Section --> <div class="mt-12 bg-white p-8 rounded-xl shadow-md"> <h2 class="text-2xl font-bold mb-6 text-gray-800">Instructions</h2> <ol class="space-y-6"> ${instructions.map((step, index) => renderTemplate`<li class="flex"> <span class="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold mr-4"> ${index + 1} </span> <p class="text-gray-700">${step}</p> </li>`)} </ol> </div> <!-- Nutrition Facts (Placeholder) --> <div class="mt-12 bg-white p-8 rounded-xl shadow-md"> <h2 class="text-2xl font-bold mb-6 text-gray-800">Nutrition Facts</h2> <p class="text-gray-500 italic">
Nutritional information not available for this recipe.
</p> </div> </div> ` })}`;
}, "C:/Users/HP/Documents/Astro/Food website/src/pages/recipe/[id].astro", void 0);

const $$file = "C:/Users/HP/Documents/Astro/Food website/src/pages/recipe/[id].astro";
const $$url = "/recipe/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
