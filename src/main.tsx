import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { routes } from "./routes.tsx";
import { Toaster } from "sonner";
import "./i18n/i18n.ts";
import { GlobalLoaderProvider } from "./providers/globalLoader.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.Suspense fallback="loading...">
      <QueryClientProvider client={queryClient}>
        <GlobalLoaderProvider>
          <Toaster richColors position="bottom-right" />
          <RouterProvider router={routes} />
          <ReactQueryDevtools initialIsOpen={false} />
        </GlobalLoaderProvider>
      </QueryClientProvider>
    </React.Suspense>
  </React.StrictMode>
);
