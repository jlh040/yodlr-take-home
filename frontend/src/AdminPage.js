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
      <h1 className="text-center mt-2">Admin page</h1>
      <div>
        {allUsers ? (
          allUsers.map((user) => (
            <User
              key={user.id}
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
    </div>
  );
};

export default AdminPage;
