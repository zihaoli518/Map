import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'; 
import App from './App.jsx'; 

console.log('inside index.js')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);