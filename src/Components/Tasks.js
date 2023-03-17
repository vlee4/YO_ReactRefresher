import React from 'react'
import Task from './Task'

const Tasks = ({onDelete, tasks}) => {
   
    return (
        <>
        {tasks.map((task)=>(
            <Task key={task.id} onDelete={onDelete} task={task}/>
        ))}  
        </>
    )
}

export default Tasks