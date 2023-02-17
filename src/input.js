import React, { useState } from "react";
import './index.css'


function AddTask (props){

    const [item, setItem] = useState('')

    const onChange = (e) =>{
        setItem(e.target.value)
    }

    const onSubmit =(e)=>{
        e.preventDefault()
        props.item(item)
    }

    return(
        <div >
            <form className="inp" onSubmit={onSubmit}>
            <input className="mainInp" type={'text'} name={'item'} value={item} onChange={onChange}/>
            <button className="btn" type="submit">Add</button>
        </form>
        </div>
        
    )
}

export default AddTask