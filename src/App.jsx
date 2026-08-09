import React from "react"
import Header from "./components/header"
import AddTask from "./components/addtask"
import TaskForm from "./pages/taskform";
import {Routes,Route} from "react-router-dom";
import Card from "./components/card"
import EditTask from "./pages/edit-task";

function App() {
  
  const [task,setTask]=React.useState([])
  function addtask(title,description,dueDate,dueTime){
    setTask([...task,{id: Date.now(), title,description,dueDate,dueTime,completed:false}])
  }
  function editTask(title,description,dueDate,dueTime,id){
    const updatedTasks = task.map(item => 
      item.id === id ? { ...item, title,description,dueDate,dueTime } : item
    )
    setTask(updatedTasks)
  }
  function toggleComplete(id){
    const updatedTasks = task.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    )
    setTask(updatedTasks)
  }
  function deleteTask(id){
    const updateTask=task.filter((item)=>item.id !=id)
    setTask(updateTask)
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<>
        <AddTask />
        <div className="card-container">
        {[...task]
          .sort((a, b) => a.completed - b.completed).map((item)=>(
            <Card key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            dueDate={item.dueDate}
            dueTime={item.dueTime}
            completed={item.completed}
            deleteTask={deleteTask}
            onToggleComplete={() => toggleComplete(item.id)}
            />
          ))}
        </div>
        </>} />
        <Route path="/add-task" element={<TaskForm addtask={addtask} />} />
        <Route path="/edit-task" element={<EditTask editTask={editTask} />} />
      </Routes>
    </div>
  )
}

export default App