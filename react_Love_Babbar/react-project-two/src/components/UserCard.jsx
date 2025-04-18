import React from 'react'
// import lovepic from "./../assets/lovepic.png";
import "./UserCard.css";

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
      <p id='user-name'>{props.name}</p>
      <img id="user-img" src={props.image} alt="love" />
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
