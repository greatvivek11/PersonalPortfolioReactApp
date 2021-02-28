import './App.css';
import React, { useState, useEffect } from 'react';
import NavbarComponent from '../Components/NavbarComponent';
import Routes from '../Components/Routes';
import FooterComponent from '../Components/FooterComponent';
import { getBlobs,getStrings } from '../Service/Service';
import AppContext from "../Components/context";
import ScrollProgressBar  from "../Components/ScrollProgressBar";

function App() {

  const [resources, setResources] = useState([]);
  const [Strings, setStrings] = useState({});

  useEffect(() => {
      console.log("Calling resources...")
      getBlobs().then(res => setResources(res));
      // console.log(resources);
  }, []);

  useEffect(() => {
    // console.log(resources[10]);
    getStrings(resources[10]).then(res => setStrings(res));
  }, [resources])
  // console.log(Strings);

  // useEffect(() => {
  //   getBlogs().then(res => console.log(res));
  // }, [])

  return (
    <div className="App">
      <AppContext.Provider value={{resources:resources,strings:Strings}}>
        <NavbarComponent />
        <Routes />
        <FooterComponent />
      </AppContext.Provider>
    </div>
  )
}

export default App;
