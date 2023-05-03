import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Logout() {
  sessionStorage.removeItem('userData')
  // navigate('/')
  window.location.href = "/";
  return (
    <></>
  )
}

export default Logout;