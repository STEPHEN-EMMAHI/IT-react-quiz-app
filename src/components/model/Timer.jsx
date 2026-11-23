import { useEffect } from "react";

export default function Timer({ dispatch, remainingSeconds }) {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "timerTicking" });
    }, 1000);

    // cleanup function
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div>
      {minutes < 10 && "0"}
      {minutes}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
