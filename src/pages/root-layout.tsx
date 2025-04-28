import { NavBarHeight } from "@/components/wrapper/navbar";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <nav
        className="fixed top-0 left-0 z-[500] bg-primary w-screen"
        style={{ height: `${NavBarHeight}px` }}
      >
        NAVBAR
      </nav>
      <Outlet />
    </>
  );
}
