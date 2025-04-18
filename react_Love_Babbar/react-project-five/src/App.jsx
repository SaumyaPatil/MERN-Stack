import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  //create state
  //manage state
  //change state
  //sabhi child me state ko sync karwa dunga
  const [name, setName] = useState('');
    return (
    <>
      <Card title="Card1" name={name} setName={setName}/>
      <Card title="Card2" name={name} setName={setName}/>
      <p>{name}</p>
    </>
  )
}

export default App
