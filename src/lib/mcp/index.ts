import { defineMcp } from "@lovable.dev/mcp-js";
import simulateTool from "./tools/simulate";
import quickHealthTool from "./tools/score-heuristic";

export default defineMcp({
  name: "finverse-ai-mcp",
  title: "Finverse.ai MCP",
  version: "0.1.0",
  instructions:
    "Finverse.ai tools for Malawian MSME financial forecasting. Use `quick_financial_health` for a fast deterministic sanity check, and `simulate_msme_future` to run the AI Monte Carlo and get a Future Financial Confidence Score across base / stress / crisis regimes. Both tools are stateless — pass the business profile in each call.",
  tools: [simulateTool, quickHealthTool],
});
