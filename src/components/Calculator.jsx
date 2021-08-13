import iconOne from "../images/iconOne.png";
import Slider from "react-input-slider";
import { useState } from "react";
import dra from "../images/dra.png";

export function Calculator() {
  const [state, setState] = useState({ x: 4 });

  return (
    <div className="bg-secondary pb-40 pt-32 " id="calculator">
      <div className="grid grid-cols-2 w-11/12 mx-auto ">
        <div className="mr-12">
          {" "}
          <h1 className="max-w-2xl mx-auto md:text-6xl text-4xl font-bold text-left text-white ">
            Låt oss räkna på hur du kan rädda världen
          </h1>
          <p className="text-left max-w-2xl text-xl text-gray-300 mx-auto mt-5">
            När du väljer Cowfunded märkta produkter möjliggör du en ljusare
            framtid. Bli en del av förändringen. Låt oss räkna på hur mycket du
            kan hjälpa till genom att dricka Cowfundad mjölk.
          </p>
          <div className="mt-6 w-80">
            <Slider
              styles={{
                active: {
                  backgroundColor: "#FFED06",
                },
                track: {
                  backgroundColor: "#383838",
                },
              }}
              axis="x"
              xmax="20"
              x={state.x}
              onChange={({ x }) => setState((state) => ({ ...state, x }))}
            />
            <img className="w-40 ml-8 mt-2" src={dra} />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 pt-4  md:text-left w-4/5 text-white mx-auto ">
          <div className="flex">
            <img src={iconOne} className="h-16 mr-4 " />
            <span>
              <h1 className="text-4xl font-bold">{state.x * 1} </h1>
              <p className="text-lg">Glas mjölk</p>
            </span>
          </div>

          <div className="flex">
            <img src={iconOne} className="h-16 mr-4 " />
            <span>
              <h1 className="text-4xl font-bold">{state.x * 10}</h1>
              <p className="text-lg">Mjölkpaket (1L)</p>
            </span>
          </div>

          <div className="flex">
            <img src={iconOne} className="h-16 mr-4 " />
            <span>
              <h1 className="text-4xl font-bold">{state.x * 20}</h1>
              <p className="text-lg">Kofisar</p>
            </span>
          </div>

          <div className="flex">
            <img src={iconOne} className="h-16 mr-4 " />
            <span>
              <h1 className="text-4xl font-bold">{state.x * 12}</h1>
              <p className="text-lg">KG metan</p>
            </span>
          </div>

          <div className="flex">
            <img src={iconOne} className="h-16 mr-4 " />
            <span>
              <h1 className="text-4xl font-bold">{state.x * 4}</h1>
              <p className="text-lg">Mil i ett flygplan</p>
            </span>
          </div>

          <div className="flex">
            <img src={iconOne} className="h-16 mr-4 " />
            <span>
              <h1 className="text-4xl font-bold">{state.x * 2}</h1>
              <p className="text-lg">Mil i en bil</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
