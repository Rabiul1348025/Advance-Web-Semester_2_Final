import React from 'react'

import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

const Navigation = () => {
  return (
    <nav className='navbar'>
      <section className='container'>
        <section className='logo'>
          <img src={Logo} alt=''></img>
        </section>
        <section className='links'>
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/about">About</Link>
          <Link className='link' to="/faq">FAQ</Link>
          <Link className='link' to="/contact">Contact Us</Link>
          <label className=''>Putin</label>
          <label className=''>Signout</label>
          <label className='create'>
            <Link className='link' to="/create">Write</Link>
          </label>
        </section>
      </section>
    </nav>
  )
}

export default Navigation