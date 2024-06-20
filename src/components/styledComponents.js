import styled from "styled-components";

export const Navbar = styled.div`
    margin: 0 250px;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 2px 2px rgb(0, 0, 0, 0.1);
`;

export const Image = styled.img`
    height: 90px;  
`;

export const TaskListContainer = styled.div`
    margin: 100px;
    margin-bottom: auto;
    padding: 20px 60px;
    border: 1.5px solid beige;
    box-shadow: 2px 4px 2px rgb(0, 0, 0, 0.1);
    width: auto;
    height: auto;
`;

export const Heading = styled.div`
    padding: 0 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TaskToggle = styled.button`
    font-weight: bold;
    background-color: aliceblue;
    padding: 3px;
    cursor: pointer;
    border-radius: 5px;
`;

export const UList = styled.ul`
    list-style: none;
`;

export const AddTaskContainer = styled.div`
    margin: 60px 100px 15px 100px;
    padding: 20px 60px;
    border: 1.5px solid beige;
    text-align: start;
`;

export const TaskInput = styled.input`
    width: 60%;
    padding: 8px;
    margin-left: 10px;
    border-radius: 5px;
`;

export const AddTaskButton = styled.button`
    margin-left: 120px;
    background-color: skyblue;
    padding: 8px;
    cursor: pointer;
    border-radius: 5px;
`;

export const ResetButton = styled.span`
    margin-left: 20px;
    font-size: 13.9px;
    padding: 5px;
    cursor: pointer;
    background-color: red;
    border-radius: 5px;
`;

export const TaskStatus = styled.select`
    margin-left: 25px;
    padding: 5px;
    cursor: pointer;
`;

export const FooterContainer = styled.div`
    height: auto;
    display: flex;
    align-items:end;
`;

export const TaskCardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const TaskDetails = styled.li`
  box-shadow: ${(props) => props.completed ? "0px 0px 5px green" : "0px 0px 5px red"};
  margin: 30px;
  padding: 20px;
`;

export const DeleteTask = styled.button`
    margin-left: 150px;
    background-color: red;
    color: #fff;
    padding: 3px;
    cursor: pointer;
    border-radius: 5px;
    position: sticky;
`;