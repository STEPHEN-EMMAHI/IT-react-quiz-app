import Button from "./Button";
import Options from "./Options";

export default function Question({
  questions,
  currentIndex,
  dispatch,
  numOfQuestions,
}) {
  const currentQuestion = questions[currentIndex];

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <h3>{currentQuestion.questionText}</h3>
      <Options options={currentQuestion.options} />
      {currentIndex < numOfQuestions - 1 ? (
        <Button
          className={`border bg-zinc-900 text-white rounded-2xl p-3 lg:cursor-pointer`}
          onClick={() =>
            dispatch({ type: "nextQuestion", payload: currentIndex + 1 })
          }
        >
          Next Question
        </Button>
      ) : (
        <Button
          className={`border bg-zinc-900 text-white rounded-2xl p-3 lg:cursor-pointer`}
          onClick={() => dispatch({})}
        >
          Finish Quiz
        </Button>
      )}
    </div>
  );
}
