import logo from "../../images/logo.png";
import icon_black from "../../images/icon_black.png";

import pin from "../../images/pin.png";
import { Link } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  return (
    <div className="bg-primary pt-2">
      <div className="flex justify-between py-4 w-11/12 mx-auto">
        <Link className="flex" to="/">
          <img className="h-16" src={logo} />
        </Link>

        <div className="mt-5 flex">
          <a
            className="lg:block hidden text-black text-lg font-semibold hover:opacity-50 pr-8"
            href="#om"
          >
            Om kofisar
          </a>

          <a
            className="lg:block hidden text-black text-lg font-semibold hover:opacity-50 pr-8"
            href="#calculator"
          >
            Impact kalkylatorn
          </a>

          <a
            className="lg:block hidden text-black text-lg font-semibold hover:opacity-50 pr-8"
            href="#calculator"
          >
            Hitta butiker
          </a>

          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
