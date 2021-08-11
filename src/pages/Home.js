import { Jumbotron } from "../components/Jumbotron";
import { HowItWorks } from "../components/HowItWorks";
import { FAQ } from "../components/FAQ";
import { Problem } from "../components/Problem";
import { Navbar } from "../components/Navbar";
import { Calculator } from "../components/Calculator";
import { useEffect } from "react";
import { InfoBar } from "../components/InfoBar";
import { Footer } from "../components/Footer";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <InfoBar />
      <Navbar />
      <Jumbotron />
      <Problem />
      <HowItWorks />
      <Calculator />

      <FAQ
        questionOne="q"
        answerOne="a"
        questionTwo="q"
        answerTwo="a"
        questionThree="q"
        answerThree="a"
        questionFour="q"
        answerFour="a"
        questionFive="q"
        answerFive="a"
      />
      {/* <Banner
        title="Hitta Cowfunded märkta produkter nära mig"
        button="Titta på kartan"
        link="/locations"
      /> */}
      <Footer />
    </div>
  );
}

export default Home;
