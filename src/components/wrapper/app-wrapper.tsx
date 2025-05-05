import { ReactNode } from "react";
import { TopBarHeight } from "../shared/top-bar";

export default function AppWrapper({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        marginTop: `${TopBarHeight - 1}px`,
        maxHeight: `calc(100vh - ${TopBarHeight}px)`,
        height: `calc(100vh - ${TopBarHeight}px)`,
        minHeight: `calc(100vh - ${TopBarHeight}px)`,
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {children}
    </div>
  );
}
