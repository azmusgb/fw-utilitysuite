import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--card-bg);
  color: var(--text-color);
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 8px 8px;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} FormWorks Utility Suite. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
