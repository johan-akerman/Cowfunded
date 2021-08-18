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
    <div
      className="bg-secondary md:pb-24 pb-0 md:pt-32 pt-16 md:w-auto w-11/12 mx-auto"
      id="calculator"
    >
      <div>
        <h1 className="max-w-2xl mx-auto md:text-6xl text-4xl font-bold text-center text-white ">
          Räkna på hur du kan minska utsläpp
        </h1>
        <p className="max-w-2xl md:text-xl text-lg text-center text-gray-300 mx-auto mt-5">
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
          <img className="w-40 ml-8 mt-2 md:block hidden" src={dra} />
        </div>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-1 grid-flow-row md:gap-3 gap-6 md:mt-20  mt-16 text-white md:w-10/12 w-11/12 mx-auto">
        <div className="flex md:border-none border-b-2 border-gray-500 pb-3">
          <img
            src={milk}
            className="md:h-24 h-auto md:w-auto w-12  md:mr-6 mr-4"
          />
          <span className="md:block flex items-baseline gap-3">
            <h1 className="md:text-6xl text-4xl font-bold">{packagesOfMilk}</h1>
            <p className="md:text-2xl text-xl">Mjölkpaket</p>
          </span>
        </div>

        <div className="flex  md:border-none border-b-2 border-gray-500 pb-3">
          <img
            src={iconThree}
            className="md:h-24 h-auto md:w-auto w-12 md:mr-6 mr-4"
          />
          <span className="md:block flex items-baseline gap-3">
            <h1 className="md:text-6xl text-4xl font-bold">
              {packagesOfMilk * 20}
            </h1>
            <p className="md:text-2xl text-xl">Kofisar</p>
          </span>
        </div>

        <div className="flex md:ml-0 md:border-none border-b-2 border-gray-500 pb-3">
          <img
            src={ch4}
            className="md:h-24 h-auto md:w-auto w-12 md:mr-6 mr-4"
          />
          <span className="md:block flex items-baseline gap-3">
            <h1 className="md:text-6xl text-4xl font-bold">
              {packagesOfMilk * 12}
            </h1>
            <p className="md:text-2xl text-xl">KG metan</p>
          </span>
        </div>

        <div className="flex md:ml-0 md:border-none border-b-2 border-gray-500 pb-3">
          <img
            src={airplane}
            className="md:h-16 mt-3 h-auto md:w-auto w-12 md:mr-6 mr-4"
          />
          <span className="md:block flex items-baseline gap-3">
            <h1 className="md:text-6xl text-4xl font-bold">
              {packagesOfMilk * 4}
            </h1>
            <p className="md:text-2xl text-xl">Km i flygplan</p>
          </span>
        </div>
      </div>

      <div className="mt-16 mx-auto w-full text-center">
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
