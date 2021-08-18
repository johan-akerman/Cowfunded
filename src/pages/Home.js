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
      <ProductBanner />
      <Calculator />
      <TheMooovement />

      <FAQ
        questionOne="Question goes here?"
        answerOne="Answer goes here"
        questionTwo="Question goes here?"
        answerTwo="Answer goes here"
        questionThree="Question goes here?"
        answerThree="Answer goes here"
        questionFour="Question goes here?"
        answerFour="Answer goes here"
        questionFive="Question goes here?"
        answerFive="Answer goes here"
      />

      <Footer />
    </div>
  );
}

export default Home;
