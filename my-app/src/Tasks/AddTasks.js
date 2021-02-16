import React, { useState } from 'react';
import { updateTasks } from '../Service/TasksService';
import { Button } from 'react-bootstrap';

export default function AddTasks(props) {
    const [Tasks, setTasks] = useState();
    // console.log(props.tasks);

    function onClickAddTask(){
        updateTasks(Tasks);
        // console.log(Tasks);
        props.onChange(Tasks);
    }

    function onInputChange(e){
        // console.log(e.target.value);
        setTasks(props.tasks?.tasks?.concat({task:e.target.value}));
    }
    function onSubmit(e){
        e.preventDefault();
        e.target.reset();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
            <label>Add Task:</label>
            <input style={{marginLeft: '0.5rem',margin:'0.5rem'}} type ="text" name="addTask" placeholder="Add a Task" onChange={onInputChange}></input>
            <Button type="submit"style={{marginLeft: '0.5rem',margin:'0.5rem',backgroundColor:'green'}} name="addTask" onClick={onClickAddTask}>Add Task</Button>
            </form>
        </div>
    )
}