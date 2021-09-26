import React, { useState } from "react";
import useRegister from "./hooks/useRegister";
import { Button, Form } from "react-bootstrap";

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
    <Form onSubmit={(evt) => handleRegister(evt, formData)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default RegistrationPage;
