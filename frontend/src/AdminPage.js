import React, { useState, useEffect } from "react";
import User from "./User";
import axios from "axios";

const AdminPage = () => {
  const [allUsers, setAllUsers] = useState(null);

  useEffect(() => {
    async function getUsers() {
      const res = await axios.get("http://localhost:3001/users");
      setAllUsers(res.data);
    }
    getUsers();
  }, []);

  return (
    <div>
      <h2>Admin page</h2>
      {allUsers ? (
        allUsers.map((user) => (
          <User
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            state={user.state}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AdminPage;
