import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function Banner() {
  return (
    <div className="bg-coral md:py-32 py-16">
      <div className="w-10/12 mx-auto text-center ">
        <h1 className="pb-12 text-black  md:text-5xl text-4xl font-bold">
          The mooovement
        </h1>

        <p className="mb-20">
          Vår vision är att det ska bli branschstandard att minska metanutsläpp
          från kor. Det måste det bli för att vi ska kunna nå klimatmålen. I
          november 2021 på COP26 skrev över 100 länder, inklusive Sverige, under
          “the Methane Pledge” att reducera 30% av metanutsläppen till 2030. Vi
          har en lång väg att gå med många utmaningar och det är verkligen mu
          eller aldrig. Följ oss på sociala medier och häng med när vi bygger
          upp vår algproduktion för att mata fler kor och minska mer utsläpp.
          Och framförallt, hjälp oss genom att välja LOME i butikerna när du
          handlar nötkött.
        </p>

        <Link
          to="/"
          className="w-60 px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-black md:py-4 md:text-lg md:px-10 transform ease-in duration-100 hover:-translate-y-2 hover:shadow-lg"
        >
          Text
          <FontAwesomeIcon
            className="ml-3 mb-0.5 text-sm"
            icon={faArrowRight}
          />
        </Link>
      </div>
    </div>
  );
}
