import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { K as Keypad } from "../../../chunks/Keypad.js";
const WordGen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let progress = 0;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="navbar bg-base-100 shadow" data-svelte-h="svelte-u6n45z"><div class="navbar-start"><a class="btn btn-square btn-ghost text-xl" href="/"><i class="fal fa-long-arrow-left"></i></a></div> <div class="navbar-center"></div> <div class="navbar-end"></div></div> <div class="flex justify-center items-center flex-col">${validate_component(Keypad, "Keypad").$$render($$result, {}, {}, {})} ${`<div class="radial-progress" style="${"--value:" + escape(progress, true) + ";"}" role="progressbar">${escape(progress)}%</div> <p data-svelte-h="svelte-1io8hah">Lade Wortliste ..</p>`}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(WordGen, "WordGen").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
