import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function Card() {
  return (
    <div className="border-b-2 border-gray-700 flex justify-between py-3 text-white hover:text-primary hover:border-primary cursor-pointer">
      <div>
        <h1 className="font-semibold text-xl">Affärens namn</h1>
        <p className="">Adress står här</p>
      </div>
      <FontAwesomeIcon className="mt-2 text-4xl" icon={faArrowRight} />
    </div>
  );
}
