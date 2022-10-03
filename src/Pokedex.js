import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import Loader from './components/utils/Loader';
import Details from './pages/details';
import theme from './theme';

const Home = lazy(() => import('./pages/home'));

function Pokedex() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <div className="container">
          <Home />
        </div>
      </Suspense>
    </ThemeProvider>
  );
}

export default Pokedex;
