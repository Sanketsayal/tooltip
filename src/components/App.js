import { useState } from "react";
import Buttons from "./Buttons";
import Tip from "./Tooltip";

function App() {

  let [position,setPosition]=useState('left');

  const handlePositionChange=(pos)=>{
    setPosition(pos);
  }


  return (
    <div className="App">
      <Tip position={position} />
      <Buttons changePosition={handlePositionChange}/>
    </div>
  );
}

export default App;
