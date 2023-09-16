export const RESORTS = {
  villars: {
    name: "Villars",
    position: [46.3036593, 7.052355],
    description: "Villars - Gryon, Switzerland",
  },
  laax: {
    name: "Laax",
    position: [46.8423, 9.1803],
    description: "Laax, Switzerland",
  },
  davos: {
    name: "Davos",
    position: [46.7650752, 9.6529485],
    description: "Davos, Switzerland",
  },
  pizol: {
    name: "Pizol",
    position: [46.9591136, 9.3764688],
    description: "Pizol, Switzerland",
  },
  jungfrau: {
    name: "Jungfrau",
    position: [46.5617746, 7.8515155],
    description: "Jungfrau - Mürren - Schilthorn, Switzerland",
  },
  andermatt: {
    name: "Andermatt",
    position: [46.6206784, 8.5316637],
    description: "Andermatt, Switzerland",
  },
  engelberg: {
    name: "Engelberg",
    position: [46.8190919, 8.351527],
    description: "Engelberg, Switzerland",
  },
  stMoritz: {
    name: "St. Moritz",
    position: [46.4862079, 9.7656765],
    description: "St. Moritz - Corviglia, Switzerland",
  },
  zermatt: {
    name: "Zermatt",
    position: [45.9903283, 7.4303578],
    description: "Zermatt, Switzerland",
  },
} as const;

export type ResortName = keyof typeof RESORTS;
