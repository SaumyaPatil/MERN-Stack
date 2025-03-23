import React, { useState } from 'react'

function Products({name, data}) {
    const [a, b] = useState(true);
  return (
    <div className='text-white w-full h-60 bg-zinc-800'>
        <div className='w-full h-96 bg-zinc-800'>
            <h1>{name}</h1>
            <h2>{data.age}</h2>
            <h2>{data.name}</h2>

            {/* this is conditional rendering of content and class both*/}
            {/* We are providing JSX so we use brackets here. */}
            <h4 className={`${a === false ? "text-red-600" : "text-blue-600"}`}>{a === false ? "hello" : "hey"}</h4>
            <button onClick={()=>b(!a)}>change</button>
        </div>
    </div>
  )
}

export default Products

//Form handling, backend kaise connect hota hai, props drilling, how you update state with arrays and objects and how you show data coming from backend with useEffect hook, how are animations performed, what's frame motion.
