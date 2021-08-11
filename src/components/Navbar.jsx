import { Disclosure } from "@headlessui/react";
import logoInverted from "../images/logoInverted.png";
import HowIt from "./HowIt";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  return (
    <div className="bg-primary">
      <div className="flex justify-between py-4 w-11/12 mx-auto">
        <Link className="flex" to="/">
          <img className="h-16" src={logoInverted} />
          <span className="md:pl-4 pl-2 mt-1 ">
            <h1 className="md:text-3xl text-2xl text-black font-medium uppercase">
              Cowfunded
            </h1>
            <p className="text-black -mt-1 uppercase">By Volta Greentech</p>
          </span>
        </Link>

        <div className="mt-5 ">
          <Link
            className="text-black text-lg font-semibold hover:opacity-50 pr-10"
            to="/"
          >
            Home
          </Link>

          <Link
            className="text-black text-lg font-semibold hover:opacity-50 pr-10"
            to="/faq"
          >
            FAQ
          </Link>

          <Link
            className="mt-10 w-44 justify-center px-8 py-4 bg-black text-primary rounded-xl text-lg font-semibold"
            to="/locations"
          >
            Find reseller
          </Link>
        </div>
      </div>
    </div>
  );
}
