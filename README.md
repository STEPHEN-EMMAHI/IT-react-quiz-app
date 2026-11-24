<div align="center">
# Web Literacy Quiz
 
**A timed, quiz that tests your grasp of programming fundamentals.**
 
</div>
---
 
> [!TIP]
> **TL;DR:** Install, run the dev server, and take the quiz. The whole app is driven by one reducer, so it's a compact way to see how `useReducer` handles a real state machine.
 
## Overview
 
How well do you know the basic knowledge of: variables, loops, algorithms, Git? This project puts you against the clock to find out. You get 10 minutes, shuffled questions, and instant feedback on every answer.
 
For developers, the interesting part is under the hood. The entire quiz flow (start, answer, advance, time out, restart) lives in a single reducer. Think of it like a traffic light controller: one place decides which state comes next, and every screen simply reacts to it.
 
### Features
 
- 15 multiple-choice questions, shuffled on every run with a Fisher-Yates shuffle
- 10-minute countdown that ends the quiz automatically
- Instant correct/wrong markers on each answer
- Running score and question counter
- Restart without reloading the page
## Project Requirements
 
| Requirement | Notes |
| --- | --- |
| Node.js | A current LTS release (check your bundler's docs for the minimum) |
| npm | Ships with Node.js |
| Modern browser | Uses `crypto.randomUUID()` |
 
> [!NOTE]
> `crypto.randomUUID()` only works in secure contexts (HTTPS or `localhost`). Serving the built app over plain HTTP on a remote host will break the question IDs.
 
## Dependencies
 
| Package | Purpose |
| --- | --- |
| `react` / `react-dom` | UI and state management |
| `lucide-react` | Check and X icons for answer feedback |
| `tailwindcss` | Utility-first styling (loaded with `@import "tailwindcss"`) |
 
Fonts (Libre Baskerville and Montserrat) are loaded from Google Fonts in `index.css`, so you need an internet connection to see them.
 
## Getting Started
 
### 1. Install dependencies
 
```bash
npm install
```
 
### 2. Start the dev server
 
```bash
npm run dev
```
 
Open the local URL printed in your terminal and click **Start Quiz**.
 
> [!IMPORTANT]
> The scripts above assume the standard setup for a React and Tailwind project. Check the `scripts` block in `package.json` if a command doesn't exist.
 
## Project Structure
 
The folders follow a simple split: controller (state), model (components), data, and view (styles).
 
```text
src/
├── components/
│   ├── controller/
│   │   ├── App.jsx          # Reducer + screen switching
│   │   └── main.jsx         # React entry point
│   └── model/
│       ├── HomePage.jsx     # Welcome screen
│       ├── Questions.jsx    # Question screen layout
│       ├── Options.jsx      # Answer buttons + feedback icons
│       ├── Timer.jsx        # Countdown display
│       ├── FinishQuiz.jsx   # Score screen
│       └── Button.jsx       # Shared button
├── data/
│   ├── quizData.js          # The 15 questions
│   └── shuffle.js           # Fisher-Yates shuffle
└── view/
    └── index.css            # Fonts + Tailwind import
```
 
## How It Works
 
The app is a small state machine. The `status` field decides which screen is shown.
 
```text
ready ──start──▶ active ──finished / timer hits 0──▶ finished
  ▲                                                     │
  └─────────────────────restart─────────────────────────┘
```
 
### The state shape
 
Everything the quiz needs sits in one object.
 
```jsx
const initialQuizState = {
  questions: [],
  status: "ready", // ready, active, finished
  currentIndex: 0,
  selectedOption: null,
  points: 0,
  remainingSeconds: null,
};
```
 
### The reducer
 
Each action describes *what happened*, and the reducer decides *what the new state is*. Here is how an answer is scored:
 
```jsx
case "selectOption": {
  const currentQuestion = currentState.questions[currentState.currentIndex];
  const isCorrect = action.payload === currentQuestion.correctAnswer;
 
  return {
    ...currentState,
    selectedOption: action.payload,
    points: isCorrect
      ? currentState.points + currentQuestion.points
      : currentState.points,
  };
}
```
 
The payload is the index of the chosen option. If it matches `correctAnswer`, the question's points are added.
 
### Available actions
 
| Action | What it does |
| --- | --- |
| `start` | Loads the shuffled questions, sets the timer to 600 seconds, switches to `active` |
| `selectOption` | Records the answer and updates the score |
| `nextQuestion` | Moves to the given index and clears the selection |
| `timerTicking` | Subtracts one second; switches to `finished` when time is up |
| `finished` | Ends the quiz |
| `restart` | Resets to the initial state |
 
### Shuffling without side effects
 
Questions are shuffled on start. The helper copies the array first, so the original data never changes.
 
```js
export function shuffling(input) {
  const shuffled = [...input]; // copy, don't mutate
 
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
```
 
### The countdown
 
`Timer` starts an interval that dispatches `timerTicking` every second. The cleanup function clears it when the component unmounts, which prevents duplicate timers.
 
```jsx
useEffect(() => {
  const id = setInterval(() => {
    dispatch({ type: "timerTicking" });
  }, 1000);
 
  return () => clearInterval(id); // cleanup
}, [dispatch]);
```
 
### Derived state
 
The question count and the maximum score are computed on each render instead of being stored. There is nothing to keep in sync.
 
```jsx
const numOfQuestions = questions.length;
 
const totalPoints = questions.reduce(
  (total, question) => total + question.points,
  0,
);
```
 
## Customizing the Quiz
 
Add, edit, or remove entries in `src/data/quizData.js`. Each question follows this shape:
 
```js
{
  id: crypto.randomUUID(),
  questionText: "What is an algorithm?",
  options: [
    "A computer programming language",
    "A step-by-step procedure for solving a problem",
    "A type of computer virus",
    "A device used to store information",
  ],
  correctAnswer: 1, // zero-based index into options
  points: 10,
}
```
 
> [!TIP]
> To change the time limit, edit `remainingSeconds: 600` in the `start` case of the reducer.
 
## Ideas for Next Steps
 
- Show a per-question review on the results screen
- Add difficulty levels or topic categories
- Persist best scores in `localStorage`
- Add tests for the reducer (it's a pure function, so it's easy to test)
## Conclusion
 
This quiz is small on purpose. One reducer handles every state change, components stay simple, and derived values are computed instead of stored. If you're learning React, try adding a new action, such as a "skip question" button, and watch how it behaves.
 
Found a bug or have a question idea? Open an issue or send a pull request. Contributions are welcome.
