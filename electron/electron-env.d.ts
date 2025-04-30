/// <reference types="vite-plugin-electron/electron-env" />

declare namespace NodeJS {
  interface ProcessEnv {
    APP_ROOT: string;
    VITE_PUBLIC: string;
  }
}

interface Window {
  // DEFINE ELECTRON BASED APIS FOR REACT TO USE LIKE SO: window.api.sendNotification(...)
  api: {
    closeMainWindow: () => void;
    minimizeMainWindow: () => void;
    enterFullscreen: () => void;
    exitFullscreen: () => void;
    openExternal: (url: string) => void;
    onFullscreenStatusChange: (
      callback: (isFullscreen: boolean) => void
    ) => void;
  };
}
