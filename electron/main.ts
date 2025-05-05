import { app, BrowserWindow, ipcMain, shell } from "electron";
import { spawn, ChildProcessWithoutNullStreams } from "child_process";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Setup paths
process.env.APP_ROOT = path.join(__dirname, "..");

export const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
export const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
export const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");
const BACKEND_DIST = path.join(
  process.resourcesPath,
  "backend",
  "dist",
  "main"
);

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, "public")
  : RENDERER_DIST;

const MAIN_WINDOW_WIDTH = 1600;
const MAIN_WINDOW_HEIGHT = 900;

let win: BrowserWindow | null;
let splash: BrowserWindow | null;
let backendProcess: ChildProcessWithoutNullStreams | null = null;
const gotTheLock = app.requestSingleInstanceLock();

function createWindow() {
  splash = new BrowserWindow({
    width: 500,
    height: 500,
    alwaysOnTop: true,
    transparent: true,
    resizable: false,
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  splash.loadURL(path.join(process.env.VITE_PUBLIC, "splash.html")); // Or path to splash route

  // Create browser window (initially hide it)
  win = new BrowserWindow({
    width: MAIN_WINDOW_WIDTH,
    height: MAIN_WINDOW_HEIGHT,
    maxHeight: MAIN_WINDOW_HEIGHT,
    maxWidth: MAIN_WINDOW_WIDTH,
    resizable: false,
    frame: false,
    transparent: true,
    icon: path.join(process.env.VITE_PUBLIC, "holos-eu-logo.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // Load renderer
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.webContents.closeDevTools();
    win.removeMenu();
    win.loadFile(path.join(RENDERER_DIST, "index.html"));
  }

  // Initially hide the main window
  win.hide();

  win.setFullScreen(true);
  win.webContents.send("fullscreen-status", true);

  win.webContents.on("did-finish-load", () => {
    splash?.close(); // Close the splash window
    win?.show(); // Show the main window
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  // Spawn backend if not in dev
  if (!VITE_DEV_SERVER_URL && !backendProcess) {
    const backendExecutable =
      process.platform === "win32" ? "main.exe" : "main";
    const backendPath = path.join(BACKEND_DIST, backendExecutable);

    backendProcess = spawn(backendPath, [], {
      cwd: path.dirname(backendPath),
      detached: false,
      stdio: "pipe", // Ensure stdio is set to "pipe" for compatibility
    }) as ChildProcessWithoutNullStreams;

    backendProcess.unref();
  }
}

function cleanup() {
  if (backendProcess) {
    try {
      console.log("Killing backend process...");
      backendProcess.kill();
    } catch (err) {
      console.error("Failed to kill backend process:", err);
    }
    backendProcess = null;
  } else {
    console.log("No backend process to clean up.");
  }
}

// Handle process termination and cleanup
process.on("exit", cleanup);
process.on("SIGINT", () => {
  cleanup();
  process.exit();
});
process.on("SIGTERM", () => {
  cleanup();
  process.exit();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    cleanup();
    app.quit();
    win = null;
  }
});

app.on("before-quit", cleanup);

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

if (!gotTheLock) {
  app.quit();
} else {
  app.on("second-instance", () => {
    if (win) {
      if (win.isMinimized()) win.restore();
      win.focus();
    }
  });

  app.whenReady().then(createWindow);
}

// API FUNCTIONS
ipcMain.on("open-external", (_event, url) => {
  shell.openExternal(url).catch((err) => {
    console.error("Failed to open URL:", err);
  });
});

ipcMain.on("close-main-window", () => {
  app.quit();
});

ipcMain.on("minimize-main-window", () => {
  if (win) {
    win.minimize();
  }
});

ipcMain.on("exit-fullscreen", () => {
  if (win) {
    win?.setFullScreen(false);

    win?.setBounds({ width: MAIN_WINDOW_WIDTH, height: MAIN_WINDOW_HEIGHT });

    win?.center();

    win.webContents.send("fullscreen-status", false);
  }
});

ipcMain.on("enter-fullscreen", () => {
  if (win) {
    win.setFullScreen(true);
    win.webContents.send("fullscreen-status", true);
  }
});
