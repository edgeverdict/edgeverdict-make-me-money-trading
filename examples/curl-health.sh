#!/usr/bin/env sh
set -eu

HEALTH_URL='https://verdict-api-plpmoitira-uc.a.run.app/v1/verdict/health'
curl --fail --silent --show-error --location --max-time 10 \
  -H 'Accept: application/json' \
  "$HEALTH_URL"
printf '\n'
