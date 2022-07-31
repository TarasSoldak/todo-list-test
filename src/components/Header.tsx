import React, { FC } from 'react'
import { Link } from 'react-router-dom'




const Header: FC = () => {
 
  return (
    <header>
      <Link to='/'>Login</Link>
      <Link to='/main'>Main</Link>
 
    </header>
  )
}

export default Header
