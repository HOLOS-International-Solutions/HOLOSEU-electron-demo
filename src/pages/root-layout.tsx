import TopBar from "@/components/shared/top-bar";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
}
