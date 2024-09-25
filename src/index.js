import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Build from './components/build';
import Header from './components/Header/Header';
import App from './App'; // Your main landing page

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      
      <Routes>
        <Route path="/build" element={<Build />} />
        <Route path="/" element={<App />} />
        {/* You can add more routes here as needed */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
