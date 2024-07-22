
import React from 'react';

const Settings = () => (
  <div className="container">
    <h2>Settings</h2>
    <div className="settings-container">
      <fieldset className="settings-option">
        <legend className="settings-legend">Appearance</legend>
        <div className="form-group">
          <label htmlFor="themeSwitch" className="settings-label">Theme:</label>
          <select id="themeSwitch" className="form-select" onChange={switchTheme} aria-label="Theme Selector">
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>
      </fieldset>
      <fieldset className="settings-option">
        <legend className="settings-legend">Accessibility</legend>
        <div className="form-group">
          <label htmlFor="fontSizeControl" className="settings-label">Font Size:</label>
          <select id="fontSizeControl" className="form-select" onChange={adjustFontSize} aria-label="Font Size Selector">
                        <option value="default">Default</option>
            <option value="large">Large</option>
            <option value="larger">Larger</option>
          </select>
        </div>
      </fieldset>
      <fieldset className="settings-option">
        <legend className="settings-legend">Navigation</legend>
        <div className="form-group">
          <label className="settings-label">Position:</label>
          <div className="button-group">
            <button className="form-button" onClick={() => setNavPosition('top')} aria-label="Top Navigation">Top</button>
            <button className="form-button" onClick={() => setNavPosition('left')} aria-label="Left Navigation">Left</button>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
);

const switchTheme = (event) => {
  const theme = event.target.value;
  const bg = theme === 'light' ? '#ffffff' : '#121212';
  const text = theme === 'light' ? '#000000' : '#ccc';
  const nav = theme === 'light' ? '#f0f0f0' : '#333';
  document.documentElement.style.setProperty('--background-color', bg);
  document.documentElement.style.setProperty('--text-color', text);
  document.documentElement.style.setProperty('--nav-color', nav);
};

const adjustFontSize = (event) => {
  const size = event.target.value;
  const fontSize = size === 'large' ? '18px' : size === 'larger' ? '20px' : '16px';
  document.body.style.fontSize = fontSize;
};

const setNavPosition = (position) => {
  const nav = document.getElementById('mainNav');
  const content = document.getElementById('tabContent');
  nav.className = position === 'left' ? 'left-nav' : 'top-nav';
  content.style.paddingLeft = position === 'left' ? '210px' : '0';
};

export default Settings;
