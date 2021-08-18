import iconOne from "../../images/iconOne.png";
import iconTwo from "../../images/iconTwo.png";
import iconThree from "../../images/iconThree.png";
import logo from "../../images/logo.png";

const texts = [
  {
    image: iconOne,
    title: "Vi odlar speciella röda alger",
    text: "Algerna som har speciella bioaktiva ämnen odlas av Volta Greentech i Lysekil i deras landbaserade algfabrik. Sedan levereras dem ut till bondgårdar runt om i landet. ",
  },
  {
    image: iconTwo,
    title: "Vi matar korna med algerna",
    text: "Algerna som har speciella bioaktiva ämnen odlas av Volta Greentech i Lysekil i deras landbaserade algfabrik. Sedan levereras dem ut till bondgårdar runt om i landet. ",
  },
  {
    image: iconThree,
    title: "Algerna minskar metanutsläpp",
    text: "Algerna som har speciella bioaktiva ämnen odlas av Volta Greentech i Lysekil i deras landbaserade algfabrik. Sedan levereras dem ut till bondgårdar runt om i landet. ",
  },
  {
    image: logo,
    title: "Cowfunding, lite som grön el",
    text: "Algerna som har speciella bioaktiva ämnen odlas av Volta Greentech i Lysekil i deras landbaserade algfabrik. Sedan levereras dem ut till bondgårdar runt om i landet. ",
  },
];

export function HowItWorks() {
  return (
    <div className="bg-secondary ">
      <div
        className="md:pt-24 pt-16 md:pb-32 pb-12 w-10/12 mx-auto"
        id="solution"
      >
        <h1 className="md:text-left text-center  md:text-6xl text-4xl font-bold text-white ">
          Så, hur löser vi det?
        </h1>
        <p className="md:text-left text-center md:text-xl text-lg text-gray-300 mx-auto mt-5 md:mb-0 mb-16">
          Ett riktigt problem behöver en riktig lösning. Låt oss berätta hur det
          fungerar.
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-14 md:pt-24 md:text-left text-center ">
          {texts.map((item) => {
            return (
              <div>
                <img src={item.image} className="h-20 mb-4 md:mx-0 mx-auto" />
                <h1 className="text-3xl text-white pb-3 font-semibold">
                  {item.title}
                </h1>
                <p className="md:text-xl text-lg font-light text-gray-300">
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
