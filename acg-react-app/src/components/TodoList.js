import React, { Component, useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const TodoList = (props) => {
  const { todos, setTodos } = props;

  const [ id, setId ] = useState(todos.length);

  const toggle = (id) => {
    let mapped = todos.map(todo => {
      return todo.id == id ? {...todo, done: !todo.done} : {...todo};
    });

    setTodos(mapped);
  }

  const remove = (id) => {
    let mapped = todos.filter(todo => { return todo.id != id});
    setTodos(mapped);
  }

  const addTodo = (userInput) => {
    const copy = [...todos, {id: id, description: userInput, done: false}];
    setId(id + 1);
    setTodos(copy);
  }

  return (
    <div className="m-5">
      <TodoForm addTodo={addTodo}/>
      {todos.filter(todo => !todo.done).map(todo => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggle}
            onRemove={remove}
          />
        );
      })}
      {todos.filter(todo => todo.done).map(todo => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggle}
            onRemove={remove}
          />
        );
      })}
    </div>
  );
};

export default TodoList;