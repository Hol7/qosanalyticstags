// src/App.js
import React, { useState } from 'react';
import { trackEvent } from './analytics';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

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
