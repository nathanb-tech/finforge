import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import authVisual from "@/assets/auth-visual.jpg";
import { LogoWordmark } from "@/components/Logo";
import {
  ArrowRight,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  Loader2,
  AlertTriangle,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in · FINVERSE AI" },
      {
        name: "description",
        content: "Sign in to run financial simulations on sample MSME profiles.",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [showPwd, setShowPwd] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) navigate({ to: "/dashboard" });
  }, [loading, user, navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setInfo(null);
    setBusy(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate({ to: "/dashboard" });
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName },
            emailRedirectTo: `${window.location.origin}/dashboard`,
          },
        });
        if (error) throw error;
        if (!data.session) {
          const { error: signInErr } = await supabase.auth.signInWithPassword({ email, password });
          if (signInErr) throw signInErr;
        }
        navigate({ to: "/dashboard" });
      }
    } catch (e2) {
      setErr(e2 instanceof Error ? e2.message : "Auth failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground grid lg:grid-cols-[1fr_1.05fr]">
      {/* Visual side */}
      <aside className="relative hidden lg:flex flex-col justify-between p-10 overflow-hidden border-r border-border/40">
        <div className="absolute inset-0">
          <img
            src={authVisual}
            alt=""
            className="w-full h-full object-cover opacity-70"
            width={1200}
            height={1600}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 grid-bg opacity-30" />
        </div>

        <LogoWordmark className="relative" />

        <div className="relative max-w-md space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            Bank-grade simulation platform
          </div>
          <h2 className="text-4xl font-bold tracking-tight leading-tight">
            One score.
            <br />
            <span className="gradient-text">A thousand futures.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Sign in to simulate 18 months of financial futures for any MSME — and see the Future
            Financial Confidence Score in real time.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { v: "1,000", l: "scenarios" },
              { v: "18 mo", l: "horizon" },
              { v: "76%", l: "confidence" },
            ].map((s) => (
              <div key={s.l} className="glass-card rounded-xl p-3 text-center">
                <div className="text-lg font-display font-bold gradient-text-gold">{s.v}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative text-xs text-muted-foreground">
          © {new Date().getFullYear()} FINVERSE AI · FINOVATE 2026, Malawi
        </div>
      </aside>

      {/* Form side */}
      <main className="relative flex items-center justify-center p-6 md:p-12 hero-radial">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="relative w-full max-w-md">
          <LogoWordmark className="lg:hidden mb-8" size="sm" />

          <div className="animate-fade-up">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              {mode === "signin" ? "Welcome back." : "Create your account."}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {mode === "signin"
                ? "Sign in to your FINVERSE console."
                : "Get access to the simulator in seconds."}
            </p>

            {/* Segmented tabs */}
            <div className="mt-8 grid grid-cols-2 p-1 rounded-xl bg-secondary/60 border border-border/50 text-sm">
              {(["signin", "signup"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`py-2 rounded-lg font-medium transition ${
                    mode === m
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {m === "signin" ? "Sign in" : "Create account"}
                </button>
              ))}
            </div>

            <form className="mt-6 space-y-4" onSubmit={submit}>
              {mode === "signup" && (
                <Field label="Full name">
                  <input
                    type="text"
                    placeholder="Chisomo Banda"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground/60"
                    required
                  />
                </Field>
              )}
              <Field label="Work email" icon={<Mail className="w-4 h-4" />}>
                <input
                  type="email"
                  placeholder="you@bank.mw"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground/60"
                  required
                />
              </Field>
              <Field label="Password" icon={<Lock className="w-4 h-4" />}>
                <input
                  type={showPwd ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={6}
                  className="w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground/60"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((s) => !s)}
                  className="text-muted-foreground hover:text-foreground"
                  aria-label={showPwd ? "Hide password" : "Show password"}
                >
                  {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </Field>

              {err && (
                <div className="text-xs text-destructive flex items-start gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 mt-0.5" /> {err}
                </div>
              )}
              {info && <div className="text-xs text-primary">{info}</div>}

              <button
                type="submit"
                disabled={busy}
                className="group w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-semibold glow-primary hover:scale-[1.01] transition disabled:opacity-60"
              >
                {busy ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    {mode === "signin" ? "Sign in" : "Create account"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </>
                )}
              </button>

              <div className="relative py-3">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/60" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-background px-3 text-muted-foreground uppercase tracking-widest">
                    or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <SocialButton
                  label="Google"
                  onClick={async () => {
                    setBusy(true);
                    const result = await lovable.auth.signInWithOAuth("google", {
                      redirect_uri: window.location.origin,
                    });
                    if (result.error) {
                      setErr(
                        result.error instanceof Error
                          ? result.error.message
                          : "Google sign-in failed",
                      );
                    }
                    setBusy(false);
                  }}
                />
              </div>
            </form>

            <p className="mt-8 text-xs text-center text-muted-foreground">
              By continuing you agree to FINVERSE's{" "}
              <a className="text-primary hover:underline" href="#">
                Terms
              </a>{" "}
              and{" "}
              <a className="text-primary hover:underline" href="#">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <div className="mt-1.5 flex items-center gap-3 px-4 py-3 rounded-xl bg-input/50 border border-border/60 focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/20 transition">
        {icon && <span className="text-muted-foreground">{icon}</span>}
        {children}
      </div>
    </label>
  );
}

function SocialButton({ label, onClick }: { label: string; onClick?: () => void | Promise<void> }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass-card text-sm font-medium hover:border-primary/40 transition"
    >
      {label}
    </button>
  );
}
