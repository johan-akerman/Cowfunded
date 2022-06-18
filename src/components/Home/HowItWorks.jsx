import iconOne from "../../images/iconOne.png";
import iconTwo from "../../images/iconTwo.png";
import iconThree from "../../images/iconThree.png";
import logo from "../../images/logo.png";

const texts = [
  {
    image: iconOne,
    title: "Vi odlar speciella röda alger",
    text: "Volta Greentech odlar röda alger i en landbaserad algfabrik i Lysekil. Algerna levereras sedan ut som fodertillskott till bondgårdar runt om i landet.",
  },
  {
    image: iconTwo,
    title: "Vi matar korna med algerna",
    text: "Bönderna blandar in de torkade algerna som ett tillskott i kornas foder. ",
  },
  {
    image: iconThree,
    title: "Algerna minskar metanutsläpp",
    text: "Genom vårt naturliga fodertillskott kan vi hjälpa Sveriges bönder att jobba mer klimatsmart.",
  },
];

export function HowItWorks() {
  return (
    <div
      className="lg:pt-24 bg-white pt-16 lg:pb-32 pb-12 w-10/12 mx-auto"
      id="solution"
    >
      <h1 className="text-center lg:text-6xl text-4xl font-bold text-black ">
        Vad är hemligheten med LOME?
      </h1>
      <p className="text-center lg:text-xl text-lg text-black mx-auto mt-5 lg:mb-0 mb-16 max-w-3xl">
        LOME innehåller ett nytt naturligt fodertillskott baserat på alger med
        naturliga bioaktiva ämnen. Tillskottet hjälper korna att stå emot
        metanproducerande mikroorganismer.
      </p>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-14 lg:pt-24 lg:text-left text-center ">
        {texts.map((item) => {
          return (
            <div className="text-center">
              <img src={item.image} className="h-20 mb-4 mx-auto" />
              <h1 className="text-3xl text-black pb-3 font-semibold">
                {item.title}
              </h1>
              <p className="lg:text-xl text-lg font-light text-black">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
