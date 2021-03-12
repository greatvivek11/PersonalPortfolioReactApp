import { useState } from 'react';
import { updateTasks } from '../Service/Service';
import { Button } from 'react-bootstrap';

export default function AddTasks(props) {
    const [Tasks, setTasks] = useState();
    const [TaskAdded,setTaskAdded] = useState(false);
    // console.log(props.tasks);

    function onClickAddTask(){
        if(TaskAdded){
            updateTasks(Tasks);
            // console.log(Tasks);
            props.onChange(Tasks);
        }
    }

    function onInputChange(e){
        // console.log(e.target.value);
        var newTask = e.target.value;
        if(newTask!==""){
            setTasks(props?.tasks.concat({task:newTask}));
            setTaskAdded(true);    
        }else{
            setTaskAdded(false);
        }
        
    }
    function onSubmit(e){
        e.preventDefault();
        e.target.reset();
        setTaskAdded(false);
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