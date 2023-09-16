import React from "react";

import { Container, Image } from "react-bootstrap";

const SPONSORS_IMG = [
  "migros.png",
  "hackzurich.webp",
  "microsoft-azure.png",
  "hotelplan.png",
  "github.png",
  "google-cloud.png",
];

export function Sponsors() {
  return (
    <section className="pt-5">
      <div className="container px-lg-5">
        <center>
          <h2>
            Our sponsors
            <h2>
              <br />
              <div className="row gx-lg-3">
                {SPONSORS_IMG.map((sponsorImg) => (
                  <Container
                    key={sponsorImg}
                    className={"col-lg-6 col-xxl-4 mb-5"}
                  >
                    <Image height="60" src={sponsorImg} />
                  </Container>
                ))}
              </div>
            </h2>
          </h2>
        </center>
      </div>
    </section>
  );
}
