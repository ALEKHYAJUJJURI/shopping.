import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Ecommerce } from './products';
import { CartItems } from './cart';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Ecommerce/>
    </BrowserRouter>
  </React.StrictMode>
);


