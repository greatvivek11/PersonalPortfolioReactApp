import React, { useEffect, useState, useRef } from 'react';
import { updateTasks } from '../Service/Service';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Trash, PencilSquare } from 'react-bootstrap-icons';
import Editable from "../Components/Editable.js";
import '../styles/ListTasks.css';

function ListTasks(props) {
    const Tasks = props?.tasks?.tasks;
    const inputRef = useRef();

    // console.log(Tasks);

    function onDelete(e, index) {
        // console.log(Tasks+index);
        Tasks?.splice(index, 1);
        updateTasks(Tasks);
        props.onChange(Tasks);
    }

    function onEdit(editedTask, index) {
        if (validateInputTasks) {
            Tasks[index] = { task: editedTask };
            // console.log(Tasks);
        }
    }

    function pushTasks(e) {
        if (e.key === "Enter") {
            // console.log(Tasks);
            updateTasks(Tasks);
            props.onChange(Tasks);
        }
    }



    function validateInputTasks(text) {
        return (text.length > 0 && text.length < 64);
    }
    const tooltip = (
        <Tooltip id="Tooltip-basic">
            Click on task to edit and press Enter
        </Tooltip>
    );

    return (
        <div>
            <table class="table-sm table-hover">
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Tasks?.map((element, index) => {
                        // console.log(element?.task);
                        return (
                            <tr>
                                <td className="td">
                                    <li key={index}>
                                        <OverlayTrigger placement="top" overlay={tooltip}>
                                            <Editable
                                                text={element?.task}
                                                placeholder="Write a task name"
                                                childRef={inputRef}
                                                type="input"
                                                style={{ color: "black" }}
                                            >
                                                <input
                                                    type="text"
                                                    ref={inputRef}
                                                    name="task"
                                                    placeholder="Write a task name"
                                                    onChange={e => onEdit(e.target.value, index)}
                                                    onKeyDown={e => pushTasks(e)}
                                                />
                                            </Editable>
                                        </OverlayTrigger>
                                    </li>
                                </td>
                                <td className="td">
                                    <Button type="button" name="delete" style={{ marginLeft: '0.5rem', margin: '0.5rem', backgroundColor: 'red', borderColor: 'red' }} onClick={e => onDelete(e, index)}>
                                        <Trash></Trash></Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ListTasks