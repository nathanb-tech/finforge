export type MsmeProfile = {
  id: string;
  user_id: string;
  business_name: string;
  sector: string;
  monthly_revenue: number;
  monthly_expenses: number;
  cash_balance: number;
  existing_loans: number;
  employees: number;
  created_at: string;
  years_in_operation?: number;
  location?: string;
  use_ml?: boolean;
};

export type ScenarioBreakdown = {
  survival_rate?: number;
  risk_level?: string;
  avg_cashflow?: number;
  count?: number;
};

export type MlPrediction = {
  score?: number;
  risk_factors?: string[];
};

export type ConfidenceInterval = {
  lower?: number;
  upper?: number;
};

export type Simulation = {
  id: string;
  user_id: string;
  msme_id: string;
  ffcs_score: number;
  base_survival: number;
  stress_survival: number;
  crisis_survival: number;
  recommendation: string;
  ai_summary: string;
  created_at: string;
  pestel_score?: number;
  fpcison_score?: number;
  scenario_breakdown?: Record<string, ScenarioBreakdown>;
  ml_prediction?: MlPrediction;
  risk_factors?: string[];
  confidence_interval?: ConfidenceInterval;
  export_report_url?: string;
};
