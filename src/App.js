import React from 'react';
import Header from './components/Header.tsx';  // Ensure correct extension
// import ConfigUpload from './components/ConfigUpload'; // Uncomment if used
// import DCNCreation from './components/DCNCreation'; // Uncomment if used
// import FAQ from './components/FAQ'; // Uncomment if used

function App() {
  return (
    <div className="App">
      <Header />
      {/* Use ConfigUpload, DCNCreation, and FAQ components as needed */}
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