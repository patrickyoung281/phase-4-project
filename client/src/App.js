import './App.css';
import React, { useEffect, useState } from "react";
import Home from "./Home.js";
import NavBar from './NavBar.js';
import { Route, Switch } from "react-router-dom";
import Thesaurus from './Thesaurus';
import AddNewWord from './AddNewWord.js';
import Login from './Login.js';
import Register from "./Register";
import Header from './Header';

function App() {
  
  const [username, setUsername] = useState(null);


  useEffect(()=>{
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUsername(user.username))
      }
    });
  }, []);


  function handleLogin(response) {
    setUsername(response.username)
  }

function handleLogout () {
  fetch("/logout", {
    method: "DELETE",
  }).then(() => setUsername(null));
}

  return (
    
   <div>
    <Header username={username}/>
    {username ? <button onClick={handleLogout}>Logout</button> : null}
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
   </div> 
  );
}

export default App;
