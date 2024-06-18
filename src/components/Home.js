import React from 'react';

const Home = ({ startQuiz }) => {
  return (
    <div className="home">
      <h1>Welcome to the MCQ Game</h1>
      <button onClick={startQuiz} className="start-button">Start Test</button>
    </div>
  );
};

export default Home;
