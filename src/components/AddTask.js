import { useState, useRef } from 'react';
import {
    AddTaskContainer,
    TaskInput,
    AddTaskButton,
    ResetButton,
    TaskStatus
} from "./styledComponents";

export const AddTask = ({ tasks, setTasks }) => {
    const [taskValue, setTaskValue] = useState("");
    const [progress, setProgress] = useState(false);
    const taskRef = useRef();

    const resetInput = () => {
        taskRef.current.value = "";
    }

    const submitInput = (event) => {
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
        <AddTaskContainer>
            <form onSubmit={submitInput}>
                <TaskInput type="text" name="add" id="add" placeholder="Task Name" autoComplete="off" onChange={(e) => setTaskValue(e.target.value)} />
                <TaskStatus onChange={(event) => setProgress(event.target.value)} value={progress} >
                    <option value={false}>Pending</option>
                    <option value={true}>Completed</option>
                </TaskStatus>
                <ResetButton onClick={resetInput}>Reset</ResetButton>
                <AddTaskButton type="submit">Add Task</AddTaskButton>
            </form>
        </AddTaskContainer>
    )
}