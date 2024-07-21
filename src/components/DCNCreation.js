
import React from 'react';

const DCNCreation = () => (
  <div className="container">
    <h2>DLTAFWC2 Preparation</h2>
    <p>Create and manage DCN files necessary for pulling the DLTAFWC2 report.</p>
    <div className="form-group">
      <label htmlFor="dcnTextarea">DCNs:</label>
      <textarea id="dcnTextarea" rows="4" className="form-input" placeholder="Enter DCNs separated by a newline" aria-label="DCNs"></textarea>
    </div>
    <div className="form-group">
      <label htmlFor="dcnFileNameInput">File Name:</label>
      <input type="text" id="dcnFileNameInput" className="form-input" placeholder="Enter file name with 'DLTAFWC2_' prefix" aria-label="File Name" />
    </div>
    <button type="button" onClick={createDCNFile} className="form-button" aria-label="Create DCN File">Create File</button>
    <div id="dcnCreationLoading" className="loading" style={{ display: 'none' }}>
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
    <div id="dcnCreationFeedback" className="feedback" role="alert"></div>
  </div>
);

const createDCNFile = () => {
  document.getElementById('dcnCreationLoading').style.display = 'block';
  document.getElementById('dcnCreationFeedback').style.display = 'none';
  setTimeout(() => {
    document.getElementById('dcnCreationLoading').style.display = 'none';
    document.getElementById('dcnCreationFeedback').style.display = 'block';
    document.getElementById('dcnCreationFeedback').textContent = 'DCN File created successfully!';
    document.getElementById('dcnCreationFeedback').classList.add('success');
  }, 2000);
};

export default DCNCreation;
