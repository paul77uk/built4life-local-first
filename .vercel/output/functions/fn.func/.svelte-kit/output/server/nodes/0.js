import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.Dv5gZIUM.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.bXq9IHA8.js","_app/immutable/chunks/store.BgTw70yS.js","_app/immutable/chunks/attributes.DgXluJxb.js","_app/immutable/chunks/legacy.sAiOJNJj.js","_app/immutable/chunks/if.ChpqNVhO.js","_app/immutable/chunks/stores.C4HWECWS.js","_app/immutable/chunks/entry.C-c44tds.js"];
export const stylesheets = ["_app/immutable/assets/0.DKRXwWD3.css"];
export const fonts = ["_app/immutable/assets/rubik-dirt-cyrillic-ext-400-normal.DO6vxSgd.woff2","_app/immutable/assets/rubik-dirt-cyrillic-ext-400-normal.DSGhuBOL.woff","_app/immutable/assets/rubik-dirt-cyrillic-400-normal.BqBZGTeO.woff2","_app/immutable/assets/rubik-dirt-cyrillic-400-normal.DFUdszkb.woff","_app/immutable/assets/rubik-dirt-hebrew-400-normal.DoyVZlv6.woff2","_app/immutable/assets/rubik-dirt-hebrew-400-normal.DJlX3MV5.woff","_app/immutable/assets/rubik-dirt-latin-ext-400-normal.DWGQEn_A.woff2","_app/immutable/assets/rubik-dirt-latin-ext-400-normal.Bl44gCxU.woff","_app/immutable/assets/rubik-dirt-latin-400-normal.DR0aN1S6.woff2","_app/immutable/assets/rubik-dirt-latin-400-normal.CfDhD0M4.woff"];
