# kwin-mac-rectangle

A minimal KWin script that adds [Rectangle](https://rectangleapp.com/)-style
window-snapping shortcuts to Plasma 6.

## Shortcuts

### Window snapping
| Action                                            | Shortcut                  |
| ------------------------------------------------- | ------------------------- |
| Left / Right / Top / Bottom Half                  | `Ctrl+Alt+←/→/↑/↓`        |
| Top-Left / Top-Right / Bottom-Left / Bottom-Right | `Ctrl+Alt+U/I/J/K`        |
| First / Center / Last Third                       | `Ctrl+Alt+D/F/G`          |
| First / Last Two-Thirds                           | `Ctrl+Alt+E/T`            |
| Maximize                                          | `Ctrl+Alt+Return`         |
| Almost Maximize                                   | `Ctrl+Alt+Shift+Return`   |

### Virtual desktops (substitute for Rectangle's multi-display actions)
| Action                                                  | Shortcut              |
| ------------------------------------------------------- | --------------------- |
| Move window to previous / next workspace (auto-creates) | `Ctrl+Alt+Meta+←/→`   |
| Switch to previous / next workspace (no auto-create)    | `Ctrl+Alt+Meta+↑/↓`   |

Rebindable in *System Settings → Shortcuts*; search `MacRect`.

## Install

```sh
git clone https://github.com/SyedAbuTalib/kwin-mac-rectangle.git
cd kwin-mac-rectangle
./install.sh
```

If KDE's built-in *Quick Tile* actions (`Ctrl+Alt+...`) conflict with these
shortcuts, clear them in *System Settings → Shortcuts → KWin → "Quick Tile
Window …"*. Likewise, *Konsole*'s `_launch` shortcut grabs `Ctrl+Alt+T` by
default — clear it under the Konsole entry if you want the *Last Two-Thirds*
binding to fire.

## Uninstall

```sh
kpackagetool6 --type=KWin/Script --remove kwin-mac-rectangle
```

## License

MIT — see `LICENSE`.
