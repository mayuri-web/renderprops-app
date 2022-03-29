import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import HoverComp from './Components/HoverComp';
import ClickComp from './Components/ClickComp';

function App() {
  return (
    <div className="App-header">
        <Counter 
          render={(count, handlecount) => <ClickComp click={count} handleClick={handlecount}/>}
        />
        <Counter 
          render={(count, handlecount) => <HoverComp hover={count} hoverEvent={handlecount}/>} 
        />

        {/* passing as a Children props
        <Counter>
          {(count, handlecount) => <ClickComp click={count} handleClick={handlecount}/>}
        </Counter>
        <Counter >
          {(count, handlecount) => <HoverComp hover={count} hoverEvent={handlecount}/>} 
        </Counter> */}
    </div>
  );
}

export default App;
