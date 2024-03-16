import { c as create_ssr_component, v as validate_component } from './ssr-CWm8iOWw.js';
import { W as Wordlist } from './Wordlist-C-Cn_A1G.js';
import { K as Keypad } from './Keypad-DjuKcCdU.js';

const WordGen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let t9 = "";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="navbar bg-base-100 shadow" data-svelte-h="svelte-u6n45z"><div class="navbar-start"><a class="btn btn-square btn-ghost text-xl" href="/"><i class="fal fa-long-arrow-left"></i></a></div> <div class="navbar-center"></div> <div class="navbar-end"></div></div> <div class="flex justify-center items-center flex-col">${validate_component(Keypad, "Keypad").$$render($$result, {}, {}, {})} ${validate_component(Wordlist, "Wordlist").$$render(
      $$result,
      { t9 },
      {
        t9: ($$value) => {
          t9 = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(WordGen, "WordGen").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DX_AoifI.js.map
