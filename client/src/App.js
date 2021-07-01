import Header from "./components/Header/Header";
import "./App.css";
import React from 'react';
import { Switch, Route } from "react-router";
import Home from './components/Main/Home';
import SignIn from './components/Main/Login';
import SignUp from './components/Main/Register';
import Footer from "./components/Footer/Footer";
import Pets from './components/Main/Pets'
import PetDetails from "./components/Pet/PetDetails";

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/SignIn' component={SignIn} />
                <Route exact path='/SignUp' component={SignUp} />
                <Route exact path='/pets' component={Pets} />
                <Route path='/petdetails/:id' component={PetDetails} />



            </Switch>
            
            <Footer/>
        </div>
    );
}

export default App;
