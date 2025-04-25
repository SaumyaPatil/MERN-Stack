import { useState } from 'react';
import './App.css';

// import Card from './components/Card';
// import About from './components2/About';
// import Etymology from './components2/Etymology';

import Input1 from './components3/Input1';
import Input2 from './components3/Input2';

function App() {
  //create state
  //manage state
  //change state
  //sabhi child me state ko sync karwa dunga
  // const [name, setName] = useState('');


  // const [clickHandler, setClickHandler] = useState(0);

  const[syncedInput, setSyncedInput] = useState('');

  function handleChange(e){
    setSyncedInput(e.target.value)
  }

  return (
    <>
      {/* <Card title="Card1" name={name} setName={setName}/>
      <Card title="Card2" name={name} setName={setName}/>
      <p>{name}</p> */}


      {/* Here state is in sync so if I make changes in one component, the other gets to know! */}
      {/* <About title="About" clickHandler={clickHandler} setClickHandler={setClickHandler}>
        With a population of about 2 million, Almaty is Kazakhstan's target city, From 1929 to 1997, it was the capital city.      
      </About>

      <br/>

      <Etymology title="Etymology" clickHandler={clickHandler} setClickHandler={setClickHandler}>
        The name comes from anva, the kazakh's word for "apple" and its often translated as "full of apples", in face the region 
        surrounding Almaty is thought to be the ancestral home of the apple, and the wild malus is considered a likely candidate 
        for the ancestor of the modern domestic apple.
      </Etymology> */}


      {/* Synced input! */}
        <Input1 title="First Input" syncedInput={syncedInput} setSyncedInput={setSyncedInput} handleChange={handleChange}/>
        <Input2 title="Second Input" syncedInput={syncedInput} setSyncedInput={setSyncedInput} handleChange={handleChange}/>
    </>
  )
}

export default App
