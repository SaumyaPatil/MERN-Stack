import React from 'react'

const Input1 = (props) => {
  return (
    <div>
      {props.title} : 
      <input type="text" value={props.syncedInput} onChange={props.handleChange}/>
    </div>
  )
}

export default Input1
