// src/App.js
import React, { useState, useEffect } from 'react';
import { trackEvent } from './analytics';
import ReactGA from 'react-ga';
import './App.css';

const TRACKING_ID = 'G-6CH0RQPCR9'; // Replace with your actual tracking ID

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    trackEvent('Form', 'Submit', `Name: ${name}, Message: ${message}`);
    alert('Form submitted');
  };

  const handleButtonClick = () => {
    trackEvent('Button', 'Click', 'Click Me button clicked');
    alert('Button clicked');
  };

  return (
    <div className="App">
      <div className="left-section">
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="right-section">
        <h1>Click the Button</h1>
        <button onClick={handleButtonClick}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
