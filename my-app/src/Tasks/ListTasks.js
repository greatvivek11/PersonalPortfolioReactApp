import React from 'react';
import { updateTasks } from '../Service/TasksService';
import { Button } from 'react-bootstrap';
import { Trash,PencilSquare } from 'react-bootstrap-icons'

function ListTasks(props) {
    const Tasks = props?.tasks?.tasks;
    // console.log(Tasks);
    var values = Object.values(props?.tasks);
    var values1 = values[0];
    // console.log(values1);

    function onClick(e,index){
        // console.log(Tasks+index);
        Tasks?.splice(index,1);
        updateTasks(Tasks);
        props.onChange(Tasks);
    }

    function onEdit(e,index){
        alert("Work In Progress");
        // console.log(Tasks[index]?.task);
    }
    return (
        <div>
            {Tasks?.map((element,index) => {
                // console.log(element);
                return (
                <li style={{color:"crimson"}} key={index}>
                    <span style={{color:"black"}}>{element?.task}</span>
                    <Button type="button" name="edit" style={{marginLeft: '0.5rem',margin:'0.5rem',backgroundColor:'blue',borderColor:'blue'}} onClick={e => onEdit(e,index)}>
                    <PencilSquare></PencilSquare></Button>
                    <Button type="button" name="delete" style={{marginLeft: '0.5rem',margin:'0.5rem',backgroundColor:'red',borderColor:'red'}} onClick={e => onClick(e,index)}>
                    <Trash></Trash></Button>
                </li>)
            })}
        </div>
    )
}

export default ListTasks



