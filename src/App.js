import React, { useState } from "react";
import AddTask from "./input";
import Tasks from "./Tasks";
import './index.css'

function App (){

    const [todo, setTodo] = useState([])

    const getItem = (item) =>{
        setTodo((prevState) => {
            return [...prevState, item]
        })
    }

    return(
        
        <div className="container"> 
        <h1>List of To-Do:{todo.length}</h1>  
            <AddTask item={getItem}/>
            
            {todo && todo.map((todo) => <Tasks item={todo}/>)}
        </div>
    )
}
export default App