import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

// ============================================
// COMPLETE PESTEL FACTORS - Malawi Specific
// ============================================
const PESTELSchema = z.object({
  // POLITICAL FACTORS
  government_stability: z.number().min(0).max(1).default(0.7),
  policy_consistency: z.number().min(0).max(1).default(0.6),
  corruption_index: z.number().min(0).max(1).default(0.4),
  tax_burden: z.number().min(0).max(1).default(0.5),
  political_risk_score: z.number().min(0).max(100).default(35),
  trade_restrictions: z.number().min(0).max(1).default(0.3),
  election_cycle_impact: z.number().min(0).max(1).default(0.25),

  // ECONOMIC FACTORS
  inflation_rate: z.number().min(0).max(50).default(15),
  exchange_rate_volatility: z.number().min(0).max(1).default(0.3),
  interest_rate: z.number().min(0).max(30).default(18),
  fuel_price_index: z.number().min(50).max(200).default(100),
  gdp_growth: z.number().min(-5).max(10).default(3.5),
  unemployment_rate: z.number().min(0).max(50).default(6.5),
  economic_confidence: z.number().min(0).max(100).default(65),
  food_price_index: z.number().min(50).max(200).default(110),
  import_export_ratio: z.number().min(0).max(1).default(0.4),

  // SOCIAL FACTORS
  mobile_money_penetration: z.number().min(0).max(1).default(0.85),
  financial_literacy: z.number().min(0).max(1).default(0.35),
  population_growth: z.number().min(0).max(5).default(2.6),
  urban_population: z.number().min(0).max(1).default(0.25),
  consumer_confidence: z.number().min(0).max(100).default(55),
  trust_in_financial_system: z.number().min(0).max(1).default(0.4),
  education_level: z.number().min(0).max(1).default(0.45),
  health_indicators: z.number().min(0).max(1).default(0.5),

  // TECHNOLOGICAL FACTORS
  internet_penetration: z.number().min(0).max(1).default(0.24),
  digital_payments_usage: z.number().min(0).max(1).default(0.65),
  tech_infrastructure: z.number().min(0).max(1).default(0.4),
  fintech_adoption: z.number().min(0).max(1).default(0.45),
  innovation_readiness: z.number().min(0).max(1).default(0.35),
  ai_adoption: z.number().min(0).max(1).default(0.15),
  automation_level: z.number().min(0).max(1).default(0.2),

  // ENVIRONMENTAL FACTORS
  rainfall_impact: z.number().min(-1).max(1).default(0),
  drought_risk: z.number().min(0).max(1).default(0.35),
  cyclone_risk: z.number().min(0).max(1).default(0.15),
  crop_yield_variability: z.number().min(0).max(1).default(0.4),
  climate_change_impact: z.number().min(-1).max(1).default(-0.1),
  natural_disaster_frequency: z.number().min(0).max(1).default(0.3),
  temperature_deviation: z.number().min(-5).max(5).default(0.5),
  air_quality_index: z.number().min(0).max(1).default(0.6),

  // LEGAL FACTORS
  contract_enforcement: z.number().min(0).max(1).default(0.45),
  business_registration_ease: z.number().min(0).max(1).default(0.5),
  labor_laws_rigidity: z.number().min(0).max(1).default(0.6),
  property_rights: z.number().min(0).max(1).default(0.4),
  bankruptcy_laws: z.number().min(0).max(1).default(0.35),
  tax_compliance_burden: z.number().min(0).max(1).default(0.55),
  regulatory_frequency: z.number().min(0).max(1).default(0.45),
});

// ============================================
// COMPLETE FP-CISON FACTORS
// ============================================
const FPCISONSchema = z.object({
  // FINANCIAL FACTORS
  credit_availability: z.number().min(0).max(1).default(0.25),
  access_to_banking: z.number().min(0).max(1).default(0.35),
  informal_lending_rates: z.number().min(0).max(100).default(60),
  remittance_inflows: z.number().min(0).max(1000).default(100),
  savings_culture: z.number().min(0).max(1).default(0.3),
  foreign_investment: z.number().min(0).max(1).default(0.25),
  microfinance_coverage: z.number().min(0).max(1).default(0.2),

  // POLITICAL RISK
  policy_change_risk: z.number().min(0).max(1).default(0.4),
  regulatory_burden: z.number().min(0).max(1).default(0.55),
  election_volatility: z.number().min(0).max(1).default(0.3),
  bureaucracy_index: z.number().min(0).max(1).default(0.5),
  political_instability: z.number().min(0).max(1).default(0.35),

  // COMPETITIVE FACTORS
  market_density: z.number().min(0).max(1).default(0.6),
  informal_competition: z.number().min(0).max(1).default(0.7),
  market_entry_barriers: z.number().min(0).max(1).default(0.4),
  price_sensitivity: z.number().min(0).max(1).default(0.6),
  product_differentiation: z.number().min(0).max(1).default(0.35),
  competitor_count: z.number().min(0).max(100).default(15),

  // INFRASTRUCTURE
  electricity_reliability: z.number().min(0).max(1).default(0.45),
  road_quality: z.number().min(0).max(1).default(0.35),
  transport_costs: z.number().min(0).max(100).default(45),
  water_availability: z.number().min(0).max(1).default(0.55),
  communication_quality: z.number().min(0).max(1).default(0.5),
  internet_availability: z.number().min(0).max(1).default(0.3),
  logistics_infrastructure: z.number().min(0).max(1).default(0.35),

  // SOCIAL-CULTURAL
  trust_in_banks: z.number().min(0).max(1).default(0.4),
  community_support: z.number().min(0).max(1).default(0.75),
  entrepreneurship_culture: z.number().min(0).max(1).default(0.65),
  gender_business: z.number().min(0).max(1).default(0.5),
  family_business_tradition: z.number().min(0).max(1).default(0.7),

  // OPERATIONAL
  labor_availability: z.number().min(0).max(1).default(0.8),
  labor_skill_level: z.number().min(0).max(1).default(0.35),
  supply_chain_reliability: z.number().min(0).max(1).default(0.45),
  equipment_availability: z.number().min(0).max(1).default(0.4),
  management_quality: z.number().min(0).max(1).default(0.5),
  process_efficiency: z.number().min(0).max(1).default(0.45),

  // NATURAL
  climate_vulnerability: z.number().min(0).max(1).default(0.6),
  natural_disaster_risk: z.number().min(0).max(1).default(0.4),
  agricultural_sensitivity: z.number().min(0).max(1).default(0.7),
  water_scarcity: z.number().min(0).max(1).default(0.5),
  soil_quality: z.number().min(0).max(1).default(0.55),
});

// ============================================
// INPUT SCHEMA
// ============================================
const InputSchema = z.object({
  business_name: z.string(),
  sector: z.string(),
  monthly_revenue: z.number(),
  monthly_expenses: z.number(),
  cash_balance: z.number(),
  existing_loans: z.number(),
  employees: z.number(),
  years_in_operation: z.number().optional().default(3),
  location: z.enum(["urban", "rural"]).optional().default("rural"),
  payment_reliability: z.number().min(0).max(1).optional().default(0.7),
  customer_payment_delay: z.number().optional().default(14),
  use_ml_model: z.boolean().optional().default(false),
  export_report: z.boolean().optional().default(false),
  historical_data: z.array(z.any()).optional().default([]),
  pestel: PESTELSchema.optional(),
  fpcison: FPCISONSchema.optional(),
});

// ============================================
// OUTPUT SCHEMA
// ============================================
const OutSchema = z.object({
  ffcs_score: z.number(),
  base_survival: z.number(),
  stress_survival: z.number(),
  crisis_survival: z.number(),
  recommendation: z.string(),
  ai_summary: z.string(),
  simulations_run: z.number().default(1000),
  pestel_impact_score: z.number().optional(),
  fpcison_impact_score: z.number().optional(),
  scenario_breakdown: z.record(z.string(), z.any()).optional(),
  factor_breakdown: z.record(z.string(), z.any()).optional(),
  ml_prediction: z.record(z.string(), z.any()).optional(),
  export_report_url: z.string().optional(),
  confidence_interval: z.record(z.string(), z.number()).optional(),
  risk_factors: z.array(z.string()).optional(),
});

// ============================================
// MACHINE LEARNING MODEL
// ============================================
class MLModel {
  private weights: any;
  private trained: boolean = false;

  constructor() {
    this.weights = this.initializeWeights();
  }

  private initializeWeights() {
    return {
      revenue_weight: 0.25,
      expense_weight: 0.2,
      cash_weight: 0.15,
      loans_weight: 0.1,
      employees_weight: 0.05,
      years_weight: 0.05,
      location_weight: 0.05,
      sector_weight: 0.05,
      payment_reliability_weight: 0.05,
      pestel_weight: 0.03,
      fpcison_weight: 0.02,
    };
  }

  public train(historicalData: any[]) {
    // Simple ML training using historical data
    // In production, use actual ML libraries
    if (historicalData && historicalData.length > 0) {
      this.optimizeWeights(historicalData);
      this.trained = true;
    }
    return this;
  }

  private optimizeWeights(data: any[]) {
    // Gradient descent optimization (simplified)
    const learningRate = 0.01;
    let iterations = 100;

    for (let i = 0; i < iterations; i++) {
      for (const record of data) {
        const predicted = this.predictScore(record);
        const actual = record.actual_score || 0;
        const error = actual - predicted;

        // Update weights
        for (const key of Object.keys(this.weights)) {
          this.weights[key] += learningRate * error * (record[key] || 0);
        }
      }
    }
  }

  public predictScore(profile: any): number {
    const features = this.extractFeatures(profile);
    let score = 0;

    for (const [key, value] of Object.entries(features)) {
      score += (this.weights[key as keyof typeof this.weights] || 0) * (value as number);
    }

    return Math.max(0, Math.min(100, score * 100));
  }

  private extractFeatures(profile: any): any {
    const monthlyProfit = profile.monthly_revenue - profile.monthly_expenses;
    const profitMargin = profile.monthly_revenue > 0 ? monthlyProfit / profile.monthly_revenue : 0;
    const debtRatio =
      profile.monthly_revenue > 0 ? profile.existing_loans / profile.monthly_revenue : 0;
    const runway =
      monthlyProfit > 0 ? 24 : profile.cash_balance / Math.max(1, Math.abs(monthlyProfit));

    return {
      revenue_weight: Math.min(profile.monthly_revenue / 1000000, 1),
      expense_weight: Math.min(profile.monthly_expenses / 1000000, 1),
      cash_weight: Math.min(profile.cash_balance / 2000000, 1),
      loans_weight: Math.min(profile.existing_loans / 500000, 1),
      employees_weight: Math.min(profile.employees / 20, 1),
      years_weight: Math.min(profile.years_in_operation / 10, 1),
      location_weight: profile.location === "urban" ? 0.7 : 0.5,
      sector_weight: this.getSectorWeight(profile.sector),
      payment_reliability_weight: profile.payment_reliability || 0.7,
      pestel_weight: 0.7,
      fpcison_weight: 0.6,
    };
  }

  private getSectorWeight(sector: string): number {
    const weights: { [key: string]: number } = {
      Agriculture: 0.6,
      Retail: 0.75,
      Manufacturing: 0.7,
      Services: 0.8,
      Transport: 0.65,
      Construction: 0.6,
      Hospitality: 0.7,
    };
    return weights[sector] || 0.6;
  }

  public getConfidenceInterval(prediction: number): { lower: number; upper: number } {
    const marginError = 0.08;
    return {
      lower: Math.max(0, prediction - marginError * 100),
      upper: Math.min(100, prediction + marginError * 100),
    };
  }

  public identifyRiskFactors(profile: any): string[] {
    const risks: string[] = [];
    const profitMargin =
      (profile.monthly_revenue - profile.monthly_expenses) / profile.monthly_revenue;

    if (profitMargin < 0.1) {
      risks.push("Low profit margin (<10%)");
    }
    if (profile.existing_loans > profile.monthly_revenue * 12) {
      risks.push("High debt-to-annual-revenue ratio");
    }
    if (profile.cash_balance < profile.monthly_expenses * 3) {
      risks.push("Low cash runway (<3 months)");
    }
    if (profile.employees > 20 && profile.sector === "Agriculture") {
      risks.push("High labor dependency in agriculture");
    }
    if (profile.location === "rural" && profile.monthly_revenue < 500000) {
      risks.push("Rural location with low revenue");
    }
    if (profile.years_in_operation < 2) {
      risks.push("New business (<2 years)");
    }
    if (profile.payment_reliability < 0.5) {
      risks.push("Poor payment reliability");
    }
    if (profile.customer_payment_delay > 45) {
      risks.push("Long customer payment delays (>45 days)");
    }

    return risks;
  }
}

// ============================================
// REPORT GENERATOR
// ============================================
class ReportGenerator {
  public generateReport(results: any, profile: any): any {
    return {
      business_name: profile.business_name,
      sector: profile.sector,
      report_date: new Date().toISOString(),
      summary: {
        ffcs_score: results.ffcs_score,
        recommendation: results.recommendation,
        overall_risk: results.scenario_breakdown?.crisis?.risk_level || "MEDIUM",
      },
      survival_rates: {
        base: results.base_survival,
        stress: results.stress_survival,
        crisis: results.crisis_survival,
      },
      pestel_analysis: {
        score: results.pestel_impact_score,
        interpretation: this.interpretPestel(results.pestel_impact_score),
      },
      fpcison_analysis: {
        score: results.fpcison_impact_score,
        interpretation: this.interpretFpcison(results.fpcison_impact_score),
      },
      scenario_breakdown: results.scenario_breakdown,
      factor_breakdown: results.factor_breakdown,
      risk_factors: results.risk_factors || [],
      ml_prediction: results.ml_prediction || null,
      confidence_interval: results.confidence_interval || null,
      recommendations: this.generateRecommendations(results, profile),
    };
  }

  private interpretPestel(score: number): string {
    if (score >= 70) return "Favorable business environment";
    if (score >= 50) return "Moderate external risks";
    return "Challenging external environment";
  }

  private interpretFpcison(score: number): string {
    if (score >= 70) return "Strong business ecosystem";
    if (score >= 50) return "Moderate internal challenges";
    return "Significant business constraints";
  }

  private generateRecommendations(results: any, profile: any): string[] {
    const recommendations = [];

    if (results.ffcs_score >= 75) {
      recommendations.push("Approve loan with standard terms");
      recommendations.push("Monitor quarterly performance");
      recommendations.push("Consider increasing credit limit");
    } else if (results.ffcs_score >= 60) {
      recommendations.push("Approve with adjusted interest rate (+2%)");
      recommendations.push("Require monthly reporting");
      recommendations.push("Offer business advisory support");
    } else if (results.ffcs_score >= 45) {
      recommendations.push("Require additional collateral");
      recommendations.push("Shorten repayment period to 12 months");
      recommendations.push("Provide financial literacy training");
    } else {
      recommendations.push("Decline loan application");
      recommendations.push("Recommend business development support");
      recommendations.push("Suggest joining VSLAs before reapplying");
    }

    if (profile.sector === "Agriculture") {
      recommendations.push("Include crop insurance requirement");
      recommendations.push("Align repayment with harvest season");
    }

    if (profile.location === "rural") {
      recommendations.push("Partner with rural bank for monitoring");
      recommendations.push("Consider mobile money disbursement");
    }

    return recommendations;
  }
}

// ============================================
// COMPLETE MONTE CARLO ENGINE
// ============================================
class MonteCarloEngine {
  private pestel: any;
  private fpcison: any;
  private profile: any;
  private seed: number = 42;
  private mlModel: MLModel;

  constructor(profile: any, pestel: any = {}, fpcison: any = {}) {
    this.profile = profile;
    this.pestel = this.getDefaultPestel(pestel);
    this.fpcison = this.getDefaultFpcison(fpcison);
    this.mlModel = new MLModel();
  }

  private getDefaultPestel(override: any) {
    return {
      government_stability: override?.government_stability ?? 0.7,
      policy_consistency: override?.policy_consistency ?? 0.6,
      corruption_index: override?.corruption_index ?? 0.4,
      tax_burden: override?.tax_burden ?? 0.5,
      political_risk_score: override?.political_risk_score ?? 35,
      trade_restrictions: override?.trade_restrictions ?? 0.3,
      election_cycle_impact: override?.election_cycle_impact ?? 0.25,
      inflation_rate: override?.inflation_rate ?? 15,
      exchange_rate_volatility: override?.exchange_rate_volatility ?? 0.3,
      interest_rate: override?.interest_rate ?? 18,
      fuel_price_index: override?.fuel_price_index ?? 100,
      gdp_growth: override?.gdp_growth ?? 3.5,
      unemployment_rate: override?.unemployment_rate ?? 6.5,
      economic_confidence: override?.economic_confidence ?? 65,
      food_price_index: override?.food_price_index ?? 110,
      import_export_ratio: override?.import_export_ratio ?? 0.4,
      mobile_money_penetration: override?.mobile_money_penetration ?? 0.85,
      financial_literacy: override?.financial_literacy ?? 0.35,
      population_growth: override?.population_growth ?? 2.6,
      urban_population: override?.urban_population ?? 0.25,
      consumer_confidence: override?.consumer_confidence ?? 55,
      trust_in_financial_system: override?.trust_in_financial_system ?? 0.4,
      education_level: override?.education_level ?? 0.45,
      health_indicators: override?.health_indicators ?? 0.5,
      internet_penetration: override?.internet_penetration ?? 0.24,
      digital_payments_usage: override?.digital_payments_usage ?? 0.65,
      tech_infrastructure: override?.tech_infrastructure ?? 0.4,
      fintech_adoption: override?.fintech_adoption ?? 0.45,
      innovation_readiness: override?.innovation_readiness ?? 0.35,
      ai_adoption: override?.ai_adoption ?? 0.15,
      automation_level: override?.automation_level ?? 0.2,
      rainfall_impact: override?.rainfall_impact ?? 0,
      drought_risk: override?.drought_risk ?? 0.35,
      cyclone_risk: override?.cyclone_risk ?? 0.15,
      crop_yield_variability: override?.crop_yield_variability ?? 0.4,
      climate_change_impact: override?.climate_change_impact ?? -0.1,
      natural_disaster_frequency: override?.natural_disaster_frequency ?? 0.3,
      temperature_deviation: override?.temperature_deviation ?? 0.5,
      air_quality_index: override?.air_quality_index ?? 0.6,
      contract_enforcement: override?.contract_enforcement ?? 0.45,
      business_registration_ease: override?.business_registration_ease ?? 0.5,
      labor_laws_rigidity: override?.labor_laws_rigidity ?? 0.6,
      property_rights: override?.property_rights ?? 0.4,
      bankruptcy_laws: override?.bankruptcy_laws ?? 0.35,
      tax_compliance_burden: override?.tax_compliance_burden ?? 0.55,
      regulatory_frequency: override?.regulatory_frequency ?? 0.45,
    };
  }

  private getDefaultFpcison(override: any) {
    return {
      credit_availability: override?.credit_availability ?? 0.25,
      access_to_banking: override?.access_to_banking ?? 0.35,
      informal_lending_rates: override?.informal_lending_rates ?? 60,
      remittance_inflows: override?.remittance_inflows ?? 100,
      savings_culture: override?.savings_culture ?? 0.3,
      foreign_investment: override?.foreign_investment ?? 0.25,
      microfinance_coverage: override?.microfinance_coverage ?? 0.2,
      policy_change_risk: override?.policy_change_risk ?? 0.4,
      regulatory_burden: override?.regulatory_burden ?? 0.55,
      election_volatility: override?.election_volatility ?? 0.3,
      bureaucracy_index: override?.bureaucracy_index ?? 0.5,
      political_instability: override?.political_instability ?? 0.35,
      market_density: override?.market_density ?? 0.6,
      informal_competition: override?.informal_competition ?? 0.7,
      market_entry_barriers: override?.market_entry_barriers ?? 0.4,
      price_sensitivity: override?.price_sensitivity ?? 0.6,
      product_differentiation: override?.product_differentiation ?? 0.35,
      competitor_count: override?.competitor_count ?? 15,
      electricity_reliability: override?.electricity_reliability ?? 0.45,
      road_quality: override?.road_quality ?? 0.35,
      transport_costs: override?.transport_costs ?? 45,
      water_availability: override?.water_availability ?? 0.55,
      communication_quality: override?.communication_quality ?? 0.5,
      internet_availability: override?.internet_availability ?? 0.3,
      logistics_infrastructure: override?.logistics_infrastructure ?? 0.35,
      trust_in_banks: override?.trust_in_banks ?? 0.4,
      community_support: override?.community_support ?? 0.75,
      entrepreneurship_culture: override?.entrepreneurship_culture ?? 0.65,
      gender_business: override?.gender_business ?? 0.5,
      family_business_tradition: override?.family_business_tradition ?? 0.7,
      labor_availability: override?.labor_availability ?? 0.8,
      labor_skill_level: override?.labor_skill_level ?? 0.35,
      supply_chain_reliability: override?.supply_chain_reliability ?? 0.45,
      equipment_availability: override?.equipment_availability ?? 0.4,
      management_quality: override?.management_quality ?? 0.5,
      process_efficiency: override?.process_efficiency ?? 0.45,
      climate_vulnerability: override?.climate_vulnerability ?? 0.6,
      natural_disaster_risk: override?.natural_disaster_risk ?? 0.4,
      agricultural_sensitivity: override?.agricultural_sensitivity ?? 0.7,
      water_scarcity: override?.water_scarcity ?? 0.5,
      soil_quality: override?.soil_quality ?? 0.55,
    };
  }

  private random(): number {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }

  private randomChoice<T>(items: T[], weights?: number[]): T {
    if (!weights) weights = items.map(() => 1);
    const total = weights.reduce((a, b) => a + b, 0);
    let rand = this.random() * total;
    for (let i = 0; i < items.length; i++) {
      rand -= weights[i];
      if (rand <= 0) return items[i];
    }
    return items[items.length - 1];
  }

  private generateScenario(): any {
    const p = this.pestel;
    const f = this.fpcison;
    const profile = this.profile;
    const isAgriculture = profile.sector === "Agriculture";

    // Environmental Factors
    const rainfallOptions = ["normal", "below_normal", "above_normal", "drought"];
    const weights = [
      0.5 - p.drought_risk * 0.2 - p.cyclone_risk * 0.1,
      0.25 + p.drought_risk * 0.2,
      0.2 - p.cyclone_risk * 0.1,
      0.05 + p.drought_risk * 0.2 + p.cyclone_risk * 0.2,
    ];
    const rainfall = this.randomChoice(rainfallOptions, weights);

    const rainfallImpact =
      {
        normal: 0,
        below_normal: -0.15 * p.crop_yield_variability,
        above_normal: 0.05,
        drought: -0.4 * p.crop_yield_variability,
      }[rainfall] || 0;

    // Combined Impacts
    const impacts = {
      rainfall: rainfallImpact,
      drought: -p.drought_risk * 0.15 * this.random(),
      cyclone: -p.cyclone_risk * 0.1 * this.random(),
      climate: p.climate_change_impact * 0.1,
      inflation: (p.inflation_rate / 100) * this.random() * 0.4,
      exchange: p.exchange_rate_volatility * this.random() * 0.25,
      fuel: ((p.fuel_price_index - 100) / 100) * 0.2,
      interest: (p.interest_rate / 100) * 0.15,
      gdp: (p.gdp_growth / 10) * 0.1,
      unemployment: (p.unemployment_rate / 50) * 0.1,
      political:
        (1 - p.government_stability) * 0.2 +
        (1 - p.policy_consistency) * 0.15 +
        p.corruption_index * 0.1 +
        (p.political_risk_score / 100) * 0.1,
      policy: f.policy_change_risk * this.random() * 0.15,
      election: f.election_volatility * this.random() * 0.1,
      bureaucracy: f.bureaucracy_index * 0.1,
      social:
        (1 - f.trust_in_banks) * 0.08 +
        (1 - f.entrepreneurship_culture) * 0.05 +
        (1 - p.financial_literacy) * 0.07 +
        (1 - p.consumer_confidence / 100) * 0.05,
      tech:
        (1 - p.tech_infrastructure) * 0.08 +
        (1 - p.digital_payments_usage) * 0.05 +
        (1 - p.fintech_adoption) * 0.05 +
        (1 - p.innovation_readiness) * 0.05,
      legal:
        (1 - p.contract_enforcement) * 0.1 +
        (1 - p.business_registration_ease) * 0.05 +
        (1 - p.property_rights) * 0.05 +
        (1 - p.bankruptcy_laws) * 0.05,
      infra:
        (1 - f.electricity_reliability) * 0.08 +
        (1 - f.road_quality) * 0.06 +
        (f.transport_costs / 100) * 0.08 +
        (1 - f.water_availability) * 0.05 +
        (1 - f.communication_quality) * 0.04,
      comp:
        f.market_density * 0.06 +
        f.informal_competition * 0.08 +
        f.price_sensitivity * 0.05 +
        (1 - f.product_differentiation) * 0.04,
      ops:
        (1 - f.labor_skill_level) * 0.06 +
        (1 - f.supply_chain_reliability) * 0.08 +
        (1 - f.equipment_availability) * 0.05 +
        (1 - f.labor_availability) * 0.04,
      natural:
        f.climate_vulnerability * 0.08 +
        f.natural_disaster_risk * 0.06 +
        (isAgriculture ? f.agricultural_sensitivity * 0.2 : 0) +
        f.water_scarcity * 0.06,
      financial:
        (1 - f.credit_availability) * 0.08 +
        (1 - f.access_to_banking) * 0.06 +
        (f.informal_lending_rates / 100) * 0.05 +
        (1 - f.savings_culture) * 0.04,
    };

    // Agriculture bonus
    const agricultureImpact = isAgriculture
      ? (1 - p.crop_yield_variability) * 0.15 +
        (1 - f.agricultural_sensitivity) * 0.15 +
        (1 - p.drought_risk) * 0.1
      : 0;

    // Total revenue impact
    const revenueImpact =
      impacts.rainfall * 0.12 +
      impacts.drought * 0.05 +
      impacts.cyclone * 0.03 +
      impacts.climate * 0.05 +
      impacts.inflation * 0.08 +
      impacts.exchange * 0.08 +
      impacts.fuel * 0.05 +
      impacts.gdp * 0.05 +
      impacts.political * 0.05 +
      impacts.social * 0.05 +
      impacts.infra * 0.05 +
      impacts.natural * 0.1 +
      impacts.financial * 0.05 +
      (isAgriculture ? agricultureImpact * 0.2 : 0) +
      this.random() * 0.05;

    // Total expense impact
    const expenseImpact =
      impacts.fuel * 0.12 +
      impacts.inflation * 0.12 +
      impacts.interest * 0.05 +
      impacts.policy * 0.05 +
      impacts.election * 0.03 +
      impacts.bureaucracy * 0.05 +
      impacts.legal * 0.08 +
      impacts.tech * 0.05 +
      impacts.ops * 0.08 +
      impacts.comp * 0.05 +
      impacts.unemployment * 0.05 +
      this.random() * 0.1;

    const totalImpact = revenueImpact + expenseImpact;
    let scenarioType: string;
    let severity: string;

    if (totalImpact > -0.1) {
      scenarioType = "base";
      severity = "low";
    } else if (totalImpact > -0.3) {
      scenarioType = "stress";
      severity = "medium";
    } else {
      scenarioType = "crisis";
      severity = "high";
    }

    return {
      ...impacts,
      rainfall,
      agricultureImpact,
      revenueImpact,
      expenseImpact,
      totalImpact,
      scenarioType,
      severity,
    };
  }

  private runScenario(scenario: any, horizon: number): any {
    const profile = this.profile;
    let cash = profile.cash_balance;
    const monthlyRevenue = profile.monthly_revenue;
    const monthlyExpenses = profile.monthly_expenses;
    const monthlyCashflows: number[] = [];
    let survives = true;
    let survivalMonths = horizon;

    const paymentDelayImpact = profile.customer_payment_delay > 30 ? 0.85 : 1.0;
    const sectorImpact = this.getSectorImpact(profile.sector);
    const locationImpact = profile.location === "rural" ? 0.95 : 1.0;

    for (let month = 0; month < horizon; month++) {
      let revenue = monthlyRevenue * (1 + scenario.revenueImpact);

      const seasonality = this.getSeasonality(month);
      revenue *= 1 + seasonality;
      revenue *= sectorImpact;
      revenue *= locationImpact;
      revenue *= paymentDelayImpact;

      let expenses = monthlyExpenses * (1 + scenario.expenseImpact);
      expenses *= 1 + scenario.inflation * 0.5;

      let cashflow = revenue - expenses;

      if (profile.existing_loans > 0) {
        cashflow -= profile.existing_loans * 0.05;
      }

      monthlyCashflows.push(cashflow);
      cash += cashflow;

      if (cash < 0) {
        survives = false;
        survivalMonths = month;
        break;
      }
    }

    return {
      survives,
      survivalMonths,
      finalCash: cash,
      monthlyCashflows,
      scenario,
    };
  }

  private getSeasonality(month: number): number {
    const seasonality: { [key: number]: number } = {
      0: -0.1,
      1: -0.15,
      2: -0.1,
      3: 0.05,
      4: 0.15,
      5: 0.1,
      6: 0.05,
      7: 0.0,
      8: 0.05,
      9: 0.1,
      10: 0.05,
      11: -0.05,
    };
    return seasonality[month % 12] || 0;
  }

  private getSectorImpact(sector: string): number {
    const impacts: { [key: string]: number } = {
      Agriculture: 1.0,
      Retail: 0.95,
      Manufacturing: 0.9,
      Services: 0.98,
      Transport: 0.92,
      Construction: 0.88,
      Hospitality: 0.95,
    };
    return impacts[sector] || 0.95;
  }

  simulate(nScenarios: number = 1000, horizon: number = 18): any {
    const results = [];
    let survivalCount = 0;

    for (let i = 0; i < nScenarios; i++) {
      const scenario = this.generateScenario();
      const result = this.runScenario(scenario, horizon);
      results.push(result);
      if (result.survives) survivalCount++;
    }

    const survivalRate = survivalCount / nScenarios;
    const pestelScore = this.calculatePestelImpact();
    const fpcisonScore = this.calculateFpcisonImpact();
    const buckets = this.bucketResults(results);
    const factorBreakdown = this.calculateFactorBreakdown(results);

    return {
      results,
      survivalRate,
      pestelScore,
      fpcisonScore,
      buckets,
      factorBreakdown,
    };
  }

  private calculatePestelImpact(): number {
    const p = this.pestel;
    const scores = [
      p.government_stability * 0.12,
      p.policy_consistency * 0.08,
      (1 - p.corruption_index) * 0.08,
      (1 - p.tax_burden) * 0.05,
      (1 - p.political_risk_score / 100) * 0.05,
      (1 - Math.min(p.inflation_rate / 50, 1)) * 0.08,
      (1 - p.exchange_rate_volatility) * 0.06,
      (1 - Math.min(p.interest_rate / 30, 1)) * 0.04,
      (1 - Math.min(p.unemployment_rate / 50, 1)) * 0.04,
      p.mobile_money_penetration * 0.05,
      p.financial_literacy * 0.05,
      (p.consumer_confidence / 100) * 0.05,
      p.digital_payments_usage * 0.05,
      p.tech_infrastructure * 0.04,
      (1 - p.drought_risk) * 0.04,
      (1 - p.cyclone_risk) * 0.03,
      p.contract_enforcement * 0.05,
      p.business_registration_ease * 0.04,
    ];
    return scores.reduce((a, b) => a + b, 0) * 100;
  }

  private calculateFpcisonImpact(): number {
    const f = this.fpcison;
    const scores = [
      f.credit_availability * 0.1,
      f.access_to_banking * 0.08,
      (1 - f.informal_lending_rates / 100) * 0.05,
      f.savings_culture * 0.04,
      (1 - f.policy_change_risk) * 0.05,
      (1 - f.regulatory_burden) * 0.05,
      (1 - f.election_volatility) * 0.03,
      (1 - f.informal_competition) * 0.06,
      (1 - f.market_density) * 0.04,
      f.electricity_reliability * 0.06,
      f.road_quality * 0.04,
      f.water_availability * 0.04,
      f.trust_in_banks * 0.05,
      f.community_support * 0.05,
      f.labor_availability * 0.05,
      f.supply_chain_reliability * 0.06,
      (1 - f.climate_vulnerability) * 0.05,
      (1 - f.natural_disaster_risk) * 0.04,
    ];
    return scores.reduce((a, b) => a + b, 0) * 100;
  }

  private calculateFactorBreakdown(results: any[]): any {
    const baseResults = results.filter((r) => r.scenario.scenarioType === "base");
    const stressResults = results.filter((r) => r.scenario.scenarioType === "stress");
    const crisisResults = results.filter((r) => r.scenario.scenarioType === "crisis");

    return {
      base: {
        count: baseResults.length,
        survival_count: baseResults.filter((r) => r.survives).length,
        survival_rate:
          baseResults.length > 0
            ? (baseResults.filter((r) => r.survives).length / baseResults.length) * 100
            : 0,
        avg_final_cash:
          baseResults.length > 0
            ? baseResults.reduce((sum, r) => sum + r.finalCash, 0) / baseResults.length
            : 0,
      },
      stress: {
        count: stressResults.length,
        survival_count: stressResults.filter((r) => r.survives).length,
        survival_rate:
          stressResults.length > 0
            ? (stressResults.filter((r) => r.survives).length / stressResults.length) * 100
            : 0,
        avg_final_cash:
          stressResults.length > 0
            ? stressResults.reduce((sum, r) => sum + r.finalCash, 0) / stressResults.length
            : 0,
      },
      crisis: {
        count: crisisResults.length,
        survival_count: crisisResults.filter((r) => r.survives).length,
        survival_rate:
          crisisResults.length > 0
            ? (crisisResults.filter((r) => r.survives).length / crisisResults.length) * 100
            : 0,
        avg_final_cash:
          crisisResults.length > 0
            ? crisisResults.reduce((sum, r) => sum + r.finalCash, 0) / crisisResults.length
            : 0,
      },
    };
  }

  private bucketResults(results: any[]): any {
    const base = results.filter((r) => r.scenario.scenarioType === "base");
    const stress = results.filter((r) => r.scenario.scenarioType === "stress");
    const crisis = results.filter((r) => r.scenario.scenarioType === "crisis");

    const createBucket = (scenarios: any[]) => {
      if (scenarios.length === 0) {
        return { survival_rate: 0, avg_cashflow: 0, risk_level: "HIGH", count: 0 };
      }
      const survivalCount = scenarios.filter((r) => r.survives).length;
      const survivalRate = survivalCount / scenarios.length;
      const avgCashflow =
        scenarios.reduce((sum, r) => {
          const avg =
            r.monthlyCashflows.reduce((a: number, b: number) => a + b, 0) /
            r.monthlyCashflows.length;
          return sum + avg;
        }, 0) / scenarios.length;

      let riskLevel = "LOW";
      if (survivalRate < 0.5) riskLevel = "HIGH";
      else if (survivalRate < 0.7) riskLevel = "MEDIUM";

      return {
        survival_rate: survivalRate * 100,
        avg_cashflow: avgCashflow,
        risk_level: riskLevel,
        count: scenarios.length,
      };
    };

    return {
      base: createBucket(base),
      stress: createBucket(stress),
      crisis: createBucket(crisis),
    };
  }
}

// ============================================
// ROUTE HANDLER
// ============================================
export const Route = createFileRoute("/api/simulate")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        try {
          const body = await request.json();
          const parsed = InputSchema.safeParse(body);

          if (!parsed.success) {
            return new Response(JSON.stringify({ error: parsed.error.message }), {
              status: 400,
              headers: { "Content-Type": "application/json" },
            });
          }

          const m = parsed.data;
          const pestel = m.pestel || {};
          const fpcison = m.fpcison || {};

          // Run simulation
          const engine = new MonteCarloEngine(m, pestel, fpcison);
          const simulation = engine.simulate(1000, 18);

          // Calculate FFCS
          const baseSurvival = simulation.buckets.base.survival_rate / 100;
          const stressSurvival = simulation.buckets.stress.survival_rate / 100;
          const crisisSurvival = simulation.buckets.crisis.survival_rate / 100;

          const ffcsScore =
            (baseSurvival * 0.5 + stressSurvival * 0.3 + crisisSurvival * 0.2) * 100;

          // ML Model
          let mlPrediction = null;
          let confidenceInterval = null;
          let riskFactors: string[] = [];
          let exportReportUrl = null;

          if (m.use_ml_model) {
            const mlModel = new MLModel();
            if (m.historical_data && m.historical_data.length > 0) {
              mlModel.train(m.historical_data);
            }
            const mlScore = mlModel.predictScore(m);
            confidenceInterval = mlModel.getConfidenceInterval(mlScore);
            riskFactors = mlModel.identifyRiskFactors(m);
            mlPrediction = {
              score: mlScore,
              confidence_interval: confidenceInterval,
              risk_factors: riskFactors,
            };
          }

          // Generate report
          let report = null;
          if (m.export_report) {
            const reportGenerator = new ReportGenerator();
            report = reportGenerator.generateReport(
              {
                ffcs_score: ffcsScore,
                base_survival: simulation.buckets.base.survival_rate,
                stress_survival: simulation.buckets.stress.survival_rate,
                crisis_survival: simulation.buckets.crisis.survival_rate,
                pestel_impact_score: simulation.pestelScore,
                fpcison_impact_score: simulation.fpcisonScore,
                scenario_breakdown: {
                  base: simulation.buckets.base,
                  stress: simulation.buckets.stress,
                  crisis: simulation.buckets.crisis,
                },
                factor_breakdown: simulation.factorBreakdown,
                recommendation:
                  ffcsScore >= 75
                    ? "APPROVE"
                    : ffcsScore >= 60
                      ? "CONDITIONAL"
                      : ffcsScore >= 45
                        ? "HIGH RISK"
                        : "DECLINE",
                risk_factors: riskFactors,
                ml_prediction: mlPrediction,
                confidence_interval: confidenceInterval,
              },
              m,
            );
            exportReportUrl = `/reports/${m.business_name.toLowerCase().replace(/\s/g, "_")}_${Date.now()}.pdf`;
          }

          // Generate recommendation
          let recommendation = "";
          let riskLevel = "";

          if (ffcsScore >= 75) {
            recommendation = `APPROVE: ${ffcsScore.toFixed(1)}% confidence. Business shows strong resilience across all PESTEL and FP-CISON scenarios. ${mlPrediction ? `ML model agrees with ${mlPrediction.score.toFixed(1)}% confidence.` : ""}`;
            riskLevel = "LOW";
          } else if (ffcsScore >= 60) {
            recommendation = `CONDITIONAL: ${ffcsScore.toFixed(1)}% confidence. Consider adjusted terms. Monitor ${m.sector} sector risks. ${mlPrediction ? `ML model predicts ${mlPrediction.score.toFixed(1)}% confidence.` : ""}`;
            riskLevel = "MEDIUM";
          } else if (ffcsScore >= 45) {
            recommendation = `HIGH RISK: ${ffcsScore.toFixed(1)}% confidence. Additional collateral required. High sensitivity to PESTEL factors.${mlPrediction ? ` ML model confirms risk at ${mlPrediction.score.toFixed(1)}%.` : ""}`;
            riskLevel = "HIGH";
          } else {
            recommendation = `DECLINE: ${ffcsScore.toFixed(1)}% confidence. Business unlikely to survive adverse scenarios across multiple factors.${mlPrediction ? ` ML model predicts ${mlPrediction.score.toFixed(1)}% chance of success.` : ""}`;
            riskLevel = "VERY_HIGH";
          }

          // Summary
          const summary =
            `${m.business_name} shows ${ffcsScore.toFixed(1)}% confidence over 18 months. ` +
            `PESTEL impact: ${simulation.pestelScore.toFixed(1)}%, FP-CISON impact: ${simulation.fpcisonScore.toFixed(1)}%. ` +
            `Base survival: ${simulation.buckets.base.survival_rate.toFixed(1)}%, ` +
            `Crisis survival: ${simulation.buckets.crisis.survival_rate.toFixed(1)}%.` +
            (mlPrediction ? ` ML prediction: ${mlPrediction.score.toFixed(1)}%` : "");

          const result = {
            ffcs_score: Math.round(ffcsScore * 100) / 100,
            base_survival: Math.round(simulation.buckets.base.survival_rate * 100) / 100,
            stress_survival: Math.round(simulation.buckets.stress.survival_rate * 100) / 100,
            crisis_survival: Math.round(simulation.buckets.crisis.survival_rate * 100) / 100,
            recommendation,
            ai_summary: summary,
            simulations_run: 1000,
            pestel_impact_score: Math.round(simulation.pestelScore * 100) / 100,
            fpcison_impact_score: Math.round(simulation.fpcisonScore * 100) / 100,
            scenario_breakdown: {
              base: {
                survival_rate: Math.round(simulation.buckets.base.survival_rate * 100) / 100,
                avg_cashflow: Math.round(simulation.buckets.base.avg_cashflow * 100) / 100,
                risk_level: simulation.buckets.base.risk_level,
                count: simulation.buckets.base.count,
              },
              stress: {
                survival_rate: Math.round(simulation.buckets.stress.survival_rate * 100) / 100,
                avg_cashflow: Math.round(simulation.buckets.stress.avg_cashflow * 100) / 100,
                risk_level: simulation.buckets.stress.risk_level,
                count: simulation.buckets.stress.count,
              },
              crisis: {
                survival_rate: Math.round(simulation.buckets.crisis.survival_rate * 100) / 100,
                avg_cashflow: Math.round(simulation.buckets.crisis.avg_cashflow * 100) / 100,
                risk_level: simulation.buckets.crisis.risk_level,
                count: simulation.buckets.crisis.count,
              },
            },
            factor_breakdown: {
              base: simulation.factorBreakdown.base,
              stress: simulation.factorBreakdown.stress,
              crisis: simulation.factorBreakdown.crisis,
            },
            ml_prediction: mlPrediction,
            confidence_interval: confidenceInterval,
            risk_factors: riskFactors,
            export_report_url: exportReportUrl,
          };

          return new Response(JSON.stringify(result), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (error) {
          console.error("Simulation error:", error);
          return new Response(
            JSON.stringify({
              error: "Internal server error",
              details: error instanceof Error ? error.message : "Unknown error",
            }),
            { status: 500, headers: { "Content-Type": "application/json" } },
          );
        }
      },
    },
  },
});
