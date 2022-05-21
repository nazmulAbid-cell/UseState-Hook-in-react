import React, { useState } from 'react'

function UseState2() {
    const [count, setCount] =useState(0)
    const decrement = ()=>{
      setCount(count-1)
    }
    const increment = ()=>{
        for(let i = 0; i<5; i++){
            setCount(prevCount => prevCount+ 1)
        }
             
    }
  return (
    <div>
       {count}
       <button onClick={decrement}>decrement 1</button>
       <button onClick={increment}>increment 5</button>
    </div>
  )
}

export default UseState2

// if you want to increment 5 times in one click it will not work 
// it will increment 1 times in one click 
// if dont belive then run tfhis code 
//  to over come tfhis you have to use above approce 

// import React, { useState } from 'react'

// function UseState1() {
//     const [count, setCount] =useState(0)
//     const increment = ()=>{
//      setCount(count+5)
//      console.log(count);
//     }
//   return (
//     <div>
//        {count}
//        <button onClick={increment}>increment</button>
//     </div>
//   )
// }

// export default UseState1