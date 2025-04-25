import React from 'react'

const About = (props) => {
  
  return (
    <div>

        <div>{props.title}</div>

        {
          (props.clickHandler === 1) ? 
          props.children :
          <button onClick={()=>props.setClickHandler(1)}>Show</button> 
        }
        
    </div>
  )

}

export default About;

