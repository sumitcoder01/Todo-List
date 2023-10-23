import React, { useContext } from 'react';
import Alert from 'react-bootstrap/Alert';
import TodoContext from "../context/todo/TodoContext";


export default function AlertComp() {
  const capitalize = (word) => {
    if (word === "danger") {
      word = "error";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  const context = useContext(TodoContext);
  const { alert } = context;
  return (
    <div className="mb-1" style={{ height: '50px' }}>
      {alert && <Alert variant={alert.Type}>
        <strong>{capitalize(alert.Type)}!</strong> {alert.msg}
      </Alert>
      }
    </div>
  )
}
