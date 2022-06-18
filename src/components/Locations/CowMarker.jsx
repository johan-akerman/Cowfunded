import pin from "../../images/pin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faDirections,
  faExternalLinkAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export function CowMarker({ marker }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <img onClick={openModal} className="w-10" src={pin} />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child>
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                <div className="flex justify-between">
                  <h1 className="text-3xl font-medium leading-6 text-gray-900">
                    {marker.properties.title}
                  </h1>
                  <button
                    type="button"
                    className="text-2xl hover:font-red focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    <FontAwesomeIcon
                      className="hover:text-red-500"
                      icon={faTimes}
                    />
                  </button>
                </div>
                <div className="mt-4">
                  <p className="md:text-lg text-md pb-2 text-gray-500">
                    <FontAwesomeIcon className="mr-3" icon={faMapMarkerAlt} />
                    {marker.properties.address}
                  </p>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
