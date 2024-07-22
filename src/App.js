
import React, { useState } from 'react';
import './App.css';
import ServiceStatus from './components/ServiceStatus';
import ConfigUpload from './components/ConfigUpload';
import SATCommand from './components/SATCommand';
import WorkRecord from './components/WorkRecord';
import DCNCreation from './components/DCNCreation';
import SavedWRs from './components/SavedWRs';
import Tools from './components/Tools';
import FAQ from './components/FAQ';
import Settings from './components/Settings';
import Chart from './components/Chart';
import Header from './components/common/Header';
import Navigation from './components/common/Navigation';

function App() {
  const [activeTab, setActiveTab] = useState('serviceStatus');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'serviceStatus':
        return <ServiceStatus />;
      case 'configUpload':
        return <ConfigUpload />;
      case 'satCommand':
        return <SATCommand />;
      case 'workRecord':
        return <WorkRecord />;
      case 'dcnCreation':
        return <DCNCreation />;
      case 'savedWRs':
        return <SavedWRs />;
      case 'tools':
        return <Tools />;
      case 'faq':
        return <FAQ />;
      case 'settings':
        return <Settings />;
      case 'chart':
        return <Chart />;
      default:
        return <ServiceStatus />;
    }
  };

  return (
    <div className="App">
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="parallax"></div>
      <div className="content">
        {renderTabContent()}
      </div>
      <footer>
        <p>&copy; 2024 FormWorks Utility Suite - All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
