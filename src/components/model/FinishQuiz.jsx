import Button from "./Button";

export default function FinishQuiz({ totalPoints, points, dispatch }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <p className="">Quiz has been completed</p>
      <p className="border-b-2 border-b-black">
        Your score is {points} / {totalPoints}
      </p>
      <Button
        className={`bg-zinc-900 text-white p-3 m-2 rounded-2xl lg:cursor-pointer lg:transition-transform lg:hover:scale-110 lg:duration-200 lg:ease-in-out`}
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </Button>
    </div>
  );
}
