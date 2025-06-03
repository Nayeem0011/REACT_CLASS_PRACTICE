// import Welcome from './components/Welcome'
// import Header from './components/Header'
import { useEffect, useState } from 'react'
import ProfileCard from './components/ProfileCard'

function App() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => setUser(data));
  },[]);

  console.log(user)

  return (
    <>
      {/* <Welcome title="Home Page" name="Nayeem"></Welcome>
      <Header name="Alice"></Header> */}



      {/* <ProfileCard name="Alices" email="alices@gmail.com" bio="Forntent Developer"/>
      <ProfileCard name="Bob" email="bob@gmail.com" bio="Disigner"/>
      <ProfileCard name="Alices" email="alices@gmail.com" bio="Forntent Developer"/>
      <ProfileCard name="Bob" email="bob@gmail.com" bio="Disigner"/>
      <ProfileCard name="Alices" email="alices@gmail.com" bio="Forntent Developer"/>
      <ProfileCard name="Bob" email="bob@gmail.com" bio="Disigner"/>
      <ProfileCard name="Alices" email="alices@gmail.com" bio="Forntent Developer"/>
      <ProfileCard name="Bob" email="bob@gmail.com" bio="Disigner"/>
       */}


       {
        user.map((user, index) => <ProfileCard phone={user.phone} id={user.id} name={user.username} email={user.email} bio="Forntent Developer"/>)
       }
    </>
  )
}

export default App
