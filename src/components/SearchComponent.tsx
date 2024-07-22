import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: var(--input-bg);
  color: var(--text-color);
`;

const SearchComponent: React.FC = () => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    const cards = document.getElementsByClassName('card');
    for (let card of cards) {
      const cardText = card.textContent?.toLowerCase() || '';
      card.style.display = cardText.includes(searchTerm) ? '' : 'none';
    }
  };

  return (
    <SearchContainer>
      <SearchInput type="text" id="searchInput" placeholder="Search..." onInput={handleSearch} aria-label="Search" />
    </SearchContainer>
  );
};

export default SearchComponent;
