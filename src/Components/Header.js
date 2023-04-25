import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";

const userSessionStorage = sessionStorage.getItem("userData");
var hasUserData;
if (!userSessionStorage || userSessionStorage.length < 3) {
    hasUserData = 0;
} else {
    hasUserData = 1;
}

const myUrlSlug  = location.pathname.split('/').slice(1);
var isOnLoginPage = false;
if (myUrlSlug == "Login") {
  isOnLoginPage = true;
}

function Header() {
  return (
        <div className="container mx-auto pt-8">  
          <div className="pl-8 pr-12">
            <div className="flex mb-4">
              <div className="w-11/12">
                <span className="center text-white text-xl">
                  <h1>Välkommen till nyhetsarkivet</h1>
                </span>
              </div>
              <div className="w-1/12">
                {
                  hasUserData ? 
                    <span className="center text-white test-sm">
                      <Link to="/Logout">[ LOGGA UT ]</Link>
                    </span> 
                    : isOnLoginPage ? 
                    <span className="center text-white test-sm">
                      <Link to="/">[ AVBRYT ]</Link>
                    </span> 
                    : 
                    <span className="center text-white test-sm">
                      <Link to="/Login">[ LOGGA IN ]</Link>
                    </span> 
                }
              </div>
            </div>
          </div>
       </div>
  )
}

export default Header;
