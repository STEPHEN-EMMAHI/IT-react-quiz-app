import Button from "./Button";
import Options from "./Options";

export default function Question({
  questions,
  currentIndex,
  dispatch,
  numOfQuestions,
  selectedOption,
}) {
  const currentQuestion = questions[currentIndex];

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <h3 className="w-full max-w-2xl text-center px-2">
        {currentQuestion.questionText}
      </h3>

      <Options
        options={currentQuestion.options}
        dispatch={dispatch}
        selectedOption={selectedOption}
      />
      {/* {currentIndex < numOfQuestions - 1 ? (
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
          className={`border bg-red-700 text-white rounded-2xl p-3 lg:cursor-pointer`}
          onClick={() => dispatch({ type: "finished" })}
        >
          Finish Quiz
        </Button>
      )} */}
      {selectedOption !== null && currentIndex < numOfQuestions - 1 ? (
        <Button
          className={`border bg-zinc-900 text-white rounded-2xl p-3 lg:cursor-pointer`}
          onClick={() =>
            dispatch({ type: "nextQuestion", payload: currentIndex + 1 })
          }
        >
          Next Question
        </Button>
      ) : null}
      {selectedOption !== null && currentIndex === numOfQuestions - 1 ? (
        <Button
          className={`border bg-red-700 text-white rounded-2xl p-3 lg:cursor-pointer`}
          onClick={() => dispatch({ type: "finished" })}
        >
          Finish Quiz
        </Button>
      ) : null}
    </div>
  );
}
