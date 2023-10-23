import React, { useContext, useState } from 'react';
import TodoContext from "../context/todo/TodoContext";
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { v4 as uuid } from 'uuid';

export default function AddTodo() {
  const [todo, setTodo] = useState({ title: "", description: "" });

  const context = useContext(TodoContext);
  const { addTodoItem, showAlert } = context;
  const handelOnSubmit = (e) => {
    e.preventDefault();
    let id = uuid();
    let newTodo = {
      id: id,
      title: todo.title,
      description: todo.description
    }
    addTodoItem(newTodo);
    showAlert("Todo added Successfully", "success");
    setTodo({ title: "", description: "" });
  }
  const handelOnChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value })
  }
  return (
    <Container className="my-3">
      <h3 className="my-1">Add Todo</h3>
      <Form onSubmit={handelOnSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" required minLength={5} onChange={handelOnChange} value={todo.title} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="description" required minLength={5} onChange={handelOnChange} value={todo.description} type="text" rows={3} />
        </Form.Group>
        <Button variant="primary" type='submit'>Submit</Button>
      </Form>
    </Container>
  )
}
