import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-CYzVOhP_.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useAuth } from "./use-auth-DLGuRDd_.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as LogoWordmark } from "./Logo-AGteKSHq.mjs";
import { _ as CircleCheck, a as Sparkles, b as Building2, d as LoaderCircle, g as CircleX, i as Trash2, l as LogOut, n as TriangleAlert, p as Eye, r as TrendingUp, s as Plus, x as ArrowRight, y as Calendar } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-CVYN951p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DashboardPage() {
	const { user, loading, signOut } = useAuth();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!loading && !user) navigate({ to: "/login" });
	}, [
		loading,
		user,
		navigate
	]);
	if (loading || !user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen grid place-items-center bg-background text-muted-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-6 h-6 animate-spin text-primary" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto px-6 py-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoWordmark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground hidden sm:inline",
						children: user.email
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: async () => {
							await signOut();
							navigate({ to: "/" });
						},
						className: "inline-flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg border border-border/60 hover:border-primary/40 transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "w-3.5 h-3.5" }), " Sign out"]
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "max-w-7xl mx-auto px-6 py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-3xl md:text-4xl font-bold tracking-tight",
					children: ["Your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gradient-text",
						children: "portfolio"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: "Add an MSME, then run an AI-driven Monte Carlo simulation to see its Future Financial Confidence Score."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-[380px_1fr] gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewProfileCard, { onCreated: () => window.dispatchEvent(new Event("finverse:refresh")) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioList, {})]
			})]
		})]
	});
}
function NewProfileCard({ onCreated }) {
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)({
		business_name: "",
		sector: "Retail",
		monthly_revenue: 8e5,
		monthly_expenses: 55e4,
		cash_balance: 12e5,
		existing_loans: 0,
		employees: 3
	});
	const update = (k, v) => setForm((f) => ({
		...f,
		[k]: v
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass-card rounded-2xl p-6 h-fit",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 mb-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "w-4 h-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-semibold",
					children: "New MSME"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground mb-5",
				children: "All amounts in MWK / month."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: async (e) => {
					e.preventDefault();
					setBusy(true);
					setErr(null);
					const { data: u } = await supabase.auth.getUser();
					if (!u.user) {
						setErr("Not signed in");
						setBusy(false);
						return;
					}
					const { error } = await supabase.from("msme_profiles").insert({
						user_id: u.user.id,
						business_name: form.business_name,
						sector: form.sector,
						monthly_revenue: form.monthly_revenue,
						monthly_expenses: form.monthly_expenses,
						cash_balance: form.cash_balance,
						existing_loans: form.existing_loans,
						employees: form.employees
					});
					setBusy(false);
					if (error) {
						setErr(error.message);
						return;
					}
					setForm((f) => ({
						...f,
						business_name: ""
					}));
					onCreated();
				},
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						label: "Business name",
						value: form.business_name,
						onChange: (v) => update("business_name", v),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						label: "Sector",
						value: form.sector,
						onChange: (v) => update("sector", v),
						options: [
							"Retail",
							"Agriculture",
							"Manufacturing",
							"Services",
							"Transport",
							"Hospitality",
							"Construction"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberInput, {
								label: "Revenue",
								value: form.monthly_revenue,
								onChange: (v) => update("monthly_revenue", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberInput, {
								label: "Expenses",
								value: form.monthly_expenses,
								onChange: (v) => update("monthly_expenses", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberInput, {
								label: "Cash on hand",
								value: form.cash_balance,
								onChange: (v) => update("cash_balance", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberInput, {
								label: "Existing loans",
								value: form.existing_loans,
								onChange: (v) => update("existing_loans", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberInput, {
								label: "Employees",
								value: form.employees,
								onChange: (v) => update("employees", v)
							})
						]
					}),
					err && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-destructive flex items-start gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "w-3.5 h-3.5 mt-0.5" }),
							" ",
							err
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						disabled: busy,
						className: "w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold glow-primary hover:scale-[1.01] transition disabled:opacity-60",
						children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" }), "Add MSME"]
					})
				]
			})
		]
	});
}
function PortfolioList() {
	const [items, setItems] = (0, import_react.useState)([]);
	const [sims, setSims] = (0, import_react.useState)({});
	const [loading, setLoading] = (0, import_react.useState)(true);
	const load = async () => {
		setLoading(true);
		const { data: u } = await supabase.auth.getUser();
		if (!u.user) {
			setLoading(false);
			return;
		}
		const [{ data: profiles }, { data: latestSims }] = await Promise.all([supabase.from("msme_profiles").select("*").order("created_at", { ascending: false }), supabase.from("simulations").select("*").order("created_at", { ascending: false })]);
		setItems(profiles ?? []);
		const map = {};
		for (const s of latestSims ?? []) if (!map[s.msme_id]) map[s.msme_id] = s;
		setSims(map);
		setLoading(false);
	};
	(0, import_react.useEffect)(() => {
		load();
		const h = () => load();
		window.addEventListener("finverse:refresh", h);
		return () => window.removeEventListener("finverse:refresh", h);
	}, []);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "glass-card rounded-2xl p-10 grid place-items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-5 h-5 animate-spin text-primary" })
	});
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass-card rounded-2xl p-10 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-8 h-8 mx-auto text-primary mb-3" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-semibold text-lg",
				children: "Add your first MSME"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground mt-1",
				children: "Fill out the form on the left, then simulate 1,000 futures instantly."
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-4",
		children: items.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MsmeCard, {
			msme: m,
			sim: sims[m.id],
			onChange: load
		}, m.id))
	});
}
function MsmeCard({ msme, sim, onChange }) {
	const [running, setRunning] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)(null);
	const [showDetails, setShowDetails] = (0, import_react.useState)(false);
	const runSim = async () => {
		setRunning(true);
		setErr(null);
		try {
			const res = await fetch("/api/simulate", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					business_name: msme.business_name,
					sector: msme.sector,
					monthly_revenue: Number(msme.monthly_revenue),
					monthly_expenses: Number(msme.monthly_expenses),
					cash_balance: Number(msme.cash_balance),
					existing_loans: Number(msme.existing_loans),
					employees: Number(msme.employees)
				})
			});
			const json = await res.json();
			if (!res.ok) throw new Error(json.error ?? "Simulation failed");
			const { data: u } = await supabase.auth.getUser();
			if (!u.user) throw new Error("Not signed in");
			const { error } = await supabase.from("simulations").insert({
				user_id: u.user.id,
				msme_id: msme.id,
				ffcs_score: json.ffcs_score,
				base_survival: json.base_survival,
				stress_survival: json.stress_survival,
				crisis_survival: json.crisis_survival,
				recommendation: json.recommendation,
				ai_summary: json.ai_summary
			});
			if (error) throw error;
			onChange();
		} catch (e) {
			setErr(e instanceof Error ? e.message : "Failed");
		} finally {
			setRunning(false);
		}
	};
	const del = async () => {
		if (!confirm(`Delete ${msme.business_name}?`)) return;
		await supabase.from("msme_profiles").delete().eq("id", msme.id);
		onChange();
	};
	const netCashflow = Number(msme.monthly_revenue) - Number(msme.monthly_expenses);
	const runwayMonths = netCashflow > 0 ? 24 : Number(msme.cash_balance) / Math.max(1, Math.abs(netCashflow));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass-card rounded-2xl p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-lg",
								children: msme.business_name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-widest text-muted-foreground bg-secondary/60 px-2 py-0.5 rounded-full",
								children: msme.sector
							}),
							runwayMonths < 12 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-widest text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full",
								children: "⚠️ Low runway"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Revenue",
								value: fmt(msme.monthly_revenue)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Expenses",
								value: fmt(msme.monthly_expenses)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Cash",
								value: fmt(msme.cash_balance)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Loans",
								value: fmt(msme.existing_loans)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Employees",
								value: String(msme.employees)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Net Cashflow",
								value: fmt(netCashflow)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Runway",
								value: runwayMonths < 24 ? `${Math.round(runwayMonths)}mo` : "24+mo"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: del,
					className: "p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition",
					"aria-label": "Delete",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-4 h-4" })
				})]
			}),
			sim ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-[180px_1fr_auto] gap-5 items-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreRing, { score: Number(sim.ffcs_score) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Regime, {
											label: "Base",
											pct: Number(sim.base_survival),
											tone: "ok"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Regime, {
											label: "Stress",
											pct: Number(sim.stress_survival),
											tone: "warn"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Regime, {
											label: "Crisis",
											pct: Number(sim.crisis_survival),
											tone: "bad"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-foreground/90",
									children: sim.ai_summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-2 p-3 rounded-lg bg-secondary/30 border border-border/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-0.5",
										children: sim.recommendation?.startsWith("✅") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-green-500" }) : sim.recommendation?.startsWith("❌") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "w-4 h-4 text-red-500" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "w-4 h-4 text-amber-500" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: sim.recommendation
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setShowDetails(!showDetails),
							className: "p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition",
							"aria-label": "View details",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-4 h-4" })
						})
					]
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 text-sm text-muted-foreground",
				children: "No simulation yet. Run one below."
			}),
			err && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 text-xs text-destructive flex items-start gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "w-3.5 h-3.5 mt-0.5" }),
					" ",
					err
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center gap-3 flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: runSim,
					disabled: running,
					className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary to-primary-glow text-primary-foreground text-sm font-semibold hover:scale-[1.01] transition disabled:opacity-60",
					children: running ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-4 h-4 animate-spin" }), " Simulating 1,000 futures…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "w-4 h-4" }),
						sim ? "Re-run simulation" : "Run simulation",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })
					] })
				}), sim && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-3.5 h-3.5" }), new Date(sim.created_at).toLocaleDateString()]
				})]
			})
		]
	});
}
function ScoreRing({ score }) {
	const pct = Math.max(0, Math.min(100, score));
	const r = 46;
	const c = 2 * Math.PI * r;
	const off = c - pct / 100 * c;
	const tone = pct >= 70 ? "text-primary" : pct >= 45 ? "text-amber-500" : "text-destructive";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full aspect-square max-w-[180px] mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 120 120",
			className: "w-full h-full -rotate-90",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "60",
				r,
				stroke: "currentColor",
				strokeWidth: "10",
				className: "text-secondary",
				fill: "none"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "60",
				r,
				stroke: "currentColor",
				strokeWidth: "10",
				strokeLinecap: "round",
				className: tone,
				fill: "none",
				strokeDasharray: c,
				strokeDashoffset: off,
				style: { transition: "stroke-dashoffset 0.8s ease" }
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 grid place-items-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `text-4xl font-bold ${tone}`,
					children: Math.round(pct)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] uppercase tracking-widest text-muted-foreground",
					children: "FFCS"
				})]
			})
		})]
	});
}
function Regime({ label, pct, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border/60 bg-secondary/30 px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `text-lg font-semibold ${tone === "ok" ? "text-primary" : tone === "warn" ? "text-amber-500" : "text-destructive"}`,
			children: [Math.round(pct), "%"]
		})]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[10px] uppercase tracking-widest",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-foreground font-medium",
		children: value
	})] });
}
function fmt(n) {
	const v = typeof n === "string" ? Number(n) : n;
	return "MK " + Math.round(v).toLocaleString();
}
function Input({ label, value, onChange, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-medium text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value,
			onChange: (e) => onChange(e.target.value),
			required,
			className: "mt-1 w-full px-3 py-2.5 rounded-xl bg-input/50 border border-border/60 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
		})]
	});
}
function NumberInput({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-medium text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "number",
			value,
			onChange: (e) => onChange(Number(e.target.value)),
			className: "mt-1 w-full px-3 py-2.5 rounded-xl bg-input/50 border border-border/60 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
		})]
	});
}
function Select({ label, value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-medium text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			value,
			onChange: (e) => onChange(e.target.value),
			className: "mt-1 w-full px-3 py-2.5 rounded-xl bg-input/50 border border-border/60 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition",
			children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: o,
				children: o
			}, o))
		})]
	});
}
//#endregion
export { DashboardPage as component };
