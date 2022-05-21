import React, { useState } from 'react'

function UseState3() {
    const [inputValue, setInputValue] =useState("")
  const  trackInputValue =(event)=>{
      const newValue = event.target.value
      setInputValue(newValue)
  }
  return (
    <div>
       <input 
       type='text'
       placeholder='enter something'
       onChange={trackInputValue}
       /> 
       {inputValue}
    </div>
  )
}

export default UseState3