import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './landing_page/home/HomePage';
import React from 'react';
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode> , 
);
