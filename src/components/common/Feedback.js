import React, { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';

const Feedback = () => {
  const { feedback } = useContext(AppContext);

  return (
    <div id="feedback" className={`feedback ${feedback.type}`} role="alert">
      {feedback.message}
    </div>
  );
};

export default Feedback;