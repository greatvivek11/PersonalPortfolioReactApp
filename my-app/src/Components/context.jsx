import { createContext } from 'react';

const AppContext = createContext(
    {
        resources: [],
        strings: {},
        tasks: [],
        newTask: [],
        setNewTask: () => { },
        setTaskUpdated: () => { }
    }
);

export default AppContext;

