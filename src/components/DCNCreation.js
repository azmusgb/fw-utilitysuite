import React from 'react';

function DCNCreation() {
  return (
    <div className="dcn-creation">
      <form>
        <label htmlFor="dcnTextarea">DCNs:</label>
        <textarea
          aria-label="DCNs"
          className="form-input"
          id="dcnTextarea"
          placeholder="Enter DCNs separated by a newline"
          rows="4"
        />
        <label htmlFor="dcnFileNameInput">File Name:</label>
        <input
          aria-label="File Name"
          className="form-input"
          id="dcnFileNameInput"
          placeholder="Enter file name with 'DLTAFWC2_' prefix"
          type="text"
        />
        <button
          aria-label="Create DCN File"
          className="form-button"
          type="button"
        >
          Create File
        </button>
      </form>
      <div className="loading" id="dcnCreationLoading" style={{ display: 'none' }}>
        <div className="loading-spinner" />
        <p>Loading...</p>
      </div>
      <div className="feedback" id="dcnCreationFeedback" role="alert" />
    </div>
  );
}

export default DCNCreation;