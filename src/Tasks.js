import React from "react";
import './index.css'



const Tasks = (props) =>{
    return(
        <div className="items">
            <input className="check" type={'checkbox'} onChange={() => props.completed()}/>
            <p>{props.item}</p>
        </div>
    )
}
export default Tasks
