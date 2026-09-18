#!/usr/bin/env bash
# Deploys dist/ to S3 with cache headers that match how Vite names files, then
# invalidates CloudFront when a distribution id is given.
#
#   assets/*, fonts/*                   hashed / stable   → one year, immutable
#   favicon, icons, logo                unhashed          → one day
#   index.html, sw.js, sitemap, robots  entry points      → no-cache
#
# index.html must never be cached long or a deploy won't reach visitors, and
# sw.js is the kill switch that retires the old service worker — it only works
# if browsers can always see the current file.
#
# Usage:  pnpm deploy:site
# Config: S3_BUCKET (required), CLOUDFRONT_DISTRIBUTION_ID, AWS_PROFILE — from the
#         environment or from .env in the project root.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIST="$ROOT/dist"

if [ -f "$ROOT/.env" ]; then
  set -a
  # shellcheck disable=SC1091
  . "$ROOT/.env"
  set +a
fi

: "${S3_BUCKET:?Set S3_BUCKET (bucket name, no s3:// prefix) in .env or the environment}"
command -v aws >/dev/null || { echo "aws CLI not found" >&2; exit 1; }
[ -f "$DIST/index.html" ] || { echo "dist/index.html missing — run 'pnpm build' first" >&2; exit 1; }

BUCKET="s3://${S3_BUCKET#s3://}"
IMMUTABLE="public, max-age=31536000, immutable"
ONE_DAY="public, max-age=86400"
NO_CACHE="no-cache"
ENTRY_FILES=(index.html sw.js sitemap.xml robots.txt)

echo "→ hashed assets"
aws s3 sync "$DIST/assets" "$BUCKET/assets" --delete --cache-control "$IMMUTABLE"

echo "→ fonts"
aws s3 sync "$DIST/fonts" "$BUCKET/fonts" --delete --cache-control "$IMMUTABLE"

echo "→ root files (icons, logo) + removing leftovers from earlier builds"
aws s3 sync "$DIST" "$BUCKET" --delete \
  --exclude "assets/*" --exclude "fonts/*" \
  --cache-control "$ONE_DAY"

echo "→ entry points (no-cache)"
for f in "${ENTRY_FILES[@]}"; do
  aws s3 cp "$DIST/$f" "$BUCKET/$f" --cache-control "$NO_CACHE" --only-show-errors
done

if [ -n "${CLOUDFRONT_DISTRIBUTION_ID:-}" ]; then
  echo "→ invalidating CloudFront $CLOUDFRONT_DISTRIBUTION_ID"
  aws cloudfront create-invalidation \
    --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
    --paths "/*" \
    --query 'Invalidation.{Id:Id,Status:Status}' --output table
fi

echo "✓ deployed to $BUCKET"
