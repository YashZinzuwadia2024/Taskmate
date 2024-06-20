import { useState,useRef } from 'react';
import './AddTask.css';

export const AddTask = ({tasks,setTasks}) => {
    const [taskValue,setTaskValue] = useState("");
    const [progress,setProgress] = useState(false);
    const taskRef = useRef();

    const resetInput = () =>
    {
        taskRef.current.value="";
    }

    const submitInput = (event) =>
    {
        event.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 100),
            name: taskValue,
            completed: Boolean(progress)
        }
        setTasks([...tasks, task]);
        console.log(task);
        setTaskValue("");
        setProgress(false);
        document.getElementById('add').value = '';
    }

    return (
        <div className="addTask">
            <form onSubmit={submitInput}>
                <input type="text" name="add" id="add" placeholder="Task Name" autoComplete="off" onChange={(e)=> setTaskValue(e.target.value)} />
                <select onChange={(event) => setProgress(event.target.value)} value={progress} >
                    <option value={false}>Pending</option>
                    <option value={true}>Completed</option>
                </select>
                <span onClick={resetInput} className="reset">Reset</span>
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}