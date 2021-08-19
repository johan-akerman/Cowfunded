import React, { useRef, useEffect, useState } from "react";
import { Map } from "../components/Locations/Map.jsx";
import { Sidebar } from "../components/Locations/Sidebar.jsx";

var stores = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.059629, 59.32967],
      },
      properties: {
        title: "Coop Centralen",
        address: "Centralplan 1, 111 20 Stockholm",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.059629, 59.3474],
      },
      properties: {
        title: "Coop",
        address: "Hälsingegatan 57-59, 113 66 Stockholm",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.03785, 59.33472],
      },
      properties: {
        title: "Coop Storgatan",
        address: "Storgatan 27, 114 55 Stockholm",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.08, 59.36252],
      },
      properties: {
        title: "Stora Coop",
        address: "Ulvsundavägen 187 C, 168 67 Bromma",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.08, 59.36252],
      },
      properties: {
        title: "Coop Norrtull",
        address: "Vanadisvägen 13, 113 46 Stockholm",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.08, 59.36252],
      },
      properties: {
        title: "Coop Norra Djurgårdsstaden",
        address: "Bobergsgatan 53, 115 47 Stockholm",
      },
    },

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.08, 59.36252],
      },
      properties: {
        title: "Coop Sveavägen",
        address: "Sveavägen 70, 111 34 Stockholm",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.08, 59.36252],
      },
      properties: {
        title: "Coop Daglivs",
        address: "Sankt Eriksgatan 34-38, 112 34 Stockholm",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.08, 59.36252],
      },
      properties: {
        title: "Coop Odenplan",
        address: "Odengatan 65, 113 22 Stockholm",
      },
    },
  ],
};

function Locations() {
  return (
    <>
      <div className="grid grid-cols-7 text-black h-screen">
        <div className="col-span-2 bg-secondary">
          <Sidebar stores={stores} />
        </div>
        <div className="col-span-5 ">
          <Map stores={stores} />
        </div>
      </div>
    </>
  );
}

export default Locations;
