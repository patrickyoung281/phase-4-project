// import logo from './logo.svg';
import './App.css';
import React from "react";
import Home from "./Home.js";
import NavBar from './NavBar.js';
import { Route, Switch } from "react-router-dom";

function App() {
  
  return (
    
   <div>
    <NavBar />
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
    </Switch>
    {/* <h2>Hello World!</h2>
    <h3>Servus Oida!</h3>  */}
   </div> 
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
