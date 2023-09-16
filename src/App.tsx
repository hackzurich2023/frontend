import React from "react";

import { RouterProvider } from "react-router-dom";

import { router } from "routes/router";
import { Footer } from "components/Footer";

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}
