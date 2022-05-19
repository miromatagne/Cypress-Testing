import React, { Component, useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TodoList = (props) => {
  const { todos, setTodos } = props;

  const [id, setId] = useState(todos.length);

  const toggle = (id) => {
    let mapped = todos.map((todo) => {
      return todo.id == id ? { ...todo, done: !todo.done } : { ...todo };
    });

    setTodos(mapped);
  };

  const remove = (id) => {
    let mapped = todos.filter((todo) => {
      return todo.id != id;
    });
    setTodos(mapped);
  };

  const addTodo = (userInput) => {
    const copy = [...todos, { id: id, description: userInput, done: false }];
    setId(id + 1);
    setTodos(copy);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
  };

  return (
    <div className="m-5">
      <TodoForm addTodo={addTodo} />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {todos.map((todo, index) => (
                <Draggable
                  key={todo.id}
                  id={todo.id.toString()}
                  draggableId={todo.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={"todo" + todo.id}
                    >
                      <TodoItem
                        todo={todo}
                        onToggle={toggle}
                        onRemove={remove}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TodoList;
