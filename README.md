# 🚀 FINVERSE AI

<div align="center">

# The AI that predicts whether a business will succeed before a bank lends to it.

### 🏆 FINOVATE 2026 — National Virtual Hackathon for Financial Innovation in Malawi

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=node.js)
![AI](https://img.shields.io/badge/AI-Gemini%202.5%20Flash-purple?style=for-the-badge)

</div>

---

# 🏆 FINOVATE 2026

**National Virtual Hackathon for Financial Innovation in Malawi**

**Organizer:** Computer Science and Information Systems Society (CoSISS)

**Official Strategic Partner:** National Bank of Malawi plc

---

# 👥 Team FinForge

**University:** Daeyang University

**Repository:** finforge

### Team Members

- Nathan Bolokonya *(Team Leader)*
- Temwa Maleka
- Benie Mubiala
- Joan Mndala
- Tadala Chadewa

📧 **Contact**

nathanb@dyuni.ac.mw

---

# 📖 Table of Contents

- Overview
- Problem Statement
- Solution
- Key Features
- Technology Stack
- System Architecture
- Data Flow
- Expected Impact
- Installation
- Environment Variables
- Running the Project
- Project Structure
- API Endpoint
- AI Engine
- Monte Carlo Simulation
- Future Financial Confidence Score (FFCS)
- Dashboard
- Future Improvements
- Team

---

# 🌍 Overview

FINVERSE AI is an AI-powered financial risk assessment platform built for Malawi's banking sector.

Instead of relying solely on historical financial information, FINVERSE AI predicts the future financial resilience of MSMEs before a loan is approved.

Using Monte Carlo simulations, Malawi-specific economic factors, machine learning, and AI-generated insights, the system enables banks and microfinance institutions to make faster, smarter, and more inclusive lending decisions.

---

# ❗ Problem Statement

Over **85% of Malawi's MSMEs** are excluded from formal credit because they lack:

- Bank statements
- Credit histories
- Collateral

Traditional lending models depend heavily on historical financial records, making them unsuitable for many informal businesses.

This financing gap limits business growth, job creation, and economic development across Malawi.

---

# 💡 Our Solution

FINVERSE AI shifts lending from:

> **"Can this business repay because it repaid before?"**

to

> **"Will this business be able to repay in the future?"**

The platform evaluates:

- Mobile Money Activity
- Business Revenue
- Expenses
- Inventory
- Sales Records
- Supplier Invoices
- Industry Sector
- Business Profile
- Malawi Economic Conditions

It then performs **1,000 Monte Carlo simulations** enhanced with:

- Malawi-specific PESTEL analysis
- FP-CISON business factors
- Machine Learning prediction
- AI-generated lending recommendations

Finally, the platform generates a **Future Financial Confidence Score (FFCS)**.

---

# ✨ Key Features

## Financial Analysis

- Future Financial Confidence Score (FFCS)
- Base Scenario Prediction
- Stress Scenario Prediction
- Crisis Scenario Prediction

## AI Features

- AI-generated business summaries
- Lending recommendations
- Risk analysis
- Explainable insights

## Simulation Engine

- 1,000 Monte Carlo simulations
- Confidence interval prediction
- Sector-specific modelling
- Malawi economic adjustments

## Dashboard

- Interactive analytics
- Glassmorphism UI
- Risk visualization
- Charts
- Scenario comparison

## Data Management

- CSV Import
- CSV Export
- Secure Authentication
- Supabase Storage

---

# 🛠 Technology Stack

## Frontend

- React 18
- TypeScript
- Vite
- TanStack Router
- Tailwind CSS
- Framer Motion

## Backend

- TanStack Start
- Node.js
- REST API

## Database

- Supabase PostgreSQL
- Authentication
- Row Level Security

## Artificial Intelligence

- Lovable AI Gateway
- Gemini 2.5 Flash
- Custom Machine Learning Model

## Validation

- Zod

---

# 🏗 System Architecture

<p align="center">
<img width="1536" height="1024" alt="ChatGPT Image Jul 27, 2026, 12_33_16 AM" src="https://github.com/user-attachments/assets/96339a75-228b-45ff-8ed2-ea2555cded91" />
</p>


## Architecture Overview

### Frontend Layer

- React
- TypeScript
- Vite
- TanStack Router
- Tailwind CSS

↓

### Backend Layer

- TanStack Start
- Server Functions
- REST API
- Monte Carlo Engine
- PESTEL Analysis
- FP-CISON Analysis

↓

### Database Layer

- Supabase Authentication
- PostgreSQL Database
- Row Level Security

↓

### AI Layer

- Lovable AI Gateway
- Gemini 2.5 Flash
- Human-readable financial summaries

---

# 🔄 System Data Flow

```
MSME Registration
        │
        ▼
Business Data Form / CSV Upload
        │
        ▼
Supabase Database
        │
        ▼
POST /api/simulate
        │
        ▼
Monte Carlo Engine
(1000 Simulations)
        │
        ▼
PESTEL Analysis
        │
        ▼
FP-CISON Analysis
        │
        ▼
Machine Learning Prediction
(95% Confidence)
        │
        ▼
FFCS Score Generated
        │
        ▼
Results Stored
        │
        ▼
AI Summary Generated
        │
        ▼
Dashboard
```

---

# 📊 Future Financial Confidence Score (FFCS)

The FFCS is FINVERSE AI's proprietary lending confidence score.

Each assessment includes:

- Overall FFCS Score
- Base Scenario
- Stress Scenario
- Crisis Scenario
- Risk Factors
- Confidence Interval
- Lending Recommendation
- AI Summary

---

# 🎲 Monte Carlo Simulation Engine

FINVERSE AI performs **1,000 independent simulations** for every business.

The engine evaluates possible changes in:

- Revenue
- Expenses
- Market Conditions
- Inflation
- Exchange Rate
- Weather Impacts
- Sector Performance
- Business Growth

These simulations estimate the probability that a business can successfully repay a loan under different economic conditions.

---

# 📈 Expected Impact

FINVERSE AI aims to:

- Unlock **MWK 35 Billion** in lending
- Increase financial inclusion from **15% to over 50%**
- Reduce default rates from **8% to 2%**
- Empower over **70,000 MSMEs**
- Improve financial decision-making through AI

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/nathanb-tech/finforge.git

cd finforge
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file.

```env
# Supabase Project Configuration
SUPABASE_PROJECT_ID="pxesjtrdegyyubafzuwc"
SUPABASE_URL="https://pxesjtrdegyyubafzuwc.supabase.co"
SUPABASE_PUBLISHABLE_KEY="sb_publishable_z83U1LJZdPyjGUFY_hlF-w_8kPSttyy"

# Vite Client-side Variables
VITE_SUPABASE_PROJECT_ID="pxesjtrdegyyubafzuwc"
VITE_SUPABASE_URL="https://pxesjtrdegyyubafzuwc.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="sb_publishable_z83U1LJZdPyjGUFY_hlF-w_8kPSttyy"
```

---

# ▶ Running the Project

Development

```bash
npm run dev
```

Production Build

```bash
npm run build
```

Preview

```bash
npm run preview
```

---

# 📁 Project Structure

```
finforge/

├── app/
├── components/
├── routes/
├── hooks/
├── lib/
├── server/
├── supabase/
├── public/
├── docs/
│   └── architecture.png
├── package.json
└── README.md
```

---

# 🌐 API Endpoint

## Run Financial Simulation

```
POST /api/simulate
```

Returns

```json
{
  "ffcsScore": 84,
  "recommendation": "APPROVE",
  "baseScenario": 91,
  "stressScenario": 76,
  "crisisScenario": 55,
  "confidence": 95,
  "summary": "Business demonstrates strong repayment potential..."
}
```

---

# 🤖 AI Engine

FINVERSE AI uses:

- Lovable AI Gateway
- Gemini 2.5 Flash

to generate:

- Business summaries
- Risk explanations
- Lending recommendations
- Human-readable reports

---

# 📊 Dashboard

The dashboard includes:

- FFCS Score Card
- Scenario Breakdown
- Monte Carlo Results
- PESTEL Analysis
- FP-CISON Analysis
- AI Summary
- Recent Simulations
- CSV Import
- Export Reports

---

# 🚀 Future Roadmap

- Open Banking Integration
- Mobile Money APIs
- Credit Bureau Integration
- Loan Portfolio Analytics
- Explainable AI Dashboard
- Mobile Application
- Offline Mode
- Predictive Lending Analytics

---

# 🇲🇼 Built for Malawi

FINVERSE AI is designed specifically for Malawi's financial ecosystem, enabling banks to make more inclusive lending decisions while expanding access to finance for underserved MSMEs.

---

# 👨‍💻 Team FinForge

**Nathan Bolokonya**  
**Temwa Maleka**  
**Benie Mubiala**  
**Joan Mndala**  
**Tadala Chadewa**

**Daeyang University**

---

<div align="center">

## ⭐ Build for Malawi. Build the Future.

**FINOVATE 2026**

Made with ❤️ by **Team FinForge**

</div><img width="1536" height="1024" alt="ChatGPT Image Jul 27, 2026, 12_33_16 AM" src="https://github.com/user-attachments/assets/221c63f1-49b4-426e-a0ca-3089a4b993c5" />
