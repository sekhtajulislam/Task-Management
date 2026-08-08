import React from "react"
function Card(){
    return(
        <div>
            <h3>Task Title</h3>
            <p>Description</p>
            <p>Due Date</p>
            <p>Due Time</p>
            <div>
            <button>Edit</button>
            <button>Delete</button>
            <button>Mark as Complete</button>
            </div>
        </div>
    )
}

export default Card