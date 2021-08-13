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
