import './App.css'
import DataFetcher from './components/DataFetcher'
import LoggerComponent from './components/LoggerComponent'
import MultiEffectComponent from './components/MultiEffectComponent'
import ResizeComponent from './components/ResizeComponent'
import TimerComponent from './components/TimerComponent'
// import { useEffect, useState } from 'react'

function App() {
  // const[count, setCount] = useState(0);

  // const[total, setTotal] = useState(1);

  //first -> side-effect function
  //second -> clean-up function
  //third -> comma seperated dependancy list (entities mention krte hai jinke basis pe side-effect run hoga)

  //variations -> 1
  //runs on every render
  // useEffect(() => {
  //   alert("I will run on each render!");
  // })
  
  //variations -> 2
  //runs just on first render - It has empty dependancy list here!
  // useEffect(()=>{
  //   alert("I will run only on first render!");
  // }, [])

  //variation -> 3 : useEffect hits on first render also when count is assigned 0
  //Count update hooneke baad chalta hai par render hoone se pehle chalta hai!!
  // useEffect(() => {
  //   alert("I will run everytime when count is updated!");
  // }, [count])
  
  //variation -> 4
  //Multiple dependancies - Aap kitne bhi dependancies daalo list me vo jab bhi update hoote hai aur aapko re-render karna pad raha hai cause of that, 
  //aapka useEffect vaala code run hoone vala hai aapka side effect run hoone vala hai!
  // useEffect(() => {
  //   alert("I run everytime when count/total is updated")
  // }, [count, total])

  //variation -> 5
  //Iss baar lets add cleanup function
  // useEffect(() => {
  //   alert("Count is updated!");
  
  //   return () => {
  //     //This function is triggered when count is unmounted from UI
  //     //Haar re-render pe puraane vala count haat raha hai aur naya aa raha hai 
  //     //Puraane vala count haat ta hai tab cleanup function trigger ho jata hai!
  //     //Naya count jab aata hai tab alert chal jata hai
  //     alert("Count is unmounted from UI");
  //   }
  // }, [count])
  
  
  // function handleClick(){
  //   setCount(count+1);
  // }

  // function handleClickTotal(){
  //   setTotal(total+1);
  // }

  return (
    <div>

      {/* <LoggerComponent/> */}
      {/* <TimerComponent/> */}
      {/* <DataFetcher/> */}
      {/* <ResizeComponent/> */}
      <MultiEffectComponent/>


      {/* <button onClick={handleClick}>update Count!</button>
      <br/>
      Count is: {count}

      <br/>

      <button onClick={handleClickTotal}>Update Total!</button>
      <br/>
      Total is: {total} */}
    </div>
  )
}

export default App

//Read official docs useEffect hook - react.dev