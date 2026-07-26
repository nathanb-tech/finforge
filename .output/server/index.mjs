globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-13T20:11:18.531Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/arrow-right-OvOweGWK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bff-AK6PmeaKOUVlC8O6sxU4vBI5/G8\"",
		"mtime": "2026-07-25T12:09:00.384Z",
		"size": 3071,
		"path": "../public/assets/arrow-right-OvOweGWK.js"
	},
	"/assets/auth-visual-CsqeM3_U.jpg": {
		"type": "image/jpeg",
		"etag": "\"4608a-yq8o/ZBSFQpWCoKfjm6tyK4Uet0\"",
		"mtime": "2026-07-25T12:09:00.391Z",
		"size": 286858,
		"path": "../public/assets/auth-visual-CsqeM3_U.jpg"
	},
	"/assets/dashboard-Co1q9iLM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3bff-2urQEAXvLkvw7pysk2GfH3DdZiM\"",
		"mtime": "2026-07-25T12:09:00.384Z",
		"size": 15359,
		"path": "../public/assets/dashboard-Co1q9iLM.js"
	},
	"/assets/hero-finverse-B07Iu0Dk.jpg": {
		"type": "image/jpeg",
		"etag": "\"5ccbb-G7yygF4FZ7S4OfQl/YVZGCWm2ZI\"",
		"mtime": "2026-07-25T12:09:00.391Z",
		"size": 380091,
		"path": "../public/assets/hero-finverse-B07Iu0Dk.jpg"
	},
	"/assets/icon-brain-CxNndRYx.jpg": {
		"type": "image/jpeg",
		"etag": "\"101ae-IdxoaAPCe+uOinYUAH8iiVmInjc\"",
		"mtime": "2026-07-25T12:09:00.391Z",
		"size": 65966,
		"path": "../public/assets/icon-brain-CxNndRYx.jpg"
	},
	"/assets/icon-chart-C-zJqy1z.jpg": {
		"type": "image/jpeg",
		"etag": "\"9d76-ABDW8Rv8wwgE8zfEEQPAnKLAHRo\"",
		"mtime": "2026-07-25T12:09:00.391Z",
		"size": 40310,
		"path": "../public/assets/icon-chart-C-zJqy1z.jpg"
	},
	"/assets/icon-shield-5tQgT_8p.jpg": {
		"type": "image/jpeg",
		"etag": "\"8f64-l8cmNLFL3RCr9fXtzSN+Z8oQAPE\"",
		"mtime": "2026-07-25T12:09:00.399Z",
		"size": 36708,
		"path": "../public/assets/icon-shield-5tQgT_8p.jpg"
	},
	"/assets/login-oNIM0XV4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ff7-HbiXx1xUIX1/EtPA90q6GDiXCLw\"",
		"mtime": "2026-07-25T12:09:00.384Z",
		"size": 12279,
		"path": "../public/assets/login-oNIM0XV4.js"
	},
	"/assets/styles-yW7fhHdg.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15467-46yx8a7kgF+fLwmXS9sEhsLBiZI\"",
		"mtime": "2026-07-25T12:09:00.399Z",
		"size": 87143,
		"path": "../public/assets/styles-yW7fhHdg.css"
	},
	"/assets/routes-DeU3m5LV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3897-z+RQKS3ewFh6+Up54W2Q8RzRQQs\"",
		"mtime": "2026-07-25T12:09:00.384Z",
		"size": 14487,
		"path": "../public/assets/routes-DeU3m5LV.js"
	},
	"/assets/shield-check-BiZjzlg2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13b-eG3Wohj+9WZqEMpbQAPZ18sxo4M\"",
		"mtime": "2026-07-25T12:09:00.391Z",
		"size": 315,
		"path": "../public/assets/shield-check-BiZjzlg2.js"
	},
	"/assets/trending-up-MipfGsRx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"aa-B+i+KARwTWR5b3siE2ScBl2IHe0\"",
		"mtime": "2026-07-25T12:09:00.391Z",
		"size": 170,
		"path": "../public/assets/trending-up-MipfGsRx.js"
	},
	"/assets/triangle-alert-CZJaa9E-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"220-1IclNbKzuPj8urO8qtnauBO5j3o\"",
		"mtime": "2026-07-25T12:09:00.391Z",
		"size": 544,
		"path": "../public/assets/triangle-alert-CZJaa9E-.js"
	},
	"/assets/index-Dva97F_j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"86e9d-mupdmXpttpHfOYrY5Iu7lMXOkzc\"",
		"mtime": "2026-07-25T12:09:00.384Z",
		"size": 552605,
		"path": "../public/assets/index-Dva97F_j.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_zMd0Qe = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_zMd0Qe
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
