import { useContext } from 'react';
import ListTasks from './ListTasks';
import AddTasks from './AddTasks';
import AppContext from "../Components/context";

function Tasks() {
    const {tasks, setTasks, setTaskUpdated} = useContext(AppContext);
    // console.log(tasks);

    function handleTaskChange(Tasks) {
        // console.log(Tasks);
        setTasks(Tasks);
        setTaskUpdated(true);
    }

    return (
        <div>
            <h1>Tasks</h1>
            <ListTasks tasks={tasks} onChange={handleTaskChange} />
            <AddTasks tasks={tasks} onChange={handleTaskChange} />
        </div>
    )
}

export default Tasks
