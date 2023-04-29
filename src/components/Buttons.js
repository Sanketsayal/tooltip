

function Buttons({changePosition}) {
    return (
      <div className="buttons">
        <h4>Change the Position of Tooltip</h4>
        <div>
            <button 
                style={{backgroundColor:'khaki'}}
                onClick={()=>changePosition('left')}
            >Left</button>
            <button 
                style={{backgroundColor:'rosybrown'}}
                onClick={()=>changePosition('right')}
            >Right</button>
            <button 
                style={{backgroundColor:'tomato'}}
                onClick={()=>changePosition('top')}
            >Top</button>
            <button 
                style={{backgroundColor:'palegreen'}}
                onClick={()=>changePosition('bottom')}
            >Bottom</button>
        </div>
        
      </div>
    );
};
  
export default Buttons;
  