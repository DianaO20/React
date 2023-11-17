import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');

  const ButtonClick = () => {
    console.log('Textul din input:', inputText);
  };

  return (
    <div className="App">
      <h1>React Project</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type something"
      />
      <br />
      <br />

      <button className="Input" onClick={ButtonClick}>Click on me</button>
    </div>
  );
}

export default App;
