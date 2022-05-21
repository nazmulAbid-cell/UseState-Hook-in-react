import React, { useState } from 'react'

function UseState1() {
    const [count, setCount] =useState(0)
    const increment = ()=>{
     setCount(count+1)
     console.log(count);
    }
  return (
    <div>
       {count}
       <button onClick={increment}>increment 1</button>
    </div>
  )
}

export default UseState1