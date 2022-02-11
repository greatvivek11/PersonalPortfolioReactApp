import { createContext } from 'react';

const defaultContext = {
    initialTask: [],
    initialNewTask: [],
    initialChangeLogs: {},
    tasks: [],
    newTask: [],
    ChangeLogs: {},
    Loading: false,
    TaskUpdated: false,
    setNewTask: () => { },
    setChangeLogs: () => { },
    setTasks: () => { },
    setTaskUpdated: () => { },
    setInitialTask: () => { },
    setInitialNewTask: () => { },
    setInitialChangeLogs: () => { },
    setLoading: () => { },
}
export const Context = createContext(defaultContext);