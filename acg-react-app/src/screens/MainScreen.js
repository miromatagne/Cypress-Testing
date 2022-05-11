import React, { useState } from "react";
import TodoList from "../components/TodoList";

const MainScreen = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="container mt-5" style={{minWidth: "32rem"}}>
      <p className="h1 text-center text-white">Todo list</p>
      <TodoList todos={todoList} setTodos={setTodoList} />
    </div>
  );
};

export default MainScreen;
