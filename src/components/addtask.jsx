import React from "react"
import "../App.css"
import { useNavigate } from "react-router-dom"
function AddTask(){
   const navigate = useNavigate();
   return( <button onClick={() => navigate("/add-task")}>Add Task</button> )
}
export default AddTask