import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Buscador} from './Buscador'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <nav>Soy un Nav</nav>
    <Buscador/>
    <App />
  </React.StrictMode>
);
reportWebVitals();
