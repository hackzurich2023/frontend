import React, { PropsWithChildren } from "react";

import { Footer } from "components/Footer";
import { NavBar } from "components/NavBar";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
