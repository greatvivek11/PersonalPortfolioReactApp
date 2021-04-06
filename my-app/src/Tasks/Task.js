import '../styles/Task.css';

function Task(props) {
    const element = props.element;
    const index = props.index;

    return (
        <div className="task">
            <ul key={index} >
            {element?.task}
            </ul>
        </div>
    )
}

export default Task
