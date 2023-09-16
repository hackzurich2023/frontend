import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import React from "react";
import { Image } from "react-bootstrap";

const MARKERS = {
  Villars: {
    position: [46.3036593, 7.052355],
    popup: (
      <>
        <Image height="20" src="/leaf.png" />{" "}
        <b>Villars - Gryon, Switzerland</b>
      </>
    ),
  },
  Laax: {
    position: [46.8423, 9.1803],
    popup: (
      <>
        <Image height="20" src="/leaf.png" /> <b>Laax, Switzerland</b>
      </>
    ),
  },
  Davos: {
    position: [46.7650752, 9.6529485],
    popup: (
      <>
        <Image height="20" src="/leaf.png" /> <b>Davos, Switzerland</b>
      </>
    ),
  },
  Pizol: {
    position: [46.9591136, 9.3764688],
    popup: (
      <>
        <Image height="20" src="/leaf.png" /> <b>Pizol, Switzerland</b>
      </>
    ),
  },
  Jungfrau: {
    position: [46.5617746, 7.8515155],
    popup: (
      <>
        <Image height="20" src="/leaf.png" />{" "}
        <b>Jungfrau - Mürren - Schilthorn, Switzerland</b>
      </>
    ),
  },
  Andermatt: {
    position: [46.6206784, 8.5316637],
    popup: (
      <>
        <Image height="20" src="/leaf.png" /> <b>Andermatt, Switzerland</b>
      </>
    ),
  },
  Engelberg: {
    position: [46.8190919, 8.351527],
    popup: (
      <>
        <Image height="20" src="/leaf.png" /> <b>Engelberg, Switzerland</b>
      </>
    ),
  },
  "St. Moritz": {
    position: [46.4862079, 9.7656765],
    popup: (
      <>
        <Image height="20" src="/leaf.png" />{" "}
        <b>St. Moritz - Corviglia, Switzerland</b>
      </>
    ),
  },
  Zermatt: {
    position: [45.9903283, 7.4303578],
    popup: (
      <>
        <Image height="20" src="/leaf.png" /> <b>Zermatt, Switzerland</b>
      </>
    ),
  },
} as const;

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
      {Object.entries(MARKERS).map(([name, { position, popup }]) => (
        <Marker key={name} position={[...position]} alt={name}>
          <Popup>{popup}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
