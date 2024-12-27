import React, { useState } from "react";
import "./QuizApp.css"; 

const questions = [
  { id: 1, question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
  { id: 2, question: "Which is the largest planet in our solar system?", options: ["Earth", "Jupiter", "Mars", "Saturn"], answer: "Jupiter" },
  { id: 3, question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Nikola Tesla", "Albert Einstein", "Isaac Newton"], answer: "Alexander Graham Bell" },
  { id: 4, question: "What is the square root of 64?", options: ["6", "8", "10", "12"], answer: "8" },
  { id: 5, question: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2", "HO2"], answer: "H2O" },
  { id: 6, question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "Korea", "India"], answer: "Japan" },
  { id: 7, question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
  { id: 8, question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
  { id: 9, question: "Who wrote 'Romeo and Juliet'?", options: ["Shakespeare", "Dickens", "Austen", "Hemingway"], answer: "Shakespeare" },
  { id: 10, question: "What is the boiling point of water in Celsius?", options: ["90°C", "100°C", "120°C", "150°C"], answer: "100°C" },
];

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleNext = () => {
    if (selectedAnswer === currentQuestion.answer) setScore(score + 1);
    setSelectedAnswer("");

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setQuizFinished(false);
  };

  return (
    <div className="quiz-app">
      {!quizFinished ? (
        <div className="quiz-container">
          <h2 className="quiz-title">Question {currentQuestionIndex + 1} of {questions.length}</h2>
          <p className="quiz-question">{currentQuestion.question}</p>
          <div className="quiz-options">
            {currentQuestion.options.map((option, index) => (
              <label key={index} className="quiz-option">
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={handleAnswerSelect}
                />
                {option}
              </label>
            ))}
          </div>
          <button
            className="btn btn-next"
            onClick={handleNext}
            disabled={!selectedAnswer}
          >
            Next
          </button>
        </div>
      ) : (
        <div className="quiz-container">
          <h2 className="quiz-title">Quiz Finished!</h2>
          <p className="quiz-score">Your Score: {score} / {questions.length}</p>
          <button className="btn btn-restart" onClick={handleRestart}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
