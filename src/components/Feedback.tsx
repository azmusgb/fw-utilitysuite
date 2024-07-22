import React from 'react';

interface FeedbackProps {
  message: string;
  type: string;
}

const Feedback: React.FC<FeedbackProps> = ({ message, type }) => (
  <div id="feedback" className={`feedback ${type}`} role="alert">
    {message}
  </div>
);

export default Feedback;