export default function FinishQuiz({ totalPoints, points }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <p className="">Quiz has been completed</p>
      <p className="border-b-2 border-b-black">
        Your score is {points} / {totalPoints}
      </p>
    </div>
  );
}
