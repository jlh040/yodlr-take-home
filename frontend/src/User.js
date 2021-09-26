import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const User = ({ firstName, lastName, email, state }) => {
  return (
    <>
      <Card border="info" style={{ width: "18rem" }}>
        <Card.Header>
          {firstName} {lastName}
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Email: {email}</ListGroup.Item>
            <ListGroup.Item>State: {state}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <br />
    </>
  );
};

export default User;
