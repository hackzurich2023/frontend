import React, { useState } from "react";

import { Image } from "react-bootstrap";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SlideButton from "react-slide-button";

import { ResortName, RESORTS } from "data/resorts";

export function SkiPass({ resortName }: { resortName: ResortName }) {
  const [reset] = useState(0);
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-between"
      style={{ paddingTop: "10px", gap: "50px", minHeight: "100%" }}
    >
      <div>
        <h1 className="text-center">
          Buy a Ski Pass for {RESORTS[resortName].name} for
        </h1>
        <h1 className="text-center">72 CHF</h1>
        <Image src="/mountain.png" width="100%" />
      </div>
      <div style={{ width: "100%" }}>
        <SlideButton
          mainText="Swipe to buy the ski pass"
          overlayText="Your Ski Pass is active, enjoy the slopes!"
          reset={reset}
        />
      </div>
    </div>
  );
}
