

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CyKXGD3V.js","_app/immutable/chunks/scheduler.D1ninLTA.js","_app/immutable/chunks/index.r3K8kXSW.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = [];
export const fonts = [];
