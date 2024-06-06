import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import './styles/index.css';

const htmlRoot = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(htmlRoot);

reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
