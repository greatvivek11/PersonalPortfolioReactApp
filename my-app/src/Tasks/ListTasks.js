import { updateTasks } from '../Service/Service';
import '../styles/ListTasks.css';
import Task from './Task';
import { Toast } from 'react-bootstrap';
import { useState } from 'react';

function ListTasks(props) {
    // console.log(props?.tasks);
    const Tasks = props?.tasks;
    // console.log(Tasks);
    const [show, setShow] = useState(false);
    const [showDelete, setDelete] = useState(false);

    function onDelete(index) {
        Tasks?.splice(index, 1);
        updateTasks(Tasks);
        props.onChange(Tasks);
        setDelete(true);
    }

    function onEdit(editedTask, index) {
        // console.log(editedTask);
        if (validateInputTasks(editedTask)) {
            Tasks[index] = { task: editedTask };
            // console.log(Tasks);
        }
    }

    function pushTasks(e) {
        if (e.key === "Enter") {
            // console.log(Tasks);
            updateTasks(Tasks);
            props.onChange(Tasks);
            setShow(true);
        }
    }

    function validateInputTasks(text) {
        return (text.length > 0 && text.length < 64);
    }

    return (
        <div className="ListTasks container">
            {Tasks?.map((element, index) => {
                // console.log(element?.task);
                return (
                    <Task className="task" key={index} element={element} index={index} onDelete={onDelete} onEdit={onEdit} pushTasks={pushTasks} />
                )
            })}
            <div
                aria-live="polite"
                aria-atomic="true"
                style={{
                    position: 'relative',
                }}>
                <div 
                    style={{
                    position: 'absolute',
                    bottom: 0,
                    left:100,
                    fontSize: 5
                    }}
                >
                <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
                                <Toast.Body>Task Updated Successfully!</Toast.Body>
                            </Toast>
                <Toast onClose={() => setDelete(false)} show={showDelete} delay={2000} autohide>
                    <Toast.Body>Task Deleted Successfully!</Toast.Body>
                </Toast>
                </div>
            </div>
        </div>
    )
}

export default ListTasks