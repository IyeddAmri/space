import React, { useState, useEffect } from 'react';
import '../../../../../frontend/my-app/src/pages/educational/style.css';

function Index() {
  // State to store the fetched data
  const [data, setData] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);

  // Effect to fetch data when the component mounts
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Make a GET request to your API endpoint
        const response = await fetch('http://localhost:5000/edu/getAll');
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        // Parse the JSON response
        const jsonData = await response.json();

        // Set the fetched data to the state
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();

    // Load existing feedbacks from localStorage
    const storedFeedbacks = localStorage.getItem('feedbacks');
    if (storedFeedbacks) {
      setFeedbacks(JSON.parse(storedFeedbacks));
    }
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Save feedback to localStorage
    const newFeedbacks = [...feedbacks, feedback];
    localStorage.setItem('feedbacks', JSON.stringify(newFeedbacks));

    // Update feedbacks state
    setFeedbacks(newFeedbacks);

    // Reset feedback state
    setFeedback('');
  };

  // Function to remove a feedback
  const handleRemoveFeedback = (index) => {
    const updatedFeedbacks = [...feedbacks];
    updatedFeedbacks.splice(index, 1);
    localStorage.setItem('feedbacks', JSON.stringify(updatedFeedbacks));
    setFeedbacks(updatedFeedbacks);
  };

  // Function to edit a feedback
  const handleEditFeedback = (index) => {
    // Implement your edit logic here
    // For simplicity, we can set the current feedback to the textarea
    setFeedback(feedbacks[index]);
    // And then remove the edited feedback
    handleRemoveFeedback(index);
  };

  return (
    <div className="container">
      <h1 className="heading">Explore Space</h1>
      <div className="grid">
        {/* Map through the data and render each item */}
        {data.map((item, index) => (
          <div key={index} className="card">
            <img src={item.imageUrl} alt={item.description} className="image" />
            <div className="description">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Feedback Section */}
      <div className="feedback-section">
        <h2>Feedback</h2>
        <div className="feedback-list">
          {feedbacks.map((fb, index) => (
            <div key={index} className="feedback-item">
              <p>{fb}</p>
              <div className="feedback-buttons">
                <button onClick={() => handleEditFeedback(index)}>Edit</button>
                <button onClick={() => handleRemoveFeedback(index)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            value={feedback}
            onChange={(event) => setFeedback(event.target.value)}
            placeholder="Please provide your feedback..."
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Index;
 