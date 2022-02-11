import '../styles/ListTasks.css';
import { Toast } from 'react-bootstrap';
import { lazy, Suspense, useState } from 'react';
const NewTask = lazy(() => import('./NewTask'));
const Task = lazy(() => import('./Task'));

function ListTasks(props) {
    // console.log(props?.tasks);
    const Tasks = props?.tasks;
    const newTasks = props?.newTasks;
    // console.log(Tasks);
    const [show, setShow] = useState(false);
    const [showDelete, setDelete] = useState(false);

    function onDelete(index) {
        newTasks?.splice(index, 1);
        props.onChange(newTasks);
        setDelete(true);
    }

    function onEdit(editedTask, index) {
        // console.log(editedTask);
        if (validateInputTasks(editedTask)) {
            newTasks[index] = { task: editedTask };
            // console.log(Tasks);
        }
    }

    function pushTasks(e) {
        if (e.key === "Enter") {
            // console.log(Tasks);
            props.onChange(newTasks);
            setShow(true);
        }
    }

    function validateInputTasks(text) {
        return (text.length > 0 && text.length < 64);
    }

    return (
        <div className="ListTasks container">
            <Suspense fallback={<div>Loading...</div>}>
                {Tasks?.map((element, index) => {
                    return (
                        <Task className="task" key={index} element={element} index={index} />
                    )
                })}
                {newTasks?.map((element, index) => {
                    return (
                        <NewTask className="newTask" key={index} element={element} index={index} onDelete={onDelete} onEdit={onEdit} pushTasks={pushTasks} />
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
                            left: 100,
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
            </Suspense>
        </div>
    )
}

export default ListTasks