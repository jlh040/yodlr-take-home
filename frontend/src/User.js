import React from "react";

const User = ({ firstName, lastName, email, state }) => {
  return (
    <div>
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Email: {email}</p>
      <p>State: {state}</p>
    </div>
  );
};

export default User;
