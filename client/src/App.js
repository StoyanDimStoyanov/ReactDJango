import Header from "./components/Header/Header";
import "./App.css";
import React from 'react';
import { Switch, Route } from "react-router";
import Home from './components/Main/Home';
import Login from './components/Main/Login';
import Register from './components/Main/Register';
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/SignIn' component={Login} />
                <Route exact path='/SignUp' component={Register} />



            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
