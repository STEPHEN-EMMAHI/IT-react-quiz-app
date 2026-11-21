export const QUIZ_DATA = [
  {
    id: crypto.randomUUID(),
    questionText: "Which of the following best describes REST?",
    options: [
      "A programming language used to build websites",
      "An architectural style for designing network-based APIs",
      "A database management system",
      "A protocol used exclusively for sending emails",
    ],
    correctAnswer: 1,
  },
  {
    id: crypto.randomUUID(),
    questionText: "What is the primary purpose of JSON?",
    options: [
      "To style web pages",
      "To execute JavaScript code on a server",
      "To store and exchange data in a structured format",
      "To encrypt network connections",
    ],
    correctAnswer: 2,
  },
  {
    id: crypto.randomUUID(),
    questionText:
      "Which HTTP method is commonly used to retrieve data from a server?",
    options: ["POST", "DELETE", "GET", "PATCH"],
    correctAnswer: 2,
  },
  {
    id: crypto.randomUUID(),
    questionText: "What does an HTTP status code of 404 indicate?",
    options: [
      "The server successfully processed the request",
      "The requested resource could not be found",
      "The server encountered an internal error",
      "The client is not authorized to access the resource",
    ],
    correctAnswer: 1,
  },
  {
    id: crypto.randomUUID(),
    questionText:
      "Which of the following best describes asynchronous JavaScript?",
    options: [
      "Code that executes only when the browser is refreshed",
      "Code that allows certain operations to run without blocking the main execution flow",
      "Code that must execute one statement at a time without interruption",
      "Code that automatically converts JavaScript into HTML",
    ],
    correctAnswer: 1,
  },
  {
    id: crypto.randomUUID(),
    questionText: "What is the primary purpose of a Promise in JavaScript?",
    options: [
      "To define reusable CSS styles",
      "To represent the eventual completion or failure of an asynchronous operation",
      "To create HTML elements dynamically",
      "To prevent functions from returning values",
    ],
    correctAnswer: 1,
  },
  {
    id: crypto.randomUUID(),
    questionText:
      "Which JavaScript method converts a JSON string into a JavaScript object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "Object.toJSON()",
      "JSON.convert()",
    ],
    correctAnswer: 1,
  },
  {
    id: crypto.randomUUID(),
    questionText: "What is the purpose of event delegation in JavaScript?",
    options: [
      "To attach an event listener to every child element individually",
      "To prevent all events from propagating",
      "To handle events on multiple child elements using a common ancestor",
      "To automatically remove event listeners after execution",
    ],
    correctAnswer: 2,
  },
  {
    id: crypto.randomUUID(),
    questionText: "Which of the following best describes the DOM?",
    options: [
      "A database used by JavaScript applications",
      "A programming interface that represents an HTML document as a tree of objects",
      "A network protocol used to transfer HTML files",
      "A JavaScript framework for building user interfaces",
    ],
    correctAnswer: 1,
  },
  {
    id: crypto.randomUUID(),
    questionText: "What is the primary purpose of React?",
    options: [
      "To manage server hardware",
      "To build user interfaces using reusable components",
      "To replace HTML and CSS completely",
      "To manage relational databases",
    ],
    correctAnswer: 1,
  },
  {
    id: crypto.randomUUID(),
    questionText: "What happens when a React component's state changes?",
    options: [
      "The entire browser automatically restarts",
      "React schedules a re-render of the component",
      "The component is permanently deleted",
      "All JavaScript files are downloaded again",
    ],
    correctAnswer: 1,
  },
  {
    id: crypto.randomUUID(),
    questionText:
      "Which React hook is used to manage state in a functional component?",
    options: ["useEffect", "useRef", "useState", "useContext"],
    correctAnswer: 2,
  },
  {
    id: crypto.randomUUID(),
    questionText: "What is the purpose of the useEffect hook in React?",
    options: [
      "To create CSS animations",
      "To synchronize a component with external systems through side effects",
      "To replace all event handlers",
      "To define component props",
    ],
    correctAnswer: 1,
  },
  {
    id: crypto.randomUUID(),
    questionText: "Why are keys important when rendering lists in React?",
    options: [
      "They determine the color of each list item",
      "They help React identify which items have changed, been added, or removed",
      "They prevent components from receiving props",
      "They automatically sort the list alphabetically",
    ],
    correctAnswer: 1,
  },
  {
    id: crypto.randomUUID(),
    questionText:
      "Which of the following best describes a controlled component in React?",
    options: [
      "A component whose form input value is managed by React state",
      "A component that cannot receive props",
      "A component that manages its own database",
      "A component that does not respond to user interactions",
    ],
    correctAnswer: 0,
  },
  {
    id: crypto.randomUUID(),
    questionText: "What is the primary purpose of the useReducer hook?",
    options: [
      "To perform HTTP requests automatically",
      "To manage complex state logic using a reducer function and dispatch actions",
      "To create references to DOM elements",
      "To prevent components from re-rendering",
    ],
    correctAnswer: 1,
  },
  {
    id: crypto.randomUUID(),
    questionText: "What is the purpose of CORS in web development?",
    options: [
      "To compress images before displaying them",
      "To control whether resources can be requested across different origins",
      "To encrypt passwords stored in databases",
      "To automatically generate API endpoints",
    ],
    correctAnswer: 1,
  },
  {
    id: crypto.randomUUID(),
    questionText: "Which of the following best describes HTTPS?",
    options: [
      "A faster version of JavaScript",
      "A secure version of HTTP that uses TLS encryption",
      "A database communication protocol",
      "A web browser extension for blocking advertisements",
    ],
    correctAnswer: 1,
  },
  {
    id: crypto.randomUUID(),
    questionText:
      "What is the main purpose of environment variables in a web application?",
    options: [
      "To store configuration values separately from application source code",
      "To replace all JavaScript functions",
      "To automatically create database tables",
      "To improve the visual appearance of a website",
    ],
    correctAnswer: 0,
  },
  {
    id: crypto.randomUUID(),
    questionText: "What does the term API endpoint refer to?",
    options: [
      "The final line of code in a JavaScript application",
      "A specific URL where an API can receive requests",
      "The physical location of a web server",
      "A component used to display API documentation",
    ],
    correctAnswer: 1,
  },
  {
    id: crypto.randomUUID(),
    questionText: "Which of the following best describes an API?",
    options: [
      "A visual layout that users click to navigate a website",
      "A set of rules and protocols that allows different software applications to communicate and share data",
      "A physical cable that connects a computer to a local network",
      "A database system used solely to store raw text files",
    ],
    correctAnswer: 1,
  },
  {
    id: crypto.randomUUID(),
    questionText: "Which of the following best describes HTTP?",
    options: [
      "A programming language used to build interactive elements on a webpage",
      "A stateless protocol that defines how messages are formatted and transmitted between a web browser and a server",
      "A hardware firewall that blocks unauthorized network traffic",
      "A database query language used to retrieve records from a server",
    ],
    correctAnswer: 1,
  },
];
