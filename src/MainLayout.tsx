import React, { PropsWithChildren } from "react";

import { Footer } from "components/Footer";
import { NavBar } from "components/NavBar";
import { Container } from "react-bootstrap";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <NavBar />
      <Container
        className="position-fixed overflow-scroll p-0"
        style={{ top: "86px", height: "calc(100vh - 85px)", width: '100%'}}
      >
        <Container
          className="p-0"
          style={{
            minHeight: "calc(100% - 80px)"
          }}
        >{children}</Container>
        <Footer />
      </Container>
    </>
  );
}
