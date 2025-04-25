import React from 'react'

const Etymology = (props) => {
  return (
    <div>
      <div>{props.title}</div>
      {
        (props.clickHandler === 2) ? 
        props.children :
        <button onClick={()=>props.setClickHandler(2)}>Show</button> 
      }
    </div>
  )
}

export default Etymology

