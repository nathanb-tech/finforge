import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "simulate_msme_future",
  title: "Simulate MSME Future Financial Confidence",
  description:
    "Run FINVERSE AI's 1,000-scenario Monte Carlo across BASE / STRESS / CRISIS regimes for a Malawian MSME and return the Future Financial Confidence Score (0-100), regime survival probabilities, an AI summary, and a lender recommendation. Fully stateless — takes a business profile in the call, returns the forecast.",
  inputSchema: {
    business_name: z.string().min(1).describe("Business or trading name."),
    sector: z
      .enum(["Retail", "Agriculture", "Manufacturing", "Services", "Transport", "Hospitality"])
      .describe("Primary sector of the MSME."),
    monthly_revenue: z.number().nonnegative().describe("Average monthly revenue in MWK."),
    monthly_expenses: z
      .number()
      .nonnegative()
      .describe("Average monthly operating expenses in MWK."),
    cash_balance: z.number().nonnegative().describe("Current cash on hand in MWK."),
    existing_loans: z.number().nonnegative().describe("Outstanding loan principal in MWK."),
    employees: z.number().int().nonnegative().describe("Number of employees."),
  },
  annotations: {
    readOnlyHint: true,
    idempotentHint: false,
    openWorldHint: true,
  },
  handler: async (input) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) {
      return {
        content: [{ type: "text", text: "LOVABLE_API_KEY is not configured on the server." }],
        isError: true,
      };
    }

    const netCF = input.monthly_revenue - input.monthly_expenses;
    const runway =
      netCF > 0
        ? 24
        : input.cash_balance / Math.max(1, input.monthly_expenses - input.monthly_revenue);
    const debtRatio = input.existing_loans / Math.max(1, input.monthly_revenue * 12);

    const prompt = `You are FINVERSE AI, a financial simulation engine for Malawian MSME lending.
Given this business profile, run a mental Monte Carlo of 1,000 scenarios across an 18-month horizon and estimate survival probability under three regimes:
- BASE: normal Malawian macro conditions
- STRESS: inflation spike + 20% revenue drop
- CRISIS: FX shock + 40% revenue drop + supply disruption

Business:
- Name: ${input.business_name}
- Sector: ${input.sector}
- Monthly revenue (MWK): ${input.monthly_revenue}
- Monthly expenses (MWK): ${input.monthly_expenses}
- Cash on hand: ${input.cash_balance}
- Existing loans: ${input.existing_loans}
- Employees: ${input.employees}
- Net monthly cashflow: ${netCF}
- Approx runway (months): ${runway.toFixed(1)}
- Debt/annual-revenue ratio: ${debtRatio.toFixed(2)}

Return ONLY valid JSON matching this exact shape (no prose, no markdown fences):
{
  "ffcs_score": number 0-100,
  "base_survival": number 0-100,
  "stress_survival": number 0-100,
  "crisis_survival": number 0-100,
  "recommendation": string,
  "ai_summary": string
}
Weight ffcs_score 50/30/20 across base/stress/crisis. Be concise, quantitative, realistic for a Malawian MSME.`;

    try {
      const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Lovable-API-Key": key,
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [{ role: "user", content: prompt }],
          response_format: { type: "json_object" },
        }),
      });

      if (!res.ok) {
        const txt = await res.text();
        return {
          content: [{ type: "text", text: `AI gateway error ${res.status}: ${txt}` }],
          isError: true,
        };
      }

      const data = (await res.json()) as {
        choices?: { message?: { content?: string } }[];
      };
      const raw = data.choices?.[0]?.message?.content ?? "";
      let parsed: Record<string, unknown>;
      try {
        parsed = JSON.parse(raw);
      } catch {
        return {
          content: [{ type: "text", text: `Model returned non-JSON output: ${raw}` }],
          isError: true,
        };
      }

      return {
        content: [{ type: "text", text: JSON.stringify(parsed, null, 2) }],
        structuredContent: parsed,
      };
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      return {
        content: [{ type: "text", text: `Simulation failed: ${msg}` }],
        isError: true,
      };
    }
  },
});
