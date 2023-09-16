import React from "react";

import { createRoot, Root } from "react-dom/client";

import { App } from "App";

let root: Root | null = null;

document.addEventListener("DOMContentLoaded", () => {
  if (root === null) {
    root = createRoot(document.getElementById("root")!);
    root.render(<App />);
  }
});
