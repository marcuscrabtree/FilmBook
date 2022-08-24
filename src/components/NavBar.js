import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    const linkStyles = {
        display: "inline-block",
        width: "100px",
        padding: "10px",
        margin: "0 6px 6px",
        background: "#00D8D8",
        textDecoration: "none",
        color: "white",
        textAlign: "center",
        borderRadius: "10px",
        fontSize: "12px",
      };

    return (
      <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "white",
          color: "black",
        }}
      > Home
            </NavLink>
            <NavLink
        to="/MovieList"
        exact
        style={linkStyles}
        activeStyle={{
          background: "white",
          color: "black",

        }}
      >
        Our Movies
            </NavLink>
            <NavLink
        to="/TopMovieList"
        exact
        style={linkStyles}
        activeStyle={{
          background: "white",
          color: "black",
        }}
      >
       Your Movies
        </NavLink>
      </div>
      
    )
}


export default NavBar