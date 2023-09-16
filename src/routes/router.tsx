import React from "react";

import { createBrowserRouter } from "react-router-dom";

import { Home } from "components/Home";
import { AccountPage } from "components/AccountPage";
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
