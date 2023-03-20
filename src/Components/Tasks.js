import React from 'react'
import Task from './Task'

const Tasks = ({onDelete, onToggle, tasks}) => {
   
    return (
        <>
        {tasks.map((task, idx)=>(
            <Task key={idx} onDelete={onDelete} onToggle={onToggle} task={task}/>
        ))}  
        </>
    )
}

export default Tasks