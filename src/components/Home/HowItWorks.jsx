import iconOne from "../../images/iconOne.png";
import iconTwo from "../../images/iconTwo.png";
import iconThree from "../../images/iconThree.png";
import logo from "../../images/logo.png";

const texts = [
  {
    image: iconOne,
    title: "Vi odlar speciella röda alger",
    text: "Volta Greentech odlar röda alger i en landbaserad algfabrik i Lysekil. Algerna levereras sedan ut som fodertillskott till bondgårdar runt om i landet. ",
  },
  {
    image: iconTwo,
    title: "Vi matar korna med algerna",
    text: "Bönderna blandar in de torkade algerna som ett tillskott i kornas foder. ",
  },
  {
    image: iconThree,
    title: "Algerna minskar metanutsläpp",
    text: "Algerna innehåller naturliga bioaktiva ämnen som hjälper korna att bekämpa metanproducerande mikroorganismer så att de kan prutta och rapar mindre metangas.",
  },
  {
    image: logo,
    title: "Cowfunding, lite som grön el",
    text: "Med produkter märkta med Cowfunding vet man som konsument att man bidragit till att minska metanutsläpp lokalt från svenska gårdar. Certifikat används och det fungerar lite som “grön el”. ",
  },
];

export function HowItWorks() {
  return (
    <div className="bg-secondary">
      <div
        className="lg:pt-24 pt-16 lg:pb-32 pb-12 w-10/12 mx-auto"
        id="solution"
      >
        <h1 className="lg:text-left text-center  lg:text-6xl text-4xl font-bold text-white ">
          Så, hur löser vi det?
        </h1>
        <p className="lg:text-left text-center lg:text-xl text-lg text-gray-300 mx-auto mt-5 lg:mb-0 mb-16">
          Ett riktigt problem behöver en riktig lösning. Låt oss berätta hur det
          fungerar.
        </p>

        <div className="grid lg:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-14 lg:pt-24 lg:text-left text-center ">
          {texts.map((item) => {
            return (
              <div>
                <img src={item.image} className="h-20 mb-4 lg:mx-0 mx-auto" />
                <h1 className="text-3xl text-white pb-3 font-semibold">
                  {item.title}
                </h1>
                <p className="lg:text-xl text-lg font-light text-gray-300">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
