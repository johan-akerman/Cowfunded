import logo from "../images/cowfunding_black.png";
import pin from "../images/pin.png";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="bg-primary">
      <div className="flex justify-between py-4 w-11/12 mx-auto">
        <Link className="flex" to="/">
          <img className="h-20" src={logo} />
        </Link>

        <div className="mt-5 lg:flex hidden ">
          <a
            className="text-black text-lg font-semibold hover:opacity-50 pr-10"
            href="#calculator"
          >
            Impact kalkylatorn
          </a>

          <a
            className="text-black text-lg font-semibold hover:opacity-50 pr-10"
            href="#faq"
          >
            Vanliga frågor
          </a>

          <Link
            to="/locations"
            className="-mt-4 mb-4 transform ease-in duration-100 hover:-translate-y-1 hover:shadow-lg md:mx-0 mx-auto w-56 text-primary shadow font-semibold rounded-xl flex items-center justify-center px-2 py-3 border border-transparent bg-secondary  md:text-xl "
          >
            <img src={pin} className="h-6 mr-3" /> Hitta affärer
          </Link>
        </div>
      </div>
    </div>
  );
}
