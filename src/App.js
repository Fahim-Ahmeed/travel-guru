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
import Login from './Components/Login/Login';
import HotelPlace from './Components/HotelPlace/HotelPlace';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const DestinationContext=createContext()
export const UserIdentity=createContext()

function App() {
  const [isSignedIn,setIsSignIn]=useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: '',
        success: ''
  });
  const[destination,setDestination]=useState({
    origin:'',
    destination:'',
    from:'',
    to:''
  });
  // const[location,setLocation]=useState({})
  return (
    <UserIdentity.Provider value={[isSignedIn,setIsSignIn]}>
    <DestinationContext.Provider value={[destination,setDestination]}>
     
    <Router>
      <Switch> 
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/booking">
        <Booking></Booking>
        </Route>
        <Route path="/login">
       <Login></Login>
        </Route>
        <PrivateRoute path="/place">
       <HotelPlace></HotelPlace>
        </PrivateRoute>
        <Route  path="/">
        <Home></Home>
        </Route>
        <Route exact path="*">
        <Home></Home>
        </Route>
      </Switch>
    </Router>
    </DestinationContext.Provider>
    </UserIdentity.Provider>
   
  
  );
}

export default App;
