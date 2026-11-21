import { useReducer } from "react";
import HomePage from "../model/HomePage";
import Question from "../model/Questions";
import { QUIZ_DATA } from "../../data/quizData";

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
        questions: action.payload,
      };
    case "nextQuestion":
      return { ...currentState, currentIndex: action.payload };
  }
}

function App() {
  const [{ questions, status, currentIndex }, dispatch] = useReducer(
    quizReducer,
    initialQuizState,
  );

  // derived state to calculate the length of the questions
  const numOfQuestions = questions.length;

  return (
    <div>
      {status === "ready" && (
        <HomePage
          onClick={() => dispatch({ type: "start", payload: QUIZ_DATA })}
        />
      )}
      {status === "active" && (
        <Question
          currentIndex={currentIndex}
          questions={questions}
          dispatch={dispatch}
          numOfQuestions={numOfQuestions}
        />
      )}
    </div>
  );
}

export default App;
