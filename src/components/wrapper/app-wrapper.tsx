import { ReactNode } from "react";
import { NavBarHeight } from "./navbar";

export default function AppWrapper({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        marginTop: `${NavBarHeight}px`,
        maxHeight: `calc(100vh - ${NavBarHeight}px)`,
        height: `calc(100vh - ${NavBarHeight}px)`,
        minHeight: `calc(100vh - ${NavBarHeight}px)`,
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {children}
    </div>
  );
}
