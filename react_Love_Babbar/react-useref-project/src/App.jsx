import { useState, useEffect, useRef } from 'react';
import './App.css'

function App() {

  // const[count, setCount] = useState(0);
  // // let val = 1;
  // let val = useRef(0);

  // let btnRef = useRef();

  // function handleIncrement(){
  //   // val += 1;
  //   // console.log("Value of val: ", val);

  //   val.current = val.current + 1;
  //   console.log("Value of val: ", val.current);

  //   //Everytime the page re-renders, the App function executes again, 
  //   //So, val becomes 1 everytime and so here, 1+1=2 is printed everytime.
  //   //Inshort, across re-render, the val variable is not able to persist its value.
  //   setCount(count+1);
  // }

  // function changeColor(){
  //   btnRef.current.style.backgroundColor = "red";
  // }

  // //It runs on every render
  // useEffect(() => {
  //   console.log("Mai firse render ho gya hu!");
  // })
  

  // Stopwatch ka code
  const [time, setTime] = useState(0);

  let timerRef = useRef(null);

  function startTimer(){
    //This returns a value jiske corrosponding mai isko stop bhi kar sakti hu!
    timerRef.current = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
  }

  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer(){
    stopTimer();
    setTime(0);
  }

  return (
    <div>

      {/* useRef hook ka use krengey to start, stop and reset stopwatch */}
      <h1>Stopwatch: {time} seconds</h1>
      <button onClick={startTimer}>Start</button>

      <br /><br />

      <button onClick={stopTimer}>Stop</button>

      <br /><br />

      <button onClick={resetTimer}>Reset</button>




      {/* <button 
        ref={btnRef}
        onClick={handleIncrement}
      >
        Increment</button>
      <br/>
      <br/>
      <button onClick={changeColor}>Change Color of 1st Button</button>
      <br/>

      <div>Count: {count}</div> */}
    </div>
  )
}

export default App

