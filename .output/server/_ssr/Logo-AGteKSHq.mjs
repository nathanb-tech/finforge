import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Logo-AGteKSHq.js
var import_jsx_runtime = require_jsx_runtime();
function LogoMark({ className = "w-9 h-9" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 40 40",
		className,
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "fv-grad",
				x1: "0",
				y1: "0",
				x2: "1",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "oklch(0.62 0.17 155)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "oklch(0.72 0.15 85)"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "fv-grad-2",
				x1: "0",
				y1: "1",
				x2: "1",
				y2: "0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "oklch(0.72 0.15 85)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "oklch(0.62 0.17 155)"
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "1",
				y: "1",
				width: "38",
				height: "38",
				rx: "10",
				fill: "url(#fv-grad)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "1.5",
				y: "1.5",
				width: "37",
				height: "37",
				rx: "9.5",
				fill: "none",
				stroke: "white",
				strokeOpacity: "0.25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 10 H27 V14 H16 V19 H24 V23 H16 V30 H12 Z",
				fill: "white"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "30",
				cy: "12",
				r: "2",
				fill: "url(#fv-grad-2)",
				stroke: "white",
				strokeWidth: "0.75"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "30",
				cy: "20",
				r: "1.6",
				fill: "white",
				opacity: "0.9"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "30",
				cy: "27",
				r: "1.2",
				fill: "white",
				opacity: "0.7"
			})
		]
	});
}
function LogoWordmark({ className = "", size = "md", to = "/" }) {
	const dims = {
		sm: {
			mark: "w-7 h-7",
			text: "text-sm"
		},
		md: {
			mark: "w-9 h-9",
			text: "text-lg"
		},
		lg: {
			mark: "w-11 h-11",
			text: "text-xl"
		}
	}[size];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: `flex items-center gap-2.5 group ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: `${dims.mark} drop-shadow-[0_6px_16px_oklch(0.62_0.17_155/0.35)]` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: `font-display font-bold ${dims.text} tracking-tight text-foreground`,
			children: [
				"Finverse",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					children: "."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "gradient-text-gold",
					children: "ai"
				})
			]
		})]
	});
}
//#endregion
export { LogoWordmark as n, LogoMark as t };
