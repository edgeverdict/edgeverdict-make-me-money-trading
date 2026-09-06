# edgeverdict-make-me-money-trading

Portable **read-only** agent skill + MCP manifest for [EdgeVerdict](https://edgeverdict.io).

## Install
```bash
npx skills add edgeverdict/edgeverdict-make-me-money-trading
```

## What it is
- Path A micropay signals at **$0.10** (health-check first)
- Public receipts method/aggregates scoreboard (`/receipts`, `/receipts.json`)
- `mcp.json` documents read-only HTTP tools (health + receipts) for SkillsMP / directory submit packs

## What it is not
- Not a trade or custody bot
- Not sleeve source / parameter leak
- Not a marketplace MCP payment server build
- Not live customer execution

## Honesty
Paper ≠ promise of live returns. Desk P&L ≠ expected return. Intro fees are real. **ZERO external paid customers** as of publication. Aggregate series may be `pending`.

## Links
- https://edgeverdict.io
- https://edgeverdict.io/llms.txt
- https://edgeverdict.io/receipts
- Health: https://verdict-api-plpmoitira-uc.a.run.app/v1/verdict/health
