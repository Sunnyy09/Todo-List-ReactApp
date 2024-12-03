import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, clearTodos } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      // onSubmit={addTodoHandler}
      className="w-full flex items-center space-x-2 mt-6 mb-2 px-5"
    >
      <input
        type="text"
        className="w-full py-1.5 bg-[#171c48] rounded border border-[#828dff] focus:border-[#828dff] focus:ring-2 focus:ring-[#828dff] text-base outline-none text-[#fff] px-3 leading-8  animate-pulse hover:animate-none focus:animate-none"
        placeholder="Write your task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="text-[#fff] font-semibold bg-[#828dff] border-0 py-1.5 px-3 focus:outline-none hover:bg-indigo-600 rounded text-2xl transition ease-in-out duration-300"
        onClick={addTodoHandler}
      >
        <i class="fa-solid fa-plus"></i>
      </button>
      <button
        type="submit"
        className="text-[#fff] font-semibold bg-[#828dff] border-0 py-1.5 px-3 focus:outline-none hover:bg-indigo-600 rounded text-2xl transition ease-in-out duration-300"
        onClick={() => dispatch(clearTodos())}
      >
        <i class="fa-solid fa-trash"></i>
      </button>
    </form>
  );
}

export default AddTodo;
