import React from 'react'
import Task from './Task'

const Tasks = ({onDelete, onToggle, tasks}) => {
   
    return (
        <>
        {tasks.map((task)=>(
            <Task key={task.id} onDelete={onDelete} onToggle={onToggle} task={task}/>
        ))}  
        </>
    )
}

export default Tasks