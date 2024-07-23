import React from 'react';
import Header from './components/Header.tsx';  // Ensure correct extension

function App() {
  return (
    <div className="App">
      <Header />
      <form>
        <label htmlFor="input1">Input 1:</label>
        <input id="input1" type="text" />
        <label htmlFor="input2">Input 2:</label>
        <input id="input2" type="text" />
        <label htmlFor="input3">Input 3:</label>
        <input id="input3" type="text" />
      </form>
    </div>
  );
}

export default App;