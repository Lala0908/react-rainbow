import React, { useState } from 'react'
import ColorBlock from './colorBlock'
// import logo from './logo.svg';
// import './App.css';

function App() {
  let[colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'
])
  let colorMap = colors.map((color, i)=> {
    return (
      <colorBlock key={color}/>
    )

  }) 
  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
