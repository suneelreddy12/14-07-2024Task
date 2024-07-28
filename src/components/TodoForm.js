import React from "react";

const TodoForm = ({
  name,
  setName,
  description,
  setDescription,
  handleAddTodo,
}) => {
  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="Todo Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Todo Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
