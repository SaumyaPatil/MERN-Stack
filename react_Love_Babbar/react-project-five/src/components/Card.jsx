import React from 'react'

const Card = (props) => {
  return (
    <div>
      {/* Whatever changes you make here in the input field, those changes will be updated in the name state variable */}
      <input type='text' onChange={(e)=>props.setName(e.target.value)}/>
      <p>Name state variable inside {props.title} : {props.name}</p>
    </div>
  )
}

export default Card

