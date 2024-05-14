import React, { useState } from 'react';
import './App.css'; // Importing a CSS file for styling

// Functional component named CodeConverter
const CodeConverter = () => {
  // State variables using the useState hook
  const [codeInput, setCodeInput] = useState(''); // State for code input
  const [convertedCode, setConvertedCode] = useState(''); // State for converted code
  const [selectedLanguage1, setSelectedLanguage1] = useState('delphi'); // State for selected language 1
  const [selectedLanguage2, setSelectedLanguage2] = useState('csharp'); // State for selected language 2

  // Function to handle code conversion
  const convertCode = async () => {
    const defaultPrompt = "Your default prompt text here."; // Define your default prompt text here

    // Combine default prompt with code input and selected languages
    const fullCodeInput = `Convert the ${selectedLanguage1} to ${selectedLanguage2}\n${codeInput}\n`;

    // Send a POST request to the server to convert the code
    const response = await fetch('http://localhost:3000/convert-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code: fullCodeInput })
    });

    // Get the response text and set it as converted code
    const data = await response.text();
    setConvertedCode(data);
  }

  // JSX rendering of the component
  return (
    <div>
      <h1>Code Converter</h1>
      <div className="container">
        {/* Textarea for entering code */}
        <textarea
          id="codeInput"
          placeholder="Enter your code here"
          value={codeInput}
          onChange={(e) => setCodeInput(e.target.value)} // Update codeInput state on change
        ></textarea>

        {/* Div to display converted code */}
        <div id="convertedCode">{convertedCode}</div>
      </div>
      <div className="option">
        <div>
          {/* Select dropdown for selecting language 1 */}
          <select
            id="languageSelect1"
            value={selectedLanguage1}
            onChange={(e) => setSelectedLanguage1(e.target.value)} // Update selectedLanguage1 state on change
          >
            <option value="delphi">Delphi</option>
            <option value="cobol">COBOL</option>
            <option value="vb">Visual Basic</option>
          </select>

          {/* Select dropdown for selecting language 2 */}
          <select
            id="languageSelect2"
            value={selectedLanguage2}
            onChange={(e) => setSelectedLanguage2(e.target.value)} // Update selectedLanguage2 state on change
          >
            <option value="csharp">C#</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
          </select>
        </div>
      </div>
      <div className="button-container">
        {/* Button to trigger code conversion */}
        <button
          onClick={convertCode} // Call convertCode function on click
          style={{ width: '100px', height: '50px' }}
        >
          Convert Code
        </button>
        {/* Button placeholder */}
        <button id="copyButton" style={{ width: '100px', height: '50px' }}>
          Copy
        </button>
      </div>
    </div>
  );
};

export default CodeConverter; // Export the CodeConverter component
