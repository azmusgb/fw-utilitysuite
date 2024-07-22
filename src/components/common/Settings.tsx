import React, { useState } from 'react';

/**
 * Settings component allowing users to adjust their preferences.
 * 
 * @returns {JSX.Element} The rendered Settings component.
 */
const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    theme: 'light',
    notifications: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = target.checked;

    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch('/api/save-settings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(settings),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert('Settings saved successfully');
      })
      .catch((error) => {
        console.error('Error saving settings:', error);
        alert('Failed to save settings');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Theme:
          <select name="theme" value={settings.theme} onChange={handleChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Notifications:
          <input
            type="checkbox"
            name="notifications"
            checked={settings.notifications}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Save Settings</button>
    </form>
  );
};

export default Settings;
