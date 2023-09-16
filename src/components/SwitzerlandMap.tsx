import React from "react";

import { Image } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { RESORTS } from "data/resorts";

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
      {Object.values(RESORTS).map(({ name, position, description }) => (
        <Marker key={name} position={[...position]} alt={name}>
          <Popup>
            <Image height="20" src="/leaf.png" /> <b>{description}</b>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
