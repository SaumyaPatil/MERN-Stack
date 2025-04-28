import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0); 
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementCount(){
    dispatch(increment());
  }

  function handleDecrementCount(){
    // I want to dispatch this action
    dispatch(decrement());
  }

  function handleResetCount(){
    dispatch(reset());
  }

  function handleIncAmountCount(){
    //Here, amount is the payload
    dispatch(incrementByAmount(amount));
  }

  return (
    <div>
      <button onClick={handleIncrementCount}>+</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementCount}>-</button>
      <br/>
      <br/>
      <button onClick={handleResetCount}>Reset</button>

      <input 
        type="Number" 
        value={amount} 
        placeholder='Enter Amount'
        onChange={(e) => setAmount(e.target.value)}
      />
      <br/>
      <br/>
      <button onClick={handleIncAmountCount}>Inc by Amount</button>
    </div>
  )
}

export default App
