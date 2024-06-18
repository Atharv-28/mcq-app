import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import questions from '../data/questions';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedOption;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score and show result
      const finalScore = answers.reduce((acc, answer, index) => {
        return answer === questions[index].answer ? acc + 1 : acc;
      }, 0);
      setScore(finalScore);
      setShowResult(true);
    }
  };

  const goToQuestion = (index) => {
    setCurrentQuestion(index);
  };

  const startQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnswers(Array(questions.length).fill(null));
    setShowResult(false);
  };

  return (
    <div className="quiz">
      {showResult ? (
        <Result score={score} total={questions.length} startQuiz={startQuiz} />
      ) : (
        <Question
          questionData={questions[currentQuestion]}
          handleAnswer={handleAnswer}
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          handleNext={handleNext}
          goToQuestion={goToQuestion}
          selectedOption={answers[currentQuestion]}
        />
      )}
    </div>
  );
};

export default Quiz;
