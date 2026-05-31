// kwin-mac-rectangle — minimal macOS Rectangle shortcuts for KWin.

function snap(x, y, w, h) {
    const win = workspace.activeWindow;
    if (!win) return;
    const a = workspace.clientArea(KWin.PlacementArea, win);
    win.setMaximize(false, false);
    win.frameGeometry = {
        x: a.x + Math.round(a.width * x),
        y: a.y + Math.round(a.height * y),
        width: Math.round(a.width * w),
        height: Math.round(a.height * h),
    };
}

function bind(id, name, key, x, y, w, h) {
    registerShortcut(id, name, key, () => snap(x, y, w, h));
}

bind('mrect-left',   'MacRect: Left Half',   'Ctrl+Alt+Left',  0,   0,   1/2, 1);
bind('mrect-right',  'MacRect: Right Half',  'Ctrl+Alt+Right', 1/2, 0,   1/2, 1);
bind('mrect-up',     'MacRect: Top Half',    'Ctrl+Alt+Up',    0,   0,   1,   1/2);
bind('mrect-down',   'MacRect: Bottom Half', 'Ctrl+Alt+Down',  0,   1/2, 1,   1/2);

bind('mrect-tl', 'MacRect: Top-Left',     'Ctrl+Alt+U', 0,   0,   1/2, 1/2);
bind('mrect-tr', 'MacRect: Top-Right',    'Ctrl+Alt+I', 1/2, 0,   1/2, 1/2);
bind('mrect-bl', 'MacRect: Bottom-Left',  'Ctrl+Alt+J', 0,   1/2, 1/2, 1/2);
bind('mrect-br', 'MacRect: Bottom-Right', 'Ctrl+Alt+K', 1/2, 1/2, 1/2, 1/2);

bind('mrect-third-1', 'MacRect: First Third',  'Ctrl+Alt+D', 0,   0, 1/3, 1);
bind('mrect-third-2', 'MacRect: Center Third', 'Ctrl+Alt+F', 1/3, 0, 1/3, 1);
bind('mrect-third-3', 'MacRect: Last Third',   'Ctrl+Alt+G', 2/3, 0, 1/3, 1);

bind('mrect-tt-left',  'MacRect: First Two-Thirds', 'Ctrl+Alt+E', 0,   0, 2/3, 1);
bind('mrect-tt-right', 'MacRect: Last Two-Thirds',  'Ctrl+Alt+T', 1/3, 0, 2/3, 1);

bind('mrect-maximize', 'MacRect: Maximize',        'Ctrl+Alt+Return',       0,    0,    1,   1);
bind('mrect-almost',   'MacRect: Almost Maximize', 'Ctrl+Alt+Shift+Return', 0.05, 0.05, 0.9, 0.9);

function currentDesktopIndex() {
    const ds = workspace.desktops, cur = workspace.currentDesktop;
    for (let i = 0; i < ds.length; i++) if (ds[i].id === cur.id) return i;
    return 0;
}

function moveToDesktop(dir) {
    const win = workspace.activeWindow;
    if (!win) return;
    let target = workspace.desktops[currentDesktopIndex() + dir];
    if (!target) {
        const pos = dir > 0 ? workspace.desktops.length : 0;
        workspace.createDesktop(pos, "Workspace");
        target = workspace.desktops[pos];
    }
    if (!target) return;
    win.desktops = [target];
    workspace.currentDesktop = target;
}

function switchDesktop(dir) {
    const target = workspace.desktops[currentDesktopIndex() + dir];
    if (target) workspace.currentDesktop = target;
}

registerShortcut('mrect-ws-next',        'MacRect: Move Window to Next Workspace',     'Ctrl+Alt+Meta+Right', () => moveToDesktop(+1));
registerShortcut('mrect-ws-prev',        'MacRect: Move Window to Previous Workspace', 'Ctrl+Alt+Meta+Left',  () => moveToDesktop(-1));
registerShortcut('mrect-ws-switch-next', 'MacRect: Switch to Next Workspace',          'Ctrl+Alt+Meta+Down',  () => switchDesktop(+1));
registerShortcut('mrect-ws-switch-prev', 'MacRect: Switch to Previous Workspace',      'Ctrl+Alt+Meta+Up',    () => switchDesktop(-1));
