import React, { useState } from "react";
import useRegister from "./hooks/useRegister";
import Button from "react-bootstrap/Button";

const RegistrationPage = () => {
  const initialState = { firstName: "", lastName: "", email: "" };
  const [formData, setFormData] = useState(initialState);
  const handleRegister = useRegister();
  const handleChange = (evt) => {
    setFormData((fData) => ({
      ...fData,
      [evt.target.name]: evt.target.value,
    }));
  };

  return (
    <form onSubmit={async (evt) => await handleRegister(evt, formData)}>
      <div>
        <label htmlFor="firstName">First name: </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last name: </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default RegistrationPage;
