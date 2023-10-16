import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import router from './routers/router.jsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)