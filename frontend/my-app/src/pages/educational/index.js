import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../../../../frontend/my-app/src/pages/educational/style.css'; // Import your existing CSS
import Foot from '@/app/Footer/page'

function Index() {
  // State to store the fetched data
  const [data, setData] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isExploded, setIsExploded] = useState(false);

  // Effect to fetch data when the component mounts
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Make a GET request to your API endpoint
        const response = await fetch('http://localhost:4000/edu/getAll');
        
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

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle explosion button click
  const handleExplosionButtonClick = () => {
    setIsExploded(true);
    // Add any additional actions upon explosion button click
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={`container ${isExploded ? 'exploded' : ''}`}>
       <a id='s'  className="uppercase tracking-wide mr-1 md:mr-8 xl:mr-12" href="/">
            <svg className="w-52 md:w-72" viewBox="0 0 1037 48" fill="none" >
              <g fill="white" className="transition-all duration-300 dark:fill-white">
                <path d="m9.79,24.06C3.29,22.98-1.05,18.24-1.05,12.28-1.05,5.04,4.3-.18,13.58-.18h39.68v6.84H13.58c-5.55,0-7.31,2.03-7.31,5.49,0,2.91,2.1,5.01,5.96,5.69l34.67,5.89c6.57,1.08,10.83,5.89,10.83,11.72,0,7.25-5.35,12.46-14.63,12.46H-.1v-6.84h43.2c5.49,0,7.31-2.03,7.31-5.42,0-3.05-2.17-5.21-6.03-5.82l-34.6-5.76Z"></path>
                <path d="m65.46,47.9V-.18h37.79c12.46,0,19.3,5.35,19.3,13.88s-7.72,13.88-19.3,13.88h-29.93v20.32h-7.86Zm7.86-26.68h29.93c7.25,0,11.38-2.78,11.38-7.52s-3.39-7.52-11.38-7.52h-29.93v15.03Z"></path>
                <path d="m152.82-.72l32.17,48.08h-8.94l-8.4-12.6h-37.65l-8.4,12.6h-8.67L145.03-.72h7.79Zm-18.42,29.12h29.12l-14.56-21.87-14.56,21.87Z"></path>
                <path d="m217.64,48.44c-22.82,0-34.4-8.6-34.4-24.24v-.68c0-15.64,11.58-24.24,34.4-24.24h.47c18.22,0,30.88,5.89,30.88,16.12v.34h-8.8v-.34c0-6.23-10.23-9.82-22.08-9.82h-.47c-18.08,0-26.07,6.5-26.07,17.95v.68c0,11.58,7.99,17.95,26.07,17.95h.47c11.85,0,22.08-3.59,22.08-9.82v-.34h8.8v.34c0,10.23-12.66,16.12-30.88,16.12h-.47Z"></path>
                <path d="m257.94,47.9V-.18h52.89v6.43h-45.03v14.76l45.03-.07v6.37l-45.03.07v14.09h45.03v6.43h-52.89Z"></path>
                </g>
                </svg>
                </a>
      <h1 className="heading"></h1>
      <div className="search-bar-container">
        <input 
          type="text" 
          value={searchQuery} 
          onChange={handleSearchInputChange} 
          placeholder="    Search for Planet...                                                                                                                                                                                                                                      🔍"
          className="search-bar-input"
        />
        <i className="fas fa-search search-bar-icon"></i>
      </div>
      <div className="grid">
        {/* Map through the filtered data and render each item */}
        {data.filter(item => item.description.toLowerCase().includes(searchQuery.toLowerCase())).map((item, index) => (
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
        <h2 className='fefe'>Feedback</h2>
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

      {/* Slider with images */}
      <div className="gallery-title">
        <h2>Gallery</h2>
      </div>
      <div className="slider-container">
        <Slider className="slider" {...sliderSettings}>
          <div>
            <img src="https://i.pinimg.com/originals/99/f9/5e/99f95ee41c3def28268cc3877f103daf.gif" alt="Image 1" />
          </div>
          <div>
            <img src="https://i.pinimg.com/originals/ca/e6/05/cae60567081b9f3783831be087cdded8.gif" alt="Image 2" />
          </div>
          <div>
            <img src="https://i.pinimg.com/originals/23/08/9b/23089bdbf3a2aeb10dbc3b2664d4aef1.gif" alt="Image 3" />
          </div>
          <div>
            <img src="https://i.pinimg.com/originals/1a/a2/00/1aa2008c04d15f46d38b797cb1452ed4.gif" alt="Image 3" />
          </div>
          <div>
            <img src="https://i.pinimg.com/originals/a9/b7/52/a9b7522224676f51d9610141b5e405be.gif" alt="Image 3" />
          </div>
          <div>
            <img src="https://i.pinimg.com/originals/a3/79/e0/a379e005b01ae47b54871db6f99a76ca.gif" alt="Image 3" />
          </div>
          <div>
            <img src="https://i.pinimg.com/originals/ee/16/fc/ee16fc621588720bc3aa8105421eaa3f.gif" alt="Image 3" />
          </div>
          <div>
            <img src="https://i.pinimg.com/originals/29/65/26/29652645bfe64e65f453810ea6b48d67.gif" alt="Image 3" />
          </div>
        </Slider>
      </div>
        <div>
      {/* Button with Link */}
      <div className="cool-button-container">
      <a href="https://www.spacex.com/vehicles/starship/" class="cool-button">STARSHIP 🚀</a>
      <a href="https://www.spacex.com/vehicles/dragon/" class="cool-button">DROGON 👽</a>
      <a href="https://www.spacex.com/humanspaceflight/" class="cool-button">HUMAN 👤 SPACEFLIGHT </a>
      </div>
    </div>
      {/* Explosion Button */}
      <div className="explosion-button-container">
        <button className="explosion-button" onClick={handleExplosionButtonClick}>
          <span role="img" aria-label="fire">🕳️</span> BLACK HOLE! 🚫 <span role="img" aria-label="fire">🕳️</span>
        </button>
      </div>
      <Foot/>
    </div>
  );
}

export default Index;
