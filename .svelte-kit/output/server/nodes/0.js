import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.UDlrrR1j.js","_app/immutable/chunks/scheduler.pgixXrvx.js","_app/immutable/chunks/index.D1HU7IqC.js"];
export const stylesheets = ["_app/immutable/assets/0.CDKM0O5Y.css"];
export const fonts = [];
