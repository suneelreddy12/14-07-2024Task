import React from "react";

const TodoList = ({ todos, dispatch }) => {
  if (!todos) return null;

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-card">
          <h3>{todo.name}</h3>
          <p>{todo.description}</p>
          <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
          <button
            onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
          >
            Delete
          </button>
          <button
            onClick={() =>
              dispatch({
                type: "UPDATE_TODO",
                payload: { ...todo, completed: !todo.completed },
              })
            }
          >
            {todo.completed ? "Mark as Not Completed" : "Mark as Completed"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
