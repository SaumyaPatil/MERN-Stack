import React from 'react'

const Input2 = (props) => {
  return (
    <div>
      {props.title} : 
      <input type="text" value={props.syncedInput} onChange={props.handleChange}/>
    </div>
  )
}

export default Input2
