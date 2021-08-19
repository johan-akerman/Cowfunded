import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import pin from "../../images/marker.png";
import "mapbox-gl/dist/mapbox-gl.css";
import { CowMarker } from "./CowMarker";

mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9oYW5ha2VybWFuIiwiYSI6ImNrZnlhNWh2bzIydGszMnBkcG8yZXRjMmMifQ.OGrbozPqFFlgpaKocY1n-w";

export function Map({ stores }) {
  const mapContainerRef = useRef(null);
  let map;

  useEffect(() => {
    map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [18.065, 59.33252],
      zoom: 13,
      scrollZoom: false,
    });

    map.addControl(new mapboxgl.NavigationControl());
    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();
    map.doubleClickZoom.disable();

    stores.features.forEach(function (store, i) {
      store.properties.id = i;
    });

    map.on("load", function (e) {
      map.addSource("places", {
        type: "geojson",
        data: stores,
      });

      addMarkers();
    });
  }, []);

  function addMarkers() {
    stores.features.forEach(function (marker) {
      console.log(marker);
      var el = document.createElement("div");
      el.style.height = "69px";
      el.style.width = "51px";
      el.style.backgroundColor = "rgba(0, 0, 0, 0)";
      el.style.backgroundImage = `url(${pin})`;
      el.style.position = "aboslute";

      new mapboxgl.Marker(el, { offset: [0, -50 / 2] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
    });
  }

  return <div className="h-full" ref={mapContainerRef} />;
}

export default Map;
