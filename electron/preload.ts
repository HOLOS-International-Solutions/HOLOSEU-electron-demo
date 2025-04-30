import { contextBridge, ipcRenderer } from "electron";

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld("api", {
  // EXPOSE ELECTRON BASED APIS TO REACT
  // MUST DEFINE IN electron-env.d.ts.

  openExternal: (url: string) => ipcRenderer.send("open-external", url),

  // TOP BAR APIS
  closeMainWindow: () => {
    ipcRenderer.send("close-main-window");
  },

  minimizeMainWindow: () => {
    ipcRenderer.send("minimize-main-window");
  },
  enterFullscreen: () => ipcRenderer.send("enter-fullscreen"),

  // Function to exit fullscreen mode
  exitFullscreen: () => ipcRenderer.send("exit-fullscreen"),

  onFullscreenStatusChange: (callback: (isFullscreen: boolean) => void) => {
    ipcRenderer.on("fullscreen-status", (_event, isFullscreen) => {
      callback(isFullscreen);
    });
  },
});
