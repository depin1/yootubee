import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes } from 'react-router-dom';
import App from './App.jsx';
import { Myprowider } from './ComponentsB/examplecontext/Examplecontext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Myprowider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Myprowider>
  </React.StrictMode>,
)
