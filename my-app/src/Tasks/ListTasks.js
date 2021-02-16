import React,{useState,useEffect} from 'react';
import { updateTasks } from '../Service/TasksService';
import { Button } from 'react-bootstrap';

function ListTasks(props) {
    const Tasks = props?.tasks?.tasks;
    console.log(Tasks);
    var values = Object.values(props?.tasks);
    var values1 = values[0];
    // console.log(values1);

    function onClick(e,index){
        // console.log(Tasks+index);
        Tasks?.splice(index,1);
        updateTasks(Tasks);
        props.onChange(Tasks);
    }
    return (
        <div>
            {Tasks?.map((element,index) => {
                // console.log(element);
                return (
                <li>
                    {element?.task}
                    <Button style={{marginLeft: '0.5rem',margin:'0.5rem', color:'black',backgroundColor:'red'}} onClick={e => onClick(e,index)}>Delete</Button>
                </li>)
            })}
        </div>
    )
}

export default ListTasks



