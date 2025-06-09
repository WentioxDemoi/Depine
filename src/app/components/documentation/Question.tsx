import React from "react";

interface QuestionProps {
  question: string;
  answer: string;
}

const Question: React.FC<QuestionProps> = ({ question, answer }) => {
  return (
    <details className="transition-all text-lg font-extralight space-y-5 my-10">
      <summary className="cursor-pointer">{question}</summary>
      <p className="text-lg ml-5">
        {answer.split("\\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
            <br />
          </React.Fragment>
        ))}
      </p>
    </details>
  );
};

export default Question;
