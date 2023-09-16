import React from "react";

import { Container } from "react-bootstrap";

export function Footer() {
  return (
    <footer className="bg-dark">
      <Container
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "80px" }}
      >
        <p className="mb-0 text-center text-white">
          <b>Build with &#10084; in &#127464;&#127469; at HackZurich 2023.</b>
        </p>
        <p className="mb-0 text-white text-center">
          Copyright &copy; The SkiApp team. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
