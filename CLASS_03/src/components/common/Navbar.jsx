import React, { Fragment } from 'react'

const Navbar = () => {
  return (
    <Fragment>
      <section className='navbar-container'>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
        </ul>
        <ul>
            <li> <button className='button'>Sign Up</button></li>
            <li><button className='button'>Login</button></li>
        </ul>
      </section>
    </Fragment>
  )
}

export default Navbar