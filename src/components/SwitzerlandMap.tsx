import React, { useMemo } from "react";

import { Container, Image } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { ResortName, RESORTS } from "data/resorts";
import { QueryFn } from "utils/types";
import { useQuery } from "react-query";
import { OPEN_WEATHER_API_KEY } from "utils/constants";
import { WeatherResponse } from "models/WeatherResponse";
import { Link } from "react-router-dom";

function buildGetResortWeatherQuery(
  resortName: ResortName
): QueryFn<WeatherResponse> {
  const resort = RESORTS[resortName];
  const [latitude, longitude] = resort.position;
  return async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    );
    const data = await response.json();
    return WeatherResponse.parse(data);
  };
}

function MapMarker({ resortName }: { resortName: ResortName }) {
  const { position, name, description } = RESORTS[resortName];
  const getWeatherQuery = useMemo(
    () => buildGetResortWeatherQuery(resortName),
    [resortName]
  );

  const { data, status } = useQuery(
    `resort-weather-query-${resortName}`,
    getWeatherQuery
  );

  return (
    <Marker position={[...position]} alt={name}>
      <Popup>
        <Container>
          <Image height="20" src="/leaf.png" /> <b>{description}</b>
        </Container>
        <Container>Temp: {data?.main.temp}°C</Container>
        <Container>
          <Link to={`resorts/${resortName}`}>More info</Link>
        </Container>
      </Popup>
    </Marker>
  );
}

export function SwitzerlandMap() {
  return (
    <MapContainer
      center={[46.822, 8.224]}
      zoom={6.7}
      scrollWheelZoom={false}
      style={{
        height: "300px",
        width: "100vw",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {Object.keys(RESORTS).map((resortName) => (
        <MapMarker resortName={resortName as ResortName} />
      ))}
    </MapContainer>
  );
}
