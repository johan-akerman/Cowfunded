import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "../Home/Navbar";

import logo from "../../images/cowfunded_yellow.png";
import { Link } from "react-router-dom";

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

  function flyToStore(store) {
    window.scrollTo(0, 0);
    map.flyTo({
      center: store.geometry.coordinates,
      zoom: 15,
    });
  }

  function addMarkers() {
    stores.features.forEach((marker) => {
      console.log(marker);
      var el = document.createElement("div");
      ReactDOM.render(<CowMarker marker={marker} />, el);

      new mapboxgl.Marker(el, { offset: [0, -50 / 2] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
    });
  }

  return (
    <>
      <div className="lg:hidden block">
        <Navbar />
      </div>
      <div className="grid grid-cols-7 text-black h-screen">
        <div className="lg:col-span-2 col-span-7 lg:order-1 order-2 bg-secondary">
          <div className="p-6 md:max-h-screen h-auto md:overflow-y-scroll overflow-y-hidden">
            <Link to="/">
              <img className="h-20 mb-8 mt-4 lg:block hidden" src={logo} />
            </Link>

            {stores
              ? stores.features.map((store) => {
                  return (
                    <div
                      onClick={() => flyToStore(store)}
                      className="border-b-2 border-gray-700 flex justify-between py-3 text-white hover:text-primary hover:border-primary cursor-pointer"
                    >
                      <div>
                        <h1 className="font-semibold text-xl">
                          {store.properties.title}
                        </h1>
                        <p className="">{store.properties.address}</p>
                      </div>
                      <FontAwesomeIcon
                        className="mt-2 text-4xl"
                        icon={faArrowRight}
                      />
                    </div>
                  );
                })
              : null}
          </div>
        </div>
        <div className="lg:col-span-5 col-span-7 lg:order-2 order-1 lg:h-auto md:h-96 h-64">
          <div className="h-full" ref={mapContainerRef} />
        </div>
      </div>
    </>
  );
}

export default Map;
