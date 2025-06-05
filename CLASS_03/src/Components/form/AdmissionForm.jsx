import React, { Fragment, useState } from 'react'

const AdmissionForm = () => {
    const [data,setData] = useState({})

    const changeHandler = (event) => {
    const {name, value} = event.target
    // console.log(event.target)
    // console.log("Name :", name, "value :", value)
    setData({...data, [name]: value})
  }

  // console.log(data);

  const submitHandler = (event) => {
    event.preventDefault()
    console.log(data)
  }
  return (
    <Fragment>
      <h1>Form Handling</h1>
      <section className='containe'>
        <form onSubmit={submitHandler}>
        <div className='form-container'>
          
          <div>
              <label htmlFor="name">Your name</label>
              <input type="text" 
              placeholder='Enter your name' 
              name='name' 
              id='name' required 
              onChange={changeHandler}/>
          </div>
          <div>
              <label htmlFor="email">Your email</label>
              <input type="email" 
              placeholder='Enter your email' 
              name='email' 
              id='email' required
              onChange={changeHandler}/>
          </div>
          <div>
              <label htmlFor="email">Your password</label>
              <input type="password" 
              placeholder='Enter your password' 
              name='password' 
              id='password' required
              onChange={changeHandler}/>
          </div>
        </div>
          <div>
              <input type="submit" value={"Submit"}/>
          </div>
      </form>
      </section>
    </Fragment>
  )
}

export default AdmissionForm
