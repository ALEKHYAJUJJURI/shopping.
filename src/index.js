import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Ecommerce } from './products';
import { CartItems } from './cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Ecommerce/>
  </React.StrictMode>
);


