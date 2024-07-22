import React from 'react';
import Header from './components/Header';
import ConfigUpload from './components/ConfigUpload';
import DCNCreation from './components/DCNCreation';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="App">
      <Header />
      <nav className="top-nav" id="mainNav">
        <a href="#!">Service Status</a>
        <a href="#!">Config Upload</a>
        <a href="#!">SAT Command</a>
        <a href="#!">History Retrieval</a>
        <a href="#!">DLTAFWC2 Preparation</a>
        <a href="#!">SavedWRs Archive Retrieval</a>
        <a href="#!">Tools</a>
        <a href="#!">FAQs</a>
        <a href="#!">Settings</a>
        <a href="#!">Service Chart</a>
      </nav>
      <div className="container">
        <h2>Upload Configuration File</h2>
        <form aria-label="Upload Form" id="uploadForm">
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
      <div className="container">
        <h2>DLTAFWC2 Preparation</h2>
        <p>Create and manage DCN files necessary for pulling the DLTAFWC2 report.</p>
        <div className="form-group">
          <label htmlFor="dcnTextarea">DCNs:</label>
          <textarea
            aria-label="DCNs"
            className="form-input"
            id="dcnTextarea"
            placeholder="Enter DCNs separated by a newline"
            rows="4"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dcnFileNameInput">File Name:</label>
          <input
            aria-label="File Name"
            className="form-input"
            id="dcnFileNameInput"
            placeholder="Enter file name with 'DLTAFWC2_' prefix"
            type="text"
          />
        </div>
        <button
          aria-label="Create DCN File"
          className="form-button"
          type="button"
        >
          Create File
        </button>
        <div className="loading" id="dcnCreationLoading" style={{ display: 'none' }}>
          <div className="loading-spinner" />
          <p>Loading...</p>
        </div>
        <div className="feedback" id="dcnCreationFeedback" role="alert" />
      </div>
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-section">
          <h3>General Questions</h3>
          <p><strong>What is FormWorks Utility Suite?</strong><br />A1: FormWorks Utility Suite is a comprehensive software tool designed to help manage the application</p>
          <h3>Feature Use</h3>
          <p><strong>How do I execute a command in the SAT Command tab?</strong></p>
        </div>
      </div>
    </div>
  );
}

export default App;