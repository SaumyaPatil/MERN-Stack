import React, { useEffect, useState } from 'react'

const TimerComponent = () => {

    const[seconds, setSeconds] = useState(0);

    //It will only run on first render
    useEffect(() => {
        //setInterval is a function that takes a function as an arguement and a duration.
        //After every duration your fire function is executed. 
      const intervalId = setInterval(() => {
        console.log("Timer started!");
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);

      //This clean-up function will work when the component unmounts.
      return () => {
        console.log("Time to stop!");
        clearInterval(intervalId);
      }
    }, []);
    
    return (
        <div>
        <h1>Seconds: {seconds}</h1>
        </div>
    )
}

export default TimerComponent

