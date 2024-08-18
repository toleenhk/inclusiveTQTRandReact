import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_todo-list/todo-list")({
  component: TodosList,
});

export function TodosList() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null); // State to track the index being edited

  const handleCreateTodo = (e) => {
    e.preventDefault(); // Prevent the form from submitting
    if (!inputValue.trim()) return; // Prevent adding empty todos
    setTodoList((prev) => [...prev, inputValue]); // Add new todo to the list
    console.log({ todoList });
    setInputValue(""); // Clear the input field after adding
  };
  const handleDeleteTodo = (index) => {
    setTodoList((prev) => prev.filter((_, i) => i !== index)); // Remove todo at the specified index
  };

  const handleEditTodo = (index) => {
    setInputValue(todoList[index]); // Set the input value to the todo being edited
    setEditingIndex(index); // Set the editing index to the index of the todo being edited
  };
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80 text-center">
        <h1 className="text-2xl font-semibold mb-4">Todo List</h1>
        {/* Form to handle input and add todo */}
        <form onSubmit={handleCreateTodo} className="flex mb-4">
          <input
            type="text"
            placeholder="Add a new todo..."
            className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring focus:ring-blue-300"
            onChange={(e) => setInputValue(e.target.value)} // Update the input value
            value={inputValue} // Controlled input value
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 transition duration-200"
          >
            Add
          </button>
        </form>
        <div className="pt-8">
          {todoList.length > 0 ? (
            todoList.map((todo, index) => (
              <div key={index} className="border-b py-2">
                <span>{todo}</span>
                <button
                  onClick={() => handleDeleteTodo(index)} // Call delete function when clicked
                  className="text-red-500 hover:text-red-700 ml-4"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEditTodo(index)} // Call edit function when clicked
                  className="text-blue-500 hover:text-blue-700 ml-4"
                >
                  Edit
                </button>
              </div>
            ))
          ) : (
            <div>No todos added yet!</div>
          )}
        </div>
      </div>
    </div>
  );
}
