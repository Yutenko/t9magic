

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/qrcodegen/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.BZueSL9f.js","_app/immutable/chunks/scheduler.D1ninLTA.js","_app/immutable/chunks/index.r3K8kXSW.js"];
export const stylesheets = [];
export const fonts = [];
