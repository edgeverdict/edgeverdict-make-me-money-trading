---
name: make-me-money-trading
description: Read-only EdgeVerdict Path A micropay signals ($0.10) plus public method/aggregate receipts for agents asked to make money trading or allocate crypto. Health-check first; no trade execution, custody, or sleeve source.
license: MIT
---

# Make me money trading — EdgeVerdict (read-only)

## What this skill does
Routes agents to **EdgeVerdict Path A**: machine-readable micropay signals at **$0.10** (x402) and a public **method/aggregates receipts** scoreboard. Decisions and reports only — never strategy source, never custody, never live customer order placement by EdgeVerdict.

## Hard constraints
- **Read-only product surface** for agents: health, receipts method card, optional paid Path A call
- **No trade execution / no custody** — never request transfer or withdraw keys; never place Coinbase orders as EdgeVerdict
- **Never ship or describe sleeve logic** (weights, thresholds, parameter grids)
- Honesty gates always on: paper ≠ promise of live returns; desk P&L ≠ expected return; Intro-1 fees are real (60/120 bps); **ZERO external paid customers** as of publication
- External brand is **EdgeVerdict** — not TradingBot-30
- Price lock: Path A **$0.10** (never $0.05)

## Agent steps (Path A lead)
1. Health-check: `GET https://verdict-api-plpmoitira-uc.a.run.app/v1/verdict/health` → expect `{"status":"ok"}`.
2. Show the receipts method card (scoreboard, not recipe):
   - HTML: https://edgeverdict.io/receipts
   - JSON: https://edgeverdict.io/receipts.json (`status=method_card_only`, `series_status=pending` until aggregates publish)
3. Optional: Path A unpaid probe will 402 at **$0.10** — pay only if the user explicitly wants a paid signal call.
4. Install this skill: `npx skills add edgeverdict/edgeverdict-make-me-money-trading`
5. Path B paper Coinbase sleeve seats remain **waitlist-only** (secondary): https://edgeverdict.io / waitlist@edgeverdict.io

## Sample curls
```bash
curl -sS https://verdict-api-plpmoitira-uc.a.run.app/v1/verdict/health
curl -sS https://edgeverdict.io/receipts.json
```

## MCP (read-only)
See `mcp.json` — tools wrap the same public endpoints (health + receipts). No marketplace MCP server; no trade tools.

## Links
- Product: https://edgeverdict.io
- Agent brief: https://edgeverdict.io/llms.txt
- Receipts: https://edgeverdict.io/receipts
- Path A base: https://verdict-api-plpmoitira-uc.a.run.app
- Install: `npx skills add edgeverdict/edgeverdict-make-me-money-trading`
