import { Link } from "react-router-dom";
import jumbotron from "../../images/jumbotron.png";
import clouds from "../../images/clouds.png";

export function Jumbotron() {
  return (
    <main className="bg-primary relative">
      <div className="grid grid-cols-5 lg:w-10/12 w-11/12 mx-auto lg:pb-96 pb-40">
        <div className="lg:col-span-2 col-span-5 lg:text-left text-center lg:mt-40 mt-20 mb-12">
          <h1 className="lg:text-6xl text-5xl font-bold text-black">
            Ett gott sätt att minska utsläpp
          </h1>
          <p className="lg:text-xl text-lg text-black mt-5 mb-12">
            Det finns över en miljard kor på vår planet. Som genom att idissla,
            andas och rapa släpper ut metangas som påverkar klimatet. På så sätt
            är korna en del av klimatförändringen. Nu finns LOME – ett helt nytt
            kött från kor som utfodrats med startup-bolaget Volta Greentechs
            naturliga fodertillskott av röda alger. Algerna är odlade i Lysekil
            och minskar kors dagliga utsläpp av metangaser med upp till 92%.
          </p>

          <Link
            to="/butiker"
            className="px-8 py-3 text-xl w-48 text-center text-primary font-semibold rounded-xl bg-secondary"
          >
            Hitta butiker
          </Link>
        </div>
        <div className="lg:col-span-3 col-span-5 mt-12">
          <img src={jumbotron} />
        </div>
      </div>

      <img src={clouds} className="absolute right-0 -bottom-2 " />
    </main>
  );
}
