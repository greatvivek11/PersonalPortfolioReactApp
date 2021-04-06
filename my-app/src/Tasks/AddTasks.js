import { useState } from 'react';
import { Button, Toast } from 'react-bootstrap';
import "../styles/AddTasks.css";

export default function AddTasks(props) {
    const [Tasks, setTasks] = useState();
    const [TaskAdded, setTaskAdded] = useState(false);
    const [show, setShow] = useState(false);
    // console.log(props.tasks);

    function onClickAddTask() {
        if (TaskAdded) {
            // console.log(Tasks);
            setShow(true);
            props.onChange(Tasks);
        }
    }

    function onInputChange(e) {
        // console.log(e.target.value);
        var newTask = e.target.value;
        if (validateInputTasks(newTask)) {
            setTasks(props?.newTasks.concat({ task: newTask }));
            setTaskAdded(true);
        } else {
            setTaskAdded(false);
        }

    }
    function validateInputTasks(text) {
        return (text.length > 0 && text.length < 64);
    }
    function onSubmit(e) {
        e.preventDefault();
        e.target.reset();
        setTaskAdded(false);
        // setShow(false);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Add Task:</label>
                <input className="input" type="text" name="addTask" placeholder="Add a Task" onChange={onInputChange}></input>
                <Button className="submitBtn" type="submit" name="addTask" onClick={onClickAddTask}>Add Task</Button>
            </form>
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
                        <Toast.Body>Task Added Successfully!</Toast.Body>
                    </Toast>
                </div>
            </div>
        </div>
    )
}