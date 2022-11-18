import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from './components/login/login';
import UrlShortner from './components/url-short/url-short';
import Register from './components/register/register';
import ForgotPassword from './components/forgot-password';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "login", element: <Login /> }, { path: "url", element: <UrlShortner /> },
    { path: "register", element: <Register /> }, { path: "forgot-password", element: <ForgotPassword /> }]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);