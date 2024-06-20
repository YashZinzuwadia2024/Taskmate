import React from 'react'
import './TaskCard.css'

export const TaskCard = ({task,deleteTask}) => {
  console.log(task)
  return (
    <div className="taskCard">
        <li className={task.completed ? "completed" : "incomplete"}>
                  <span>{task.id} - {task.name}</span>
                  <button onClick={()=>deleteTask(task.id)} >Delete</button>
        </li>
    </div>
  )
}
