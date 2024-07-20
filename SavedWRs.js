
import React from 'react';

const SavedWRs = () => (
  <div className="container">
    <h2>SavedWRs Archive Retrieval</h2>
    <label htmlFor="savedWridInput">Enter Saved WRID:</label>
    <input type="text" id="savedWridInput" className="form-input" placeholder="Enter WRID" aria-label="Saved WRID" />
    <button type="button" onClick={retrieveSavedWRs} className="form-button" aria-label="Retrieve Saved WRs">Retrieve Saved WRs</button>
    <div id="savedWRLoading" className="loading" style={{ display: 'none' }}>
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
    <div id="savedWRFeedback" className="feedback" role="alert"></div>
  </div>
);

const retrieveSavedWRs = () => {
  document.getElementById('savedWRLoading').style.display = 'block';
  document.getElementById('savedWRFeedback').style.display = 'none';
  setTimeout(() => {
    document.getElementById('savedWRLoading').style.display = 'none';
    document.getElementById('savedWRFeedback').style.display = 'block';
    document.getElementById('savedWRFeedback').textContent = 'Saved Work Records retrieved successfully!';
    document.getElementById('savedWRFeedback').classList.add('success');
  }, 2000);
};

export default SavedWRs;
