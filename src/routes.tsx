import { createHashRouter } from "react-router";
import RootLayout from "./pages/root-layout";
import LandingPage from "./pages/landing/landing";

export const routes = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);
