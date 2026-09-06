# EdgeVerdict read-only sample curls

## Health (required first)
```bash
curl -sS https://verdict-api-plpmoitira-uc.a.run.app/v1/verdict/health
# → {"status":"ok"}
```

## Receipts method card (JSON)
```bash
curl -sS https://edgeverdict.io/receipts.json
# Expect: status=method_card_only, series_status=pending, honesty_gates.zero_paid_customers set
```

## Receipts HTML
Open https://edgeverdict.io/receipts

## Path A price lock
Micropay **$0.10** (unpaid calls return HTTP 402). Never quote $0.05.
