import { useMemo,useEffect, useState } from 'react';

export const useGlobalState = () => {
  const initialTask =  JSON.parse(sessionStorage.getItem('tasks')) ?? [];
  const initialNewTask = JSON.parse(sessionStorage.getItem('newTask')) ?? [];
  const initialChangeLogs = JSON.parse(sessionStorage.getItem('ChangeLogs')) ?? {};
  const [tasks, setTasks] = useState(initialTask);
  const [newTask, setNewTask] = useState(initialNewTask);
  const [ChangeLogs, setChangeLogs] = useState(initialChangeLogs);
  const [TaskUpdated, setTaskUpdated] = useState(false);
  const [Loading, setLoading] = useState(false);
  
  // Set Loading to True if no data is present in local storage
  useEffect(() => {
      if (Object.keys(initialChangeLogs)?.length === 0 || initialTask?.length === 0) {
        setLoading(true);
      }
  }, []);

  return {
    tasks, newTask, ChangeLogs, TaskUpdated, Loading, initialTask, initialNewTask, initialChangeLogs,
    setTasks, setNewTask, setChangeLogs, setTaskUpdated, setLoading
  };
}
