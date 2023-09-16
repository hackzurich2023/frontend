import React from "react";

import { Container } from "react-bootstrap";

export function Footer() {
  return (
    <footer className="bg-light">
      <Container
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "80px" }}
      >
        <p className="mb-0 text-center">
          <b>Built with &#10084; in &#127464;&#127469; at HackZurich 2023.</b>
        </p>
        <p className="mb-0 text-center">
          Copyright &copy; The SkiApp team. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
