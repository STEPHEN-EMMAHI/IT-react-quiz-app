import { useReducer } from "react";
import HomePage from "../model/HomePage";
import Quiz from "../model/Quiz";

// state object to handle the initial state in the reducer function
const initialQuizState = {
  questions: [],
  // idle, ready, active, finished
  status: "ready",
};

// reducer function to handle to determine the next state
function quizReducer(currentState, action) {
  switch (action.type) {
    case "start":
      return {
        ...currentState,
        status: "active",
        payload: action.questions,
      };
  }
}

function App() {
  const [{ questions, status }, dispatch] = useReducer(
    quizReducer,
    initialQuizState,
  );
  return (
    <div className="tracking-wide">
      {status === "ready" && (
        <HomePage
          // payload in dispatch function is undefined
          onClick={() => dispatch({ type: "start", payload: questions })}
        />
      )}
      {status === "active" && <Quiz />}
    </div>
  );
}

export default App;
