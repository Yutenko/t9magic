

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/qrcodegen/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CC5oyur0.js","_app/immutable/chunks/scheduler.DuYXfIzE.js","_app/immutable/chunks/index.Dh_AGqhf.js"];
export const stylesheets = [];
export const fonts = [];
