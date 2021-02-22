import React, { useState, useEffect, useContext } from 'react';
import ListTasks from '../Tasks/ListTasks';
import AddTasks from '../Tasks/AddTasks';
import CarouselComponent from '../Components/CarouselComponent';
import { getTasks } from '../Service/Service';
import '../styles/home.css';
import AppContext from "../Components/context";

export default function Home() {
    const [resources, setResources] = useState([]);
    const [Strings, setStrings] = useState({});
    const Context = useContext(AppContext);
    useEffect(() => {
        setResources(Context.resources);
        setStrings(Context.strings);
    });
    // console.log(Strings);
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        if (tasks.length === 0) {
            getTasks(1, 1).then(tasks => {
                // console.log(tasks)
                setTasks(tasks);
            });
        }
    }, [])

    function handleTaskChange(Tasks) {
        // console.log({tasks:Tasks});
        setTasks({ tasks: Tasks });
        // console.log(tasks);
    }
    return (
        <div className="Home">
            <header>
                <CarouselComponent resources={resources}/>
                <h1>
                    Vivek Kaushik's Personal Portfolio Website
                </h1>
            </header>
            <p>{Strings?.Headline1}</p>
            <p>{Strings?.Headline2}</p>
            <p>{Strings?.Headline3}</p>
            <div>
                <h1>Tasks</h1>
                <ListTasks tasks={tasks} onChange={handleTaskChange}></ListTasks>
            </div>
            <AddTasks tasks={tasks} onChange={handleTaskChange}></AddTasks>
            <div>
                <h1>Change Log</h1>
                <ol className="changeLogs" type="1">
                    {Strings?.ChangeLog?.map(
                        (log,i) => {
                            return (<li key={i}>{log}</li>)
                        }
                    )}
                </ol>
            </div>
            <p>Checkout the Github repo below on Github icon.</p>

            <p>Stay tuned.</p>
        </div >
    );
}