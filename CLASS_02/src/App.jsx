
import './App.css'
import Header from './components/common/Header'
import './styles/Navbar.css'
import './styles/Footer.css'
import Footer from './components/common/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { routes } from './router/Routes'
import { Fragment } from 'react'

function App() {

  return (
    <Fragment>
     <RouterProvider router={routes}/>
    </Fragment>
  )
}

export default App