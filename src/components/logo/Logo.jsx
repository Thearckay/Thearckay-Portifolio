import React from 'react'
import './Logo.css'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to={"/login"} className='logo'>THEARCKAY</Link>
  )
}

export default Logo