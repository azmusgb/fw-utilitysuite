import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface MainContentProps {
  children: ReactNode;
}

const MainContainer = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default MainContent;
