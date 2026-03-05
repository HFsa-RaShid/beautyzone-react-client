import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import { router } from "./Routes/Routes";
import "./index.css";
import { CartProvider } from "./Provider/CartContext.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
          <Toaster position="top-right" reverseOrder={false} />
        </HelmetProvider>
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
