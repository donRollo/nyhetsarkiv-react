import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Head from './Components/Head';
import Header from './Components/Header';
import Nyheter from './Components/Nyheter';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
        <Header random={Math.random()} />
        <Nyheter />
        <Footer />
    </div>
  );
}

export default App;