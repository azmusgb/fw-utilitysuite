import React from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + & {
    background-color: var(--button-bg);
  }

  input:checked + &::before {
    transform: translateX(26px);
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const DarkModeToggle: React.FC = () => {
  const handleToggle = () => {
    document.body.classList.toggle('light-mode');
  };

  return (
    <ToggleContainer>
      <ToggleSwitch>
        <Input type="checkbox" onChange={handleToggle} aria-label="Toggle dark mode" />
        <Slider />
      </ToggleSwitch>
    </ToggleContainer>
  );
};

export default DarkModeToggle;
