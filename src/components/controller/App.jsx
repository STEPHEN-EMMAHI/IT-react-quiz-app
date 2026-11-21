import { useReducer } from "react";
import HomePage from "../model/HomePage";
import Question from "../model/Questions";
import { QUIZ_DATA } from "../../data/quizData";
import FinishQuiz from "../model/FinishQuiz";

// state object to handle the initial state in the reducer function
const initialQuizState = {
  questions: [],
  // idle, ready, active, finished
  status: "ready",
  currentIndex: 0,
  selectedOption: null,
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
      return {
        ...currentState,
        currentIndex: action.payload,
        selectedOption: null,
      };
    case "selectOption":
      return { ...currentState, selectedOption: action.payload };
    case "finished":
      return { ...currentState, status: "finished" };
  }
}

function App() {
  const [{ questions, status, currentIndex, selectedOption }, dispatch] =
    useReducer(quizReducer, initialQuizState);

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
          questionId={questions.id}
          selectedOption={selectedOption}
        />
      )}
      {status === "finished" && <FinishQuiz />}
    </div>
  );
}

export default App;
