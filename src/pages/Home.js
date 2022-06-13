import { Jumbotron } from "../components/Home/Jumbotron";
import { HowItWorks } from "../components/Home/HowItWorks";
import { FAQ } from "../components/Home/FAQ";
import { Problem } from "../components/Home/Problem";
import { Navbar } from "../components/Home/Navbar";
import { ProductBanner } from "../components/Home/ProductBanner";
import { Calculator } from "../components/Home/Calculator";
import { InfoBar } from "../components/Home/InfoBar";
import { Footer } from "../components/Home/Footer";
import { useEffect } from "react";
import { TheMooovement } from "../components/Home/TheMooovement";
import { Banner } from "../components/Home/Banner";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <HowItWorks />
      <Problem />
      <Calculator />
      <Footer />
    </div>
  );
}

export default Home;
