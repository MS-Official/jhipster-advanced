#!/usr/bin/env bash
set -euo pipefail
echo "JDL validation placeholder"
find "$(dirname "$0")/.." -name "*.jdl" | sort
