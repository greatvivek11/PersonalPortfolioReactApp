import React, { useState } from 'react';
import { updateTasks } from '../Service/TasksService';
import { Button } from 'react-bootstrap';

export default function AddTasks(props) {
    const [Tasks, setTasks] = useState();
    const [inputValue, setInputValue] = useState();
    // console.log(props.tasks);

    function onClickAddTask(){
        updateTasks(Tasks);
        // console.log(Tasks);
        props.onChange(Tasks);
        setInputValue("");
    }

    function onInputChange(e){
        // console.log(e.target.value);
        setTasks(props.tasks?.tasks?.concat({task:e.target.value}));
    }

    return (
        <div>
            <label>Add Task:</label>
            <input style={{marginLeft: '0.5rem',margin:'0.5rem'}} value={inputValue} type ="text" name="addTask" placeholder="Add a Task" onChange={onInputChange}></input>
            <Button style={{marginLeft: '0.5rem',margin:'0.5rem',backgroundColor:'green'}} name="addTask" onClick={onClickAddTask}>Add Task</Button>
        </div>
    )
}