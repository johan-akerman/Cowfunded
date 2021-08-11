import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function InfoBar() {
  return (
    <div className="md:block hidden bg-secondary text-center">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="relative">
          <p className="ml-3 text-white font-medium">
            <span>
              🥛 Cheers! Now you can buy Cowfunded milk all over Sweden.{" "}
              <Link
                to="/locations"
                className="border-b-2 border-primary hover:border-black hover:text-primary"
              >
                View stores
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
