export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","service-worker.js"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DaAtb17u.js","app":"_app/immutable/entry/app.CFlEdSGa.js","imports":["_app/immutable/entry/start.DaAtb17u.js","_app/immutable/chunks/entry.BaBff65H.js","_app/immutable/chunks/runtime.CrKm5I-o.js","_app/immutable/entry/app.CFlEdSGa.js","_app/immutable/chunks/runtime.CrKm5I-o.js","_app/immutable/chunks/render.CdcTL54P.js","_app/immutable/chunks/disclose-version.BQodWu-7.js","_app/immutable/chunks/proxy.CHWnTM2O.js","_app/immutable/chunks/store.BecIhhb0.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
