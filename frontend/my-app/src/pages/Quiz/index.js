import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import "./style.css"

function HomePage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showCorrectAlert, setShowCorrectAlert] = useState(false);
  const [showIncorrectAlert, setShowIncorrectAlert] = useState(false);

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
    if (option === currentQuestion[`option${currentQuestion.correct_option}`]) {
      setShowCorrectAlert(true); // Show correct alert
      setShowIncorrectAlert(false); // Hide incorrect alert
    } else {
      setShowIncorrectAlert(true); // Show incorrect alert
      setShowCorrectAlert(false); // Hide correct alert
    }
  };
  
  const handleContinue = () => {
    // Check if the selected option is correct
    const currentQuestion = questions[currentQuestionIndex];
    const correctOptionValue = currentQuestion[`option${currentQuestion.correct_option}`];
    
    if (selectedOption === correctOptionValue) {
      setScore(score + 1);
    }
  
    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption(null);
    setShowContinueButton(false);
    setShowCorrectAlert(false);
    setShowIncorrectAlert(false);
  };

  return (
    <div className="container">
      <header>
        <h1>Welcome to Our Space Quiz</h1>
        <p>Test your space knowledge with our quiz questions!</p>
      </header>
      <main>
        <section className="quiz-questions">
          <div className="question-list">
            {/* Render quiz questions */}
            {currentQuestionIndex < questions.length && (
              <div className="question-card">
                <h2>{questions[currentQuestionIndex].question}</h2>
                <ul className="options-list">
                  {/* Render options */}
                  {['option1', 'option2', 'option3', 'option4'].map(optionKey => (
                    <li key={optionKey}>
                      <button
                        onClick={() => handleOptionClick(questions[currentQuestionIndex][optionKey])}
                        className={`option-button ${selectedOption === questions[currentQuestionIndex][optionKey] ? 'selected' : ''}`}
                        disabled={selectedOption !== null} // Disable buttons after selection
                      >
                        {questions[currentQuestionIndex][optionKey]}
                      </button>
                    </li>
                  ))}
                </ul>
                {showCorrectAlert && <p className="alert-message correct">Correct!</p>}
                {showIncorrectAlert && <p className="alert-message incorrect">Incorrect! The correct option is: {questions[currentQuestionIndex].correct_option}</p>}
              </div>
            )}
            {showContinueButton && (
              <div className="continue-button">
                <button  onClick={handleContinue}>Continue</button>
              </div>
            )}
            {currentQuestionIndex === questions.length && (
              <div className="quiz-results">
                <h2>Quiz Completed!</h2>
                <p>Your Score: {score}/{questions.length}</p>
                <Link href="/">
                  <button>Restart Quiz</button>
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
