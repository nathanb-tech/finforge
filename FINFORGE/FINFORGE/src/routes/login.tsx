import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-finverse.jpg";
import iconBrain from "@/assets/icon-brain.jpg";
import iconShield from "@/assets/icon-shield.jpg";
import iconChart from "@/assets/icon-chart.jpg";
import { LogoMark, LogoWordmark } from "@/components/Logo";
import {
  ArrowRight,
  TrendingUp,
  Database,
  Layers,
  ShieldCheck,
  LineChart,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Nav />
      <Hero />
      <Trust />
      <Features />
      <HowItWorks />
      <Scenarios />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <LogoWordmark />
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition">
            Features
          </a>
          <a href="#how" className="hover:text-foreground transition">
            How it works
          </a>
          <a href="#scenarios" className="hover:text-foreground transition">
            Scenarios
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Sign in
          </Link>
          <Link
            to="/login"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition glow-primary"
          >
            Get access
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 hero-radial">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center relative">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-muted-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            Malawi · Financial Inclusion
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
            Predict a business's
            <span className="block gradient-text">financial future</span>
            <span className="block">before the bank lends.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            FINVERSE AI simulates{" "}
            <span className="text-foreground font-medium">1,000 future scenarios</span> for Malawi's
            MSMEs — turning mobile money, invoices and seasonality into a
            <span className="gradient-text-gold font-semibold">
              {" "}
              Future Financial Confidence Score
            </span>
            .
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/login"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-semibold glow-primary hover:scale-[1.02] transition"
            >
              Launch the simulator
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
            <a
              href="#how"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-card text-foreground font-medium hover:border-primary/40 transition"
            >
              See how it works
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { v: "85%", l: "MSMEs unbanked" },
              { v: "1,000", l: "scenarios / decision" },
              { v: "76%", l: "confidence score" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-display font-bold gradient-text-gold">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image - Static, No Floating Cards */}
        <div className="relative">
          <div className="absolute -inset-10 bg-gradient-to-br from-primary/20 via-transparent to-gold/20 blur-3xl" />
          <div className="relative rounded-3xl overflow-hidden glass-card shadow-2xl">
            <img
              src={heroImg}
              alt="FINVERSE AI simulating a business's future across scenarios"
              width={1536}
              height={1536}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="py-10 border-y border-border/40 bg-card/20">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span>Mobile Money</span>
        <span className="opacity-40">·</span>
        <span>Supplier Invoices</span>
        <span className="opacity-40">·</span>
        <span>Inventory Data</span>
        <span className="opacity-40">·</span>
        <span>Seasonality</span>
        <span className="opacity-40">·</span>
        <span>Monte Carlo</span>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: iconBrain,
      title: "Forward-looking AI",
      body: "Traditional scores measure the past. FINVERSE simulates 18 months of possible futures using Monte Carlo methods tuned to Malawian markets.",
    },
    {
      icon: iconChart,
      title: "Data MSMEs actually have",
      body: "Mobile money history, supplier payments, sales, inventory, seasonality. No collateral. No tax returns. No credit history required.",
    },
    {
      icon: iconShield,
      title: "Risk banks can act on",
      body: "Every decision comes with Base, Stress and Crisis scenarios — so lenders see exactly what could go wrong and price risk accordingly.",
    },
  ];
  return (
    <section id="features" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="The engine"
          title={
            <>
              Not another payment app.
              <br />
              <span className="gradient-text">A decision engine.</span>
            </>
          }
          subtitle="FINVERSE AI answers the only question banks care about: will this business be able to repay — across the futures that could actually happen?"
        />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass-card rounded-2xl p-8 group hover:border-primary/40 transition"
            >
              <div className="w-16 h-16 rounded-2xl overflow-hidden mb-6 glow-primary group-hover:scale-105 transition">
                <img
                  src={f.icon}
                  alt=""
                  width={768}
                  height={768}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      icon: Database,
      t: "Collect",
      d: "12 months of mobile money, invoices, sales and business details.",
    },
    {
      n: "02",
      icon: LineChart,
      t: "Analyze",
      d: "AI extracts revenue, volatility, payment reliability and seasonal pattern.",
    },
    {
      n: "03",
      icon: Layers,
      t: "Simulate",
      d: "1,000 futures vary rainfall, prices, competition and payment delays.",
    },
    {
      n: "04",
      icon: Zap,
      t: "Decide",
      d: "One confidence score plus Base, Stress and Crisis scenarios.",
    },
  ];
  return (
    <section id="how" className="py-28 px-6 bg-card/20 border-y border-border/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From raw data to a <span className="gradient-text-gold">Confidence Score</span> in
              seconds.
            </>
          }
        />
        <div className="mt-16 grid md:grid-cols-4 gap-4 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="glass-card rounded-2xl p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-primary">{s.n}</span>
                  <s.icon className="w-4 h-4 text-gold" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{s.t}</h4>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-primary/60 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Scenarios() {
  const cases = [
    {
      name: "Base Case",
      prob: 45,
      repay: 91,
      color: "primary",
      desc: "Normal rainfall, prices and payments.",
    },
    {
      name: "Stress Case",
      prob: 35,
      repay: 64,
      color: "gold",
      desc: "Delayed rains, prices drop 15%, slow payments.",
    },
    {
      name: "Crisis Case",
      prob: 20,
      repay: 38,
      color: "destructive",
      desc: "Severe drought, 30% price drop, new competitors.",
    },
  ];
  return (
    <section id="scenarios" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="The output"
          title={
            <>
              Three futures. <span className="gradient-text">One decision.</span>
            </>
          }
          subtitle="Example: a maize trader borrowing MWK 250,000. FINVERSE reports a 76% overall confidence — broken down into scenarios the bank can actually reason about."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.name} className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <div
                className={`absolute inset-x-0 top-0 h-1 ${
                  c.color === "primary"
                    ? "bg-gradient-to-r from-primary to-primary-glow"
                    : c.color === "gold"
                      ? "bg-gradient-to-r from-gold to-primary"
                      : "bg-gradient-to-r from-destructive to-gold"
                }`}
              />
              <div className="text-sm text-muted-foreground">{c.name}</div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-5xl font-display font-bold">{c.repay}%</span>
                <span className="text-sm text-muted-foreground">repayment</span>
              </div>
              <div className="mt-6 h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    c.color === "primary"
                      ? "bg-gradient-to-r from-primary to-primary-glow"
                      : c.color === "gold"
                        ? "bg-gradient-to-r from-gold to-primary"
                        : "bg-gradient-to-r from-destructive to-gold"
                  }`}
                  style={{ width: `${c.repay}%` }}
                />
              </div>
              <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                <span>Probability of scenario</span>
                <span className="font-mono text-foreground">{c.prob}%</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto glass-card rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 hero-radial opacity-80 pointer-events-none" />
        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Lend to the <span className="gradient-text">next 70,000 businesses</span>
            <br />
            Malawi's banks currently can't see.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            Sign in to run a live simulation on a sample MSME profile — maize trader, retailer, or
            phone repair shop.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-primary to-gold text-primary-foreground font-semibold glow-gold hover:scale-[1.02] transition"
            >
              Sign in to FINVERSE
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2.5">
          <LogoMark className="w-7 h-7" />
          <span className="font-display font-semibold text-foreground">
            Finverse<span className="text-primary">.</span>ai
          </span>
          <span className="opacity-60">· Lilongwe, Malawi</span>
        </div>
        <div className="opacity-70">
          © {new Date().getFullYear()} FINVERSE AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">{eyebrow}</div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]">{title}</h2>
      {subtitle && <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}