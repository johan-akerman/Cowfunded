import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import geojson from "../../stores.json";
import marker from "../../images/marker.png";
import { CowMarker } from "./CowMarker";

mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9oYW5ha2VybWFuIiwiYSI6ImNrZnlhNWh2bzIydGszMnBkcG8yZXRjMmMifQ.OGrbozPqFFlgpaKocY1n-w";

export function Map() {
  const mapContainerRef = useRef(null);

  // initialize map when component mounts
  useEffect(() => {
    console.log(geojson);
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [18.065, 59.33252],
      zoom: 13,
      scrollZoom: false,
    });

    geojson.forEach(function (marker) {
      var el = React.createElement(CowMarker, { aProp: "a prop" });
      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
    });
  }, []);

  return <div className="h-full" ref={mapContainerRef} />;
}

export default Map;
