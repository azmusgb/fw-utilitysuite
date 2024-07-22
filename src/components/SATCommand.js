import React from 'react';

const executeSatCommand = () => {
  document.getElementById('satCommandLoading').style.display = 'block';
  document.getElementById('satCommandFeedback').style.display = 'none';
  setTimeout(() => {
    document.getElementById('satCommandLoading').style.display = 'none';
    document.getElementById('satCommandFeedback').style.display = 'block';
    document.getElementById('satCommandFeedback').textContent = 'SAT Command executed successfully!';
    document.getElementById('satCommandFeedback').classList.add('success');
  }, 2000);
};

const SATCommand = () => (
  <div className="container">
    <h2>SAT Command Execution</h2>
    <label htmlFor="satEnvironmentSelect">Environment:</label>
    <select id="satEnvironmentSelect" className="form-select">
      <option value="MOT">MOT</option>
      <option value="PRD">PRD</option>
    </select>
    <label htmlFor="satCommandSelect">SAT Command:</label>
    <select id="satCommandSelect" className="form-select">
      <option value="">Select a command</option>
      <option value="resetSystem">Reset System</option>
      <option value="checkStatus">Check Status</option>
      <option value="updateConfiguration">Update Configuration</option>
    </select>
    <button type="button" onClick={executeSatCommand} className="form-button" aria-label="Execute SAT Command">Execute Command</button>
    <div id="satCommandLoading" className="loading" style={{ display: 'none' }}>
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
    <div id="satCommandFeedback" className="feedback" role="alert"></div>
  </div>
);

export default SATCommand;
