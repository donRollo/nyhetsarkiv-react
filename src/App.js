import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Head from './Components/Head';
import Header from './Components/Header';
import Nyheter from './Components/Nyheter';
import Footer from './Components/Footer';
import Login from './Login';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Login" element={<Login />} />
        </Route>
      </Routes>
  );
}

function Layout() {
  return (
    <html>
    <Head />
      <body className="bg-black">
        <Header />
        <Nyheter />
        <Footer />
      </body>
    </html>
  );
}

export default App;