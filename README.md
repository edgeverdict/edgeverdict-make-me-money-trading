# edgeverdict-make-me-money-trading

Portable **read-only** agent skill + MCP manifest for [EdgeVerdict](https://edgeverdict.io), suitable for SkillsMP/directory submission.

## Install

```sh
npx skills add edgeverdict/edgeverdict-make-me-money-trading
```

The same skill is available at [`SKILL.md`](SKILL.md) and [`skills/make-me-money-trading/SKILL.md`](skills/make-me-money-trading/SKILL.md).

## What it does

- Leads with Path A's **$0.10 x402 micropay** method card.
- Documents periodic, fee-aware method and aggregate outputs only.
- Provides a portable [`mcp.json`](mcp.json) manifest with two read-only GET tools for existing public endpoints:
  - Health: <https://verdict-api-plpmoitira-uc.a.run.app/v1/verdict/health>
  - Receipts JSON: <https://edgeverdict.io/receipts.json>
- Links the human-readable receipts method card at <https://edgeverdict.io/receipts>.
- Includes no-dependency examples in [`examples/`](examples/).

Receipt status is stated plainly: **series pending; ZERO paid**.

## What it does not do

- It does not execute, route, or simulate a customer trade.
- It does not custody assets, handle wallets, request exchange/API keys, or access accounts.
- It does not include trade, allocation, or sleeve source/logic.
- It does not build a payment processor, marketplace, or new MCP server. `mcp.json` is endpoint metadata only; Path A's x402 price is the explicitly documented $0.10 product flow.
- Path B is a secondary waitlist at <https://edgeverdict.io> / <mailto:waitlist@edgeverdict.io>; no hosted execution or performance is implied.

## Honesty

This skill is fee-aware and preserves the honesty gates: Intro-1 fee drag is approximately **60/120 bps** where applicable; de-risk thrash research is **FAILED**; desk P&L is not expected return; and receipts state **ZERO paid**. Do not infer fee-free results, guarantees, or continuous cadence.

## Directory submission links

- Repository: <https://github.com/edgeverdict/edgeverdict-make-me-money-trading>
- Product: <https://edgeverdict.io>
- Agent brief: <https://edgeverdict.io/llms.txt>
- Health: <https://verdict-api-plpmoitira-uc.a.run.app/v1/verdict/health>
- Receipts: <https://edgeverdict.io/receipts> · <https://edgeverdict.io/receipts.json>
- Path B waitlist: <mailto:waitlist@edgeverdict.io>
