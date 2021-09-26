import React, { useState } from "react";

const RegistrationPage = () => {
  const initialState = { firstName: "", lastName: "", email: "", state: "" };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (evt) => {
    setFormData((fData) => ({
      [evt.target.name]: evt.target.value,
    }));
  };
  return (
    <form>
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
    </form>
  );
};

export default RegistrationPage;
