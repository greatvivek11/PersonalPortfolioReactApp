import { useContext } from 'react';
import { lazy, Suspense } from 'react';
import AppContext from "../Components/context";
import '../styles/Tasks.css';
const ListTasks = lazy(() => import('../Tasks/ListTasks'));
const AddTasks = lazy(() => import('../Tasks/AddTasks'));

function Tasks() {
    const { tasks, setTasks, setTaskUpdated } = useContext(AppContext);
    // console.log(tasks);

    function handleTaskChange(Tasks) {
        // console.log(Tasks);
        setTasks(Tasks);
        setTaskUpdated(true);
    }

    return (
        <div className="Tasks">
            <h1>Tasks</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <ListTasks tasks={tasks} onChange={handleTaskChange} />
                <AddTasks tasks={tasks} onChange={handleTaskChange} />
            </Suspense>
        </div>
    )
}

export default Tasks
