import { Fragment } from "react"
import { Link } from "react-router"


const Navbar = () => {
  return (
    <Fragment>
      <section className='navbar-container'>
        <ul>
            <li><Link to="/" className='navbar'>Home</Link></li>
            <li><Link to="/about" className='navbar'>About</Link></li>
            <li><Link to="/contact" className='navbar'>Contact</Link></li>
            <li><Link to="/blog" className='navbar'>Blog</Link></li>
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