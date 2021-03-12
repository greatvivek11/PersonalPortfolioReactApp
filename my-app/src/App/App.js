import './App.css';
import { useState, useEffect } from 'react';
import NavbarComponent from '../Components/NavbarComponent';
import Routes from '../Components/Routes';
import FooterComponent from '../Components/FooterComponent';
import { getBlobs, getStrings, getTasks } from '../Service/Service';
import AppContext from "../Components/context";

function App() {
  const initialTask = (sessionStorage.getItem('tasks') !== null) ? JSON.parse(sessionStorage.getItem('tasks')) : [];
  const initialResources = (sessionStorage.getItem('images') !== null) ? JSON.parse(sessionStorage.getItem('images')) : [];
  const initialStrings = (sessionStorage.getItem('strings') !== null) ? JSON.parse(sessionStorage.getItem('strings')) : {};
  const [tasks, setTasks] = useState(initialTask);
  const [resources, setResources] = useState(initialResources);
  const [strings, setStrings] = useState(initialStrings);
  const [Loading, setLoading] = useState(false);
  const [TaskUpdated, setTaskUpdated] = useState(false);
  var value = { resources, strings, tasks, setTasks, setTaskUpdated };

  // console.log(tasks);

  // Set Loading to True if no data is present in local storage
  useEffect(() => {
    // console.log(initialTask);
    if (Object.keys(initialStrings).length === 0 || initialTask?.length === 0 || initialResources?.length === 0) {
      setLoading(true);
    }
  }, [])

  // //Callback from Context API's - Add, Edit, Delete Tasks
  // function setStoreTasks(Tasks) {
  //   console.log("Updating Tasks and storing in Session storage.");
  //   setTaskUpdated(true);
  // }

  //GET RESOURCES/IMAGES
  useEffect(() => {
    if (Loading) {
      console.log("Calling resources...")
      getBlobs().then(res => {
        setResources(res);
        sessionStorage.setItem('images', JSON.stringify(res));
      })
      // console.log(resources);
    }
  }, [Loading]);

  //GET TASKS
  useEffect(() => {
    if (Loading) {
      console.log("Tasks length: "+tasks?.length);
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

  //GET CHANGELOG STRINGS
  useEffect(() => {
    if (Loading) {
      // console.log(resources[10]);
      getStrings(resources[10]).then(res => {
        setStrings(res);
        sessionStorage.setItem('strings', JSON.stringify(res));
      }
      );
      // console.log(Strings);
    }
  }, [Loading])

  return (
    <div className="App">
      <AppContext.Provider value={value}>
        <NavbarComponent />
        <Routes />
        <FooterComponent />
      </AppContext.Provider>
    </div>
  )
}

export default App;
