import React, { useState } from 'react';
import { controlService, copyToClipboard } from '../utils';

interface ServiceCardProps {
  server: string;
  serviceName: string;
  serviceStatus: string;
  processes: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ server, serviceName, serviceStatus, processes }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="card" role="region" aria-label="Service Card">
      <button className="collapsible" onClick={() => setIsCollapsed(!isCollapsed)}>
        <span className="section-header">
          <span className="section-title">
            <span className="section-icon"><i className="fas fa-server"></i></span>{server} - {serviceName}
          </span>
          <span className={`status-icon ${serviceStatus.toLowerCase()}`}>{serviceStatus}</span>
        </span>
      </button>
      <div className="content" style={{ maxHeight: isCollapsed ? '0px' : 'auto' }}>
        <p><strong>Host:</strong> {server}</p>
        <p><strong>Service:</strong> {serviceName}</p>
        <p><strong>Status:</strong> {serviceStatus}</p>
        <div className="controls">
          <button onClick={() => controlService(server, serviceName, 'start')}>Start</button>
          <button onClick={() => controlService(server, serviceName, 'stop')}>Stop</button>
        </div>
        <div className="process-list">
          <h4>Running .exe Processes in D:\rri</h4>
          <ul>
            {processes.map(process => <li key={process}>{process}</li>)}
          </ul>
        </div>
        <button className="copy-btn" onClick={() => copyToClipboard(server)}>Copy Server Name</button>
      </div>
    </div>
  );
};

export default ServiceCard;
