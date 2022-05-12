import React, { Component, useState } from "react";

const TodoForm = (props) => {
  const [ userInput, setUserInput ] = useState("");
  const { addTodo } = props;

  const change = (event) => {
    setUserInput(event.currentTarget.value);
  }

  const submit = (event) => {
    event.preventDefault();

    if (userInput == "") return;
    
    addTodo(userInput);
    setUserInput("");
  }

  return (
    <div className="m-5 mx-auto" style={{maxWidth: "50rem"}}>
      <form onSubmit={submit}>
        <input
          id="todo-input"
          className="form-control"
          type="text"
          placeholder="Buy a new laptop..."
          value={userInput}
          onChange={change}
        />
      </form>
    </div>
  );
};

export default TodoForm;