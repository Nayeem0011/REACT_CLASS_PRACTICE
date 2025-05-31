import './ProfileCard.css'

const ProfileCard = (props) => {
  return (
    <>
      {/* <div className='card'>
          <h3>Alices</h3>
          <p>Email:alices@gmail.com</p>
          <p>Bio: Forntend Developer</p>
      </div> */}

       {/* Props practice */}
       <div className='card'>
          <h3>{props.name}</h3>
          <p>Id: {props.id}</p>
          <p>Email: {props.email}</p>
          <p>Bio: {props.bio}</p>
          <p>Phone: {props.phone}</p>
      </div> 

    </>
  )
}

export default ProfileCard;
