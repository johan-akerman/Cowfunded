import chart from "../images/chart.png";

export function Problem() {
  return (
    <div className="bg-secondary  pt-16 pb-16" id="problem">
      <h1 className="md:text-6xl text-4xl font-bold text-center text-white ">
        Vad är problemet med kofisar?
      </h1>
      <p className="text-center max-w-2xl text-xl text-gray-300 mx-auto mt-5">
        Jo, det finns ungefär en miljard kossor på planeten, och tillsammans
        producerar de över 4% av världens växthusgasutsläpp endast genom att
        rapa och prutta metangas. Det är dubbelt så mycket utsläpp som alla
        världens flygplan står för.
      </p>

      <img className="mt-24 md:w-3/5 w-4/5 mx-auto" src={chart} />
    </div>
  );
}
