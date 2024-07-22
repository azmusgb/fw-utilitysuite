import React from 'react';

interface FeedbackProps {
  message: string;
  type: 'success' | 'error' | 'info'; // You can add more types as needed
}

const Feedback: React.FC<FeedbackProps> = ({ message, type }) => (
  <div id="feedback" className={`feedback ${type}`} role="alert">
    {message}
  </div>
);

export default Feedback;
