
//Ye statement likha hai taaki jab kalko return ke andr ka html code convert hoga react mein tab vo yahaase leiga method.
import React, { useState } from 'react' 
import Products from './Products';

function App() {
  //useState function returns two values which is destructured as a -> value and b -> function to update that value
  var [a, b] = useState(69);
  return (
    // <div className='w-full h-screen bg-zinc-700 p-4'>
    //   <div className='w-44 h-32 rounded-xl bg-red-600 p-3 text-white'>
    //     <h3>Hello Kaise Ho!!!</h3>
    //     <Products/>
    //   </div>
    // </div>
    <div className='w-full h-screen bg-zinc-900 text-white p-5'>
      {/* Ye jsx h1 hai toh haam doc.QuerySelector nahi kar sakte kyuki ye convert hota hai React.createElement me toh uspe ye code work nai krega */}
      {/* <h1>{a}</h1> */}
      <button onClick={()=>b(a+1)} className='px-3 py-1 bg-green-500 rounded-md text-xs'>Click</button> 

      <Products name="Saumya" data={{age: 22, name: "Saumya"}}/>
    </div>
  )
}

export default App;
//React ka naam react isliye hai kyuki vo react karta hai jab bhi state change hoti hai yei main model hai poore react ka yei uska heart hai aur kaam karne ka treeka hai.
