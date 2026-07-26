import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as LogoWordmark, t as LogoMark } from "./Logo-AGteKSHq.mjs";
import { f as Layers, h as Database, o as ShieldCheck, r as TrendingUp, t as Zap, v as ChartLine, x as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cp34VRD0.js
var import_jsx_runtime = require_jsx_runtime();
var hero_finverse_default = "/assets/hero-finverse-B07Iu0Dk.jpg";
var icon_brain_default = "/assets/icon-brain-CxNndRYx.jpg";
var icon_shield_default = "/assets/icon-shield-5tQgT_8p.jpg";
var icon_chart_default = "/assets/icon-chart-C-zJqy1z.jpg";
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scenarios, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto flex items-center justify-between px-6 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoWordmark, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden md:flex items-center gap-8 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#features",
							className: "hover:text-foreground transition",
							children: "Features"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#how",
							className: "hover:text-foreground transition",
							children: "How it works"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#scenarios",
							className: "hover:text-foreground transition",
							children: "Scenarios"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "text-sm text-muted-foreground hover:text-foreground transition",
						children: "Sign in"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "text-sm font-medium px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition glow-primary",
						children: "Get access"
					})]
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative pt-32 pb-24 px-6 hero-radial",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-40 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-fade-up",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-muted-foreground mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" }), "Built for FINOVATE 2026 · Malawi"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight",
						children: [
							"Predict a business's",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block gradient-text",
								children: "financial future"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: "before the bank lends."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed",
						children: [
							"FINVERSE AI simulates ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground font-medium",
								children: "1,000 future scenarios"
							}),
							" for Malawi's MSMEs — turning mobile money, invoices and seasonality into a",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-text-gold font-semibold",
								children: " Future Financial Confidence Score"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/login",
							className: "group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-semibold glow-primary hover:scale-[1.02] transition",
							children: ["Launch the simulator", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#how",
							className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-card text-foreground font-medium hover:border-primary/40 transition",
							children: "See how it works"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid grid-cols-3 gap-6 max-w-lg",
						children: [
							{
								v: "85%",
								l: "MSMEs unbanked"
							},
							{
								v: "1,000",
								l: "scenarios / decision"
							},
							{
								v: "76%",
								l: "confidence score"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl font-display font-bold gradient-text-gold",
							children: s.v
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground mt-1",
							children: s.l
						})] }, s.l))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-10 bg-gradient-to-br from-primary/20 via-transparent to-gold/20 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative rounded-3xl overflow-hidden glass-card animate-float",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_finverse_default,
							alt: "FINVERSE AI simulating a business's future across scenarios",
							width: 1536,
							height: 1536,
							className: "w-full h-auto"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingCard, {
						className: "absolute -left-6 top-10",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-4 h-4 text-primary" }),
						label: "Confidence",
						value: "76%",
						hint: "Base + Stress + Crisis"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingCard, {
						className: "absolute -right-4 bottom-14",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "w-4 h-4 text-gold" }),
						label: "Repayment",
						value: "APPROVE",
						hint: "Traditional says: decline",
						gold: true
					})
				]
			})]
		})]
	});
}
function FloatingCard({ className, icon, label, value, hint, gold }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `hidden md:block glass-card rounded-2xl p-4 min-w-[180px] ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-xs text-muted-foreground",
				children: [
					icon,
					" ",
					label
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mt-1 text-2xl font-display font-bold ${gold ? "gradient-text-gold" : "gradient-text"}`,
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] text-muted-foreground mt-1",
				children: hint
			})
		]
	});
}
function Trust() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-10 border-y border-border/40 bg-card/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.2em] text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mobile Money" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "opacity-40",
					children: "·"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Supplier Invoices" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "opacity-40",
					children: "·"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Inventory Data" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "opacity-40",
					children: "·"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Seasonality" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "opacity-40",
					children: "·"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Monte Carlo" })
			]
		})
	});
}
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "features",
		className: "py-28 px-6 relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "The engine",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Not another payment app.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gradient-text",
						children: "A decision engine."
					})
				] }),
				subtitle: "FINVERSE AI answers the only question banks care about: will this business be able to repay — across the futures that could actually happen?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid md:grid-cols-3 gap-6",
				children: [
					{
						icon: icon_brain_default,
						title: "Forward-looking AI",
						body: "Traditional scores measure the past. FINVERSE simulates 18 months of possible futures using Monte Carlo methods tuned to Malawian markets."
					},
					{
						icon: icon_chart_default,
						title: "Data MSMEs actually have",
						body: "Mobile money history, supplier payments, sales, inventory, seasonality. No collateral. No tax returns. No credit history required."
					},
					{
						icon: icon_shield_default,
						title: "Risk banks can act on",
						body: "Every decision comes with Base, Stress and Crisis scenarios — so lenders see exactly what could go wrong and price risk accordingly."
					}
				].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card rounded-2xl p-8 group hover:border-primary/40 transition",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-16 h-16 rounded-2xl overflow-hidden mb-6 glow-primary group-hover:scale-105 transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: f.icon,
								alt: "",
								width: 768,
								height: 768,
								className: "w-full h-full object-cover",
								loading: "lazy"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-semibold mb-3",
							children: f.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground leading-relaxed",
							children: f.body
						})
					]
				}, f.title))
			})]
		})
	});
}
function HowItWorks() {
	const steps = [
		{
			n: "01",
			icon: Database,
			t: "Collect",
			d: "12 months of mobile money, invoices, sales and business details."
		},
		{
			n: "02",
			icon: ChartLine,
			t: "Analyze",
			d: "AI extracts revenue, volatility, payment reliability and seasonal pattern."
		},
		{
			n: "03",
			icon: Layers,
			t: "Simulate",
			d: "1,000 futures vary rainfall, prices, competition and payment delays."
		},
		{
			n: "04",
			icon: Zap,
			t: "Decide",
			d: "One confidence score plus Base, Stress and Crisis scenarios."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "how",
		className: "py-28 px-6 bg-card/20 border-y border-border/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "How it works",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"From raw data to a ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gradient-text-gold",
						children: "Confidence Score"
					}),
					" in seconds."
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid md:grid-cols-4 gap-4 relative",
				children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card rounded-2xl p-6 h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-mono text-primary",
									children: s.n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "w-4 h-4 text-gold" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-semibold text-lg mb-2",
								children: s.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: s.d
							})
						]
					}), i < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-primary/60 to-transparent" })]
				}, s.n))
			})]
		})
	});
}
function Scenarios() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "scenarios",
		className: "py-28 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "The output",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Three futures. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "gradient-text",
					children: "One decision."
				})] }),
				subtitle: "Example: a maize trader borrowing MWK 250,000. FINVERSE reports a 76% overall confidence — broken down into scenarios the bank can actually reason about."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid md:grid-cols-3 gap-6",
				children: [
					{
						name: "Base Case",
						prob: 45,
						repay: 91,
						color: "primary",
						desc: "Normal rainfall, prices and payments."
					},
					{
						name: "Stress Case",
						prob: 35,
						repay: 64,
						color: "gold",
						desc: "Delayed rains, prices drop 15%, slow payments."
					},
					{
						name: "Crisis Case",
						prob: 20,
						repay: 38,
						color: "destructive",
						desc: "Severe drought, 30% price drop, new competitors."
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card rounded-2xl p-8 relative overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-x-0 top-0 h-1 ${c.color === "primary" ? "bg-gradient-to-r from-primary to-primary-glow" : c.color === "gold" ? "bg-gradient-to-r from-gold to-primary" : "bg-gradient-to-r from-destructive to-gold"}` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted-foreground",
							children: c.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-5xl font-display font-bold",
								children: [c.repay, "%"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: "repayment"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 h-2 bg-secondary rounded-full overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `h-full rounded-full ${c.color === "primary" ? "bg-gradient-to-r from-primary to-primary-glow" : c.color === "gold" ? "bg-gradient-to-r from-gold to-primary" : "bg-gradient-to-r from-destructive to-gold"}`,
								style: { width: `${c.repay}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center justify-between text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Probability of scenario" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-foreground",
								children: [c.prob, "%"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground leading-relaxed",
							children: c.desc
						})
					]
				}, c.name))
			})]
		})
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-28 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-5xl mx-auto glass-card rounded-3xl p-12 md:p-16 text-center relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 hero-radial opacity-80 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-4xl md:text-5xl font-bold tracking-tight",
						children: [
							"Lend to the ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-text",
								children: "next 70,000 businesses"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Malawi's banks currently can't see."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted-foreground max-w-2xl mx-auto",
						children: "Sign in to run a live simulation on a sample MSME profile — maize trader, retailer, or phone repair shop."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap justify-center gap-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/login",
							className: "inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-primary to-gold text-primary-foreground font-semibold glow-gold hover:scale-[1.02] transition",
							children: ["Sign in to FINVERSE", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
						})
					})
				]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border/40 py-10 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: "w-7 h-7" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display font-semibold text-foreground",
						children: [
							"Finverse",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "."
							}),
							"ai"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "opacity-60",
						children: "· Lilongwe, Malawi"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "opacity-70",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" FINVERSE AI. All rights reserved."
				]
			})]
		})
	});
}
function SectionHeading({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs uppercase tracking-[0.25em] text-primary mb-4",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-lg text-muted-foreground leading-relaxed",
				children: subtitle
			})
		]
	});
}
//#endregion
export { Landing as component };
