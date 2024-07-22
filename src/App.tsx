import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
    <BrowserRouter>
      <div className="App">
        <Header />
        <nav className="top-nav" id="mainNav">
          <a className="" href="#!">Service Status</a>
          <a className="" href="#!">Config Upload</a>
          <a className="" href="#!">SAT Command</a>
          <a className="" href="#!">History Retrieval</a>
          <a className="" href="#!">DLTAFWC2 Preparation</a>
          <a className="" href="#!">SavedWRs Archive Retrieval</a>
          <a className="" href="#!">Tools</a>
          <a className="" href="#!">FAQs</a>
          <a className="" href="#!">Settings</a>
          <a className="" href="#!">Service Chart</a>
        </nav>
        <div className="container">
          <h1>FormWorks Agent Service Script</h1>
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
    </BrowserRouter>
  );
};

export default App;