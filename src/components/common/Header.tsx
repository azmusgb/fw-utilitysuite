import React from 'react';

/**
 * Header component displaying the title of the application.
 * 
 * @returns {JSX.Element} The rendered Header component.
 */
const Header: React.FC = () => {
  return (
    <header>
      <h1>FW Utility Suite</h1>
    </header>
  );
};

export default React.memo(Header);
