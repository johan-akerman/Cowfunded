import { FAQCard } from "./FAQCard";
import frame from "../../images/frame_yellow.png";

export function FAQ({
  questionOne,
  answerOne,
  questionTwo,
  answerTwo,
  questionThree,
  answerThree,
  questionFour,
  answerFour,
  questionFive,
  answerFive,
}) {
  return (
    <div>
      <img src={frame} />
      <div className="bg-primary lg:pb-24 pb-12 text-center" id="faq">
        <h1 className="lg:pt-20 pt-16 lg:pb-12 pb-8 text-black  lg:text-6xl text-4xl font-bold">
          Vanliga frågor
        </h1>

        <div className="lg:w-8/12 w-11/12  mx-auto pb-12">
          <FAQCard question={questionOne} answer={answerOne} />
          <FAQCard question={questionTwo} answer={answerTwo} />
          <FAQCard question={questionThree} answer={answerThree} />
          <FAQCard question={questionFour} answer={answerFour} />
          <FAQCard question={questionFive} answer={answerFive} />
        </div>

        <span className="pt-12 text-lg">
          Got any other questions? Contact{" "}
          <a
            className="border-b-2 border-black hover:border-primary"
            href="mailto:hello@voltagreentech.com"
          >
            hello@voltagreentech.com
          </a>
        </span>
      </div>
    </div>
  );
}
