import React from "react";
import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodo([...todo, input]);
    setInput("");
  };
  const handleClose = (id) => {
    let copyTodo = [];

    copyTodo = todo.filter((_, index) => index !== id);
    setTodo(copyTodo);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        className="border-2 text-white bg-pink-500"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => handleSubmit()}>Add</button>
      <ul>
        {todo?.map((todoItem, index) => (
          <li key={index}>
            {todoItem} <span onClick={() => handleClose(index)}> X</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
