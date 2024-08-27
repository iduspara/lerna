import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './base';
import "./main.css";
const pkg = require(`../package.json`);

const rootElement = document.getElementById(pkg.name);

if (!rootElement) {
  throw new Error('Could not find element with name ' + pkg.name);
}

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
