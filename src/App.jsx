import React from "react"
import Header from "./components/header"
import AddTask from "./components/addtask"
import TaskForm from "./pages/taskform";
import {Routes,Route} from "react-router-dom";
import Card from "./components/card"

function App() {
  
  const [task,setTask]=React.useState([])
  function addtask(title,description,dueDate,dueTime){
    setTask([...task,{title,description,dueDate,dueTime}])
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<>
        <AddTask />
        {task.map((item,index)=>(
          <Card key={index}
          title={item.title}
          description={item.description}
          dueDate={item.dueDate}
          dueTime={item.dueTime}
          />
  ))}
        </>} />
        <Route path="/add-task" element={<TaskForm addtask={addtask} />} />
      </Routes>
    </div>
  )
}

export default App