import React, { useReducer, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const initialState = {
  todos: [],
  filter: "All",
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    if (name.trim() && description.trim()) {
      const newTodo = {
        id: Date.now(),
        name,
        description,
        completed: false,
      };
      dispatch({ type: "ADD_TODO", payload: newTodo });
      setName("");
      setDescription("");
    }
  };

  const filteredTodos = state.todos.filter((todo) => {
    if (state.filter === "All") return true;
    return state.filter === "Completed" ? todo.completed : !todo.completed;
  });

  return (
    <div className="todo-app">
      <h1>My todo</h1>
      <TodoForm
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        handleAddTodo={handleAddTodo}
      />
      <TodoList todos={filteredTodos} dispatch={dispatch} />
    </div>
  );
};

export default App;
