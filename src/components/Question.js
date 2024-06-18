import React from "react";

const Question = ({
  questionData,
  handleAnswer,
  currentQuestion,
  totalQuestions,
  handleNext,
  goToQuestion,
  selectedOption,
}) => {
  const { question, options } = questionData;

  return (
    <div className="question">
      <h2>{question}</h2>
      <div className='optionsClass'>
        {options.map((option, index) => (
          <button 
            className={`optionButton ${selectedOption === option ? 'selected' : ''}`} 
            key={index} 
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
      {currentQuestion < totalQuestions - 1 ? (
        <button onClick={handleNext} className="next-button">Next</button>
      ) : (
        <button onClick={handleNext} className="submit-button">Submit</button>
      )}
      <div className="navigation">
        {Array.from({ length: totalQuestions }).map((_, index) => (
          <button key={index} onClick={() => goToQuestion(index)} className={index === currentQuestion ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;