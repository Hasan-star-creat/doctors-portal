import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment'
import Login from './Components/Login/Login/Login';
import Dashbord from "./Components/Dhashbord/Dhashbord/Dhashbord";

import AddDoctors from "./Components/AddDoctors/AddDoctors";
import PrivetRoute from './Components/Login/PrivetRoute/PrivetRoute'


export const UserContext = createContext();

const App = () => {
   const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <PrivetRoute path="/dashboard">
           <Dashbord></Dashbord> 
          </PrivetRoute>
          <Route path="/adddoctor">
            <AddDoctors></AddDoctors>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;