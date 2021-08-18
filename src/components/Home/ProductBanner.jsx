import milk from "../../images/milk_transparent.png";

export function ProductBanner() {
  return (
    <div className="bg-secondary  pb-0">
      <div className="grid grid-cols-2 md:w-10/12 w-11/12 mx-auto">
        <div className="mt-8 md:col-span-1 col-span-2 md:text-left text-center">
          <h1 className="md:text-6xl text-4xl font-bold text-white ">
            Först ut är Coop med Coop Mellanmjölk!
          </h1>
          <p className="text-xl text-gray-300 mt-5">
            Coop är bland de första i världen att implementera fodertillskott
            för att minska kors pruttar och rapar. Coop har satt det
            revolutionerande målet att tillsammans med svenska gårdar reducera
            motsvarande 50% av metanutsläppen från Mellanmjölken.
            <br /> <br />
            Implementeringen tillsammans med Volta Greentech och den första
            gården Tre Bönder har redan börjat där korna knaprar på ett
            tillskott alger för att prutta och rapa mindre metangas. Genom att
            handla på Coop och köpa Coop Mellanmjölk märkt Cowfunding kan du
            konkret göra ett aktivt val att stötta klimatet. Följ resan till 50%
            reduktion.
          </p>
        </div>

        <div className=" text-white ml-20 mx-0 md:col-span-1 col-span-2">
          <img src={milk} />
        </div>
      </div>
    </div>
  );
}
