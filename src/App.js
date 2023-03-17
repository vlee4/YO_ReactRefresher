import Header from './Components/Header';
import Tasks from './Components/Tasks';
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

  return (
    <div className="container">
      <Header />
      {tasks.length>0? <Tasks onDelete={deleteTask} tasks={tasks}/>: "No Tasks to Show"}
    </div>
  );
}

export default App;
