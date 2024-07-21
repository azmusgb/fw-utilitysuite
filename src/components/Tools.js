
import React from 'react';

const Tools = () => (
  <div className="container">
    <h2>Tools</h2>
    <div className="tool-card">
      <h3 className="tool-title">Julian Date Converter</h3>
      <div className="form-group">
        <label htmlFor="julianInput" className="tool-label">Enter Julian Day:</label>
        <input type="text" id="julianInput" className="form-input" placeholder="e.g., 002" aria-label="Julian Day" />
        <button className="form-button" onClick={calculateJulian} aria-label="Convert to Date">Convert to Date</button>
        <p id="julianResult" className="result-display"></p>
      </div>
    </div>
    <div className="tool-card">
      <h3 className="tool-title">Hex to Decimal Converter</h3>
      <div className="form-group">
        <label htmlFor="hexInput" className="tool-label">Hexadecimal Value:</label>
        <input type="text" id="hexInput" className="form-input" placeholder="Enter Hex (e.g., 1A)" aria-label="Hexadecimal Value" />
        <button className="form-button" onClick={convertHexToDec} aria-label="Convert to Decimal">Convert to Decimal</button>
        <p id="hexResult" className="result-display"></p>
      </div>
    </div>
  </div>
);

const calculateJulian = () => {
  const input = document.getElementById('julianInput').value;
  const year = new Date().getFullYear();
  const date = new Date(year, 0, parseInt(input));
  const options = { month: 'long', day: 'numeric' };
  document.getElementById('julianResult').innerText = date.toLocaleDateString('en-US', options);
};

const convertHexToDec = () => {
  const hex = document.getElementById('hexInput').value;
  const decimal = parseInt(hex, 16);
  document.getElementById('hexResult').innerText = `Decimal: ${decimal}, Hex: ${hex.toUpperCase()}`;
};

export default Tools;
