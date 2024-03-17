import * as universal from '../entries/pages/live/_code_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/live/_code_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/live/[code]/+page.js";
export const imports = ["_app/immutable/nodes/4.B0UNis_T.js","_app/immutable/chunks/scheduler.3S63pxiy.js","_app/immutable/chunks/index.CjcGPiz1.js","_app/immutable/chunks/Wordlist.DRqqPA8g.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = [];
export const fonts = [];
