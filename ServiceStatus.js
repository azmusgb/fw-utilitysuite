
import React from 'react';

const ServiceStatus = () => (
  <div className="container">
    <h2>Service Status</h2>
    <div className="search-container">
      <input type="text" id="searchInput" placeholder="Search..." aria-label="Search" />
    </div>
    <form id="queryForm" aria-label="Query Form">
      <label htmlFor="environment">Environment:</label>
      <select id="environment" name="environment" aria-label="Environment">
        <option value="PRD">PRD</option>
        <option value="MOT">MOT</option>
        {/* Add other options... */}
      </select>
      <button type="submit" className="form-button">Query</button>
    </form>
    <div id="serviceStatusResults"></div>
    <div id="serviceStatusLoading" className="loading" style={{ display: 'none' }}>
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
    <div id="serviceStatusFeedback" className="feedback" role="alert"></div>
  </div>
);

export default ServiceStatus;
