import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import User from "./pages/User";

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + "/"} component={Login}/>
      <Route exact path={process.env.PUBLIC_URL + "/login"} component={Login}/>
      <Route exact path={process.env.PUBLIC_URL + "/signup"} component={Signup}/>
      <Route path={process.env.PUBLIC_URL + "/:id"} component={User}/>
    </Switch>
    </Router>
  );
}

export default App;
