import React, { PropsWithChildren } from "react";

import {
  faCableCar,
  faPersonSkiing,
  faPersonSkiingNordic,
  faSleigh,
  faSnowflake,
  faSnowman,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Image } from "react-bootstrap";

import { ResortName, RESORTS } from "data/resorts";
import { useResortWeather } from "hooks/useResortWeather";
import { capitalize } from "utils/utils";

function ShadowedContainer({ children }: PropsWithChildren) {
  return (
    <Container className="shadow-sm p-2 col" style={{ borderRadius: "4px" }}>
      {children}
    </Container>
  );
}

export function SnowReport({ resortName }: { resortName: ResortName }) {
  const weatherData = useResortWeather(resortName);
  if (!weatherData) {
    return (
      <Container className="asd h-100 w-100 d-flex align-items-center justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </Container>
    );
  }

  console.log(weatherData);

  return (
    <div className="d-flex flex-column gap-4 pb-4">
      <Container className="row">
        <ShadowedContainer>
          <Container className="pt-2">
            <h2>Weather in {RESORTS[resortName].name}</h2>
          </Container>
          <Container className="d-flex p-0">
            <Image src={`/weather/${weatherData.weather[0]?.icon}@2x.png`} />
            <Container className="d-flex flex-column">
              <span className="fs-1">
                {Math.round(weatherData.main.temp)}°C
              </span>
              <span className="fs-5">
                {capitalize(weatherData.weather[0]?.description)}
              </span>
            </Container>
          </Container>
        </ShadowedContainer>
      </Container>
      <Container className="row d-flex gap-4">
        <ShadowedContainer>
          <div className="d-flex gap-3 align-items-center">
            <FontAwesomeIcon icon={faSnowflake} size="2xl" />
            <div className="d-flex flex-column">
              <span className="fs-5">Snow report</span>
              <span className="fs-6">{weatherData.snow?.["1h"] ?? "N/A"}</span>
            </div>
          </div>
        </ShadowedContainer>
        <ShadowedContainer>
          <div className="d-flex gap-3 align-items-center flex-md-wrap">
            <FontAwesomeIcon icon={faCableCar} size="2xl" />
            <div className="d-flex flex-column">
              <span className="fs-5">Lifts</span>
              <span className="fs-6">3/17 Open</span>
            </div>
          </div>
        </ShadowedContainer>
      </Container>
      <Container className="row d-flex gap-4">
        <ShadowedContainer>
          <div className="d-flex gap-3 align-items-center">
            <FontAwesomeIcon icon={faPersonSkiing} size="2xl" />
            <div className="d-flex flex-column">
              <span className="fs-5">Piste</span>
              <span className="fs-6">0.0/60km. Open</span>
            </div>
          </div>
        </ShadowedContainer>
        <ShadowedContainer>
          <div className="d-flex gap-3 align-items-center">
            <FontAwesomeIcon icon={faSnowman} size="2xl" />
            <div className="d-flex flex-column">
              <span className="fs-5">Snow Park</span>
              <span className="fs-6">0/16 Open</span>
            </div>
          </div>
        </ShadowedContainer>
      </Container>
      <Container className="row d-flex gap-4">
        <ShadowedContainer>
          <div className="d-flex gap-3 align-items-center">
            <FontAwesomeIcon icon={faSleigh} size="2xl" />
            <div className="d-flex flex-column">
              <span className="fs-5">Tobogganing</span>
              <span className="fs-6">8.3/10km. Open</span>
            </div>
          </div>
        </ShadowedContainer>
        <ShadowedContainer>
          <div className="d-flex gap-3 align-items-center">
            <FontAwesomeIcon icon={faPersonSkiingNordic} size="2xl" />
            <div className="d-flex flex-column">
              <span className="fs-5">Winter Hike</span>
              <span className="fs-6">3/5 Open</span>
            </div>
          </div>
        </ShadowedContainer>
      </Container>
    </div>
  );
}
