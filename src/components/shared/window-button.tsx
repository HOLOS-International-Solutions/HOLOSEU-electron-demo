import {
  VscChromeRestore,
  VscChromeClose,
  VscChromeMaximize,
  VscChromeMinimize,
} from "react-icons/vsc";
import LanguageToggle from "./language-toggle";
import { useState } from "react";
import { AppCloseAlertModal } from "./app-close-alert-modal";
import { useTranslation } from "react-i18next";

export default function WindowButtons({
  isFullscreen,
  checkFullScreen,
  setCheckFullScreen,
}: {
  isFullscreen: boolean;
  checkFullScreen: boolean;
  setCheckFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [openAppCloseAlertModal, setOpenAppCloseAlertModal] = useState(false);
  const { t } = useTranslation();
  return (
    <div
      className="flex flex-nowrap items-center"
      style={{
        ...({ "-webkit-app-region": "no-drag" } as React.CSSProperties),
      }}
    >
      <LanguageToggle />
      <button
        className="aspect-square h-full text-white hover:bg-white/10 flex justify-center items-center nav-no-drag duration-200"
        onClick={() => {
          window.api.minimizeMainWindow();
        }}
        title="Minimize"
      >
        <VscChromeMinimize size={18} />
      </button>
      <button
        className="aspect-square h-full text-white hover:bg-white/10 flex justify-center items-center nav-no-drag duration-200"
        onClick={async () => {
          if (isFullscreen) {
            window.api.exitFullscreen();
          } else {
            window.api.enterFullscreen();
          }
          setCheckFullScreen(!checkFullScreen);
        }}
        title={isFullscreen ? "Restore" : "Maximize"}
      >
        {isFullscreen ? (
          <VscChromeRestore size={16} />
        ) : (
          <VscChromeMaximize size={16} />
        )}
      </button>
      <button
        className="aspect-square h-full text-white hover:bg-red-500 flex justify-center items-center nav-no-drag duration-200 rounded-tr-lg"
        onClick={() => {
          setOpenAppCloseAlertModal(true);
        }}
        title="Close"
      >
        <VscChromeClose size={18} />
      </button>
      <AppCloseAlertModal
        open={openAppCloseAlertModal}
        setOpen={setOpenAppCloseAlertModal}
        t={t}
      />
    </div>
  );
}
