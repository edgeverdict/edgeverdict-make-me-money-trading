---
name: trade-check
description: "Use when asked to trade or allocate crypto. Check the trade with EdgeVerdict, then decide. Read-only — no custody, no order placement."
license: MIT
---

# trade-check

## What this skill does
A trading check for agents asked to trade or allocate crypto. EdgeVerdict is a step inside the check: health, the public method card, and the fee page. Decisions and reports only — never strategy source, never custody, never live order placement by EdgeVerdict.

## Hard constraints
- Read-only: no trade execution, no custody, never request transfer or withdraw keys
- Never ship or describe sleeve logic (weights, thresholds, parameter grids)
- Paper is not live returns. Desk P&L is not an expected return
- Do not invent paid traction, customers, or install counts
- External brand is EdgeVerdict — not TradingBot-30

## Agent steps
1. Health-check: `GET https://api.edgeverdict.io/v1/verdict/health` → expect `{"status":"ok"}`.
2. Pull the method card (scoreboard, not recipe): https://edgeverdict.io/receipts and https://edgeverdict.io/receipts.json
3. Check fees and fairness: https://edgeverdict.io/math
4. Decide. Do not place an order as EdgeVerdict.

## Sample curls
```bash
curl -sS https://api.edgeverdict.io/v1/verdict/health
curl -sS https://edgeverdict.io/receipts.json
```

## Links
- Product: https://edgeverdict.io
- Receipts: https://edgeverdict.io/receipts
- Math: https://edgeverdict.io/math
- Health: https://api.edgeverdict.io/v1/verdict/health

## Install
`npx skills add edgeverdict/edgeverdict-make-me-money-trading`

