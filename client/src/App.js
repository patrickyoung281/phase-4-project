// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Home from "./Home.js";
import NavBar from './NavBar.js';
import { Route, Switch } from "react-router-dom";
import Thesaurus from './Thesaurus';
import AddNewWord from './AddNewWord.js';
import Login from './Login.js';
import Register from "./Register";

function App() {
  
  const [username, setUsername] = useState(null);


  useEffect(()=>{
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUsername(user))
      }
    });
  }, []);
console.log(username)
  function handleLogin(username) {
    setUsername(username)
  }

  return (
    
   <div>
    <NavBar />
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/thesaurus">
        <Thesaurus />
      </Route>
      <Route exact path ="/addnewword">
        <AddNewWord />
      </Route>
      <Route exact path="/login">
        <Login onLogin={handleLogin} />
      </Route>
      <Route exact path ="/register">
        <Register />
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
