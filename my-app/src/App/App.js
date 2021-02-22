import './App.css';
import React, { useState, useEffect } from 'react';
import NavbarComponent from '../Components/NavbarComponent';
import Routes from '../Components/Routes';
import FooterComponent from '../Components/FooterComponent';
import { getBlobs,getStrings } from '../Service/Service';
import AppContext from "../Components/context";

function App() {

  const [resources, setResources] = useState([]);
  const [Strings, setStrings] = useState({});

  useEffect(() => {
      console.log("Calling resources...")
      getBlobs().then(res => setResources(res));
    // console.log(resources);
  }, []);

  useEffect(() => {
    getStrings(resources[10]).then(res => setStrings(res));
  }, [resources])
  // console.log(Strings);

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
