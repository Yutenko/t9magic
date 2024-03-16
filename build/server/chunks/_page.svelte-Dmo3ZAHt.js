import { c as create_ssr_component, v as validate_component, d as each, f as add_attribute, e as escape } from './ssr-BR1K4ql6.js';

const Lib = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let livecodes = [];
  return `<div class="container mx-auto p-4 flex justify-start">${each(livecodes, (live) => {
    return `<div class="card card-compact shadow"><div class="card-body"><a${add_attribute("href", `/live/${live.t9}`, 0)} class="text-5xl">${escape(live.t9)}</a></div> </div>`;
  })}</div> <div class="absolute right-5 bottom-5" data-svelte-h="svelte-noq0i0"><a class="btn btn-ghost" href="/qrcodegen">QR</a> <a class="btn btn-ghost" href="/keypad">KEYPAD</a></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Lib, "App").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Dmo3ZAHt.js.map
