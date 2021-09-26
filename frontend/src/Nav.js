import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <p>Navigation</p>
      <p>
        <NavLink to="/signup">Sign Up</NavLink>
      </p>
      <p>
        <NavLink to="/admin">Admin Page</NavLink>
      </p>
    </div>
  );
};

export default Nav;
