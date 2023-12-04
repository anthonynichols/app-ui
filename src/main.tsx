import React from 'react';
import ReactDOM from 'react-dom/client';

import {App} from './App.tsx';

import 'unfonts.css';
import './main.css';

ReactDOM.createRoot(document.querySelector('main')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
