import { c as create_ssr_component, d as each, e as escape, o as onDestroy, v as validate_component } from "../../../../chunks/ssr.js";
const Wordlist = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { wordlist } = $$props;
  let { t9 } = $$props;
  if ($$props.wordlist === void 0 && $$bindings.wordlist && wordlist !== void 0)
    $$bindings.wordlist(wordlist);
  if ($$props.t9 === void 0 && $$bindings.t9 && t9 !== void 0)
    $$bindings.t9(t9);
  return `<div class="grid grid-cols-1 gap-8">${wordlist[t9] ? `${each(wordlist[t9], (word, index) => {
    return `<div class="${[
      "text-center",
      (index === 0 ? "text-9xl" : "") + " " + (index === 1 ? "text-8xl" : "") + " " + (index === 2 ? "text-6xl" : "") + " " + (index === 3 ? "text-5xl" : "") + " " + (index === 4 ? "text-4xl" : "") + " " + (index === 5 ? "text-3xl" : "") + " " + (index === 6 ? "text-2xl" : "") + " " + (index === 7 ? "text-xl" : "")
    ].join(" ").trim()}">${escape(word)} </div>`;
  })}` : ``}</div>`;
});
const Live = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { code } = $$props;
  let data = {};
  let interval = null;
  onDestroy(() => {
    clearInterval(interval);
  });
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
