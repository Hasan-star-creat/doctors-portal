import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment'


const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
             <Home/>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;