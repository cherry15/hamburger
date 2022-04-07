import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header className="header">
      <div>Logo</div>
      <input type="button" className='open' />
      <ul className="menu">
        <li><a className='active'>One</a></li>
        <li><a>Two</a></li>
        <li><a>Three</a></li>
        <li><a>Four</a></li>
      </ul>
    </header>
  )
}

export default Header
