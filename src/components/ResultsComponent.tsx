import React from 'react';
import styled from 'styled-components';

const Results = styled.div`
  margin-top: 20px;
  font-size: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const Loading = styled.div`
  text-align: center;
  margin-top: 20px;

  .loading-spinner {
    border: 4px solid var(--text-color);
    border-radius: 50%;
    border-top: 4px solid var(--button-bg);
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
    margin: 0 auto;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Feedback = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const ResultsComponent: React.FC = () => {
  return (
    <>
      <Results id="results"></Results>
      <Loading id="loading" style={{ display: 'none' }}>
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </Loading>
      <Feedback id="feedback" role="alert"></Feedback>
    </>
  );
};

export default ResultsComponent;
