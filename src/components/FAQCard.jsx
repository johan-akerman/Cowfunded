import { Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export function FAQCard({ question, answer }) {
  return (
    <div className="w-full mt-4 transform ease-in duration-100  rounded-2xl">
      <div className="w-full mx-auto  text-left">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="border-b-2 border-black flex justify-between w-full py-3 px-2 text-xl align-middle font-semibold focus:outline-none">
                <span clasName={open ? "text-primary" : "text-black"}>
                  {question}
                </span>

                <FontAwesomeIcon
                  className="w-5 h-5 text-black"
                  icon={open ? faMinus : faPlus}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-2 pt-4 text-lg text-black">
                {answer}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
