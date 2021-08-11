import { Link } from "react-router-dom";
import banner from "../images/banner.png";

export function Banner({ title, button, link }) {
  return (
    <div
      className="md:py-32 py-16 bg-cover"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="w-10/12 mx-auto text-center ">
        <h1 className="pb-12 text-white max-w-2xl mx-auto md:text-5xl text-4xl font-bold">
          {title}
        </h1>

        <Link
          to={link}
          className=" w-60 px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-primary md:py-4 md:text-lg md:px-10 transform ease-in duration-100 hover:-translate-y-2 hover:shadow-lg"
        >
          {button}
        </Link>
      </div>
    </div>
  );
}
