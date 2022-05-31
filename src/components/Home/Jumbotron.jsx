import { Link } from "react-router-dom";
import jumbotron from "../../images/jumbotron.png";
import clouds from "../../images/clouds.png";

export function Jumbotron() {
  return (
    <main className="bg-primary relative">
      <div className="grid grid-cols-5 lg:w-10/12 w-11/12 mx-auto pb-96">
        <div className="col-span-2 lg:text-left text-center mt-40">
          <h1 className="lg:text-6xl text-4xl font-bold text-black">
            Ett gott sätt att minska utsläpp
          </h1>
          <p className="lg:text-xl text-lg text-black mt-5 mb-12">
            Det finns cirka en miljard kor på planeten som genom att rapa och
            prutta metangas står för över fyra procent av världens
            växthusgasutsläpp. Dubbelt så mycket utsläpp som alla världens
            flygplan tillsammans. Nu kan svenska bönder drastiskt minska sina
            kors rapar och pruttar med hjälp av LOME – ditt nya kött.
          </p>

          <Link
            to="/locations"
            className="px-8 py-3 text-xl w-48 text-center text-primary font-semibold rounded-xl bg-secondary"
          >
            Hitta butiker
          </Link>
        </div>
        <div className="col-span-3">
          <img src={jumbotron} />
        </div>
      </div>

      <img src={clouds} className="absolute right-0 -bottom-2 " />
    </main>
  );
}
