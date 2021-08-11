import { Link } from "react-router-dom";
import pin from "../images/pin.png";
import bgtest from "../images/bgtest.png";

export function Jumbotron() {
  return (
    <main className="bg-primary relative ">
      <div className="lg:text-left text-center lg:w-11/12 w-12/12 lg:pt-24 pt-12 lg:pb-96 pb-16 mx-auto">
        <h1 className="text-secondary lg:text-9xl text-4xl sm:mt-5 font-bold  sm:mx-auto md:mt-5 lg:mx-0">
          Stötta klimatkampen, en kofis i taget.
        </h1>
        <p className="mt-3 text-xl text-secondary sm:mt-5 sm:max-w-4xl sm:mx-auto md:mt-5 lg:mx-0">
          Kor fiser och rapar stora mängder metangas, vilket i sin tur påverkar
          klimatet och påskyndar temperaturhöjningar. Vi kan reducera deras
          utsläpp med 80% genom att mata dem med alger. Hjälp oss göra det och
          rädda klimatet.
        </p>
        <div className="mt-4 mb-12 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <Link
            to="/job-board"
            className="transform ease-in duration-100 hover:-translate-y-1 hover:shadow-lg md:mx-0 mx-auto w-72 text-primary shadow font-semibold rounded-xl flex items-center justify-center px-8 py-3 border border-transparent bg-secondary  md:py-4 md:text-xl md:px-10"
          >
            <img src={pin} className="h-6 mr-3" /> Hitta återförsäljare
          </Link>
        </div>
      </div>
      <img src={bgtest} className="absolute right-0 -bottom-2" />
    </main>
  );
}
