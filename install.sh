#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

if kpackagetool6 --type=KWin/Script --list | grep -qx kwin-mac-rectangle; then
    kpackagetool6 --type=KWin/Script --upgrade .
else
    kpackagetool6 --type=KWin/Script --install .
fi

kwriteconfig6 --file kwinrc --group Plugins --key kwin-mac-rectangleEnabled true
qdbus6 org.kde.KWin /KWin reconfigure >/dev/null 2>&1 || true

echo "Installed. Enable under System Settings → Window Management → KWin Scripts."
