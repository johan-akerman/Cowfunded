import logo from "../../images/cowfunding_black.png";
import pin from "../../images/pin.png";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="bg-primary pt-2">
      <div className="flex justify-between py-4 w-11/12 mx-auto">
        <Link className="flex" to="/">
          <img className="lg:h-16 h-18" src={logo} />
        </Link>

        <div className="mt-5 lg:flex hidden">
          <a
            className="text-black text-lg font-semibold hover:opacity-50 pr-8"
            href="#calculator"
          >
            Impact kalkylatorn
          </a>

          <a
            className="text-black text-lg font-semibold hover:opacity-50 pr-8"
            href="#faq"
          >
            Vanliga frågor
          </a>

          <Link
            to="/locations"
            className="-mt-3 mb-3 px-6 py-3 text-xl text-primary font-semibold rounded-xl flex items-center bg-secondary"
          >
            <img src={pin} className="h-6 mr-3" /> Hitta produkter
          </Link>
        </div>
      </div>
    </div>
  );
}
