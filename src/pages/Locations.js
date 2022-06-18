import React from "react";
import { Map } from "../components/Locations/Map.jsx";

var stores = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.0593415, 59.330065],
        website: "https://www.coop.se/",
      },
      properties: {
        title: "Coop Centralen",
        address: "Centralplan 1, 111 20 Stockholm",
        website: "https://www.coop.se/",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.037583, 59.3478062],
      },
      properties: {
        title: "Coop",
        address: "Hälsingegatan 57-59, 113 66 Stockholm",
        website: "https://www.coop.se/",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.0857299, 59.3346827],
        website: "https://www.coop.se/",
      },
      properties: {
        title: "Coop Storgatan",
        address: "Storgatan 27, 114 55 Stockholm",
        website: "https://www.coop.se/",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [17.9571038, 59.348664],
      },
      properties: {
        title: "Stora Coop",
        address: "Ulvsundavägen 187 C, 168 67 Bromma",
        website: "https://www.coop.se/",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.0469697, 59.3465918],
      },
      properties: {
        title: "Coop Norrtull",
        address: "Vanadisvägen 13, 113 46 Stockholm",
        website: "https://www.coop.se/",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.069133758544922, 59.33285140991211],
      },
      properties: {
        title: "Coop Norra Djurgårdsstaden",
        address: "Bobergsgatan 53, 115 47 Stockholm",
        website: "https://www.coop.se/",
      },
    },

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.0601649, 59.3394952],
      },
      properties: {
        title: "Coop Sveavägen",
        address: "Sveavägen 70, 111 34 Stockholm",
        website: "https://www.coop.se/",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.03299331665039, 59.3350715637207],
      },
      properties: {
        title: "Coop Daglivs",
        address: "Sankt Eriksgatan 34-38, 112 34 Stockholm",
        website: "https://www.coop.se/",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.0459367, 59.3416805],
      },
      properties: {
        title: "Coop Odenplan",
        address: "Odengatan 65, 113 22 Stockholm",
        website: "https://www.coop.se/",
      },
    },
  ],
};

function Locations() {
  return <Map stores={stores} />;
}

export default Locations;
