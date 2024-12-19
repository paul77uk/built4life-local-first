

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Djb48cqi.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.bXq9IHA8.js","_app/immutable/chunks/entry.CrynaSAt.js"];
export const stylesheets = [];
export const fonts = [];
