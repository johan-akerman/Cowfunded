import meat from "../../images/meat.png";

export function ProductBanner() {
  return (
    <div className="bg-white pb-0">
      <div className="grid grid-cols-2 lg:w-10/12 w-11/12 mx-auto">
        <div className="lg:col-span-1 col-span-2 lg:text-left text-center mt-40">
          <h1 className="lg:text-6xl text-4xl font-bold text-black mt-12">
            Low on methane
          </h1>
          <p className="lg:text-xl text-lg text-black mt-5">
            Nu lanserar vi LOME, kött som är 100% Gotländskt nötkött från kor
            som släpper ut mindre metan. Hemligheten? Våra kor rapar mindre
            metanutsläpp tack vare ett fodertillskott av alger. Genom att göra
            ett aktivt val i butiken och välja LOME är du med och minskar
            metanutsläpp lokalt i Sverige från kor på svenska gårdar.
          </p>
        </div>

        <img src={meat} />
      </div>
    </div>
  );
}
