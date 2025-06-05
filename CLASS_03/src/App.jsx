
import './App.css'

function App() {

  const submitHandler = (event) =>{

  }

  return (
    <>
      <h1>Form Handling</h1>
      <form onSubmit={submitHandler}>
        <div className='form-container'>
          
          <div>
              <label htmlFor="name">Your name</label>
              <input type="text" 
              placeholder='Enter your name' 
              name='name' 
              id='name'/>
          </div>
          <div>
              <label htmlFor="email">Your email</label>
              <input type="email" 
              placeholder='Enter your email' 
              name='email' 
              id='email'/>
          </div>
          <div>
              <label htmlFor="email">Your password</label>
              <input type="password" 
              placeholder='Enter your password' 
              name='password' 
              id='password'/>
          </div>
        </div>
      </form>
    </>
  )
}

export default App
