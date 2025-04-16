import React from 'react'
import lovepic from "./../assets/lovepic.png";
import "./UserCard.css";

const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id='user-name'>{props.name}</p>
      <img id="user-img" src={lovepic} alt="love" />
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
