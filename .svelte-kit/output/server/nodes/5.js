

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/qrcodegen/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.7ET1ll0T.js","_app/immutable/chunks/scheduler.pgixXrvx.js","_app/immutable/chunks/index.D1HU7IqC.js"];
export const stylesheets = [];
export const fonts = [];
