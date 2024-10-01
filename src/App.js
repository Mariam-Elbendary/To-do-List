import logo from "./logo.svg";
import "./App.css";
import ToDoInput from "./Components/ToDoInput";
import ToDoList from "./Components/ToDoList";
import TodoCard from "./Components/TodoCard";
import { useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";

function App() {
  const [todo, setTodo] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function PersistData(newList) {
    localStorage.setItem("todo", JSON.stringify({ todo: newList }));
  }

  const handleAddTodo = (newTodo) => {
    const newList = [...todo, newTodo];
    PersistData(newList);
    setTodo(newList);
  };

  const DeleteTodo = (index) => {
    const newList = todo.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    PersistData(newList);
    setTodo(newList);
  };

  const EditTodo = (index) => {
    const todoEdited = todo[index];
    setTodoValue(todoEdited);
    DeleteTodo(index);
  };
  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodo = localStorage.getItem("todo");
    if (!localTodo) {
      return;
    }
    localTodo = JSON.parse(localTodo).todo;
    setTodo(localTodo);
  }, []);

  return (
    <>
      <ToDoInput
        handleAddTodo={handleAddTodo}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      ></ToDoInput>
      <ToDoList
        todo={todo}
        DeleteTodo={DeleteTodo}
        EditTodo={EditTodo}
      ></ToDoList>
    </>
  );
}

export default App;
