import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import Pokedex from './Pokedex';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './theme/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
    <GlobalStyle />
    <Provider store={store}>
      <Pokedex />
    </Provider>
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
