/**
 * Platform Adapter — abstracts Electron-specific APIs.
 *
 * Two modes are supported:
 *   - "electron": running inside the Electron main process (uses real Electron APIs)
 *   - "sidecar":  running as a plain Node.js process (uses Node equivalents)
 *
 * Consumers depending on this module can then run in either runtime
 * without per-call branching.
 *
 * The app name used to derive the user-data directory in sidecar mode
 * can be overridden by setting `APP_NAME` in the environment.
 */

import os from 'os';
import path from 'path';
import fs from 'fs';

const DEFAULT_APP_NAME = process.env.APP_NAME || 'OpenNoob';

// ── Mode detection ──

let _mode: 'electron' | 'sidecar' | null = null;

/**
 * Detect which runtime we are in.
 *
 * Reliable signals:
 *   1. `process.versions.electron` is set only when running inside an
 *      Electron runtime (ELECTRON_RUN_AS_NODE does NOT set it).
 *   2. `process.type` is populated by Electron with 'browser', 'renderer',
 *      or 'worker'. Redundant fallback in case Electron changes.
 */
export function getPlatformMode(): 'electron' | 'sidecar' {
  if (_mode) return _mode;

  const isElectronRuntime =
    !!(process as NodeJS.Process & { versions?: { electron?: string } }).versions?.electron
    || !!(process as NodeJS.Process & { type?: string }).type;

  _mode = isElectronRuntime ? 'electron' : 'sidecar';
  return _mode;
}

export function isElectronMode(): boolean {
  return getPlatformMode() === 'electron';
}

export function isSidecarMode(): boolean {
  return getPlatformMode() === 'sidecar';
}

// ── app.getPath('userData') equivalent ──

export function getUserDataPath(): string {
  if (isElectronMode()) {
    try {
      const { app } = require('electron');
      return app.getPath('userData');
    } catch {}
  }

  // Sidecar fallback: standard OS paths
  if (process.platform === 'win32') {
    return path.join(
      process.env.APPDATA || path.join(os.homedir(), 'AppData', 'Roaming'),
      DEFAULT_APP_NAME
    );
  }
  if (process.platform === 'darwin') {
    return path.join(os.homedir(), 'Library', 'Application Support', DEFAULT_APP_NAME);
  }
  return path.join(os.homedir(), '.' + DEFAULT_APP_NAME.toLowerCase());
}

// ── app.getPath('home') equivalent ──

export function getHomePath(): string {
  if (isElectronMode()) {
    try {
      const { app } = require('electron');
      return app.getPath('home');
    } catch {}
  }
  return os.homedir();
}

// ── app.getName() equivalent ──

export function getAppName(): string {
  if (isElectronMode()) {
    try {
      const { app } = require('electron');
      return app.getName();
    } catch {}
  }
  return DEFAULT_APP_NAME;
}

// ── app.isPackaged equivalent ──

export function isPackaged(): boolean {
  if (isElectronMode()) {
    try {
      const { app } = require('electron');
      return app.isPackaged;
    } catch {}
  }
  return true;
}

// ── app.getAppPath() equivalent ──

export function getAppPath(): string {
  if (isElectronMode()) {
    try {
      const { app } = require('electron');
      return app.getAppPath();
    } catch {}
  }
  return process.cwd();
}

// ── resourcesPath equivalent ──

/**
 * Locate the bundled `resources/` directory next to the executable.
 * Walks an ordered candidate list and returns the first one that exists.
 * Falls back to `path.dirname(process.execPath)` if nothing matches.
 */
export function getResourcesPath(): string {
  if (isElectronMode()) {
    try {
      return process.resourcesPath || getAppPath();
    } catch {}
  }

  const tryDir = (dir: string | null | undefined): string | null => {
    if (!dir) return null;
    try {
      if (fs.existsSync(dir)) return dir;
    } catch {}
    return null;
  };

  // 1. Next to the binary
  try {
    const exeDir = path.dirname(process.execPath);
    const hit = tryDir(path.join(exeDir, 'resources'));
    if (hit) return hit;
  } catch {}

  // 2. macOS .app bundle layout
  try {
    const exeDir = path.dirname(process.execPath);
    if (path.basename(exeDir) === 'MacOS') {
      const hit = tryDir(path.join(path.dirname(exeDir), 'Resources'));
      if (hit) return hit;
    }
  } catch {}

  // 3. dev cwd
  const cwdHit = tryDir(path.join(process.cwd(), 'resources'));
  if (cwdHit) return cwdHit;

  return path.dirname(process.execPath);
}

// ── Ensure userData directories exist ──

export function ensureDataDirs(): void {
  try {
    const dir = getUserDataPath();
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  } catch {
    // best-effort
  }
}

// ── openExternal equivalent ──

export async function openExternal(url: string): Promise<boolean> {
  if (isElectronMode()) {
    try {
      const { shell } = require('electron');
      await shell.openExternal(url);
      return true;
    } catch {
      return false;
    }
  }

  // Sidecar fallback: spawn the OS-default opener
  try {
    const { spawn } = await import('child_process');
    let cmd: string;
    let args: string[];
    if (process.platform === 'win32') {
      cmd = 'cmd';
      args = ['/c', 'start', '""', url];
    } else if (process.platform === 'darwin') {
      cmd = 'open';
      args = [url];
    } else {
      cmd = 'xdg-open';
      args = [url];
    }
    spawn(cmd, args, { detached: true, stdio: 'ignore' }).unref();
    return true;
  } catch {
    return false;
  }
}
