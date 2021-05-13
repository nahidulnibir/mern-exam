import React from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';

const RegisterScreen = () => {
  return (
    <Row className="justify-content-md-center">
      <Col xs={12} md={6}>
        <h1>Register</h1>

        <Form>
          <Form.Group controlId="name">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="name" placeholder="Your Name" />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default RegisterScreen;
