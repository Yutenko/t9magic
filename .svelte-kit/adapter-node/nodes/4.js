import * as universal from '../entries/pages/live/_code_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/live/_code_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/live/[code]/+page.js";
export const imports = ["_app/immutable/nodes/4.DdvqUV6W.js","_app/immutable/chunks/scheduler.DuYXfIzE.js","_app/immutable/chunks/index.Dh_AGqhf.js","_app/immutable/chunks/Wordlist.Cv9OzNQD.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = [];
export const fonts = [];
