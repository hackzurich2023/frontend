import React from "react";

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { RouterProvider } from "react-router-dom";

import { router } from "routes/router";

const firebaseConfig = {
  apiKey: "AIzaSyDtiCAjI6gxJe4Bod-k-bd-0Bc6qecLQ9k",
  authDomain: "skiapp-ac3f9.firebaseapp.com",
  projectId: "skiapp-ac3f9",
  storageBucket: "skiapp-ac3f9.appspot.com",
  messagingSenderId: "40760680101",
  appId: "1:40760680101:web:7d9cce01e9e3641d1fb74c",
  measurementId: "G-JR5G262441",
};

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);

export function App() {
  return <RouterProvider router={router} />;
}
