import iconOne from "../images/iconOne.png";
import iconTwo from "../images/iconTwo.png";
import iconThree from "../images/iconThree.png";
import logo from "../images/logo.png";

export function HowItWorks() {
  return (
    <div className="bg-secondary md:pt-32 pt-16 pb-16" id="solution">
      <h1 className="md:text-6xl text-4xl font-bold text-center text-white ">
        Så, hur löser vi det?
      </h1>
      <p className="text-center max-w-2xl text-xl text-gray-300 mx-auto mt-5">
        Bra att du frågar. Volta Seafeed är ett helt och hållet sjögräsbaserat
        matsuppliment som korna får. 100 gram om dagen för att vara exakt.
        Fortfarande svårt att förstå? Inga problem.
      </p>

      <div className="grid lg:grid-cols-4 grid-cols-1 gap-14 md:pt-32   md:text-left text-center w-11/12  mx-auto ">
        <div>
          <img src={iconOne} className="h-20 mb-4" />

          <h1 className="text-3xl text-white pb-3 font-semibold">
            Vi odlar speciella alger
          </h1>
          <p className="text-xl font-light text-gray-300">
            Algerna odlas i Lysekil. Sedan levereras dem ut till bondgårdar runt
            om i landet.
          </p>
        </div>

        <div>
          <img src={iconTwo} className="h-20 mb-4" />

          <h1 className="text-3xl text-white pb-3  font-semibold">
            Vi matar korna med algerna
          </h1>
          <p className="text-xl font-light text-gray-300">
            Bönderna lägger till pulveriserad alger i kosten, nyttigt och
            klimatsmart!
          </p>
        </div>

        <div>
          <img src={iconThree} className="h-20 mb-4" />

          <h1 className="text-3xl  text-white pb-3 font-semibold">
            Algerna minskar metanutsläppen
          </h1>
          <p className="text-xl font-light text-gray-300">
            Algerna bromsar jäsningen i en av deras magar och minskar
            metanutsläppet.
          </p>
        </div>

        <div>
          <img src={logo} className="h-20 mb-4" />

          <h1 className="text-3xl  text-white pb-3 font-semibold">
            Cowfunded märkta produkter
          </h1>
          <p className="text-xl font-light text-gray-300">
            Genom att köpa Cowfunded produkter hjälper du oss bla bla bla.
          </p>
        </div>
      </div>
    </div>
  );
}
