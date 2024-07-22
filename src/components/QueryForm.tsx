import React from 'react';
import { Environment } from '../types';

// Define the environmentServers object
const environmentServers: Record<Environment, string[]> = {
  PRD: ["SACAPPFWK101", "SACAPPFWK102", "SACAPPFWK103", "SACAPPFWK104", "SACAPPFWK105", "SACAPPFWK106", "SACAPPFWK107", "SACAPPFWK108", "SACAPPFWK109", "SACAPPFWK110", "SACAPPFWK111", "SACAPPFWK112", "SACAPPFWK113", "SACAPPFWK114", "SACAPPFWK115", "SACAPPFWK116", "SACAPPFWK117", "SACAPPFWK118", "SACAPPFWK119", "SACAPPFWK120", "SACAPPFWK121", "SACAPPFWK122", "SACAPPFWK123", "SACAPPFWK124"],
  MOT: ["SACAPPFWKP60", "SACAPPFWKP61", "SACAPPFWKP62", "SACAPPFWKP63", "SACAPPFWKP64", "SACAPPFWKP65"],
  MOTx: ["SACAPPFWKP05", "SACAPPFWKP06", "SACAPPFWKP07", "SACAPPFWKP08", "SACAPPFWKP09", "SACAPPFWKP10", "SACAPPFWKP11", "SACAPPFWKP12", "SACAPPFWKP13", "SACAPPFWKP14", "SACAPPFWKP15", "SACAPPFWKP16", "SACAPPFWKP17", "SACAPPFWKP18", "SACAPPFWKP19", "SACAPPFWKP20", "SACAPPFWKP21", "SACAPPFWKP22", "SACAPPFWKP65"],
  PIT: ["SACAPPFWKP70", "SACAPPFWKP71", "SACAPPFWKP72", "SACAPPFWKP73", "SACAPPFWKP74", "SACAPPFWKP75", "SACAPPFWKP76", "SACAPPFWKP77", "SACAPPFWKP78", "SACAPPFWKP79", "SACAPPFWKP80", "SACAPPFWKP81", "SACAPPFWKP82", "SACAPPFWKP83", "SACAPPFWKP84", "SACAPPFWKP85", "SACAPPFWKP86", "SACAPPFWKP87"],
  EIT: ["SACAPPFWKP04", "SACAPPFWKP60"],
  DEV: ["SACAPPFWKD01"]
};

// Define the serviceSuffixes object
const serviceSuffixes: Record<Environment, string> = {
  PRD: "ddce",
  PIT: "ddce_pit",
  MOTx: "ddce_motx",
  MOT: "ddce_mot",
  EIT: "ddce_eit",
  DEV: "ddce_dev"
};

const showFeedback = (message: string, type: string) => {
  const feedbackDiv = document.getElementById('feedback');
  if (feedbackDiv) {
    feedbackDiv.textContent = message;
    feedbackDiv.className = `feedback ${type}`;
  }
};

const createServiceCard = (server: string, serviceName: string, serviceStatus: string, processes: string[]) => {
  return `
    <div class="card" role="region" aria-label="Service Card">
        <button class="collapsible">
            <span class="section-header">
                <span class="section-title">
                    <span class="section-icon"><i class="fas fa-server"></i></span>${server} - ${serviceName}
                </span>
                <span class="status-icon ${serviceStatus.toLowerCase()}">${serviceStatus}</span>
            </span>
        </button>
        <div class="content">
            <p><strong>Host:</strong> ${server}</p>
            <p><strong>Service:</strong> ${serviceName}</p>
            <p><strong>Status:</strong> ${serviceStatus}</p>
            <div class="controls">
                <button onclick="controlService('${server}', '${serviceName}', 'start')">Start</button>
                <button onclick="controlService('${server}', '${serviceName}', 'stop')">Stop</button>
            </div>
            <div class="process-list">
                <h4>Running .exe Processes in D:\\rri</h4>
                <ul>
                    ${processes.map(process => `<li>${process}</li>`).join('')}
                </ul>
            </div>
            <button class="copy-btn" onclick="copyToClipboard('${server}')">Copy Server Name</button>
        </div>
    </div>`;
};

const initCollapsibles = () => {
  const coll = document.getElementsByClassName("collapsible");
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function (this: HTMLElement) {
      this.classList.toggle("active");
      const content = this.nextElementSibling as HTMLElement;
      if (content.style.maxHeight) {
        content.style.maxHeight = "";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
};

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    showFeedback('Copied to clipboard!', 'success');
  }, () => {
    showFeedback('Failed to copy', 'error');
  });
};

const queryServices = () => {
  const environment = (document.getElementById('environment') as HTMLSelectElement).value as Environment;

  const servers = environmentServers[environment] || [];
  const serviceSuffix = serviceSuffixes[environment] || "ddce_dev";
  const serviceName = `FormWorks Agent - ${serviceSuffix}`;

  let resultsDiv = document.getElementById('results');
  let loadingDiv = document.getElementById('loading');

  if (resultsDiv && loadingDiv) {
    resultsDiv.innerHTML = '';
    showFeedback('', '');
    loadingDiv.style.display = 'block';

    servers.forEach((server, index) => {
      setTimeout(() => {
        const serviceStatus = Math.random() > 0.5 ? "Running" : "Stopped";
        const processes = [
          "rri_service_1.exe",
          "rri_service_2.exe",
          "rri_service_3.exe"
        ];
        resultsDiv.innerHTML += createServiceCard(server, serviceName, serviceStatus, processes);

        if (index === servers.length - 1) {
          loadingDiv.style.display = 'none';
          initCollapsibles();
        }
      }, index * 200);
    });
  }
};

const searchCards = (event: React.ChangeEvent<HTMLInputElement>) => {
  const searchTerm = event.target.value.toLowerCase();
  const cards = Array.from(document.getElementsByClassName('card') as HTMLCollectionOf<HTMLElement>);

  for (let card of cards) {
    const cardText = card.textContent?.toLowerCase() || '';
    card.style.display = cardText.includes(searchTerm) ? '' : 'none';
  }
};

const QueryForm: React.FC = () => {
  return (
    <div>
      <form id="queryForm" aria-label="Query Form" onSubmit={(e) => { e.preventDefault(); queryServices(); }}>
        <label htmlFor="environment">Environment:</label>
        <select id="environment" name="environment" aria-label="Environment">
          <option value="PRD">PRD</option>
          <option value="MOT">MOT</option>
          <option value="MOTx">MOTx</option>
          <option value="PIT">PIT</option>
          <option value="EIT">EIT</option>
          <option value="DEV">DEV</option>
        </select>
        <button type="submit">Query</button>
      </form>
      <input type="text" id="searchInput" placeholder="Search..." aria-label="Search" onInput={searchCards} />
      <div id="results"></div>
      <div id="loading" className="loading" style={{ display: 'none' }}>
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
      <div id="feedback" className="feedback" role="alert"></div>
    </div>
  );
};

export default QueryForm;
