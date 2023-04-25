import * as React from "react";
import Header from './Components/Header';
import Footer from './Components/Footer';

function Login() {
  return (
    <div>
    	<Header random={Math.random()} />
    	<div>Login</div>
    	<Footer />
    </div>
  )
}

export default Login;