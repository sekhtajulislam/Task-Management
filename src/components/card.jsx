import React from "react"
import "../App.css"
function Card(props){
    return(
        <div className="card">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.dueDate}</p>
            <p>{props.dueTime}</p>
            <div>
            <button className="btn">Edit</button>
            <button className="btn">Delete</button>
            <button className="btn">Mark as Complete</button>
            </div>
        </div>
    )
}

export default Card