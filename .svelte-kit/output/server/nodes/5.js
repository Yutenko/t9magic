

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/qrcodegen/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.C-Q27S7z.js","_app/immutable/chunks/scheduler.3S63pxiy.js","_app/immutable/chunks/index.CjcGPiz1.js"];
export const stylesheets = [];
export const fonts = [];
