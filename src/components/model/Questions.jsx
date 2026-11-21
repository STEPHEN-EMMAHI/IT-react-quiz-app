import { QUIZ_DATA } from "../../data/quizData";
import Options from "./Options";

export default function Question({ currentIndex }) {
  const currentQuestion = QUIZ_DATA[currentIndex];

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <h3>{currentQuestion.questionText}</h3>
      <Options options={currentQuestion.options} />
    </div>
  );
}
