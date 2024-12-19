

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CDG-WLHU.js","_app/immutable/chunks/disclose-version.BQodWu-7.js","_app/immutable/chunks/runtime.CrKm5I-o.js","_app/immutable/chunks/render.CdcTL54P.js","_app/immutable/chunks/proxy.CHWnTM2O.js"];
export const stylesheets = [];
export const fonts = [];
