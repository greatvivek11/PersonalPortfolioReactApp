import { useRef } from 'react';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import { lazy, Suspense } from 'react';
import '../styles/Task.css';
const Editable = lazy(() => import('../Components/Editable.jsx'));

function NewTask(props) {
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
        <div className="task">
            <ul key={index} >
                <OverlayTrigger placement="top" overlay={tooltip}>
                    <Suspense fallback={<div>Loading...</div>}>
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
                    </Suspense>
                </OverlayTrigger>
            </ul>
            <Button className="delete" type="delete" name="delete" onClick={e => onDelete(index)}><Trash /></Button>
        </div>
    )
}

export default NewTask
