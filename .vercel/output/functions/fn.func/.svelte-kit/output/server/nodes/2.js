

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.1D2wsHaM.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.bXq9IHA8.js","_app/immutable/chunks/entry.C-c44tds.js"];
export const stylesheets = [];
export const fonts = [];