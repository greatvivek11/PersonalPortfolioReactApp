import './App.css';
import React, { useState, useEffect } from 'react';
import NavbarComponent from '../Components/NavbarComponent';
import Routes from '../Components/RouteComponent';
import Home from '../Components/Home';
import FooterComponent from '../Components/FooterComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Routes/>
      <FooterComponent/>
    </div>
  )
}

export default App;
