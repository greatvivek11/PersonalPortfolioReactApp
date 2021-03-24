import './App.css';
import { useState, useEffect, lazy, Suspense } from 'react';
import { getChangeLogs, getTasks } from '../Service/Service';
import AppContext from "../Components/context";
const NavbarComponent = lazy(() => import('../Components/NavbarComponent'));
const FooterComponent = lazy(() => import('../Components/FooterComponent'));
const Routes = lazy(() => import('../Components/Routes'));

function App() {
  const initialTask = (sessionStorage.getItem('tasks') !== null) ? JSON.parse(sessionStorage.getItem('tasks')) : [];
  // const initialResources = (sessionStorage.getItem('images') !== null) ? JSON.parse(sessionStorage.getItem('images')) : [];
  const initialChangeLogs = (sessionStorage.getItem('ChangeLogs') !== null) ? JSON.parse(sessionStorage.getItem('ChangeLogs')) : {};
  const [tasks, setTasks] = useState(initialTask);
  // const [resources, setResources] = useState(initialResources);
  const [ChangeLogs, setChangeLogs] = useState(initialChangeLogs);
  const [Loading, setLoading] = useState(false);
  const [TaskUpdated, setTaskUpdated] = useState(false);
  var value = { ChangeLogs, tasks, setTasks, setTaskUpdated };

  // console.log(tasks);

  // Set Loading to True if no data is present in local storage
  useEffect(() => {
    // console.log(initialTask);
    if (Object.keys(initialChangeLogs).length === 0 || initialTask?.length === 0) {
      setLoading(true);
    }
  }, [])

  // //GET RESOURCES/IMAGES
  // useEffect(() => {
  //   if (Loading) {
  //     console.log("Calling resources...")
  //     getBlobs().then(res => {
  //       setResources(res);
  //       sessionStorage.setItem('images', JSON.stringify(res));
  //     })
  //     // console.log(resources);
  //   }
  // }, [Loading]);

  //GET TASKS
  useEffect(() => {
    if (Loading) {
      console.log("Tasks length: " + tasks?.length);
      getTasks(1, 1).then(Tasks => {
        // console.log(tasks?.tasks);
        setTasks(Tasks?.tasks);
        sessionStorage.setItem('tasks', JSON.stringify(Tasks?.tasks));
      });
    }
  }, [Loading])

  //Storing Tasks in Session Storage
  useEffect(() => {
    if (TaskUpdated) {
      console.log("Storing in Session storage.");
      // console.log(tasks);
      sessionStorage.setItem('tasks', JSON.stringify(tasks));
      setTaskUpdated(false);
    }
  }, [TaskUpdated])

  //GET CHANGELOG ChangeLogs
  useEffect(() => {
    if (Loading) {
      // console.log(resources[10]);
      getChangeLogs(2,2).then(res => {
        setChangeLogs(res);
        sessionStorage.setItem('ChangeLogs', JSON.stringify(res));
      }
      );
      // console.log(ChangeLogs);
    }
  }, [Loading])

  return (
    <div className="App">
      <AppContext.Provider value={value}>
        <Suspense fallback={<div>Loading...</div>}>
          <NavbarComponent />
          <Routes />
          <FooterComponent />
        </Suspense>
      </AppContext.Provider>
    </div>
  )
}

export default App;
