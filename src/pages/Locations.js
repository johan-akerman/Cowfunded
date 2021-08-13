import React, { useRef, useEffect, useState } from "react";
import { Map } from "../components/Locations/Map.jsx";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Locations/Sidebar.jsx";

function Locations() {
  return (
    <>
      <div className="grid grid-cols-7 text-black">
        <div className="col-span-2 bg-secondary h-screen">
          <Sidebar />
        </div>
        <div className="col-span-5 max-h-screen">
          <Map />
        </div>
      </div>
    </>
  );
}

export default Locations;
