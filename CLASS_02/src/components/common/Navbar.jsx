import { Fragment } from "react"
import { Link } from "react-router"


const Navbar = () => {
  return (
    <Fragment>
      <section className='navbar-container'>
        <ul className='navbar'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/blog">Blog</Link></li>
        </ul>
        <ul>
            <li><Link to="/sing-up"><button className='button'>Sign Up</button></Link></li>
            <li><Link to="/login"><button className='button'>Login</button></Link></li>
        </ul>
      </section>
    </Fragment>
  )
}

export default Navbar