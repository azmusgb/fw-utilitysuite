import React from 'react';
import './App.css';
import ConfigUpload from './components/ConfigUpload';
import DCNCreation from './components/DCNCreation';
import FAQ from './components/FAQ';
import SATCommand from './components/SATCommand';
import SavedWRs from './components/SavedWRs';
import ServiceStatus from './components/ServiceStatus';
import Settings from './components/Settings';
import Tools from './components/Tools';
import WorkRecord from './components/WorkRecord';
import Navigation from './components/common/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <ConfigUpload />
      <DCNCreation />
      <FAQ />
      <SATCommand />
      <SavedWRs />
      <ServiceStatus />
      <Settings />
      <Tools />
      <WorkRecord />
    </div>
  );
}

export default App;
