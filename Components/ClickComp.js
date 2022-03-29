import React from 'react'

function ClickComp(props) {
    const {click, handleClick} = props; // props destructuring
  return (
    <div>
        <button onClick={()=>handleClick(5)}>Click Me {click}</button>
    </div>
  )
}

export default ClickComp
