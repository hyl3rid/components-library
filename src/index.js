import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { 
  Root, 
  About, 
  ErrorPage, 
  Navbars, 
  Hero, 
  Split, 
  Buttons, 
  Forms, 
  Modals, 
  ContactUs, 
  Login 
} from './routes';

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "navigation-bars",
        element: <Navbars />,
      },
      {
        path: "hero-components",
        element: <Hero />,
      },
      {
        path: "split-components",
        element: <Split />,
      },
      {
        path: "buttons",
        element: <Buttons />,
      },
      {
        path: "forms",
        element: <Forms />
      },
      {
        path: "modals",
        element: <Modals />
      },
      {
        path: "contact-us",
        element: <ContactUs />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
