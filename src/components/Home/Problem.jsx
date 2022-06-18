import chart from "../../images/graph.png";

export function Problem() {
  return (
    <div className="md:mb-32 mb-16">
      <div className="grid grid-cols-2 lg:w-10/12 w-11/12 mx-auto">
        <div className="mt-12 lg:col-span-1 col-span-2 lg:text-left text-center">
          <h1 className="lg:text-6xl text-5xl font-bold text-black ">
            Vad är problemet med kofisar?
          </h1>
          <p className="lg:text-xl text-lg text-black mt-5">
            Jo, det finns ungefär en miljard kor på planeten, och tillsammans
            producerar de över 4% av världens växthusgasutsläpp endast genom att
            rapa och prutta metangas (Sverige 5,7%). Det är dubbelt så mycket
            utsläpp som alla världens flygplan står för.
          </p>
        </div>
        <div className="text-white lg:ml-20 lg:-mt-8 mt-12 lg:mx-0  mx-auto w-10/12 lg:col-span-1 col-span-2">
          <img src={chart} />
        </div>
      </div>
    </div>
  );
}
