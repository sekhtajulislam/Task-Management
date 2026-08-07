import React from "react"
import Header from "./components/header"
import AddTask from "./components/addtask"
import TaskForm from "./pages/taskform";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<AddTask />} />
        <Route path="/add-task" element={<TaskForm />} />
      </Routes>
    </div>
  )
}

export default App