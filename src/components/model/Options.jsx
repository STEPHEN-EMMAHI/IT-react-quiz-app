export default function Options({
  options,
  dispatch,
  selectedOption,
  currentQuestion,
  points,
}) {
  return (
    <div className="flex max-w-xl flex-col gap-6 px-8 pb-8 pt-4 lg:w-full lg:border lg:mx-8 lg:rounded-2xl">
      {options.map((option, index) => (
        <button
          key={index}
          className={`flex gap-4 items-center border-b`}
          disabled={selectedOption !== null ? true : false}
          onClick={() =>
            dispatch({
              type: "selectOption",
              payload: index,
              points,
            })
          }
        >
          <span className="text-xl leading-none">
            {index === selectedOption ? "☑" : "☐"}
          </span>

          <span className="text-left">{option}</span>

          {/* add correct to the correct answer */}
          {index === currentQuestion.correctAnswer &&
            selectedOption !== null && (
              <span className="text-green-500">Correct</span>
            )}

          {/* add wrong to the wrong answers */}
          {index === selectedOption &&
            selectedOption !== currentQuestion.correctAnswer && (
              <span className="text-red-500">wrong</span>
            )}
        </button>
      ))}
    </div>
  );
}
