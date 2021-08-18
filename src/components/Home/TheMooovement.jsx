import mooovement from "../../images/mooovement.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export function TheMooovement() {
  return (
    <div className="bg-secondary pb-4">
      <div className="grid grid-cols-2 md:w-10/12 w-11/12 mx-auto">
        <div className="md:mt-32 mt-16 md:col-span-1 col-span-2 md:text-left text-center">
          <h1 className="md:text-6xl text-4xl font-bold text-white ">
            The moooovement
          </h1>
          <p className="md:text-xl text-lg text-gray-300 mt-5">
            Vår vision är att det ska bli en branschstandard att minska
            metanutsläpp från kor. Det måste det bli för att vi ska kunna nå
            klimatmålen och vi har en lång väg att gå med många utmaningar. Följ
            oss på sociala medier för att bli en del av vårt moooooooovement.
          </p>
          <div className="flex gap-6 mt-6 text-center md:justify-start justify-center">
            <a
              href="https://www.facebook.com/Volta-Greentech-106692387396549/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-3xl text-gray-300 hover:text-primary"
              />
            </a>
            <a href="https://www.instagram.com/voltagreentech/" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-3xl text-gray-300 hover:text-primary"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/volta-greentech/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-3xl text-gray-300 hover:text-primary"
              />
            </a>
            <a href="https://twitter.com/vgreentech" target="_blank">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-3xl text-gray-300 hover:text-primary"
              />
            </a>
          </div>
        </div>

        <div className="md:mt-0 mt-20 text-white md:ml-16 ml-0 mx-0 md:mb-32 mb-12 md:col-span-1 col-span-2">
          <img src={mooovement} />
        </div>
      </div>
    </div>
  );
}
