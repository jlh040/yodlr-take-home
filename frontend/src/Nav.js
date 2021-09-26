import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <h1>Navigation</h1>
      <p>
        <NavLink exact to="/">
          Homepage
        </NavLink>
      </p>
      <p>
        <NavLink exact to="/signup">
          Sign Up
        </NavLink>
      </p>
      <p>
        <NavLink exact to="/admin">
          Admin Page
        </NavLink>
      </p>
    </div>
  );
};

export default Nav;
