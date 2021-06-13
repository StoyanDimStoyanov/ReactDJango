import  Header  from "./components/Header/Header"
import './App.css';
import React from 'react';
import { Switch, Route } from "react-router";
import Home from './components/Main/Home'
import Login from './components/Main/Login'
import Register from './components/Main/Register'


function App() {  
  return (
    <div className="App">
     <Header/>
     <Switch>
        <Route exact path='/Home' component={ Home } />
        <Route exact path='/login' component={ Login } />
        <Route exact path='/register' component={ Register } />

    
     </Switch>
    </div>
  );
}

export default App;
