import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import Header from './Header/Header';
import Mainarea from "./Mainarea/Mainarea";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Switch>
        <Route exact path="/LoginPage" component={LoginPage} />
        <Route path="/Header" component={Header} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
