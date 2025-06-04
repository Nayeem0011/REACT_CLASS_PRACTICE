import React, { Fragment } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { Outlet } from 'react-router'


const MainLayout = () => {
  return (
    <Fragment>

      <Header/>
      <Outlet/>
      <div style={{minHeight:"100vh"}}></div>
      <Footer/>

    </Fragment>
  )
}

export default MainLayout
