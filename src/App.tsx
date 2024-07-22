import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/common/Header';
import Navigation from './components/common/Navigation';

const Home = lazy(() => import('./components/Home'));
const Tools = lazy(() => import('./components/Tools'));
const FAQ = lazy(() => import('./components/FAQ'));
const Settings = lazy(() => import('./components/Settings'));

/**
 * The main App component which includes routing and common layout components.
 * 
 * @returns {JSX.Element} The rendered App component.
 */
const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>FormWorks Agent Service Script</h1>
        </header>
        <Header />
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tools" component={Tools} />
            <Route path="/faq" component={FAQ} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
