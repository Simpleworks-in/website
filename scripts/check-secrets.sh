#!/usr/bin/env bash
# Pre-commit secret scanner for Simpleworks.
# Greps the staged diff for known token patterns and high-entropy strings.
# Exits non-zero on match — blocks the commit.

set -euo pipefail

# Files staged for commit (excluding deletions and the lockfile)
mapfile -t STAGED < <(git diff --cached --name-only --diff-filter=ACM | grep -vE '^(pnpm-lock\.yaml|package-lock\.json|yarn\.lock)$' || true)

if [ ${#STAGED[@]} -eq 0 ]; then
  exit 0
fi

# Patterns we explicitly reject.
# Add new ones over time. Each line is a grep -E pattern.
PATTERNS=(
  'ghp_[A-Za-z0-9]{20,}'                 # GitHub personal access token
  'gho_[A-Za-z0-9]{20,}'                 # GitHub OAuth token
  'ghu_[A-Za-z0-9]{20,}'                 # GitHub user token
  'ghs_[A-Za-z0-9]{20,}'                 # GitHub server token
  'ghr_[A-Za-z0-9]{20,}'                 # GitHub refresh token
  'sk_live_[A-Za-z0-9]{20,}'             # Stripe secret
  'sk_test_[A-Za-z0-9]{20,}'             # Stripe test
  'AKIA[0-9A-Z]{16}'                     # AWS access key ID
  'AIza[0-9A-Za-z_-]{35}'                # Google API key
  'xox[abp]-[0-9]+-[0-9]+-[A-Za-z0-9]+'  # Slack token
  '-----BEGIN (RSA|EC|OPENSSH) PRIVATE KEY-----'
  'KEYSTATIC_SECRET=[A-Fa-f0-9]{32,}'    # 32+ hex chars = likely a real secret value
  'KEYSTATIC_GITHUB_CLIENT_SECRET=[A-Za-z0-9_]{20,}'
)

FOUND=0
TMPDIFF=$(mktemp)
trap 'rm -f "$TMPDIFF"' EXIT

# Only inspect added lines (lines starting with +) — ignore the file headers.
git diff --cached --unified=0 -- "${STAGED[@]}" | grep -E '^\+[^+]' > "$TMPDIFF" || true

for pattern in "${PATTERNS[@]}"; do
  if grep -E -n -- "$pattern" "$TMPDIFF" > /dev/null; then
    echo "✘ SECRET LEAK CANDIDATE — pattern: $pattern"
    grep -E -n --color=always -- "$pattern" "$TMPDIFF" | head -5
    echo
    FOUND=1
  fi
done

if [ "$FOUND" -eq 1 ]; then
  cat <<EOF

──────────────────────────────────────────────────────────────────────
Secret-pattern match in staged changes. Refusing commit.

If this is a false positive, fix the staged file or commit without
this guard — but NEVER with --no-verify. Instead, either:
  1. Remove the value from the diff, OR
  2. Update scripts/check-secrets.sh to whitelist the pattern.
──────────────────────────────────────────────────────────────────────
EOF
  exit 1
fi

exit 0
