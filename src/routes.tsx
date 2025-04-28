import { createHashRouter } from "react-router";
import HomePage from "./pages/home/home";
import RootLayout from "./pages/root-layout";

export const routes = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
