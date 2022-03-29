import React, { useState } from 'react'

function Counter(props) {
    const [count, setCount] = useState(0);

    const handleCount =(num)=>{
        setCount(count + num );
    }
  return (
    <div>
        {props.render(count,handleCount)}
        {/* {props.children(count,handleCount)}  // passing as children props*/}
    </div>
  )
}

export default Counter
