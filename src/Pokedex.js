import React from 'react';
import { ThemeProvider } from 'styled-components';
import Details from './pages/details';
import Home from './pages/home';
import theme from './theme';

function Pokedex() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Home />
        <Details />
      </div>
    </ThemeProvider>
  );
}

export default Pokedex;
