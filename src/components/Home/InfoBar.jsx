import { Link } from "react-router-dom";

export function InfoBar() {
  return (
    <div className="lg:block hidden bg-coral text-center">
      <div className="py-3 flex max-w-lg mx-auto">
        <p className="text-white font-medium">
          Nu finns Cowfunding-märkt COOP Mellanmjölk.
        </p>
        <Link
          to="/locations"
          className="ml-2 text-white font-medium border-b-2 border-white"
        >
          Hitta butik
        </Link>
      </div>
    </div>
  );
}
