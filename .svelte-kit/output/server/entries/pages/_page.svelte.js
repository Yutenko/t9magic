import { c as create_ssr_component, o as onDestroy, d as each, e as escape, f as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const Lib = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let progress;
  let livecodes = [];
  let interval = null;
  onDestroy(() => {
    clearInterval(interval);
  });
  progress = 0;
  return `<div class="container mx-auto p-4 flex justify-start">${each(livecodes, (live) => {
    return `<div class="card card-compact shadow"><div class="card-body"><a${add_attribute("href", `/live/${live}`, 0)} class="text-5xl">${escape(live)}</a></div> </div>`;
  })}</div> <div class="absolute right-5 bottom-5"><a class="btn btn-ghost" href="/qrcodegen" data-svelte-h="svelte-17ktjgf">QR</a> ${`<div class="radial-progress" style="${"--value:" + escape(progress, true) + ";"}" role="progressbar">${escape(progress)}%</div>`}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Lib, "App").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
