import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  return (
    <div className="bg-primary pt-2">
      <div className="flex justify-between py-4 w-11/12 mx-auto">
        <Link className="flex" to="/">
          <img className="lg:h-16 h-14 lg:mt-0 mt-2" src={logo} />
        </Link>

        <div className="mt-5 flex">
          <a
            className="lg:block hidden text-black text-lg font-semibold hover:opacity-50 pr-8"
            href="#om-lome"
          >
            Om LOME
          </a>

          <a
            className="lg:block hidden text-black text-lg font-semibold hover:opacity-50 pr-8"
            href="#om-kofisar"
          >
            Om kofisar
          </a>

          <a
            className="lg:block hidden text-black text-lg font-semibold hover:opacity-50 pr-8"
            href="#impact-kalkylatorn"
          >
            Impact kalkylatorn
          </a>

          <Link
            className="lg:block hidden text-black text-lg font-semibold hover:opacity-50 pr-8"
            to="/butiker"
          >
            Hitta butiker
          </Link>

          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
