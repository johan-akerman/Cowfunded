import {
  faFacebook,
  faFacebookSquare,
  faInstagram,
  faInstagramSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../images/logo.png";

export function Footer() {
  return (
    <>
      <div className="bg-coral text-black text-left w-full">
        <div className="md:py-16 py-16 px-12 mx-auto md:w-1/3 text-center">
          <img className="md:h-20 h-16 block mx-auto" src={logo} />

          <p className="pt-4 pb-6 text-lg text-center">
            LOME är ett samarbete mellan{" "}
            <a
              className="hover:text-primary text-lg cursor-pointer border-b-2 font-medium border-black"
              target="_blank"
              href="https://www.voltagreentech.com/"
            >
              Volta Greentech
            </a>
            ,{" "}
            <a
              className="hover:text-primary text-lg cursor-pointer border-b-2 font-medium border-black"
              target="_blank"
              href="https://www.coop.se/"
            >
              Coop
            </a>{" "}
            och{" "}
            <a
              className="hover:text-primary text-lg cursor-pointer border-b-2 font-medium border-black"
              target="_blank"
              href="https://www.protos.se/"
            >
              PROTOS
            </a>
            .
          </p>

          <a
            className="hover:text-primary text-lg cursor-pointer border-b-2 font-medium border-primary"
            href="mailto:hello@voltagreentech.com"
          >
            hello@voltagreentech.com
          </a>
          {/* <div className="text-4xl flex gap-3 justify-center mt-6 ">
            <a
              href=""
              target="_blank"
              className="text-black hover:text-primary"
            >
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>

            <a
              href=""
              target="_blank"
              className="text-black hover:text-primary"
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>

            <a
              href=""
              target="_blank"
              className="text-black hover:text-primary"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
}
