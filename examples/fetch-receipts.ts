/** Read-only: health + receipts.json (no trade/custody). */
async function main() {
  const healthUrl =
    "https://verdict-api-plpmoitira-uc.a.run.app/v1/verdict/health";
  const receiptsUrl = "https://edgeverdict.io/receipts.json";

  const health = await fetch(healthUrl).then((r) => r.json());
  if (health?.status !== "ok") {
    throw new Error(`health not ok: ${JSON.stringify(health)}`);
  }

  const receipts = await fetch(receiptsUrl).then((r) => r.json());
  console.log({
    health,
    status: receipts.status,
    series_status: receipts.series_status,
    version: receipts.version,
    generated_at: receipts.generated_at,
    zero_paid: receipts.honesty_gates?.zero_paid_customers,
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
