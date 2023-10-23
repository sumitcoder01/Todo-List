import TodoContext from "./TodoContext";
import { useState } from "react";

const TodoState = (props) => {
  const TodoInitial = [];
  const [todos, setTodos] = useState(TodoInitial);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const getTodos = () => {
    if (!localStorage.getItem('todoList')) {
      localStorage.setItem('todoList', JSON.stringify(todos))
    }
    else {
      setTodos(JSON.parse(localStorage.getItem('todoList')));
    }
  }

  const addTodoItem = (todo) => {
    const newTodos = todos.concat(todo);
    setTodos(newTodos);
    localStorage.setItem('todoList', JSON.stringify(newTodos));
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => { return todo.id !== id });
    setTodos(newTodos);
    localStorage.setItem('todoList', JSON.stringify(newTodos));
  }

  return (
    <TodoContext.Provider value={{ todos, getTodos, addTodoItem, deleteTodo, alert, showAlert }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoState;