export default function Options({ options, dispatch, selectedOption }) {
  return (
    <div className="flex max-w-xl flex-col gap-6 px-8 pb-8 pt-4 lg:w-full lg:border lg:mx-8 lg:rounded-2xl">
      {options.map((option, index) => (
        <button
          key={index}
          className="flex gap-4 items-center border-b"
          onClick={() =>
            dispatch({
              type: "selectOption",
              payload: index,
            })
          }
        >
          <span className="text-xl leading-none">
            {index === selectedOption ? "☑" : "☐"}
          </span>
          <span className="text-left">{option}</span>
        </button>
      ))}
    </div>
  );
}
