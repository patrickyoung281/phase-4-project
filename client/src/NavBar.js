import React from "react";
import { NavLink } from "react-router-dom";

const linkstyles = {
    display: "inline-block",
    width: "50px",
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
        </div>
    )
  }

  export default NavBar;