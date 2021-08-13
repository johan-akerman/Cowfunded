import { Link } from "react-router-dom";
import logo from "../images/cowfunding_yellow.png";

export function Footer() {
  return (
    <div className="bg-secondary text-white text-left pb-16">
      <div className="w-11/12 mx-auto pt-20 pb-8 flex flex-col sm:flex-row space-y-2 justify-start">
        <div className="w-full sm:w-5/5 pr-6 flex flex-col space-y-2 pb-6">
          <Link className="flex" to="/">
            <img className="h-20" src={logo} />
          </Link>
          <p className="pt-4 text-lg md:w-96 w-72">
            Cowfunded är ett initiativ av Volta Greentech, ett företag som vill
            reducera metangasutsläpp från kor med ett fodertillskott av sjögräs.
          </p>
          <p className="text-lg">
            Läs mer på{" "}
            <a
              href="https://www.voltagreentech.com/"
              target="_blank"
              className="border-b-2 border-primary hover:border-black hover:text-primary"
            >
              voltagreentech.com
            </a>
          </p>
        </div>
        <div className="sm:w-2/5 flex flex-col space-y-2 pb-6">
          <h1 className="text-2xl font-semibold pb-3">Om Cowfunding</h1>
          <a
            className="w-40 opacity-60 hover:opacity-100 font-semibold text-lg"
            href="#problem"
          >
            Om problemet
          </a>
          <a
            className="w-40 opacity-60 hover:opacity-100 font-semibold text-lg"
            href="#solution"
          >
            Om lösningen
          </a>

          <a
            className="w-40 opacity-60 hover:opacity-100 font-semibold text-lg"
            href="#calculator"
          >
            Impact kalkylator
          </a>
          <a
            className="w-40 opacity-60 hover:opacity-100 font-semibold text-lg"
            href="#faq"
          >
            Vanliga frågor
          </a>

          <Link
            className="w-40 opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/locations"
          >
            Hitta återförsäljare
          </Link>
        </div>

        <div className="sm:w-2/5 flex flex-col space-y-2 pb-6">
          <h1 className="text-2xl font-semibold pb-3">Följ oss</h1>
          <Link
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/"
          >
            Instagram
          </Link>
          <Link
            className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/"
          >
            LinkedIn
          </Link>
          <Link
            className="w-32 opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/"
          >
            Facebook
          </Link>
        </div>
      </div>
    </div>
  );
}
