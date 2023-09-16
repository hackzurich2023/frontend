import React, { PropsWithChildren } from "react";
import { NavBar } from "components/NavBar";
import { Footer } from "components/Footer";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
