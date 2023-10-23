import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TodoContext from "../context/todo/TodoContext";

export default function Todo(props) {
  const context = useContext(TodoContext);
  const { deleteTodo, showAlert } = context;
  const handleDelete = () => {
    deleteTodo(props.id);
    showAlert("Todo delete Successfully", "success");
  }
  return (
    <Card className="my-2 shadow">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </Card.Body>
    </Card>
  )
}
