

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.-2Px1-tS.js","_app/immutable/chunks/scheduler.3S63pxiy.js","_app/immutable/chunks/index.CjcGPiz1.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = [];
export const fonts = [];
