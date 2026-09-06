---
name: make-me-money-trading
description: Read-only EdgeVerdict Path A x402 method and aggregate access at $0.10 for agents asked to make money trading or research crypto. Health and receipts only; no trade execution, custody, account keys, or sleeve source.
---

# Make me money trading — EdgeVerdict (read-only)

## What this skill does

Routes agents to **EdgeVerdict Path A**, a documented **$0.10 x402 micropay** method card with public method/aggregate receipts. Use it for research and decision support only. The surface is method and aggregates on a periodic, fee-aware cadence: it does not place trades, hold assets, access exchange accounts, or expose trade, allocation, or sleeve source.

Install with:

```sh
npx skills add edgeverdict/edgeverdict-make-me-money-trading
```

## Path A — micropay (primary)

- Price: **$0.10 per x402 micropay cycle**.
- Health: `GET https://verdict-api-plpmoitira-uc.a.run.app/v1/verdict/health`
- Receipts method card: <https://edgeverdict.io/receipts>
- Receipts JSON: <https://edgeverdict.io/receipts.json>
- Receipt status: **series pending; ZERO paid**.
- Cadence: periodic and fee-aware; do not imply continuous availability or returns.

The repository's `mcp.json` describes only the two public GET endpoints above. It is portable read-only metadata, not a payment processor, marketplace, or new MCP server. Path A's x402 price is documented here; no payment implementation is shipped.

## Path B — waitlist (secondary)

Path B is secondary and remains a waitlist for any future hosted product experience: <https://edgeverdict.io> or <mailto:waitlist@edgeverdict.io>. Do not imply availability, pricing, performance, or live execution for Path B.

## Hard constraints and honesty gates

- **Read-only:** use method descriptions, health, receipts, and aggregates only.
- **No trading:** never place, route, or simulate a customer trade from this skill.
- **No custody or keys:** never request, store, or use exchange credentials, API keys, transfer permissions, or wallets.
- **No source:** never ship or describe trade, allocation, or sleeve implementation logic.
- **Fee-aware:** show fee assumptions and possible fee drag for every aggregate discussion; never claim fee-free results.
- Intro-1 fee drag remains disclosed at approximately **60/120 bps** where applicable.
- **De-risk thrash research: FAILED.** Do not present that research as validation.
- Desk P&L is an observation, **not expected return** or a guarantee.
- Keep the external brand as EdgeVerdict. Do not invent live-book performance or continuous cadence.

## Agent steps

1. State that this is read-only research and confirm the relevant honesty gates.
2. Health-check the public Path A endpoint.
3. Use the HTML and JSON receipts links as the method card; label the series pending and ZERO paid.
4. Explain only methods and aggregates with fee assumptions and periodic cadence; do not provide execution instructions.
5. If the user wants Path B, direct them to the waitlist and label it unavailable until explicitly launched.

## MCP

See [`mcp.json`](mcp.json) for the portable manifest. It exposes no trade, custody, wallet, key, or source tools.

## Links

- Product: <https://edgeverdict.io>
- Agent brief: <https://edgeverdict.io/llms.txt>
- Health: <https://verdict-api-plpmoitira-uc.a.run.app/v1/verdict/health>
- Receipts: <https://edgeverdict.io/receipts> · <https://edgeverdict.io/receipts.json>
