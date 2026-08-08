import React from "react"
import "../App.css"
function Card(){
    return(
        <div className="card">
            <h3>Task Title</h3>
            <p>Description</p>
            <p>Due Date</p>
            <p>Due Time</p>
            <div>
            <button className="btn">Edit</button>
            <button className="btn">Delete</button>
            <button className="btn">Mark as Complete</button>
            </div>
        </div>
    )
}

export default Card