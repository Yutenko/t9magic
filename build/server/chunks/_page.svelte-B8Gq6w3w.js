import { c as create_ssr_component, v as validate_component, f as add_attribute, d as each, e as escape } from './ssr-BR1K4ql6.js';
import { W as Wordlist } from './Wordlist-Dny7mLKr.js';

const css = {
  code: ".demo.svelte-fe56rp{border-radius:var(--rounded-box, 1rem);--tw-bg-opacity:1;background-color:var(\n            --fallback-b3,\n            oklch(var(--b3) / var(--tw-bg-opacity))\n        );--tw-text-opacity:1;color:var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));box-shadow:0 1px 3px #0000001a,\n            0 1px 2px #0000000f}",
  map: null
};
const Keypad = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const t9 = {
    1: "_",
    2: "ABC",
    3: "DEF",
    4: "GHI",
    5: "JKL",
    6: "MNO",
    7: "PQRS",
    8: "TUV",
    9: "WXYZ"
  };
  let code = "";
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="navbar bg-base-100 shadow" data-svelte-h="svelte-u6n45z"><div class="navbar-start"><a class="btn btn-square btn-ghost text-xl" href="/"><i class="fal fa-long-arrow-left"></i></a></div> <div class="navbar-center"></div> <div class="navbar-end"></div></div> <div class="flex justify-center items-center flex-col"><div class="artboard phone-1 demo text-center flex flex-col overflow-hidden !h-[450px] mt-8 mb-8 svelte-fe56rp"><label class="input input-bordered flex items-center gap-2 mt-16 w-[90%] min-h-[2rem] ml-auto mr-auto"><input type="text" class="grow"${add_attribute("value", code, 0)}> ${code.length > 0 ? `<button type="button" class="btn btn-ghost btn-xs" data-svelte-h="svelte-1slon8l"><i class="fal fa-backspace"></i></button>` : ``}</label> <div class="flex items-end h-full"><div class="grid grid-cols-3 w-full gap-[2rem] p-[2rem]">${each(Object.keys(t9), (key) => {
      return `<button class="btn btn-circle btn-outline btn-lg">${escape(key)} <br> ${escape(t9[key])} </button>`;
    })}</div></div></div> ${validate_component(Wordlist, "Wordlist").$$render(
      $$result,
      { t9: code },
      {
        t9: ($$value) => {
          code = $$value;
          $$settled = false;
        }
      },
      {}
    )} </div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Keypad, "Keypad").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B8Gq6w3w.js.map
