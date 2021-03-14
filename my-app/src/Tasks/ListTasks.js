import { updateTasks } from '../Service/Service';
import '../styles/ListTasks.css';
import Task from './Task';

function ListTasks(props) {
    // console.log(props?.tasks);
    const Tasks = props?.tasks;
    // console.log(Tasks);

    function onDelete(index) {
        Tasks?.splice(index, 1);
        updateTasks(Tasks);
        props.onChange(Tasks);
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
        }
    }

    function validateInputTasks(text) {
        return (text.length > 0 && text.length < 64);
    }

    return (
        <div className="ListTasks">
            <table className="responsive-table">
                <tbody>
                    {Tasks?.map((element, index) => {
                        // console.log(element?.task);
                        return(
                            <Task key={index} element={element} index={index} onDelete={onDelete} onEdit={onEdit} pushTasks={pushTasks} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ListTasks