import {useState} from 'react'
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask"; 


const App= ()=> {
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks,setTasks]=useState(
    [
    {
        id:1,
        text:'Doctors Appointment',
        day:'Feb 5th at 2:30',
        reminder:true,
    },
    {
        id:2,
        text:'Meeting at school',
        day:'Feb 6th at 1:30',
        reminder:true,
    },
    {
        id:3,
        text:'Food shopping',
        day:'Feb 7th at 3:30',
        reminder:false,
    },
]
)


const addTask=(task)=>{
  const id=Math.floor(Math.random() * 10000) +1
  const newTask={id,...task}
  setTasks([...tasks,newTask])
}

const deleteTask=(id) =>{
setTasks(tasks.filter((task)=>task.id !==id))
}


const toggleReminder=(id) => {
  setTasks(tasks.map((task) =>task.id ===id ? {... task,reminder:!task.reminder} : task))
}
  //
  return (
    
    <div className="container">
      <Header onAdd={() =>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
     
    </div>
  )
}



export default App
