import { FAQCard } from "./FAQCard";

export function FAQ() {
  const questions = [
    {
      q: "question goes here",
      a: "answer goes here",
    },
    {
      q: "question goes here",
      a: "answer goes here",
    },
    {
      q: "question goes here",
      a: "answer goes here",
    },
  ];

  return (
    <div>
      <div className="bg-coral lg:pb-32 pb-12 text-center" id="faq">
        <h1 className="pt-16 lg:pb-12 pb-8 text-black  lg:text-6xl text-4xl font-bold">
          Vanliga frågor
        </h1>

        <div className="lg:w-8/12 w-11/12  mx-auto pb-12">
          {questions?.map((question) => {
            return <FAQCard question={question.q} answer={question.a} />;
          })}
        </div>

        <span className="pt-12 text-lg">
          Har du fler frågor? Kontakta{" "}
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
