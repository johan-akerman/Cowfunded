import React from "react";
import { Map } from "../components/Locations/Map.jsx";

var stores = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.32186, 57.62264], //long, lat
      },
      properties: {
        title: "Stor Coop Visby",
        address: "Stenhuggarevägen 5-7, Visby",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.20418, 57.38692],
      },
      properties: {
        title: "Coop Klintehamn",
        address: "Verkstadsgatan 9, Klintehamn",
      },
    },

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.301537316717305, 57.6378645625875],
      },
      properties: {
        title: "Coop Öster",
        address: "Gallerian Visby Östercentrum, Visby",
      },
    },

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.803429789512954, 57.70451595810855],
      },
      properties: {
        title: "Coop Slite",
        address: "Tullhagsplan 5, Slite",
      },
    },

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.788781041042434, 57.784917128391406],
      },
      properties: {
        title: "Coop Lärbro",
        address: "Lindvägen 1, Lärbro",
      },
    },

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.37714046801257, 57.239162759137024],
      },
      properties: {
        title: "Coom Hemse",
        address: "Järnvägsgatan 9, Hemse",
      },
    },

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.685038767402702, 57.35956441543614],
      },
      properties: {
        title: "Coop Ljugarn",
        address: "Ardre Ekese, Ljugarn",
      },
    },

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.457346069868873, 57.503343798574896],
      },
      properties: {
        title: "Coop Roma",
        address: "Visbyvägen 35, Roma kloster",
      },
    },

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.301544798707948, 57.62001355917852],
      },
      properties: {
        title: "Coop Gråbo",
        address: "Gråbo Torg 1, Visby",
      },
    },

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [17.954366342940983, 59.35654352410775],
      },
      properties: {
        title: "Stora Coop Bromma",
        address: "Ulsvundavägen 187C, Bromma",
      },
    },

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.273314710134812, 59.48740392904282],
      },
      properties: {
        title: "Stora Coop Åkersberga",
        address: "Pilstugegränd 1-5, Åkersberga",
      },
    },

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.13708158342573, 59.46022841610745],
      },
      properties: {
        title: "Stora Coop Arninge",
        address: "Saluvägen 10, Täby",
      },
    },

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.04587815458907, 59.4222158386814],
      },
      properties: {
        title: "Stora Coop Danderyd",
        address: "Sunnanängsvägen, Danderyd",
      },
    },

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [17.962263125752262, 59.37877544355917],
      },
      properties: {
        title: "Stora Coop Sundbypark",
        address: "Östra Madenvägen, Sundbyberg",
      },
    },

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.25692454663582, 59.32681774608677],
      },
      properties: {
        title: "Stora Coop Orminge",
        address: "Ormingeplan 3, Saltsjö-Boo",
      },
    },

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.383050981572946, 59.30999763185003],
      },
      properties: {
        title: "Stora Coop Värmdö",
        address: "Gustavsbergsvägen 34, Gustavsberg",
      },
    },

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.005643625749485, 59.2933842537492],
      },
      properties: {
        title: "Stora Coop Västberga",
        address: "Västbergavägen 4, Hägersten",
      },
    },

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.01081129876052, 59.25084754705848],
      },
      properties: {
        title: "Stora Coop Stuvsta",
        address: "Ågestavägen 1, Huddinge",
      },
    },

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [17.98030432759545, 59.23665387508216],
      },
      properties: {
        title: "Stora Coop Huddinge",
        address: "Forelltorget 6, Huddinge",
      },
    },

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.135172885270467, 59.366181219952615],
      },
      properties: {
        title: "Coop Skeppet",
        address: "Friggavägen 26, Lidingö",
      },
    },
  ],
};

function Locations() {
  return <Map stores={stores} />;
}

export default Locations;
