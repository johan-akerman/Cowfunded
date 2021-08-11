import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export function Footer() {
  return (
    <div className="bg-secondary text-white text-left pb-16">
      <div className="w-11/12 mx-auto pt-20 pb-8 flex flex-col sm:flex-row space-y-2 justify-start">
        <div className="w-full sm:w-5/5 pr-6 flex flex-col space-y-2 pb-6">
          <Link className="flex" to="/">
            <img className="h-16" src={logo} />
            <span className="md:pl-4 pl-2 mt-1 ">
              <h1 className="md:text-3xl text-2xl text-white font-medium uppercase">
                Cowfunded
              </h1>
              <p className="text-white -mt-1 uppercase">By Volta Greentech</p>
            </span>
          </Link>
          <p className="pt-4 text-lg w-96">
            Cowfunded är ett initiativ av Volta Greentech, ett startup som bla
            bla bla.
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
          <Link
            className="w-40 opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/"
          >
            Om problemet
          </Link>
          <Link
            className="w-40 opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/"
          >
            Om lösningen
          </Link>

          <Link
            className="w-40 opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/"
          >
            Impact kalkylator
          </Link>
          <Link
            className="w-40 opacity-60 hover:opacity-100 font-semibold text-lg"
            to="/"
          >
            Vanliga frågor
          </Link>

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
