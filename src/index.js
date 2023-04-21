import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

import App from './App';
import Login from './Login';
import Head from './Components/Head';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '/login',
		element: <Login />
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <html>
  <Head />
  <body className="bg-black">
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  </body>
  </html>
);