import React, { useEffect, useState } from 'react'

const MultiEffectComponent = () => {

    //You can write down multiple useEffects in the same component
    const[count, setCount] = useState(0);
    const[seconds, setSeconds] = useState(0);

    useEffect(() => {
      console.log("Count changed:", count);
    }, [count]);
    //side-effect logic will run only when count is changed

    useEffect(() => {
      const intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    
      return () => clearInterval(intervalId);
    }, []);
    //Only runs on first render
    
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <h2>Seconds: {seconds}</h2>
    </div>
  )
}

export default MultiEffectComponent

