import React, { ReactNode, useCallback, useMemo } from "react";
import { NavBar } from "components/NavBar";
import { Badge, Button, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SwitzerlandMap } from "components/SwitzerlandMap";
import { ArrowRight } from "react-bootstrap-icons";
import { Sponsors } from "components/Sponsors";
import { MainLayout } from "MainLayout";

function SuccessBadge() {
  return (
    <Badge className="bg-success-subtle border border-success-subtle text-success-emphasis rounded-pill">
      &#10084; Success
    </Badge>
  );
}

function FailedBadge() {
  return (
    <Badge className="bg-danger-subtle border border-danger-subtle text-danger-emphasis rounded-pill">
      &#x26A0; Failed
    </Badge>
  );
}

function PendingBadge() {
  return (
    <Badge className="bg-warning-subtle border border-warning-subtle text-warning-emphasis rounded-pill">
      ⏳ Pending
    </Badge>
  );
}

export function Home() {
  const [buttonState, setButtonState] = React.useState<
    "success" | "failed" | "pending" | null
  >(null);

  const onButtonClick = useCallback(() => {
    if (buttonState === null) {
      setButtonState("success");
    } else if (buttonState === "success") {
      setButtonState("failed");
    } else if (buttonState === "failed") {
      setButtonState("pending");
    } else if (buttonState === "pending") setButtonState(null);
  }, [buttonState]);

  let stateBadge = useMemo(() => {
    if (buttonState === "success") {
      return <SuccessBadge />;
    }
    if (buttonState === "failed") {
      return <FailedBadge />;
    }
    if (buttonState === "pending") {
      return <PendingBadge />;
    }
    return null;
  }, [buttonState]);

  return (
    <MainLayout>
      {/*<NavBar />*/}
      <Container className="px-lg-5">
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

      <Container className="px-lg-5">
        <Container className="p-4 p-lg-5 bg-light rounded-bottom-3 text-center">
          <Button
            variant="primary"
            size="lg"
            className="btn-big rounded-pill"
            onClick={onButtonClick}
          >
            Book reservation <ArrowRight />
          </Button>
          <Container>{stateBadge}</Container>
        </Container>
      </Container>
      <Container className="p-lg-5">
        <Sponsors />
      </Container>
    </MainLayout>
  );
}
