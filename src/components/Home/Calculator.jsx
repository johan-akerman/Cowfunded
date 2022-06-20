import cow from "../../images/cow.png";
import ch4 from "../../images/fart.png";
import airplane from "../../images/airplane.png";
import Slider from "react-input-slider";
import { useState } from "react";
import reef from "../../images/reef.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCalculator } from "@fortawesome/free-solid-svg-icons";

export function Calculator() {
  const [packagesOfMilk, setPackagesOfMilk] = useState(3);
  const [showCalculations, setShowCalculations] = useState(false);

  return (
    <main className="bg-primary relative" id="impact-kalkylatorn">
      <div
        className="bg-primary  lg:pt-32 lg:pb-64 pb-16 pt-16 lg:w-auto w-11/12 mx-auto"
        id="calculator"
      >
        <div className="lg:w-7/12 w-11/12 mx-auto ">
          <h1 className="max-w-2xl mx-auto lg:text-6xl text-5xl font-bold text-center text-black ">
            Räkna på hur du kan minska utsläpp
          </h1>
          <p className="max-w-2xl lg:text-xl text-lg text-center text-black mx-auto mt-5">
            Så här mycket kan vi tillsammans påverka genom att mata kor med
            alger. Låt oss hjälpa till att räkna på hur mycket du kan påverka!
          </p>
          <div className="mt-6 w-48 mx-auto">
            <Slider
              styles={{
                active: {
                  backgroundColor: "#fff",
                },
                track: {
                  backgroundColor: "#edfffb",
                },
                thumb: {
                  width: 12,
                  height: 12,
                  backgroundColor: "#000",
                },
              }}
              axis="x"
              xmax="20"
              x={packagesOfMilk}
              onChange={({ x }) => setPackagesOfMilk(x)}
            />
          </div>
        </div>

        <div className="xl:w-8/12 w-11/12 grid lg:grid-cols-3 grid-cols-1 grid-flow-row lg:gap-3 gap-6 lg:mt-36  mt-16 text-black  mx-auto">
          <div className="flex lg:border-none border-b-2 border-gray-500 pb-3">
            <img
              src={cow}
              className="lg:h-20 h-auto lg:w-auto w-12  lg:mr-6 mr-4"
            />
            <span className="lg:block flex items-baseline gap-3">
              <h1 className="lg:text-6xl text-4xl font-bold">
                {packagesOfMilk}
              </h1>
              <p className="lg:text-2xl text-xl">
                {packagesOfMilk > 1 ? "kor" : "ko"}
              </p>
            </span>
          </div>

          <div className="flex lg:ml-0 lg:border-none border-b-2 border-gray-500 pb-3">
            <img
              src={ch4}
              className="lg:h-24  lg:w-auto w-12 h-auto lg:mr-6 mr-4"
            />
            <span className="lg:block flex items-baseline gap-3">
              <h1 className="lg:text-6xl text-4xl font-bold">
                {packagesOfMilk * 803}
              </h1>
              <p className="lg:text-2xl text-xl">kg minskade CO2e</p>
            </span>
          </div>

          <div className="flex lg:ml-0 lg:border-none border-b-2 border-gray-500 pb-3">
            <img
              src={airplane}
              className="lg:h-20 mt-3 h-auto lg:w-auto w-12 lg:mr-6 mr-4"
            />
            <span className="lg:block flex items-baseline gap-3">
              <h1 className="lg:text-6xl text-4xl font-bold">
                {Math.round(packagesOfMilk * 5.6 * 10) / 10}
              </h1>
              <p className="lg:text-2xl text-xl">
                enkelresor Stockholm - London
              </p>
            </span>
          </div>
        </div>

        <div className="mt-16 mx-auto w-full text-center lg:mb-32 mb-0">
          <button
            className="text-xl text-black"
            onClick={() => setShowCalculations(!showCalculations)}
          >
            {showCalculations ? (
              <span>
                <FontAwesomeIcon icon={faTimes} className="mr-2 text-md" />
                Göm beräkningar{" "}
              </span>
            ) : (
              <span>
                <FontAwesomeIcon
                  icon={faCalculator}
                  className="mr-2 text-md opacity-30 "
                />
                Visa beräkningar
              </span>
            )}
          </button>

          {showCalculations ? (
            <div className="mt-4 text-black text-lg md:w-1/2 w-11/12 mx-auto">
              Läs mer om hur beräkningarna görs under frågan "Hur stor skillnad
              kan jag göra?" bland våra{" "}
              <a href="#faq" className="text-coral">
                vanliga frågor
              </a>
              . Observera att detta är baserat på data från piloten på Ejmunds
              Gård, gäller för kor som blir 16 månader gamla och som matas med
              alger under ungefär en fjärdedel av livet för att uppnå minst 30%
              metanreduktion per kg kött.
            </div>
          ) : null}
        </div>
        <img
          src={reef}
          className="absolute -bottom-10 w-screen lg:block hidden"
        />
      </div>
    </main>
  );
}
