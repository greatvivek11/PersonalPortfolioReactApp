import { useRef } from 'react';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import Editable from "../Components/Editable.js";
import '../styles/Task.css';

function Task(props) {
    const element = props.element;
    const index = props.index;
    const inputRef = useRef();

    function onDelete(index) {
        props.onDelete(index);
    }

    function onEdit(editedTask, index) {
        props.onEdit(editedTask, index);
    }

    function pushTasks(e) {
        props.pushTasks(e);
    }

    const tooltip = (
        <Tooltip id="Tooltip-basic">
            Click on task to edit and press Enter
        </Tooltip>
    );

    return (
        <tr>
            <td className="td">
                <ul key={index} >
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
                                placeholder={element?.task}
                                onChange={e => onEdit(e.target.value, index)}
                                onKeyDown={e => pushTasks(e)}
                            />
                        </Editable>
                    </OverlayTrigger>
                </ul>
            </td>
            <td className="td">
                <Button type="delete" name="delete" style={{ marginLeft: '0.5rem', margin: '0.5rem', backgroundColor: 'red', borderColor: 'red' }} onClick={e => onDelete(index)}>
                    <Trash></Trash></Button>
            </td>
        </tr>
    )
}

export default Task
