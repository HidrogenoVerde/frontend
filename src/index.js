import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <h1>index.js</h1>
  </BrowserRouter>,
  document.getElementById('root')
);