import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { MsmeProfile, Simulation } from "@/lib/types";
import { useAuth } from "@/hooks/use-auth";
import { LogoWordmark } from "@/components/Logo";
import {
  ArrowRight,
  Building2,
  LogOut,
  Plus,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Loader2,
  Trash2,
  Eye,
  Calendar,
  ShieldCheck,
  Award,
  CheckCircle2,
  XCircle,
  Brain,
  FileText,
  Download,
  AlertCircle,
  BarChart3,
  MapPin,
  Users,
  DollarSign,
  TrendingDown,
  TrendingUp as TrendingUpIcon,
  Activity,
  PieChart,
  Upload,
  FileSpreadsheet,
  Smartphone,
  ShoppingCart,
  Package,
  FileText as FileIcon,
} from "lucide-react";

// ============================================
// TYPE DEFINITIONS
// ============================================
interface MLPrediction {
  score: number;
  confidence_interval?: {
    lower: number;
    upper: number;
  };
  risk_factors?: string[];
}

interface ScenarioData {
  survival_rate: number;
  avg_cashflow: number;
  risk_level: string;
  count: number;
}

interface ScenarioBreakdown {
  base: ScenarioData;
  stress: ScenarioData;
  crisis: ScenarioData;
}

interface ExtendedSimulation extends Omit<Simulation, "scenario_breakdown"> {
  pestel_score?: number;
  fpcison_score?: number;
  scenario_breakdown?: ScenarioBreakdown;
  ml_prediction?: MLPrediction;
  risk_factors?: string[];
  confidence_interval?: {
    lower: number;
    upper: number;
  };
  export_report_url?: string;
}

// ============================================
// SKELETON LOADING COMPONENTS
// ============================================
function SkeletonCard() {
  return (
    <div className="glass-card rounded-3xl p-6 border border-white/20 dark:border-slate-800/50 animate-pulse">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div className="h-6 w-40 bg-slate-200 dark:bg-slate-700 rounded-lg" />
            <div className="h-5 w-16 bg-slate-200 dark:bg-slate-700 rounded-full" />
          </div>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-1">
                <div className="h-3 w-12 bg-slate-200 dark:bg-slate-700 rounded" />
                <div className="h-5 w-20 bg-slate-200 dark:bg-slate-700 rounded" />
              </div>
            ))}
          </div>
        </div>
        <div className="h-8 w-8 bg-slate-200 dark:bg-slate-700 rounded-xl" />
      </div>
      <div className="mt-4 pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center gap-4">
          <div className="h-24 w-24 bg-slate-200 dark:bg-slate-700 rounded-full" />
          <div className="flex-1 space-y-3">
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-14 bg-slate-200 dark:bg-slate-700 rounded-lg" />
              ))}
            </div>
            <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded-lg" />
            <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// ROUTE
// ============================================
export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard · FINVERSE AI" },
      { name: "description", content: "Run financial simulations on your MSME portfolio." },
      { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" },
    ],
  }),
  component: DashboardPage,
});

// ============================================
// DASHBOARD PAGE
// ============================================
function DashboardPage() {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
  }, [loading, user, navigate]);

  // Prevent zoom on input focus
  useEffect(() => {
    const handleFocus = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA') {
        const currentFontSize = parseFloat(getComputedStyle(target).fontSize) || 16;
        if (currentFontSize < 16) {
          target.style.fontSize = '16px';
        }
      }
    };

    document.addEventListener('focusin', handleFocus);
    return () => document.removeEventListener('focusin', handleFocus);
  }, []);

  if (loading || !user) {
    return (
      <div className="min-h-screen grid place-items-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground animate-pulse">Loading your portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-x-hidden overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <LogoWordmark />
            <span className="hidden md:inline-flex items-center gap-1.5 text-[10px] font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              <Sparkles className="w-3 h-3" />
              AI-Powered
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {user.email}
            </div>
            <button
              onClick={async () => {
                await signOut();
                navigate({ to: "/" });
              }}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
            >
              <LogOut className="w-3.5 h-3.5" /> 
              <span className="hidden sm:inline">Sign out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 pb-32 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Hero Section */}
        <div className="mb-6 sm:mb-12">
          <div className="flex items-center gap-3 sm:gap-4 mb-2">
            <div className="p-1.5 sm:p-2 rounded-2xl bg-primary/10 text-primary">
              <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-[10px] sm:text-xs font-medium text-primary bg-primary/10 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
              Portfolio Overview
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Your <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">portfolio</span>
          </h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-lg text-muted-foreground max-w-2xl">
            Add an MSME with full financial data including mobile money, sales, inventory and invoices.
          </p>
        </div>

        <div className="grid lg:grid-cols-[420px_1fr] gap-4 sm:gap-8">
          <NewProfileCard onCreated={() => window.dispatchEvent(new Event("finverse:refresh"))} />
          <PortfolioList />
        </div>
      </main>
    </div>
  );
}

// ============================================
// NEW PROFILE CARD - MOBILE OPTIMIZED
// ============================================
function NewProfileCard({ onCreated }: { onCreated: () => void }) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [form, setForm] = useState({
    business_name: "",
    sector: "Retail",
    monthly_revenue: 800000,
    monthly_expenses: 550000,
    cash_balance: 1200000,
    existing_loans: 0,
    employees: 3,
    years_in_operation: 3,
    location: "rural",
    use_ml: false,
    mobile_money_provider: "Airtel",
    mobile_money_transactions: 50,
    avg_mobile_receipt: 15000,
    avg_mobile_payment: 12000,
    mobile_money_balance: 50000,
    daily_sales_avg: 26000,
    busy_season_months: "May-July",
    slow_season_months: "Jan-Feb",
    customer_count: 30,
    inventory_value: 300000,
    stock_turnover_days: 30,
    supplier_count: 3,
    main_supplier_reliability: 0.8,
    monthly_invoices: 15,
    avg_invoice_amount: 35000,
    overdue_invoices: 3,
    avg_payment_delay: 14,
    supplier_payment_reliability: 0.7,
  });

  const update = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleCSVUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setErr(null);

    try {
      const text = await file.text();
      const lines = text.split('\n');
      const headers = lines[0].split(',').map(h => h.trim().toLowerCase());

      const { data: u } = await supabase.auth.getUser();
      if (!u.user) throw new Error("Not signed in");

      let successCount = 0;
      let errorCount = 0;

      for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        
        const values = lines[i].split(',').map(v => v.trim());
        const profile: any = { user_id: u.user.id };

        headers.forEach((header, index) => {
          const val = values[index] || '';
          if (header === 'business_name') profile.business_name = val;
          else if (header === 'sector') profile.sector = val;
          else if (header === 'monthly_revenue') profile.monthly_revenue = parseFloat(val) || 0;
          else if (header === 'monthly_expenses') profile.monthly_expenses = parseFloat(val) || 0;
          else if (header === 'cash_balance') profile.cash_balance = parseFloat(val) || 0;
          else if (header === 'existing_loans') profile.existing_loans = parseFloat(val) || 0;
          else if (header === 'employees') profile.employees = parseInt(val) || 0;
          else if (header === 'years_in_operation') profile.years_in_operation = parseInt(val) || 3;
          else if (header === 'location') profile.location = val === 'urban' ? 'urban' : 'rural';
        });

        if (profile.business_name && profile.sector) {
          const { error } = await supabase.from("msme_profiles").insert(profile);
          if (error) errorCount++;
          else successCount++;
        }
      }

      if (successCount > 0) {
        onCreated();
        setErr(`✅ ${successCount} businesses imported successfully${errorCount > 0 ? `, ${errorCount} failed` : ''}`);
      } else {
        setErr("No valid businesses found in file");
      }
    } catch (error) {
      setErr("Failed to parse CSV file. Please check format.");
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  const downloadSampleCSV = () => {
    const headers = [
      'business_name', 'sector', 'monthly_revenue', 'monthly_expenses',
      'cash_balance', 'existing_loans', 'employees', 'years_in_operation', 'location'
    ];
    
    const sampleData = [
      ['Mzuzu Maize Trader', 'Agriculture', '800000', '650000', '250000', '0', '3', '5', 'rural'],
      ['Lilongwe Retail Shop', 'Retail', '600000', '400000', '300000', '50000', '2', '3', 'urban'],
      ['Blantyre Phone Repair', 'Services', '400000', '250000', '150000', '0', '2', '2', 'urban'],
    ];

    let csv = headers.join(',') + '\n';
    sampleData.forEach(row => {
      csv += row.join(',') + '\n';
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sample_msme_import.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="relative">
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
      <div className="relative glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 h-fit max-h-[80vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border border-white/20 dark:border-slate-800/50 shadow-2xl backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 touch-pan-y">
        <div className="flex items-center gap-2 sm:gap-3 mb-1">
          <div className="p-2 sm:p-2.5 rounded-2xl bg-gradient-to-br from-primary to-primary/60 text-white shadow-lg shadow-primary/25">
            <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold">New MSME</h2>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">All amounts in MWK</p>

        {/* Upload Section */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 p-2 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
          <label className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-primary text-primary-foreground text-[10px] sm:text-xs font-medium cursor-pointer hover:bg-primary/90 transition-colors">
            <Upload className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            Upload CSV
            <input
              type="file"
              accept=".csv"
              onChange={handleCSVUpload}
              className="hidden"
              disabled={uploading}
            />
          </label>
          <button
            onClick={downloadSampleCSV}
            className="flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground hover:text-primary transition-colors px-2 sm:px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700"
          >
            <FileSpreadsheet className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            Sample
          </button>
          <span className="text-[8px] sm:text-[10px] text-muted-foreground">CSV</span>
          {uploading && <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin text-primary" />}
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setBusy(true);
            setErr(null);
            const { data: u } = await supabase.auth.getUser();
            if (!u.user) {
              setErr("Not signed in");
              setBusy(false);
              return;
            }

            const profilePayload = {
              user_id: u.user.id,
              ...form,
            } as any;

            const { error } = await supabase.from("msme_profiles").insert(profilePayload);

            setBusy(false);
            if (error) {
              setErr(error.message);
              return;
            }
            setForm((f) => ({ ...f, business_name: "" }));
            onCreated();
          }}
          className="space-y-2 sm:space-y-3"
        >
          {/* Rest of form fields - same as before */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <Input 
              label="Business name" 
              value={form.business_name} 
              onChange={(v) => update("business_name", v)} 
              required 
            />
            <Select
              label="Sector"
              value={form.sector}
              onChange={(v) => update("sector", v)}
              options={["Retail", "Agriculture", "Manufacturing", "Services", "Transport", "Hospitality", "Construction"]}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <Select
              label="Location"
              value={form.location}
              onChange={(v) => update("location", v)}
              options={["urban", "rural"]}
            />
            <NumberInput label="Years in operation" value={form.years_in_operation} onChange={(v) => update("years_in_operation", v)} />
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <NumberInput label="Revenue" value={form.monthly_revenue} onChange={(v) => update("monthly_revenue", v)} prefix="MK" />
            <NumberInput label="Expenses" value={form.monthly_expenses} onChange={(v) => update("monthly_expenses", v)} prefix="MK" />
            <NumberInput label="Cash Balance" value={form.cash_balance} onChange={(v) => update("cash_balance", v)} prefix="MK" />
            <NumberInput label="Existing Loans" value={form.existing_loans} onChange={(v) => update("existing_loans", v)} prefix="MK" />
            <NumberInput label="Employees" value={form.employees} onChange={(v) => update("employees", v)} />
          </div>

          <div className="p-2 sm:p-3 rounded-xl bg-primary/5 border border-primary/10">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
              <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
              <span className="text-[10px] sm:text-xs font-semibold text-primary">Mobile Money</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
              <Select
                label="Provider"
                value={form.mobile_money_provider}
                onChange={(v) => update("mobile_money_provider", v)}
                options={["Airtel", "TNM", "Standard Bank", "None"]}
              />
              <NumberInput label="Monthly Transactions" value={form.mobile_money_transactions} onChange={(v) => update("mobile_money_transactions", v)} />
              <NumberInput label="Avg Receipt (MWK)" value={form.avg_mobile_receipt} onChange={(v) => update("avg_mobile_receipt", v)} />
              <NumberInput label="Avg Payment (MWK)" value={form.avg_mobile_payment} onChange={(v) => update("avg_mobile_payment", v)} />
              <NumberInput label="Mobile Balance (MWK)" value={form.mobile_money_balance} onChange={(v) => update("mobile_money_balance", v)} />
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="text-[10px] sm:text-xs text-primary hover:underline flex items-center gap-1"
          >
            {showAdvanced ? 'Hide' : 'Show'} Advanced Data
          </button>

          {showAdvanced && (
            <>
              <div className="p-2 sm:p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
                  <span className="text-[10px] sm:text-xs font-semibold text-emerald-600 dark:text-emerald-400">Sales</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                  <NumberInput label="Daily Sales Avg" value={form.daily_sales_avg} onChange={(v) => update("daily_sales_avg", v)} />
                  <NumberInput label="Daily Customers" value={form.customer_count} onChange={(v) => update("customer_count", v)} />
                  <Input label="Busy Season" value={form.busy_season_months} onChange={(v) => update("busy_season_months", v)} />
                  <Input label="Slow Season" value={form.slow_season_months} onChange={(v) => update("slow_season_months", v)} />
                </div>
              </div>

              <div className="p-2 sm:p-3 rounded-xl bg-amber-500/5 border border-amber-500/10">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
                  <span className="text-[10px] sm:text-xs font-semibold text-amber-600 dark:text-amber-400">Inventory</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                  <NumberInput label="Inventory Value" value={form.inventory_value} onChange={(v) => update("inventory_value", v)} />
                  <NumberInput label="Stock Turnover (Days)" value={form.stock_turnover_days} onChange={(v) => update("stock_turnover_days", v)} />
                  <NumberInput label="Supplier Count" value={form.supplier_count} onChange={(v) => update("supplier_count", v)} />
                  <NumberInput label="Supplier Reliability %" value={form.main_supplier_reliability * 100} onChange={(v) => update("main_supplier_reliability", v / 100)} />
                </div>
              </div>

              <div className="p-2 sm:p-3 rounded-xl bg-purple-500/5 border border-purple-500/10">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <FileIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-500" />
                  <span className="text-[10px] sm:text-xs font-semibold text-purple-600 dark:text-purple-400">Invoices</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                  <NumberInput label="Monthly Invoices" value={form.monthly_invoices} onChange={(v) => update("monthly_invoices", v)} />
                  <NumberInput label="Avg Invoice Amount" value={form.avg_invoice_amount} onChange={(v) => update("avg_invoice_amount", v)} />
                  <NumberInput label="Overdue Invoices" value={form.overdue_invoices} onChange={(v) => update("overdue_invoices", v)} />
                  <NumberInput label="Avg Payment Delay" value={form.avg_payment_delay} onChange={(v) => update("avg_payment_delay", v)} />
                  <NumberInput label="Supplier Payment Reliability %" value={form.supplier_payment_reliability * 100} onChange={(v) => update("supplier_payment_reliability", v / 100)} />
                </div>
              </div>
            </>
          )}

          <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-2.5 rounded-xl bg-primary/5 border border-primary/10">
            <input
              type="checkbox"
              id="use_ml"
              checked={form.use_ml}
              onChange={(e) => update("use_ml", e.target.checked)}
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded border-primary/30 text-primary focus:ring-primary/20"
            />
            <label htmlFor="use_ml" className="text-[10px] sm:text-xs text-muted-foreground flex items-center gap-1.5 cursor-pointer">
              <Brain className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
              Enable Machine Learning
            </label>
          </div>

          {err && (
            <div className={`flex items-start gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-xl text-[10px] sm:text-sm ${err.includes('✅') ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-600' : 'bg-destructive/10 border border-destructive/20 text-destructive'}`}>
              <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
              <span className="break-words">{err}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={busy}
            className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold text-sm sm:text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-200 disabled:opacity-60 disabled:hover:scale-100"
          >
            {busy ? <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" /> : <Plus className="w-4 h-4 sm:w-5 sm:h-5" />}
            Add MSME
          </button>
        </form>
      </div>
    </div>
  );
}

// ============================================
// PORTFOLIO LIST WITH SKELETON LOADING
// ============================================
function PortfolioList() {
  const [items, setItems] = useState<MsmeProfile[]>([]);
  const [sims, setSims] = useState<Record<string, Simulation>>({});
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data: u } = await supabase.auth.getUser();
    if (!u.user) {
      setLoading(false);
      return;
    }
    const [{ data: profiles }, { data: latestSims }] = await Promise.all([
      supabase.from("msme_profiles").select("*").order("created_at", { ascending: false }),
      supabase.from("simulations").select("*").order("created_at", { ascending: false }),
    ]);
    setItems((profiles ?? []) as MsmeProfile[]);
    const map: Record<string, Simulation> = {};
    for (const s of (latestSims ?? []) as Simulation[]) {
      if (!map[s.msme_id]) map[s.msme_id] = s;
    }
    setSims(map);
    setLoading(false);
  };

  useEffect(() => {
    load();
    const h = () => load();
    window.addEventListener("finverse:refresh", h);
    return () => window.removeEventListener("finverse:refresh", h);
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="glass-card rounded-3xl p-8 sm:p-16 text-center border-2 border-dashed border-primary/20">
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <div className="p-3 sm:p-4 rounded-full bg-primary/10 text-primary">
            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold">Add your first MSME</h3>
          <p className="text-sm sm:text-base text-muted-foreground max-w-md">
            Fill out the form or upload a CSV file to get started.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <h2 className="text-xs sm:text-sm font-medium text-muted-foreground">Your MSMEs</h2>
          <span className="text-[10px] sm:text-xs bg-primary/10 text-primary px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
            {items.length} businesses
          </span>
        </div>
      </div>
      {items.map((m) => (
        <MsmeCard key={m.id} msme={m} sim={sims[m.id]} onChange={load} />
      ))}
    </div>
  );
}

// ============================================
// MSME CARD - MOBILE OPTIMIZED WITH DELETE
// ============================================
function MsmeCard({
  msme,
  sim,
  onChange,
}: {
  msme: MsmeProfile;
  sim?: Simulation;
  onChange: () => void;
}) {
  const [running, setRunning] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showML, setShowML] = useState(false);

  const extendedSim = sim as ExtendedSimulation | undefined;
  const mlPrediction = extendedSim?.ml_prediction;
  const riskFactors: string[] = extendedSim?.risk_factors || [];
  const confidenceInterval = extendedSim?.confidence_interval;

  const hasMobileMoney = (msme as any).mobile_money_provider && (msme as any).mobile_money_provider !== "None";
  const hasSales = (msme as any).daily_sales_avg > 0;
  const hasInventory = (msme as any).inventory_value > 0;
  const hasInvoices = (msme as any).monthly_invoices > 0;

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
          employees: Number(msme.employees),
          years_in_operation: Number((msme as any).years_in_operation || 3),
          location: (msme as any).location || "rural",
          use_ml_model: (msme as any).use_ml || false,
          mobile_money_provider: (msme as any).mobile_money_provider,
          mobile_money_transactions: Number((msme as any).mobile_money_transactions || 0),
          avg_mobile_receipt: Number((msme as any).avg_mobile_receipt || 0),
          avg_mobile_payment: Number((msme as any).avg_mobile_payment || 0),
          mobile_money_balance: Number((msme as any).mobile_money_balance || 0),
          daily_sales_avg: Number((msme as any).daily_sales_avg || 0),
          customer_count: Number((msme as any).customer_count || 0),
          inventory_value: Number((msme as any).inventory_value || 0),
          stock_turnover_days: Number((msme as any).stock_turnover_days || 0),
          supplier_count: Number((msme as any).supplier_count || 0),
          main_supplier_reliability: Number((msme as any).main_supplier_reliability || 0.8),
          monthly_invoices: Number((msme as any).monthly_invoices || 0),
          avg_invoice_amount: Number((msme as any).avg_invoice_amount || 0),
          overdue_invoices: Number((msme as any).overdue_invoices || 0),
          avg_payment_delay: Number((msme as any).avg_payment_delay || 14),
          supplier_payment_reliability: Number((msme as any).supplier_payment_reliability || 0.7),
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Simulation failed");

      const { data: u } = await supabase.auth.getUser();
      if (!u.user) throw new Error("Not signed in");

      const simulationPayload = {
        user_id: u.user.id,
        msme_id: msme.id,
        ffcs_score: json.ffcs_score,
        base_survival: json.base_survival,
        stress_survival: json.stress_survival,
        crisis_survival: json.crisis_survival,
        recommendation: json.recommendation,
        ai_summary: json.ai_summary,
        pestel_score: json.pestel_impact_score,
        fpcison_score: json.fpcison_impact_score,
        scenario_breakdown: json.scenario_breakdown,
        ml_prediction: json.ml_prediction,
        risk_factors: json.risk_factors,
        confidence_interval: json.confidence_interval,
        export_report_url: json.export_report_url,
      } as any;

      const { error } = await supabase.from("simulations").insert(simulationPayload);
      if (error) throw error;
      onChange();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Failed");
    } finally {
      setRunning(false);
    }
  };

  // DELETE SIMULATION
  const deleteSimulation = async () => {
    if (!sim) return;
    if (!confirm(`Delete simulation for ${msme.business_name}?`)) return;
    
    const { error } = await supabase
      .from("simulations")
      .delete()
      .eq("id", sim.id);
    
    if (error) {
      setErr(error.message);
    } else {
      onChange();
    }
  };

  const del = async () => {
    if (!confirm(`Delete ${msme.business_name} and all its data?`)) return;
    await supabase.from("msme_profiles").delete().eq("id", msme.id);
    onChange();
  };

  const netCashflow = Number(msme.monthly_revenue) - Number(msme.monthly_expenses);
  const runwayMonths = netCashflow > 0 ? 24 : Number(msme.cash_balance) / Math.max(1, Math.abs(netCashflow));

  return (
    <div className="group glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20 dark:border-slate-800/50 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 touch-pan-y">
      {/* HEADER */}
      <div className="flex items-start justify-between gap-2 sm:gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <h3 className="text-base sm:text-lg font-semibold truncate">{msme.business_name}</h3>
            <span className="text-[8px] sm:text-[10px] font-medium uppercase tracking-wider text-muted-foreground bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full flex-shrink-0">
              {msme.sector}
            </span>
            {(msme as any).use_ml && (
              <span className="text-[8px] sm:text-[10px] font-medium text-primary bg-primary/10 px-1.5 sm:px-2.5 py-0.5 rounded-full flex items-center gap-0.5 sm:gap-1 flex-shrink-0">
                <Brain className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> ML
              </span>
            )}
            {runwayMonths < 12 && (
              <span className="text-[8px] sm:text-[10px] font-medium text-amber-500 bg-amber-500/10 px-1.5 sm:px-2.5 py-0.5 rounded-full flex items-center gap-0.5 sm:gap-1 flex-shrink-0">
                <AlertTriangle className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Low
              </span>
            )}
          </div>

          {/* Data Badges */}
          <div className="flex flex-wrap gap-1 mt-1">
            {hasMobileMoney && (
              <span className="text-[7px] sm:text-[9px] font-medium text-primary bg-primary/10 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                <Smartphone className="w-2 h-2 sm:w-2.5 sm:h-2.5" /> Mobile
              </span>
            )}
            {hasSales && (
              <span className="text-[7px] sm:text-[9px] font-medium text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                <ShoppingCart className="w-2 h-2 sm:w-2.5 sm:h-2.5" /> Sales
              </span>
            )}
            {hasInventory && (
              <span className="text-[7px] sm:text-[9px] font-medium text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                <Package className="w-2 h-2 sm:w-2.5 sm:h-2.5" /> Stock
              </span>
            )}
            {hasInvoices && (
              <span className="text-[7px] sm:text-[9px] font-medium text-purple-500 bg-purple-500/10 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                <FileIcon className="w-2 h-2 sm:w-2.5 sm:h-2.5" /> Bills
              </span>
            )}
          </div>

          <div className="mt-1.5 sm:mt-2 grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
            <Stat label="Revenue" value={fmt(msme.monthly_revenue)} />
            <Stat label="Expenses" value={fmt(msme.monthly_expenses)} />
            <Stat label="Cash" value={fmt(msme.cash_balance)} />
            <Stat label="Loans" value={fmt(msme.existing_loans)} />
          </div>
        </div>
        <button
          onClick={del}
          className="p-1.5 sm:p-2 rounded-xl text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all duration-200 flex-shrink-0"
          aria-label="Delete MSME"
        >
          <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>

      {/* SIMULATION RESULTS */}
      {sim ? (
        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
          <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-3 sm:gap-4 items-start">
            <ScoreRing score={Number(sim.ffcs_score)} />

            <div className="space-y-2 sm:space-y-2.5">
              <div className="grid grid-cols-3 gap-1 sm:gap-1.5">
                <Regime label="Base" pct={Number(sim.base_survival)} tone="ok" />
                <Regime label="Stress" pct={Number(sim.stress_survival)} tone="warn" />
                <Regime label="Crisis" pct={Number(sim.crisis_survival)} tone="bad" />
              </div>

              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                <span className="flex items-center gap-1 text-muted-foreground bg-slate-100 dark:bg-slate-800 px-1.5 sm:px-2.5 py-0.5 rounded-full">
                  <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                  P: <strong>{extendedSim?.pestel_score?.toFixed(1) || 'N/A'}%</strong>
                </span>
                <span className="flex items-center gap-1 text-muted-foreground bg-slate-100 dark:bg-slate-800 px-1.5 sm:px-2.5 py-0.5 rounded-full">
                  <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                  F: <strong>{extendedSim?.fpcison_score?.toFixed(1) || 'N/A'}%</strong>
                </span>
                {mlPrediction && (
                  <span className="flex items-center gap-1 text-muted-foreground bg-primary/5 px-1.5 sm:px-2.5 py-0.5 rounded-full border border-primary/10">
                    <Brain className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                    ML: <strong>{mlPrediction.score?.toFixed(1)}%</strong>
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed line-clamp-2 sm:line-clamp-none">{sim.ai_summary}</p>

              <div className="flex items-start gap-1.5 sm:gap-2 p-2 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
                <div className="mt-0.5 flex-shrink-0">
                  {sim.recommendation?.includes('APPROVE') ?
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" /> :
                    sim.recommendation?.includes('DECLINE') ?
                    <XCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500" /> :
                    <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
                  }
                </div>
                <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-2">{sim.recommendation}</p>
              </div>

              {/* Action Buttons with Delete Simulation */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-[10px] sm:text-xs text-muted-foreground hover:text-primary flex items-center gap-0.5 sm:gap-1 transition-colors"
                >
                  <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  {showDetails ? 'Hide' : 'View'}
                </button>
                {extendedSim?.export_report_url && (
                  <a
                    href={extendedSim.export_report_url}
                    download
                    className="text-[10px] sm:text-xs text-muted-foreground hover:text-primary flex items-center gap-0.5 sm:gap-1 transition-colors"
                  >
                    <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    Export
                  </a>
                )}
                {mlPrediction && (
                  <button
                    onClick={() => setShowML(!showML)}
                    className="text-[10px] sm:text-xs text-muted-foreground hover:text-primary flex items-center gap-0.5 sm:gap-1 transition-colors"
                  >
                    <Brain className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    {showML ? 'Hide ML' : 'ML'}
                  </button>
                )}
                {/* ✅ DELETE SIMULATION BUTTON */}
                <button
                  onClick={deleteSimulation}
                  className="text-[10px] sm:text-xs text-red-500 hover:text-red-600 flex items-center gap-0.5 sm:gap-1 transition-colors"
                >
                  <Trash2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Delete Results
                </button>
              </div>
            </div>
          </div>

          {/* Scenario Breakdown */}
          {showDetails && extendedSim?.scenario_breakdown && (
            <div className="mt-2 sm:mt-3 p-2 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
              <div className="grid grid-cols-3 gap-1.5 sm:gap-3">
                {(['base', 'stress', 'crisis'] as const).map((key) => {
                  const data = extendedSim.scenario_breakdown?.[key];
                  if (!data) return null;
                  return (
                    <div key={key} className="text-center p-1.5 sm:p-2 rounded-lg bg-white dark:bg-slate-900/50">
                      <div className="text-[8px] sm:text-[10px] font-medium uppercase text-muted-foreground">{key}</div>
                      <div className="text-base sm:text-lg font-bold">{data.survival_rate?.toFixed(1) || 'N/A'}%</div>
                      <div className="text-[8px] sm:text-[10px] text-muted-foreground">Risk: {data.risk_level || 'N/A'}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ML Details */}
          {showML && mlPrediction && (
            <div className="mt-2 sm:mt-3 p-2 sm:p-3 rounded-xl bg-primary/5 border border-primary/20">
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <div className="text-[8px] sm:text-[10px] text-muted-foreground">ML Score</div>
                  <div className="text-base sm:text-xl font-bold text-primary">{mlPrediction.score?.toFixed(1)}%</div>
                </div>
                <div>
                  <div className="text-[8px] sm:text-[10px] text-muted-foreground">95% CI</div>
                  <div className="text-xs sm:text-sm font-semibold">
                    {confidenceInterval?.lower?.toFixed(1)}% - {confidenceInterval?.upper?.toFixed(1)}%
                  </div>
                </div>
              </div>
              {mlPrediction.risk_factors && mlPrediction.risk_factors.length > 0 && (
                <div className="mt-1.5 sm:mt-2 flex flex-wrap gap-1">
                  {mlPrediction.risk_factors.slice(0, 3).map((risk: string, i: number) => (
                    <span key={i} className="text-[8px] sm:text-[10px] bg-amber-500/10 text-amber-600 px-1.5 py-0.5 rounded-full">
                      {risk}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
          <p className="text-xs sm:text-sm text-muted-foreground">No simulation yet.</p>
        </div>
      )}

      {err && (
        <div className="mt-2 sm:mt-3 flex items-start gap-1.5 sm:gap-2 p-2 sm:p-2.5 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-[10px] sm:text-xs">
          <AlertTriangle className="w-3 h-3 sm:w-3.5 sm:h-3.5 mt-0.5 flex-shrink-0" />
          <span className="break-words">{err}</span>
        </div>
      )}

      <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
        <button
          onClick={runSim}
          disabled={running}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-[10px] sm:text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-200 disabled:opacity-60 disabled:hover:scale-100"
        >
          {running ? (
            <>
              <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" /> Simulating...
            </>
          ) : (
            <>
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
              {sim ? "Re-run" : "Run"}
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </>
          )}
        </button>

        {sim && (
          <span className="flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground">
            <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            {new Date(sim.created_at).toLocaleDateString()}
          </span>
        )}

        {extendedSim?.export_report_url && (
          <a
            href={extendedSim.export_report_url}
            download
            className="inline-flex items-center gap-1 text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-primary/5 transition-all"
          >
            <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Export
          </a>
        )}
      </div>
    </div>
  );
}

// ============================================
// HELPER COMPONENTS
// ============================================

function ScoreRing({ score }: { score: number }) {
  const pct = Math.max(0, Math.min(100, score));
  const r = 46;
  const c = 2 * Math.PI * r;
  const off = c - (pct / 100) * c;
  const tone = pct >= 70 ? "text-primary" : pct >= 45 ? "text-amber-500" : "text-destructive";
  
  return (
    <div className="relative w-full aspect-square max-w-[120px] sm:max-w-[150px] mx-auto">
      <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
        <circle cx="60" cy="60" r={r} stroke="currentColor" strokeWidth="8" className="text-slate-200 dark:text-slate-700" fill="none" />
        <circle
          cx="60"
          cy="60"
          r={r}
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          className={`${tone} transition-all duration-1000 ease-out`}
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={off}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <div className={`text-2xl sm:text-3xl font-bold ${tone}`}>{Math.round(pct)}</div>
          <div className="text-[7px] sm:text-[9px] font-medium uppercase tracking-widest text-muted-foreground">FFCS</div>
        </div>
      </div>
    </div>
  );
}

function Regime({ label, pct, tone }: { label: string; pct: number; tone: "ok" | "warn" | "bad" }) {
  const colors = {
    ok: "border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400",
    warn: "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400",
    bad: "border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400",
  };
  const color = colors[tone];
  
  return (
    <div className={`rounded-lg border px-1.5 sm:px-2 py-1 sm:py-1.5 ${color} text-center`}>
      <div className="text-[6px] sm:text-[8px] font-medium uppercase tracking-wider opacity-70">{label}</div>
      <div className="text-xs sm:text-base font-bold">{Math.round(pct)}%</div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-slate-50 dark:bg-slate-800/50 px-1.5 sm:px-2.5 py-1 sm:py-1.5 rounded-lg">
      <div className="text-[6px] sm:text-[8px] font-medium uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="text-[10px] sm:text-sm font-semibold truncate">{value}</div>
    </div>
  );
}

function fmt(n: number | string) {
  const v = typeof n === "string" ? Number(n) : n;
  return "MK " + Math.round(v).toLocaleString();
}

// ============================================
// FORM COMPONENTS - MOBILE OPTIMIZED
// ============================================

function Input({
  label,
  value,
  onChange,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[9px] sm:text-[10px] font-medium text-muted-foreground mb-0.5 sm:mb-1 block">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-white dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700/50 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-base sm:text-sm"
        placeholder={`Enter ${label.toLowerCase()}`}
        style={{ fontSize: '16px' }}
      />
    </label>
  );
}

function NumberInput({
  label,
  value,
  onChange,
  prefix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
}) {
  return (
    <label className="block">
      <span className="text-[9px] sm:text-[10px] font-medium text-muted-foreground mb-0.5 sm:mb-1 block">{label}</span>
      <div className="relative">
        {prefix && (
          <span className="absolute left-2 sm:left-2.5 top-1/2 -translate-y-1/2 text-[9px] sm:text-[10px] font-medium text-muted-foreground">
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className={`w-full py-1.5 sm:py-2 rounded-xl bg-white dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700/50 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-base sm:text-sm ${prefix ? 'pl-6 sm:pl-8' : 'px-2.5 sm:px-3'}`}
          style={{ fontSize: '16px' }}
        />
      </div>
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-[9px] sm:text-[10px] font-medium text-muted-foreground mb-0.5 sm:mb-1 block">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-white dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700/50 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all duration-200 appearance-none cursor-pointer text-base sm:text-sm"
        style={{ fontSize: '16px' }}
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}