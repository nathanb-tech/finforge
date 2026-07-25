# FINVERSE AI

The AI That Predicts Whether a Business Will Succeed Before a Bank Lends to It

---

## Table of Contents

- [Problem Statement](#problem-statement)
- [Proposed Solution](#proposed-solution)
- [Technologies Used](#technologies-used)
- [Installation Steps](#installation-steps)
- [Team Members](#team-members)
- [Screenshots](#screenshots)
- [Demo Link](#demo-link)
- [License](#license)

---

## Problem Statement

85% of Malawi's MSMEs cannot access formal credit.

Traditional banks rely on backward-looking data that most informal businesses don't have:

| Barrier | Why It Matters in Malawi |
|---------|--------------------------|
| No bank statements | 80% of businesses are informal. They sell via cash or mobile money. |
| No collateral | Most MSMEs operate from small shops or homes. |
| No credit history | They have never borrowed formally. They are invisible to the banking system. |

The Real Problem: Banks do not actually care about your past. They care about one thing: Will you repay this loan?

Today's banks make this decision by looking backward. They ask: Did you repay loans before? Do you have assets?

But for an MSME in Malawi, that backward look is useless. They have never borrowed. So the bank says: No risk data equals No loan.

This costs Malawi billions in lost economic activity.

---

## Proposed Solution

FINVERSE AI turns this problem on its head.

Instead of asking: Did you repay in the past?

FINVERSE AI asks: Will you be able to repay in the future across different market scenarios?

### How It Works

| Step | Action | Details |
|------|--------|---------|
| 1 | Collect Data | Mobile money transactions, supplier invoices, inventory records, sales, business type, location, seasonality |
| 2 | AI Analyzes | Monthly revenue, monthly costs, monthly profit, payment reliability, volatility patterns |
| 3 | Run 1000 Scenarios | Rainfall patterns, maize prices, supplier delays, customer payment delays, competition |
| 4 | Generate Confidence Score | Future Financial Confidence Score, Base Case, Stress Case, Crisis Case |

### Core Features

| Feature | Description |
|---------|-------------|
| Business Profile Upload | Upload business data via form or load sample profiles |
| 1000 Scenario Simulation | Monte Carlo simulation with animated progress |
| Confidence Score | Clear percentage score with color-coded interpretation |
| Scenario Breakdown | Base, Stress, and Crisis cases with probabilities |
| Decision Comparison | Side-by-side view: Traditional vs FINVERSE AI |

### Sample Profiles

| Profile | Loan Amount | Business Type |
|---------|-------------|---------------|
| Maize Trader | MWK 250,000 | Agricultural trading |
| Retail Shop | MWK 150,000 | General retail |
| Phone Repair | MWK 100,000 | Service business |

---

## Technologies Used

| Category | Technology | Purpose |
|----------|------------|---------|
| Framework | React 18 | UI library |
| Language | TypeScript | Type-safe JavaScript |
| Build Tool | Vite | Fast development and building |
| Styling | CSS3 | Custom styles with animations |
| Animations | Framer Motion | Smooth UI animations |
| HTTP Client | Axios | API communication |
| Charts | Recharts | Data visualization |
| Backend | Node.js + Express | API server |
| Simulation | Monte Carlo Engine | 1000 scenario simulation |
| Database | Supabase | Data storage |
| Linting | ESLint | Code quality |
| Formatting | Prettier | Code style consistency |

---

## Installation Steps

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Docker (optional)

### Setup Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/FINFORGE.git
cd FINFORGE

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env

# 4. Start development server
npm run dev
