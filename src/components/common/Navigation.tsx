import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Navigation component with links to different routes.
 * 
 * @returns {JSX.Element} The rendered Navigation component.
 */
const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tools">Tools</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default React.memo(Navigation);
