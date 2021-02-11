import React, { Component } from 'react';
import './ToDoTasks.css';

export class ToDoTasks extends Component {
    render() {
        return (
            <div>
                <li>Implement Micro Frontend architecture.</li>
                <li>Create backend using NodeJS to store tasks.</li>
                <li>Add authentication to allow only self to add/edit/delete tasks</li>
                <li>Use Docker to host website as an image on Azure Container Instances or AKS.</li>
                <li>Use SASS instead of CSS.</li>
                <li>Use typescript with React.</li>
                <li>Add blog section.</li>
                <li>Add About section.</li>
                <li>Add Projects section.</li>
                <li>Create multiple pages to demostrate the capabilites of React, Node, Azure.</li>
            </div>
        )
    }
}

export default ToDoTasks

