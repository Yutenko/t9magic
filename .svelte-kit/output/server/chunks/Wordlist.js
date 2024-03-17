import { c as create_ssr_component, d as each, e as escape } from "./ssr.js";
const Wordlist = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { wordlist = {} } = $$props;
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
export {
  Wordlist as W
};
