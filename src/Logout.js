import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
  const navigate = useNavigate()
  sessionStorage.removeItem('userData')
  navigate('/')
  return (
    <></>
  )
}

export default Logout;