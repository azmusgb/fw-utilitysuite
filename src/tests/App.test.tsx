import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ConfigUpload from './components/ConfigUpload';
import DCNCreation from './components/DCNCreation';
import FAQ from './components/FAQ';
import QueryForm from './components/QueryForm';
import SATCommand from './components/SATCommand';
import SavedWRs from './components/SavedWRs';
import Home from './components/Home';
import Chart from './components/Chart';

const App: React.FC = () => {
  return (
    <Router>
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
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/config-upload" component={ConfigUpload} />
            <Route path="/dcn-creation" component={DCNCreation} />
            <Route path="/faq" component={FAQ} />
            <Route path="/query-form" component={QueryForm} />
            <Route path="/sat-command" component={SATCommand} />
            <Route path="/saved-wrs" component={SavedWRs} />
            <Route path="/chart" component={Chart} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;