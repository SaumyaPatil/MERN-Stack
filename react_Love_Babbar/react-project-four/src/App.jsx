import { useState } from 'react';
import './App.css'
import Card from './components/Card'
import Button from './components/Button';

function App() {
  
  const [count, setCount] = useState(0);

  const handleClick = () =>{
    setCount(count+1);
  }

  return (
    <div>

      <Button handleClick={handleClick} text="click me">
        <h1>{count}</h1>
      </Button>

      {/* <Card name="love babbar">
        <h1>Best WEB DEV course</h1>
        <p>Trying to be consistent in this</p>
        <p>Will complete the course soon!</p>
      </Card> */}
      {/* Another variant of card */}

      {/* <Card children="Main ek children hu"> */}
        {/* Hello Jii kaise ho saare! */}
      {/* </Card>  */}

    </div>
  )
}

export default App
