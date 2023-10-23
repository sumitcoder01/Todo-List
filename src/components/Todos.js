import React, { useEffect, useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import Todo from './Todo';
import TodoContext from "../context/todo/TodoContext";
import AddTodo from './AddTodo';

export default function Todos() {
  const context = useContext(TodoContext);
  const { todos, getTodos } = context;
  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <AddTodo />
      <Container style={{ minHeight: "40vh" }}>
        <h3 className="my-2">Todo's list </h3>
        <Row>
          {todos.length === 0 ? " No Todos left" : todos.map((todo) => {
            return <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description} />
          })}
        </Row>
      </Container>
    </>
  );
};


