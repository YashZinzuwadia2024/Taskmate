import { useState } from 'react';
import { TaskCard } from './TaskCard';
import {
    TaskListContainer,
    Heading,
    TaskToggle,
    UList
} from "./styledComponents";

export const TaskList = ({ tasks, setTasks }) => {
    const [show, setShow] = useState(true);
    function deleteTask(id) {
        setTasks(tasks.filter(task => id !== task.id))
    }
    return (
        <TaskListContainer>
            <Heading>
                <h1>Task List</h1>
                <TaskToggle onClick={() => setShow(!show)} >Toggle</TaskToggle>
            </Heading>
            <UList>
                {show && tasks.map((task) => (
                    <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
                ))}
            </UList>
        </TaskListContainer>
    )
}
