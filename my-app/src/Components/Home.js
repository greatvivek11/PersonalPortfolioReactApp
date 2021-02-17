import React, { useState, useEffect } from 'react';
import ListTasks from '../Tasks/ListTasks';
import AddTasks from '../Tasks/AddTasks';
import CarouselComponent from '../Components/CarouselComponent';
import { getTasks } from '../Service/TasksService';
import '../styles/home.css';

export default function Home() {
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
                <CarouselComponent></CarouselComponent>
                <h1>
                    Vivek Kaushik's Personal Portfolio Website
                </h1>
            </header>
            <p>{headline1} {headline2} </p>
            <p>{headline3} {headline4}</p>
            <p>{headline5} {headline6}</p>
            <div>
                <h1>Tasks</h1>
                <ListTasks tasks={tasks} onChange={handleTaskChange}></ListTasks>
            </div>
            <AddTasks tasks={tasks} onChange={handleTaskChange}></AddTasks>
            <div>
                <h1>Change Log</h1>
                <ol className="changeLogs" type="1">
                    {changeLog.map(
                        (log) => {
                            return (<li>{log}</li>)
                        }
                    )}
                </ol>
            </div>
            <p>Checkout the Github repo below on Github icon.</p>

            <p>Stay tuned.</p>
        </div >
    );
}
const headline1 = "This is a React based FrontEnd website website to demonstrate recruiters my knowledge and understanding of the subject.";
const headline2 = "I'm planning to learn ReactJS and NodeJS this year 2021, using this as my personal learning project.";
const headline3 = "This website is hosted on Azure Static Website with complete CI/CD using Github Actions.";
const headline4 = "I'll be adding various functionalities such as ToDo Task lists which only I'll be able to edit/delete using Azure AD authentication.";
const headline5 = "I am exploring React features such as - Functinal components, props, hooks which includes useState, useEffect etc.";
const headline6 = "I'm using Azure CosmosDB to store my tasks in JSON format in a document. And I'm using Azure Functions to retrieve and persist data using cosmosDB bindings.";

const changeLog = ["Added List Tasks functionality to get all tasks from CosmosDB.",
    "Added Add Tasks functionality to add new tasks to DB.",
    "Added getTasks and addTasks API using Azure Functions CosmosDB input/ouput bindings.",
    "Deployed React app to Azure Static Web Apps using Github Actions CI/CD.",
    "Added Delete tasks functionality.",
    "Added delete and edit tasks icons.",
    "Added Carousel feature(Slide Show)",
"Added Navbar feature","Added Routing functionality in Navbar","Added navbar in footer.",
"Added background Image in home page."]