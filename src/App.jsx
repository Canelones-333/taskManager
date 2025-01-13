import { useState } from "react"
import Form from "./components/Form"
import List from "./components/List"

function App() {
  const [tasks, setTasks] = useState([{
    id: 'sadadasda',
    nombre: 'algo',
    descripcion: 'nuevo'
  }])

  const addTask = (task) => {
    setTasks([
      task,
      ...tasks
    ])
  }

  const deleteTask = (id) => {
   const updatedTasks = tasks.filter(task=>task.id!==id) 
   setTasks(updatedTasks)
  }
  
  return (
    <div className="flex p-10 justify-between gap-10">
      <Form addTask={addTask}/>
      <List tasks={tasks} deleteTask={deleteTask}/>
    </div>
  )
}

export default App
