import React from "react";
import { Container, Image } from "react-bootstrap";

export function LoginPage() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "hsl(218, 41%, 15%)",
        backgroundImage:
          "radial-gradient(650px circle at 0% 0%,hsl(218, 41%, 35%) 15%,hsl(218, 41%, 30%) 35%,hsl(218, 41%, 20%) 75%,hsl(218, 41%, 19%) 80%,transparent 100%),radial-gradient(1250px circle at 100% 100%,hsl(218, 41%, 45%) 15%,hsl(218, 41%, 30%) 35%,hsl(218, 41%, 20%) 75%,hsl(218, 41%, 19%) 80%,transparent 100%)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container className="px-4 px-md-5 text-center text-lg-start">
        <h1
          className="mb-5 display-5 fw-bold ls-tight"
          style={{ color: "hsl(218, 81%, 95%)" }}
        >
          <span>Your</span>{" "}
          <span style={{ color: "hsl(218, 81%, 75%)" }}>sustainable</span>{" "}
          <sup>
            <Image height="30" src="public/leaf.png" />
          </sup>{" "}
          one-stop access to your favourite ski resorts <br />
        </h1>
      </Container>
    </div>
  );
}
