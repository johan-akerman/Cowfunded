import iconOne from "../../images/iconOne.png";
import iconTwo from "../../images/iconTwo.png";
import iconThree from "../../images/iconThree.png";
import trailer from "../../images/trailer.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const texts = [
  {
    image: iconOne,
    title: "Speciella röda alger",
    text: "Algerna används som ett 100% naturligt fodertillskott avsett för nötkreatur. Fodertillskottet består av den röda makroalgen Asparagopsis som odlas på land i ett tankbaserat system i Lysekil och sedan frystorkas.",
  },
  {
    image: iconTwo,
    title: "Korna matas med algerna",
    text: "Under inomhussäsongen blandas de torkade algerna in som ett tillskott i kornas grov- eller kraftfoder. Korna på pilotgården Ejmunds gård får en kost som består nästan enbart av ensilage, blandat med lite morötter och potatis. Cirka 0.6% av fodret är alger.",
  },
  {
    image: iconThree,
    title: "Algerna minskar metanutsläpp",
    text: "Genom att förse lantbrukare med fodertillskott av alger, kan vi tillsammans minska metanutsläpp och jobba mer klimatsmart.",
  },
];

export function HowItWorks() {
  return (
    <div
      className="lg:pt-24 bg-white pt-16 lg:pb-32 pb-12 w-10/12 mx-auto"
      id="om-lome"
    >
      <h1 className="text-center lg:text-6xl text-5xl font-bold text-black ">
        Vad är hemligheten med LOME?
      </h1>
      <p className="text-center lg:text-xl text-lg text-black mx-auto mt-5 lg:mb-14 mb-16 max-w-3xl">
        Volta Greentech har utvecklat ett nytt naturligt fodertillskott baserat
        på alger med naturliga bioaktiva ämnen. Tillskottet hjälper korna att
        stå emot metanproducerande mikroorganismer. Och svenska bönder kan
        drastiskt minska sina kors utsläpp av metangaser.
      </p>

      <a
        className="relative w-full"
        href="https://vimeo.com/726185231"
        target="_blank"
      >
        <img src={trailer} className="object-fill w-full rounded-3xl" />
      </a>

      <div className="lg:mb-32 mb-20 grid lg:grid-cols-3 grid-cols-1 gap-14 pt-24 lg:text-left text-center ">
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

      <div className="mx-auto text-center w-11/12">
        <a
          className="px-8 py-3 md:text-xl text-md text-center text-white font-semibold rounded-xl bg-coral w-full"
          href="https://drive.google.com/drive/folders/1umsgkPGCJQu3xeyBqXgr9-JSOUSOUh5o?usp=sharing"
          target="_blank"
        >
          Läs vår klimatrapport
        </a>
      </div>
    </div>
  );
}
