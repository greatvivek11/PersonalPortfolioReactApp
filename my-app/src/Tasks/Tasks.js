import { useContext } from 'react';
import { lazy, Suspense } from 'react';
import AppContext from "../Components/context";
import { updateTasks } from '../Service/Service';
const ListTasks = lazy(() => import('../Tasks/ListTasks'));
const AddTasks = lazy(() => import('../Tasks/AddTasks'));

function Tasks() {
    const { tasks, newTask, setNewTask, setTaskUpdated } = useContext(AppContext);
    // console.log(tasks);

    function handleTaskChange(newTasks) {
        // console.log(newTasks);
        setNewTask(newTasks);
        updateTasks(tasks.concat(newTasks));
        setTaskUpdated(true);
    }

    return (
        <div className="Tasks">
            <h1>Tasks</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <ListTasks tasks={tasks} newTasks={newTask} onChange={handleTaskChange} />
                <AddTasks newTasks={newTask} onChange={handleTaskChange} />
            </Suspense>
        </div>
    )
}

export default Tasks
