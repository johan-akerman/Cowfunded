import chart from "../../images/graph.png";
import solution from "../../images/solution.jpeg";

export function Problem() {
  return (
    <div className="md:mb-32 mb-16 pt-12" id="om-kofisar">
      <div className="grid grid-cols-2 lg:w-10/12 w-11/12 mx-auto">
        <div className="mt-12 lg:col-span-1 col-span-2 lg:text-left text-center">
          <h1 className="lg:text-6xl text-5xl font-bold text-black ">
            Vad är problemet med kofisar?
          </h1>
          <p className="lg:text-xl text-lg text-black mt-5">
            Jo, det finns ungefär en miljard kor på planeten, och tillsammans
            producerar de över 4% av världens växthusgasutsläpp endast genom att
            rapa och prutta metangas (Sverige 5,7%). Det är dubbelt så mycket
            utsläpp som alla världens flygplan står för.
          </p>
        </div>
        <div className="text-white lg:ml-20 lg:-mt-8 mt-12 lg:mx-0  mx-auto w-10/12 lg:col-span-1 col-span-2">
          <img src={chart} />
        </div>
      </div>

      <div className="grid grid-cols-2 lg:w-10/12 w-11/12 mx-auto mt-32">
        <div className="text-white  lg:mx-0  mx-auto w-10/12 lg:col-span-1 col-span-2">
          <img src={solution} />
        </div>

        <div className="mt-12 lg:col-span-1 col-span-2 lg:text-left text-center">
          <h1 className="lg:text-6xl text-5xl font-bold text-black ">
            Tillsammans mot en hållbarare köttproduktion
          </h1>
          <p className="lg:text-xl text-lg text-black mt-5">
            LOME har framställts på Ejmunds Gård på Gotland i ett gemensamt
            pilotprojekt av Volta Greentech, Coop och PROTOS. Projektet har
            visat på en minskning med upp till 92% av kornas metangasutsläpp
            under tiden som de matades, och visar att det är möjligt att på
            svenska gårdar nå målet om 30% reduktion av metan i linje med{" "}
            <a
              href="https://www.globalmethanepledge.org/"
              target="_blank"
              className="border-b-2 border-coral hover:text-coral"
            >
              The Global Methane Pledge
            </a>
            .
            <br /> <br />
            Ett mål i samarbetet har varit att visa på effekten av och
            möjligheterna med det fodertillskottet när slutprodukten kommer hela
            vägen ut i butik till konsument. Med andra ord: att också är en
            kommersiellt gångbar och möjlig produktionsmetod av
            nötdjursprodukter som svenska bönder under kommande år kan inkludera
            för att bli mer miljövänliga!
          </p>
        </div>
      </div>
    </div>
  );
}
