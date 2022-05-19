import { signOut } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { globalStateContext } from "../context";
import { auth } from "../firebase";

import TodoList from "../components/TodoList";

const MainScreen = () => {
  const [redirect, setRedirect] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Logged out");
        setRedirect(true);
      })
      .catch((err) => console.log(err));
  };

  const user = useContext(globalStateContext);

  return (
    <div>
      {redirect ? <Navigate to="/sign-in" /> : <></>}
      <div id="user-email">{user?.email || "Guest"}</div>
      <button className="btn btn-primary" id="logout-button" onClick={logout}>
        Log Out
      </button>

      <div className="container mt-5" style={{ minWidth: "32rem" }}>
        <p className="h1 text-center text-white">Todo list</p>
        <TodoList todos={todoList} setTodos={setTodoList} />
      </div>
    </div>
  );
};

export default MainScreen;
