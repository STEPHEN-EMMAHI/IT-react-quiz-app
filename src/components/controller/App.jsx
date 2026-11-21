import { useReducer } from "react";
import HomePage from "../model/HomePage";
import Question from "../model/Questions";

// state object to handle the initial state in the reducer function
const initialQuizState = {
  questions: [],
  // idle, ready, active, finished
  status: "ready",
  currentIndex: 0,
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
  const [{ questions, status, currentIndex }, dispatch] = useReducer(
    quizReducer,
    initialQuizState,
  );
  return (
    <div>
      {status === "ready" && (
        <HomePage
          // payload in dispatch function is undefined
          onClick={() => dispatch({ type: "start", payload: questions })}
        />
      )}
      {status === "active" && <Question currentIndex={currentIndex} />}
    </div>
  );
}

export default App;
