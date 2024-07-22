import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles';
import theme from './theme';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import MainContent from './components/common/MainContent';
import DarkModeToggle from './components/DarkModeToggle';
import SearchComponent from './components/SearchComponent';
import QueryForm from './components/QueryForm';
import UploadForm from './components/UploadForm';
import ResultsComponent from './components/ResultsComponent';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DarkModeToggle />
      <Header />
      <MainContent>
        <h1>FormWorks Agent Service Script</h1>
        <SearchComponent />
        <QueryForm />
        <UploadForm />
        <ResultsComponent />
      </MainContent>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
