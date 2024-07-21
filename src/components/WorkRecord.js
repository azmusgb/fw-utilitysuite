
import React from 'react';

const WorkRecord = () => (
  <div className="container">
    <h2>History Retrieval</h2>
    <label htmlFor="workRecordIdInput">Work Record ID:</label>
    <input type="text" id="workRecordIdInput" className="form-input" placeholder="Enter Record ID" aria-label="Work Record ID" />
    <button type="button" onClick={retrieveHistory} className="form-button" aria-label="Retrieve Work Record">Retrieve History</button>
    <div id="workRecordLoading" className="loading" style={{ display: 'none' }}>
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
    <div id="workRecordFeedback" className="feedback" role="alert"></div>
  </div>
);

const retrieveHistory = () => {
  document.getElementById('workRecordLoading').style.display = 'block';
  document.getElementById('workRecordFeedback').style.display = 'none';
  setTimeout(() => {
    document.getElementById('workRecordLoading').style.display = 'none';
    document.getElementById('workRecordFeedback').style.display = 'block';
    document.getElementById('workRecordFeedback').textContent = 'Work Record retrieved successfully!';
    document.getElementById('workRecordFeedback').classList.add('success');
  }, 2000);
};

export default WorkRecord;
