export const QUIZ_DATA = [
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
