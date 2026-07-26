import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "quick_financial_health",
  title: "Quick MSME Financial Health",
  description:
    "Deterministic (no-AI) quick check of an MSME's core financial ratios: net monthly cashflow, runway in months, debt-to-annual-revenue ratio, and a rough 0-100 heuristic health score. Useful for a fast sanity check before running the full simulation.",
  inputSchema: {
    monthly_revenue: z.number().nonnegative(),
    monthly_expenses: z.number().nonnegative(),
    cash_balance: z.number().nonnegative(),
    existing_loans: z.number().nonnegative(),
  },
  annotations: {
    readOnlyHint: true,
    idempotentHint: true,
    openWorldHint: false,
  },
  handler: ({ monthly_revenue, monthly_expenses, cash_balance, existing_loans }) => {
    const netCF = monthly_revenue - monthly_expenses;
    const runwayMonths =
      netCF >= 0 ? Infinity : cash_balance / Math.max(1, monthly_expenses - monthly_revenue);
    const debtRatio = existing_loans / Math.max(1, monthly_revenue * 12);

    let score = 50;
    score += netCF > 0 ? 25 : -15;
    score += runwayMonths >= 6 ? 15 : runwayMonths >= 3 ? 5 : -15;
    score += debtRatio <= 0.3 ? 10 : debtRatio <= 0.6 ? 0 : -15;
    score = Math.max(0, Math.min(100, Math.round(score)));

    const result = {
      net_monthly_cashflow: netCF,
      runway_months: Number.isFinite(runwayMonths) ? Number(runwayMonths.toFixed(1)) : null,
      debt_to_annual_revenue: Number(debtRatio.toFixed(2)),
      heuristic_score: score,
    };

    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: result,
    };
  },
});
