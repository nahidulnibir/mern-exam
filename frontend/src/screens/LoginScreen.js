import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const LoginScreen = () => {
  return (
    <Row className="justify-content-md-center">
      <Col xs={12} md={6}>
        <h1>Login</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginScreen;
