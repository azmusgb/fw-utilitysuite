import React from 'react';

function ConfigUpload() {
  return (
    <div className="config-upload">
      <form>
        <label htmlFor="configFile">Upload Configuration File:</label>
        <input
          accept=".cfg"
          id="configFile"
          name="configFile"
          type="file"
        />
        <button className="form-button" type="submit">Upload</button>
      </form>
      <div id="configUploadResults" />
      <div className="loading" id="configUploadLoading" style={{ display: 'none' }}>
        <div className="loading-spinner" />
        <p>Loading...</p>
      </div>
      <div className="feedback" id="configUploadFeedback" role="alert" />
    </div>
  );
}

export default ConfigUpload;