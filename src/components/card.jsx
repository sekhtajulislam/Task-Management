import React from "react"
import "../App.css"
function Card(props){
    function deleteCard(){
        props.deleteTask(props.id)
    }
    return(
        <div className={`card ${props.completed ? "inactive": ""}`}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            
            <div className="card-meta">
                {props.dueDate && (
                    <span>
                        📅 {props.dueDate}
                    </span>
                )}
                {props.dueTime && (
                    <span>
                        ⏰ {props.dueTime}
                    </span>
                )}
            </div>

            <div className="card-actions">
                <button className="btn btn-edit">Edit</button>
                <button className="btn btn-delete" onClick={deleteCard}>Delete</button>
                <button className="btn btn-complete" onClick={props.onToggleComplete}>
                    {props.completed ? "Undo" : "Complete"}
                </button>
            </div>
        </div>
    )
}

export default Card