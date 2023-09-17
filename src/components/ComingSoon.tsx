import React from "react";

import { Image } from "react-bootstrap";

export function ComingSoon({ title }: { title: string }) {
  return (
    <>
      <h1>{title}</h1>
      <div
        className="d-flex flex-column gap-5 align-items-center justify-content-center"
        style={{ height: "100% " }}
      >
        <div className="d-flex align-items-center flex-column">
          <Image src="/timer.png" width="50%" />
          <h3>Coming Soon</h3>
        </div>
      </div>
    </>
  );
}
