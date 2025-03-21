import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import router from './router';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DataProvider>
          <RouterProvider router={router} />
        </DataProvider>
    </React.StrictMode>
);





