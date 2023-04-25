import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";

class Header extends React.Component {
  
  handleClick() {
    this.forceUpdate();
  }
  
  render() {

  var userSessionStorage = sessionStorage.getItem("userData");
  var hasUserData = false;
  if (userSessionStorage && userSessionStorage.length > 3) {
      hasUserData = true;
  }

  var myUrlSlug  = location.pathname.split('/').slice(1);
  var isLoginPage = false;
  if (myUrlSlug == "Login") {
    isLoginPage = true;
  }

  return <div className="container mx-auto pt-8">  
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
                      <Link to="/Logout" onClick={this.handleClick.bind(this)}>[ LOGGA UT ]</Link>
                    </span> 
                  : isLoginPage ? 
                    <span className="center text-white test-sm">
                      <Link to="/" onClick={this.handleClick.bind(this)}>[ AVBRYT ]</Link>
                    </span> 
                  : 
                    <span className="center text-white test-sm">
                      <Link to="/Login" onClick={this.handleClick.bind(this)}>[ LOGGA IN ]</Link>
                    </span> 
                }
              </div>
            </div>
          </div>
        </div>

  }
}

export default Header;
