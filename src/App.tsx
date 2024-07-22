import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
