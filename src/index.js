import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div style={{position:'absolute',bottom:"5px",right:'20px',color:'white',zIndex:999,fontSize:'14px'}}>All GBIF data occurrences at 1km resolution as of April 2022. <a style={{color:'white'}} href="https://doi.org/10.15468/dl.r5by8t" target="_blank"> https://doi.org/10.15468/dl.r5by8t</a></div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
