import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



export default function About() {
  return (
    <Container style={{ minHeight: "74vh" }}>
      <Card>
        <Card.Header>About Us</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>You can Add Todo</ListGroup.Item>
          <ListGroup.Item>You can Delete Todo</ListGroup.Item>
          <ListGroup.Item>All Todos are Stored Permanent</ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  )
}
