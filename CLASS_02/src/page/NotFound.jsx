import React, { Fragment } from 'react'
import notfound from "../assets/404.webp"
import { useNavigate } from 'react-router'

const NotFound = () => {
    const navigate = useNavigate() 
    setTimeout(() => {
        navigate("/")
    }, 5000);
  return (
    <Fragment>
      <img style={{objectFit:"cover", width:"100%", height:"100%"}} src={notfound} alt="" />
    </Fragment>
  )
}

export default NotFound
