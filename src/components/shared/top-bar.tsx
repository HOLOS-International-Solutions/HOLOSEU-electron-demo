import { useEffect, useState } from "react";
import WindowButtons from "./window-button";
import MenuDropdown from "./menu-dropdown";
import holosEuLogoWhiteBg from "../../assets/holos-eu-logo-white-bg.png";

export const TopBarHeight = 40;

export default function TopBar() {
  const [isFullscreen, setIsFullscreen] = useState(true);
  const [checkFullScreen, setCheckFullScreen] = useState(false);

  useEffect(() => {
    window.api.onFullscreenStatusChange((status) => {
      setIsFullscreen(status);
    });
  }, [checkFullScreen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 z-[500] bg-primary w-screen flex justify-between rounded-t-lg"
        style={{
          height: `${TopBarHeight}px`,
          ...({
            "-webkit-app-region": isFullscreen ? "no-drag" : "drag",
          } as React.CSSProperties),
        }}
      >
        <div className="flex items-center gap-1 ml-1">
          <img
            src={holosEuLogoWhiteBg}
            className="h-[70%] aspect-square rounded-lg"
          ></img>
          <MenuDropdown />
        </div>
        <WindowButtons
          isFullscreen={isFullscreen}
          setCheckFullScreen={setCheckFullScreen}
          checkFullScreen={checkFullScreen}
        />
      </nav>
    </>
  );
}
