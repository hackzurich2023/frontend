import React from "react";

import { Container, Image } from "react-bootstrap";

import { Sponsors } from "components/Sponsors";
import { SwitzerlandMap } from "components/SwitzerlandMap";
import { MainLayout } from "MainLayout";

export function Home() {
  return (
    <MainLayout>
      <Container className="p-4 pb-0">
        <Container className="p-4 p-lg-5 bg-light rounded-top-3">
          <Container className="text-center">
            <Image width="100%" src="/skiapp-transparent.png" />
          </Container>
          <Container className="text-center">
            <p className="fs-4">
              Your sustainable one stop access to your favourite ski resorts
            </p>

            <p>
              Select your preferred date: <input type="date" />
            </p>
          </Container>
        </Container>
      </Container>

      <SwitzerlandMap />

      <Container className="p-lg-5">
        <Sponsors />
      </Container>
    </MainLayout>
  );
}
