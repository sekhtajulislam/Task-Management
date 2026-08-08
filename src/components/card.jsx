import React from "react"
import "../App.css"
function Card(props){
    return(
        <div className={`card ${props.completed ? "inactive": ""}`}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.dueDate}</p>
            <p>{props.dueTime}</p>
            <div>
            <button className="btn">Edit</button>
            <button className="btn">Delete</button>
            <button className="btn" onClick={props.onToggleComplete}>
                Mark as Complete
            </button>
            </div>
        </div>
    )
}

export default Card