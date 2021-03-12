import {createContext} from 'react';

const AppContext = createContext(
    {
        resources:[],
        strings:{},
        tasks:[],
        setTasks: () => {},
        setTaskUpdated: () => {}
    }
);

export default AppContext;

