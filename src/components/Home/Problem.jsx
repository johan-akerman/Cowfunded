import chart from "../../images/graph.png";
import solution from "../../images/solution.jpeg";

export function Problem() {
  return (
    <div className="md:mb-32 mb-16 pt-12" id="om-kofisar">
      <div className="grid grid-cols-2 lg:w-10/12 w-11/12 mx-auto">
        <div className="mt-12 lg:col-span-1 col-span-2 lg:text-left text-center">
          <h1 className="lg:text-6xl text-5xl font-bold text-black ">
            Är kor dåliga för klimatet?
          </h1>
          <p className="lg:text-xl text-lg text-black mt-5">
            Det finns ungefär en miljard kor på planeten. De är viktiga för
            öppna landskap, arbetstillfällen, och svensk självförsörjning av
            livsmedel. Men, idisslare, primärt kor, släpper ut metangas som står
            för cirka 6% av Sveriges och världens växthusgasutsläpp (SCB 2020,
            Gerbet et al. (2013). I november 2021 skrev över 100 länder
            (inklusive Sverige) på det nya klimatmålet “Methane Pledge” att
            reducera 30% av metanutsläppen till 2030. Ca 70% av Sveriges utsläpp
            av metangas kommer från idisslande boskapsdjur (SCB 2020]
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
            visat på en genomsnittlig minskning med cirka 80 % av kornas
            enteriska metangasutsläpp under de 3 månader som de matades med
            alger odlade av Volta Greentech i Lysekil. Ett mål i samarbetet har
            varit att visa på effekten av och möjligheterna med fodertillskottet
            där slutprodukten kommer hela vägen ut i butik till konsument. Med
            andra ord - att förutom minskningen av metangasutsläpp vill vi
            underlätta för metanreducerade produkter att bli möjliga för bönder
            att använda i sin verksamhet, och bli kommersiellt tillgängliga.
          </p>
        </div>
      </div>
    </div>
  );
}
