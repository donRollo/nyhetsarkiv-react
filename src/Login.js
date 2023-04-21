import React from 'react'
import ReactDOM from 'react-dom/client';
import { Routes, Route, Outlet, Link } from "react-router-dom";

function Login() {
  return (
    <div className="container mx-auto pt-8">  
      <div className="pl-8 pr-12">
        <div className="flex mb-4">
          <div className="w-11/12">
            <span className="center text-white text-xl">
              <h1>Logga in och skapa nyheter</h1>
            </span>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Login;
