
import './App.css'
import Header from './components/common/Header'
import './styles/Navbar.css'
import './styles/Footer.css'
import Footer from './components/common/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { value } from './router/Routes'

function App() {

  return (
    <>
     <Header/>
     <RouterProvider router={value}/>
     <div className='content'></div>
     <Footer/>
    </>
  )
}

export default App