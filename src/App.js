import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';

export const DestinationContext=createContext()

function App() {
  const[destination,setDestination]=useState({})
  // const[location,setLocation]=useState({})
  return (
    <div className="body">
    <DestinationContext.Provider value={[destination,setDestination]}>
    <Router>
      <Switch>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/booking">
        <Booking></Booking>
        </Route>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route exact path="*">
        <Home></Home>
        </Route>
      </Switch>
    </Router>
    </DestinationContext.Provider>
    </div>
  
  );
}

export default App;
