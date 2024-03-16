

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.C6om-vp9.js","_app/immutable/chunks/scheduler.DuYXfIzE.js","_app/immutable/chunks/index.Dh_AGqhf.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = [];
export const fonts = [];
