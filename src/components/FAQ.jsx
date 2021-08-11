import { FAQCard } from "./FAQCard";
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
    <div className="bg-primary md:pb-24 pb-12 text-center">
      <h1 className="md:pt-24 pt-16 md:pb-12 pb-8 text-black  md:text-6xl text-4xl font-bold">
        Har du några frågor?
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
  );
}
