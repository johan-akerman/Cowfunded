import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function Card({ store }) {
  console.log(store);
  return (
    <div className="border-b-2 border-gray-700 flex justify-between py-3 text-white hover:text-primary hover:border-primary cursor-pointer">
      <div>
        <h1 className="font-semibold text-xl">{store.title}</h1>
        <p className="">{store.address}</p>
      </div>
      <FontAwesomeIcon className="mt-2 text-4xl" icon={faArrowRight} />
    </div>
  );
}
