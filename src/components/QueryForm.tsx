import React, { useState } from 'react';
import { Environment } from '../types';
import ServiceCard from './ServiceCard';
import Feedback from './Feedback';
import { environmentServers, serviceSuffixes, showFeedback } from '../utils';

const QueryForm: React.FC = () => {
  const [results, setResults] = useState<JSX.Element[]>([]);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ message: string, type: string }>({ message: '', type: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const queryServices = (event: React.FormEvent) => {
    event.preventDefault();
    const environment = (document.getElementById('environment') as HTMLSelectElement).value as Environment;

    const servers = environmentServers[environment] || [];
    const serviceSuffix = serviceSuffixes[environment] || "ddce_dev";
    const serviceName = `FormWorks Agent - ${serviceSuffix}`;

    setResults([]);
    setFeedback({ message: '', type: '' });
    setLoading(true);

    servers.forEach((server, index) => {
      setTimeout(() => {
        const serviceStatus = Math.random() > 0.5 ? "Running" : "Stopped";
        const processes = ["rri_service_1.exe", "rri_service_2.exe", "rri_service_3.exe"];

        setResults(prevResults => [...prevResults, <ServiceCard key={server} server={server} serviceName={serviceName} serviceStatus={serviceStatus} processes={processes} />]);

        if (index === servers.length - 1) {
          setLoading(false);
        }
      }, index * 200);
    });
  };

  const searchCards = (event: React.FormEvent<HTMLInputElement>) => {
    const term = event.currentTarget.value.toLowerCase();
    setSearchTerm(term);
  };

  const filteredResults = results.filter(result =>
    result.props.server.toLowerCase().includes(searchTerm) ||
    result.props.serviceName.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <form id="queryForm" aria-label="Query Form" onSubmit={queryServices}>
        <label htmlFor="environment">Environment:</label>
        <select id="environment" name="environment" aria-label="Environment">
          {Object.keys(environmentServers).map(env => (
            <option key={env} value={env}>{env}</option>
          ))}
        </select>
        <button type="submit">Query</button>
      </form>
      <input type="text" id="searchInput" placeholder="Search..." aria-label="Search" onInput={searchCards} />
      <div id="results">
        {filteredResults}
      </div>
      {loading && (
        <div id="loading" className="loading">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      )}
      <Feedback message={feedback.message} type={feedback.type} />
    </div>
  );
};

export default QueryForm;