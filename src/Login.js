import * as React from "react";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';


function Login() {

  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [button, setButton] = useState('')

  const usernameHandler = (event) => {
    setUsername(event.target.value)
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value)
  }

  const buttonHandler = (event) => {
    setButton(event.target.value)
  }

  if (username && password && button) {
     event.preventDefault()
     loginRequest()
  }


  async function loginRequest() {
      fetch('http://dev-nyheter-api.local/api-login.php', {
        method: 'POST',
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((data) => {
            sessionStorage.setItem("userData", data)
            navigate('/')
        })
    
  }

  return (
    <div>
    <Header />
    <div className="container mx-auto">
      <form className="login-form">
      <div className="border-b-2 border-t-2">
           <div className="mb-4 pt-2 pb-2">
               <h2 className="pt-2 pl-8 text-white">
               &nbsp;Logga in om du vill kommentera en nyhet
               </h2>
           </div>
      </div>
      <div className="w-4/4 bg-gray-600">
         <div className="pl-8 pr-6 pb-6 pt-6">
              <label className="text-white pr-2">Username</label>
              <input type="text" value={username} onChange={usernameHandler} />
         </div>
         <div className="pl-8 pr-6 pb-6 pt-6">
            <label className="text-white pr-2">Password</label>
            <input type="password" value={password} onChange={passwordHandler} />
         </div>
         <div className="pl-8 pr-6 pb-6 pt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" value="go" onClick={buttonHandler}>Login</button>
         </div>
      </div>
      </form>
    </div>
    <Footer />
    </div>
  )
}

export default Login;
