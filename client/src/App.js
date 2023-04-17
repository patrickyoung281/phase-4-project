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
  const [errorMessages, setErrorMessages] = useState([])
  const [displayWords, setDisplayWords] = useState([])

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

function renderErrors () {
  if(errorMessages && errorMessages.length > 0) {
      return (
          <div>
              <ul>
                  {errorMessages.map((error, index) => (
                      <li key={index}>{error}</li>
                  ))}
              </ul>
          </div>
      )
  }
  else return null
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
        <Thesaurus
        setErrorMessages={setErrorMessages} 
        renderErrors={renderErrors}
        displayWords={displayWords}
        setDisplayWords={setDisplayWords} />
      </Route>
      <Route exact path ="/addnewword">
        <AddNewWord 
        setErrorMessages={setErrorMessages} 
        renderErrors={renderErrors}/>
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
