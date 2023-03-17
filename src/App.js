import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import React, { useState } from 'react';

function App() {
  const taskData = [
    {
        id: 1,
        text: "Do Something",
        day: 'Mar 14 at 2:34pm',
        reminder: true,
    },
    {
        id: 2,
        text: "Do Something Else",
        day: 'Mar 15 at 6:54pm',
        reminder: true,
    },
    {
        id: 3,
        text: "Do Something Different",
        day: 'Mar 16 at 5:43pm',
        reminder: false,
    },
]
  const [tasks, setTasks] = useState(taskData)

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id===id ? {...task, reminder: !task.reminder}:task))
  }

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length>0? <Tasks onDelete={deleteTask} onToggle={toggleReminder} tasks={tasks}/>: "No Tasks to Show"}
    </div>
  );
}

export default App;
