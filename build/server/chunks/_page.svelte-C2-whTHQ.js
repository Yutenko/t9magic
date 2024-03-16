import { c as create_ssr_component, v as validate_component, b as subscribe } from './ssr-CWm8iOWw.js';
import { K as Keypad } from './Keypad-DjuKcCdU.js';
import { p as page } from './stores-xo7ZLPgg.js';
import './exports-DuWZopOC.js';

const Embed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_page();
  return `<div class="flex justify-center items-center flex-col h-[100vh]">${validate_component(Keypad, "Keypad").$$render($$result, {}, {}, {})}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Embed, "Embed").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C2-whTHQ.js.map
