import React from 'react';

const BackToTop = () => (
  <button id="backToTop" title="Go to top" aria-label="Back to Top" onClick={() => window.scrollTo(0, 0)}>
    <i className="fas fa-arrow-up"></i>
  </button>
);

export default BackToTop;