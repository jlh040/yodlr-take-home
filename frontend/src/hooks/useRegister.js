import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useRegister = (data) => {
  const history = useHistory();
  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:3001/users", data);
    history.push("/admin");
  };

  return handleSubmit;
};

export default useRegister;
