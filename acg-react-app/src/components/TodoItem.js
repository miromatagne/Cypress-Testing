import React, { Component, useState } from "react";

const TodoItem = (props) => {
  const {todo, onToggle, onRemove} = props;

  const [checked, setChecked] = useState(todo.done);

  return (
    <div className="row justify-content-center">
      <div className="card bg-light mt-3 pl-5 pr-5 col-12" style={{maxWidth: "32rem"}}>
        <div className="card-body">
          <div className="row justify-content-between align-items-center">
            <div className="col-1">
              <input
                className="form-check-input"
                type="checkBox"
                checked={checked}
                onChange={ () => {setChecked(!checked); onToggle(todo.id);} }
              />
            </div>
            <div className="col-6">
              <div>
                <p className={`${todo.done ? "strike " : ""}h5 todo-text`}>
                  {todo.description}
                </p>
              </div>
            </div>
            <div className="col-3">
              <button
                className="rm-button btn btn-danger"
                type="button"
                onClick={() => onRemove(todo.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;