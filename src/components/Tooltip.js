import {Tooltip} from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';


function Tip({position}) {
    console.log(position);
    return (
        <>
            <div className="main" data-tooltip-id="tip" data-tooltip-content="Thanks for Hovering!! I am Tooltip">
                <h3>Hover Over Me!!!</h3>
            </div>
            <Tooltip id="tip" place={position} variant="dark" />
        </>
    );
  }
  
export default Tip;
  