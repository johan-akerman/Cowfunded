import { Jumbotron } from "../components/Home/Jumbotron";
import { HowItWorks } from "../components/Home/HowItWorks";
import { Problem } from "../components/Home/Problem";
import { Navbar } from "../components/Home/Navbar";
import { Calculator } from "../components/Home/Calculator";
import { InfoBar } from "../components/Home/InfoBar";
import { Footer } from "../components/Home/Footer";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <InfoBar />
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
