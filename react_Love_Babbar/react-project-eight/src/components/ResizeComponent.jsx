import React, { useEffect, useState } from 'react'

const ResizeComponent = () => {
    const[windowWidth, setWindowWidth] = useState(window.innerWidth);

    //It will only run on first render
    useEffect(() => {
      //This piece of code will run only on first render, on subsequent renders it wont run
      const handleResize = () => setWindowWidth(window.innerWidth);
      console.log("Event Listner Added!");
      window.addEventListener('resize', handleResize);
    
      //Removing the event listner on component unmounting.
      return () => {
        console.log("Event Listner Removed!");
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
  return (
    <div>
      <h1>Window width: {windowWidth}px</h1>
    </div>
  );
}

export default ResizeComponent;

