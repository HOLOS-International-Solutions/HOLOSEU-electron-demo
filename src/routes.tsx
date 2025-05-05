import { createHashRouter } from "react-router";
import RootLayout from "./pages/root-layout";
import LandingPage from "./pages/landing-page/landing-page";
import FarmOptionsPage from "./pages/farm-setup-pages/farm-options-page/farm-options-page";
import FarmCreationPage from "./pages/farm-setup-pages/farm-creation-page/farm-creation-page";
import FarmOpenPage from "./pages/farm-setup-pages/farm-open-page/farm-open-page";

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
      {
        path: "/farm-creation",
        element: <FarmCreationPage />,
      },
      {
        path: "/farm-open",
        element: <FarmOpenPage />,
      },
    ],
  },
]);
