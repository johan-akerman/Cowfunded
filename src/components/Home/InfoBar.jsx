import { Link } from "react-router-dom";
import milk from "../../images/milk.png";

export function InfoBar() {
  return (
    <div className="lg:block hidden bg-secondary text-center">
      <div className="py-3 flex max-w-lg mx-auto">
        <img src={milk} className="h-6 mr-2" />
        <p className="text-white font-medium">
          Nu finns Cowfunding-märkt COOP Mellanmjölk.
        </p>
        <Link
          to="/locations"
          className="ml-2 text-white font-medium border-b-2 border-primary hover:border-black hover:text-primary"
        >
          Hitta produkter
        </Link>
      </div>
    </div>
  );
}
