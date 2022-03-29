import React from 'react'

function HoverComp(props) {
    const {hover, hoverEvent} = props;
  return (
    <div>
        <button onMouseOver={()=>hoverEvent(2)}>Hover Me {hover}</button>
    </div>
  )
}

export default HoverComp
