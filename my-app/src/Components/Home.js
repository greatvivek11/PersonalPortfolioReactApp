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

    const Headline1 = "Hi! My Name is Vivek Kaushik. I am a Full-Stack Software developer with 2+ years of experience in developing, testing and deploying web, mobile and cloud applications. This is my React based portfolio website to demonstrate recruiters my knowledge and understanding of various technologies such as React, Angular, Node, C#, Azure etc.";
    const Headline2 = "This website is hosted on Azure Static Website with complete CI/CD using Github Actions. I'll be adding various functionalities such as ToDo Task lists which only I'll be able to edit/delete using Azure AD authentication.";
    const Headline3 ="I am exploring and learning various React features such as - Functional components, props, hooks, routes, bootstrap etc. I'm using Azure CosmosDB to store my tasks in JSON format in a document. And I'm using Azure Functions to retrieve and persist data using cosmosDB bindings. Kindly reload if tasks don't appear right away.";
    
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
            <p>{Headline1}</p>
            <p>{Headline2}</p>
            <p>{Headline3}</p>
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