import { Link } from "react-router-dom";
import logo from "../../images/cowfunding_yellow.png";
import frame from "../../images/frame_footer.png";

export function Footer() {
  return (
    <>
      <img src={frame} />
      <div className="bg-secondary text-white text-left pb-16">
        <div className="w-11/12 mx-auto pt-8 pb-8 flex flex-col sm:flex-row space-y-2 justify-start">
          <div className="w-full sm:w-5/5 pr-6 flex flex-col space-y-2 pb-6">
            <Link className="flex" to="/">
              <img className="lg:h-20 h-16" src={logo} />
            </Link>
            <p className="pt-4 text-lg lg:w-96 w-72">
              Cowfunding är ett initiativ av Volta Greentech, ett svenskt
              startup företag som jobbar på att storskaligt reducera
              metangasutsläpp från kor.
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
              Hitta produkter
            </Link>
          </div>

          <div className="sm:w-2/5 flex flex-col space-y-2 pb-6">
            <h1 className="text-2xl font-semibold pb-3">The moovement</h1>
            <a
              className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
              href="https://www.instagram.com/voltagreentech/"
              target="_blank"
            >
              Instagram
            </a>
            <a
              className="w-28 opacity-60 hover:opacity-100 font-semibold text-lg"
              href="https://www.linkedin.com/company/volta-greentech/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="w-32 opacity-60 hover:opacity-100 font-semibold text-lg"
              href="https://www.facebook.com/Volta-Greentech-106692387396549/"
              target="_blank"
            >
              Facebook
            </a>

            <a
              className="w-32 opacity-60 hover:opacity-100 font-semibold text-lg"
              href="https://twitter.com/vgreentech"
              target="_blank"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
