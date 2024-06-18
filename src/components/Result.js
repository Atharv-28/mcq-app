import React from 'react';

const Result = ({ score, total, goToHomePage }) => {
  const percentage = (score / total) * 100;
  const resultMessage = percentage >= 35 ? "Pass" : "Failed";

  return (
    <div className="result">
      <h2>Your Score</h2>
      <p>{score} out of {total}</p>
      <p>Percentage: {percentage.toFixed(2)}%</p>
      <p>Result: {resultMessage}</p>
      <button onClick={goToHomePage} className="home-button">Go to Home Page</button>
    </div>
  );
};

export default Result;
