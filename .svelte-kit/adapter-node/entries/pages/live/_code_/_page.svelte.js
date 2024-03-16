import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { W as Wordlist } from "../../../../chunks/Wordlist.js";
const Live = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { code } = $$props;
  let data = {};
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="navbar bg-base-100 shadow"><div class="navbar-start" data-svelte-h="svelte-t7efjo"><a class="btn btn-square btn-ghost text-xl" href="/"><i class="fal fa-long-arrow-left"></i></a></div> <div class="navbar-center"><div class="text-5xl">${escape(data.t9)}</div></div> <div class="navbar-end"><span class="text-3xl"><span class="indicator-item badge badge-error"></span> ${escape(code)}</span></div></div> <div class="flex h-[100vh] items-center justify-center">${validate_component(Wordlist, "Wordlist").$$render(
      $$result,
      { t9: data.t9 },
      {
        t9: ($$value) => {
          data.t9 = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Live, "Live").$$render($$result, { code: data.params.code }, {}, {})}`;
});
export {
  Page as default
};
