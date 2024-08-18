import { createFileRoute } from "@tanstack/react-router";
// import { useState } from "react";

export const Route = createFileRoute("/todo-list/todo-list")({
  component: TodosListhe,
});

export function TodosListhe() {
  // const [todoList, setTodoList] = useState([]);

  // const handleCreateTodo = (e) => {
  //   e.preventDefault();
  //   // if (!inputValue.trim()) return; // Prevent adding empty todos
  //   const todoValue = e.target.value;
  //   setTodoList((prev) => {
  //     return [...prev, todoValue];
  //   });
  // };
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      {/* <div className="bg-white p-8 rounded-lg shadow-lg w-80 text-center">
        <h1 className="text-2xl font-semibold mb-4">Todo List</h1>
        <div className="flex">
          <input
            type="text"
            placeholder="Add a new todo..."
            className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring focus:ring-blue-300"
            onChange={handleCreateTodo}
            value={todoList}
          />
          <button className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 transition duration-200">
            Add
          </button>
        </div>
        <div className="pt-8">valubales</div>
      </div> */}
      hi
    </div>
  );
}
