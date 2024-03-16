

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CE4StEjZ.js","_app/immutable/chunks/scheduler.DuYXfIzE.js","_app/immutable/chunks/index.Dh_AGqhf.js","_app/immutable/chunks/entry.BVl3iVmE.js"];
export const stylesheets = [];
export const fonts = [];
