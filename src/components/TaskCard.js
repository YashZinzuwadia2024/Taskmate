import { TaskCardContainer, TaskDetails, DeleteTask } from "./styledComponents";

export const TaskCard = ({task,deleteTask}) => {
  return (
    <TaskCardContainer>
        <TaskDetails completed={task.completed} >
                  <span>{task.id} - {task.name}</span>
                  <DeleteTask onClick={()=>deleteTask(task.id)} >Delete</DeleteTask>
        </TaskDetails>
    </TaskCardContainer>
  )
}
