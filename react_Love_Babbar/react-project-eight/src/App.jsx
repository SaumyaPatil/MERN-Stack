import './App.css'
import { useEffect } from 'react'

function App() {
  //first -> side-effect function
  //second -> clean-up function
  //third -> 

  useEffect(() => {
    // first
  
    return () => {
      // second
    }
  }, [third])
  

  return (
    <div>
      Hello Jii!!
    </div>
  )
}

export default App
