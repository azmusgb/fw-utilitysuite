
import React from 'react';

const ConfigUpload = () => (
  <div className="container">
    <h2>Upload Configuration File</h2>
    <form id="uploadForm" aria-label="Upload Form">
      <label htmlFor="configFile">Upload Configuration File:</label>
      <input type="file" id="configFile" name="configFile" accept=".cfg" />
      <button type="submit" className="form-button">Upload</button>
    </form>
    <div id="configUploadResults"></div>
    <div id="configUploadLoading" className="loading" style={{ display: 'none' }}>
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
    <div id="configUploadFeedback" className="feedback" role="alert"></div>
  </div>
);

export default ConfigUpload;
