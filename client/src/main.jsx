import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/product/Product';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Search from './pages/Search';

// Routes

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'product',
        element: <Search />,
      },
      {
        path: `product/:slug`,
        element: <Product />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>
);
