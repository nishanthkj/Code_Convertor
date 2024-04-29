import React, { useState } from 'react';
import axios from 'axios'; // You may need to install axios using `npm install axios`

const YourFormComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/data', { input: inputValue });
      console.log(response.data); // Handle the response from the server
    } catch (error) {
      console.error('Error sending data to server:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your input"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default YourFormComponent;
