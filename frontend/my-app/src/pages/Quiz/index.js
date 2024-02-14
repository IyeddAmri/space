import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import "./style.css"

function HomePage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    // Fetch quiz questions data from the API
    fetch('http://localhost:5000/api/questions')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error('Error fetching quiz questions:', error));
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowContinueButton(true);

    // Check if the selected option is correct
    const currentQuestion = questions[currentQuestionIndex];
    if (option !== currentQuestion.correct_option) {
      alert(`Incorrect! The correct option is ${currentQuestion.correct_option}`);
    }
  };

  const handleContinue = () => {
    // Check if the selected option is correct
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correct_option) {
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption(null);
    setShowContinueButton(false);
  };

  return (
    <div className="container">
      <header>
        <h1>Welcome to Our Quiz Platform</h1>
        <p>Test your knowledge with our quiz questions.</p>
      </header>
      <main>
        <section className="quiz-questions">
          <h2>Quiz Questions</h2>
          <div className="question-list">
            {/* Render quiz questions */}
            {currentQuestionIndex < questions.length && (
              <div className="question-card">
                <h3>{questions[currentQuestionIndex].question}</h3>
                <ul>
                  {/* Render options */}
                  {['option1', 'option2', 'option3', 'option4'].map(optionKey => (
                    <li key={optionKey}>
                      <button
                        onClick={() => handleOptionClick(questions[currentQuestionIndex].correct_option)}
                        className={selectedOption === questions[currentQuestionIndex].correct_option ? 'correct-option' : ''}
                        disabled={selectedOption !== null} // Disable buttons after selection
                      >
                        {questions[currentQuestionIndex][optionKey]}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {showContinueButton && (
              <div className="continue-button">
                <button onClick={handleContinue}>Continue</button>
              </div>
            )}
            {currentQuestionIndex === questions.length && (
              <div>
                <h2>Quiz Completed!</h2>
                <p>Your Score: {score}/{questions.length}</p>
                <Link href="/">
                  Restart Quiz
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

    </div>
  );
}

export default HomePage;
