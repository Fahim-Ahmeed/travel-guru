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
import Create from './Components/Create/Create';
import Login from './Components/Login/Login';
import HotelPlace from './Components/HotelPlace/HotelPlace';
export const DestinationContext=createContext()

function App() {
  const[destination,setDestination]=useState({})
  // const[location,setLocation]=useState({})
  return (
    
    <DestinationContext.Provider value={[destination,setDestination]}>
     
    <Router>
      <Switch> 
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/booking">
        <Booking></Booking>
        </Route>
        <Route path="/create">
       <Create></Create>
        </Route>
        <Route path="/login">
       <Login></Login>
        </Route>
        <Route path="/place">
       <HotelPlace></HotelPlace>
        </Route>
        <Route  path="/">
        <Home></Home>
        </Route>
        <Route exact path="*">
        <Home></Home>
        </Route>
      </Switch>
    </Router>
    </DestinationContext.Provider>
   
  
  );
}

export default App;
