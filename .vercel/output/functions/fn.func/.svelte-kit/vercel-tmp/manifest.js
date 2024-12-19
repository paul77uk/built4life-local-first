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
		client: {"start":"_app/immutable/entry/start.U72gTnzs.js","app":"_app/immutable/entry/app.BO7K_N9O.js","imports":["_app/immutable/entry/start.U72gTnzs.js","_app/immutable/chunks/entry.CrynaSAt.js","_app/immutable/chunks/runtime.bXq9IHA8.js","_app/immutable/entry/app.BO7K_N9O.js","_app/immutable/chunks/runtime.bXq9IHA8.js","_app/immutable/chunks/store.BgTw70yS.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/if.ChpqNVhO.js","_app/immutable/chunks/props.BwDTEM8d.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/my-workouts",
				pattern: /^\/my-workouts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/workouts",
				pattern: /^\/workouts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
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
