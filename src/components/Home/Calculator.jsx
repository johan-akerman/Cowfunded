import iconThree from "../../images/iconThree.png";
import milk from "../../images/milk.png";
import ch4 from "../../images/ch4.png";
import airplane from "../../images/airplane.png";
import Slider from "react-input-slider";
import { useState } from "react";
import dra from "../../images/dra.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCalculator } from "@fortawesome/free-solid-svg-icons";

export function Calculator() {
  const [packagesOfMilk, setPackagesOfMilk] = useState(4);
  const [showCalculations, setShowCalculations] = useState(false);

  return (
    <div className="bg-secondary pb-24 pt-32" id="calculator">
      <div className="mr-12">
        <h1 className="max-w-2xl mx-auto md:text-6xl text-4xl font-bold text-center text-white ">
          Räkna på hur du kan minska utsläpp
        </h1>
        <p className="max-w-2xl text-xl text-center text-gray-300 mx-auto mt-5">
          När du väljer produkter märkta med Cowfunding möjliggör du en ljusare
          framtid. Bli en del av förändringen. Låt oss hjälpa till att räkna på
          hur mycket du kan påverka!
        </p>
        <div className="mt-6 w-48 mx-auto">
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
            x={packagesOfMilk}
            onChange={({ x }) => setPackagesOfMilk(x)}
          />
          <img className="w-40 ml-8 mt-2" src={dra} />
        </div>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-1 mt-20 text-white w-10/12 mx-auto">
        <div className="flex pb-8">
          <img src={milk} className="h-24 mr-6 " />
          <span>
            <h1 className="text-6xl font-bold">{packagesOfMilk}</h1>
            <p className="text-2xl">Mjölkpaket</p>
          </span>
        </div>

        <div className="flex pb-8">
          <img src={iconThree} className="h-20 mt-1 mr-6 " />
          <span>
            <h1 className="text-6xl font-bold">{packagesOfMilk * 20}</h1>
            <p className="text-2xl">Kofisar</p>
          </span>
        </div>

        <div className="flex pb-8">
          <img src={ch4} className="h-24 mr-6 " />
          <span>
            <h1 className="text-6xl font-bold">{packagesOfMilk * 12}</h1>
            <p className="text-2xl">KG metan</p>
          </span>
        </div>

        <div className="flex pb-8">
          <img src={airplane} className="h-14 mt-2.5 mr-4" />
          <span>
            <h1 className="text-6xl font-bold">{packagesOfMilk * 4}</h1>
            <p className="text-2xl">Km i ett flygplan</p>
          </span>
        </div>
      </div>

      <div className="mt-8 mx-auto w-full text-center">
        <button
          className="text-xl font-light text-gray-300  hover:text-primary"
          onClick={() => setShowCalculations(!showCalculations)}
        >
          {showCalculations ? (
            <span>
              <FontAwesomeIcon icon={faTimes} className="mr-2 text-md" />
              Hide calculations
            </span>
          ) : (
            <span>
              <FontAwesomeIcon icon={faCalculator} className="mr-2 text-md" />
              Show calculations
            </span>
          )}
        </button>

        {showCalculations ? (
          <div className="mt-4 text-gray-300 text-lg ">
            Lägg in formel och källor här
          </div>
        ) : null}
      </div>
    </div>
  );
}
