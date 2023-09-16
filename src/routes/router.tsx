import React from "react";

import { createBrowserRouter } from "react-router-dom";

import { AccountPage } from "components/AccountPage";
import { Home } from "components/Home";
import { LoginPage } from "components/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/account",
    element: <AccountPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
