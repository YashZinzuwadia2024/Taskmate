import React from 'react';
import { useState } from 'react';
import { TaskCard } from './TaskCard';
import './TaskList.css';

export const TaskList = ({tasks,setTasks}) => {
      const [show,setShow] = useState(true);
      function deleteTask(id)
      {
        setTasks(tasks.filter(task=> id!==task.id))
      }
    return (
        <div className="taskList">
            <div className="heading">
                <h1>Task List</h1>
                <button onClick={()=>setShow(!show)} >Toggle</button>
            </div>
            <ul>
                { show && tasks.map((task) => (
                    <TaskCard key={task.id} task={ task } deleteTask={ deleteTask } />
                )) }
            </ul>
        </div>
    )
}
