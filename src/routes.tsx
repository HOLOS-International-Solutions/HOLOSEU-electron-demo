import { createHashRouter } from "react-router";
import RootLayout from "./pages/root-layout";
import LandingPage from "./pages/landing/landing";
import FarmOptionsPage from "./pages/farm-options/farm-options";

export const routes = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/farm-options",
        element: <FarmOptionsPage />,
      },
    ],
  },
]);
