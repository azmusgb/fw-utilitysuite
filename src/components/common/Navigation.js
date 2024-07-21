
import React from 'react';

const Navigation = ({ activeTab, setActiveTab }) => (
  <nav className="top-nav" id="mainNav">
    <a href="#!" className={activeTab === 'serviceStatus' ? 'active' : ''} onClick={() => setActiveTab('serviceStatus')}>Service Status</a>
    <a href="#!" className={activeTab === 'configUpload' ? 'active' : ''} onClick={() => setActiveTab('configUpload')}>Config Upload</a>
    <a href="#!" className={activeTab === 'satCommand' ? 'active' : ''} onClick={() => setActiveTab('satCommand')}>SAT Command</a>
    <a href="#!" className={activeTab === 'workRecord' ? 'active' : ''} onClick={() => setActiveTab('workRecord')}>History Retrieval</a>
    <a href="#!" className={activeTab === 'dcnCreation' ? 'active' : ''} onClick={() => setActiveTab('dcnCreation')}>DLTAFWC2 Preparation</a>
    <a href="#!" className={activeTab === 'savedWRs' ? 'active' : ''} onClick={() => setActiveTab('savedWRs')}>SavedWRs Archive Retrieval</a>
    <a href="#!" className={activeTab === 'tools' ? 'active' : ''} onClick={() => setActiveTab('tools')}>Tools</a>
    <a href="#!" className={activeTab === 'faq' ? 'active' : ''} onClick={() => setActiveTab('faq')}>FAQs</a>
    <a href="#!" className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>Settings</a>
    <a href="#!" className={activeTab === 'chart' ? 'active' : ''} onClick={() => setActiveTab('chart')}>Service Chart</a>
  </nav>
);

export default Navigation;
