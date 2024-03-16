import { c as create_ssr_component, h as createEventDispatcher, f as add_attribute, d as each, e as escape } from './ssr-CWm8iOWw.js';

const css = {
  code: ".demo.svelte-fe56rp{border-radius:var(--rounded-box, 1rem);--tw-bg-opacity:1;background-color:var(\n            --fallback-b3,\n            oklch(var(--b3) / var(--tw-bg-opacity))\n        );--tw-text-opacity:1;color:var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));box-shadow:0 1px 3px #0000001a,\n            0 1px 2px #0000000f}",
  map: null
};
const Keypad = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  const t9codes = {
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
  let t9 = "";
  $$result.css.add(css);
  return `<div class="artboard phone-1 demo text-center flex flex-col overflow-hidden !h-[450px] mt-8 mb-8 svelte-fe56rp"><label class="input input-bordered flex items-center gap-2 mt-16 w-[90%] min-h-[2rem] ml-auto mr-auto"><input type="text" class="grow" disabled${add_attribute("value", t9, 0)}> ${t9.length > 0 ? `<button type="button" class="btn btn-ghost btn-xs" data-svelte-h="svelte-itjoyt"><i class="fal fa-backspace"></i></button>` : ``}</label> <div class="flex items-end h-full"><div class="grid grid-cols-3 w-full gap-[2rem] p-[2rem]">${each(Object.keys(t9codes), (key) => {
    return `<button class="btn btn-circle btn-outline btn-lg">${escape(key)} <br> ${escape(t9codes[key])} </button>`;
  })}</div></div> </div>`;
});

export { Keypad as K };
//# sourceMappingURL=Keypad-DjuKcCdU.js.map
