import React from "react";

import { Container, Image } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { ResortName, RESORTS } from "data/resorts";
import { Link } from "react-router-dom";
import { useResortWeather } from "hooks/useResortWeather";

function MapMarker({ resortName }: { resortName: ResortName }) {
  const { position, name, description } = RESORTS[resortName];
  const weatherData = useResortWeather(resortName);

  return (
    <Marker position={[...position]} alt={name}>
      <Popup>
        <Container>
          <Image height="20" src="/leaf.png" /> <b>{description}</b>
        </Container>
        <Container>Temp: {weatherData?.main.temp}°C</Container>
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
