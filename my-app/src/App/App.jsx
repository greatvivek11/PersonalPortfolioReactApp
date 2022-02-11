import { lazy, Suspense, useEffect } from 'react';
import { getChangeLogs, getTasks } from '../Service/Service';
import { useStore } from '../Store/Store';
import './App.css';
const NavbarComponent = lazy(() => import('../Components/NavbarComponent'));
const FooterComponent = lazy(() => import('../Components/FooterComponent'));
const Routes = lazy(() => import('../Components/Routes'));

function App() {
  const { Loading, tasks, TaskUpdated, newTask, setChangeLogs, setTasks, setTaskUpdated,setLoading } = useStore();

  //GET TASKS
  useEffect(() => {
    if (Loading) {
      console.log("Tasks length: " + tasks?.length);
      getTasks().then(Tasks => {
        console.log(Tasks?.tasks);
        setTasks(Tasks?.tasks);
        sessionStorage.setItem('tasks', JSON.stringify(Tasks?.tasks));
      });
    setLoading(false);
    }
  }, [Loading])

  //Storing Tasks in Session Storage
  useEffect(() => {
    if (TaskUpdated) {
      console.log("Storing in Session storage.");
      sessionStorage.setItem('newTask', JSON.stringify(newTask));
      setTaskUpdated(false);
    }
  }, [TaskUpdated])

  // GET CHANGELOG ChangeLogs
  useEffect(() => {
    if (Loading) {
      // console.log(resources[10]);
      getChangeLogs().then(res => {
        console.log(res);
        setChangeLogs(res);
        sessionStorage.setItem('ChangeLogs', JSON.stringify(res));
      }
      );
      // console.log(ChangeLogs);
    setLoading(false);
    }
  }, [Loading])

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarComponent />
        <Routes />
        <FooterComponent />
      </Suspense>
    </div>
  )
}

export default App;
