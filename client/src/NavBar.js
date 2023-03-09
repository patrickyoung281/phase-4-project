import React from "react";
import { NavLink } from "react-router-dom";

const linkstyles = {
    display: "inline-block",
    width: "150px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

  function NavBar () {

    return (

        <div className="navBar">
            <NavLink
            to="/home"
            exact
            style={linkstyles}
            activeStyle={{
                background: "darkblue",
            }}
            >
            Home
            </NavLink>

            <NavLink
            to="/thesaurus"
            exact
            style={linkstyles}
            activeStyle={{
                background: "darkblue",
            }}
            >
            Thesaurus
            </NavLink>

            <NavLink
            to="/addnewword"
            exact
            style={linkstyles}
            activeStyle={{
                background: "darkblue",
            }}
            >
            Add a new Word
            </NavLink>

            <NavLink
            to="/login"
            exact
            style={linkstyles}
            activeStyle={{
                background: "darkblue",
            }}
            >
            Login
            </NavLink>

            <NavLink
            to="/register"
            exact
            style={linkstyles}
            activeStyle={{
                background: "darkblue",
            }}
            >
            Register
            </NavLink>
        </div>
    )
  }

  export default NavBar;