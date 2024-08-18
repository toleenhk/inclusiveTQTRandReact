import React, { useState } from "react";
import { useGetTodo } from "../../services/queries";
import {
  useCreateNewTodo,
  useDeleteTodo,
  useUpdateTodo,
} from "../../services/mutation";

const TodoList = () => {
  const { data: todos } = useGetTodo(); // Fetch all todos
  const createNewTodo = useCreateNewTodo(); // Mutation hook for creating a new todo
  const deleteTodo = useDeleteTodo(); // Mutation hook for deleting a todo
  const updateTodo = useUpdateTodo(); // Mutation hook for updating a todo

  // State to manage new or existing todo
  const [newTodo, setNewTodo] = useState({
    id: null, // Store the id of the todo if updating
    title: "",
    description: "",
    checked: false,
  });

  // Handle new todo submission
  const handleNewTodoSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // If we have an id, it means we're updating
    if (newTodo.id) {
      updateTodo.mutate(newTodo); // Update the todo
    } else {
      createNewTodo.mutate(newTodo); // Create a new todo
    }

    // Reset the state for the new todo
    setNewTodo({ id: null, title: "", description: "", checked: false });
  };

  // Handle todo deletion
  const handleDelete = (id) => {
    deleteTodo.mutate(id); // Call delete mutation
  };

  // Handle initiating the update process
  const handleUpdate = (todo) => {
    setNewTodo(todo); // Set the clicked todo as the newTodo state for editing
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="p-5 font-bold text-red-800">Create todo list</h1>

      <form className="flex" onSubmit={handleNewTodoSubmit}>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Add todo"
          value={newTodo.title}
          onChange={
            (e) => setNewTodo({ ...newTodo, title: e.target.value }) // Update title as user types
          }
        />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {newTodo.id ? "Update" : "Submit"}{" "}
          {/* Change the button text depending on the action */}
        </button>
      </form>

      <div className="flex flex-col gap-y-3">
        <h1 className="pt-10">All todos</h1>
        <div>
          {todos && todos.length > 0 ? (
            todos.map((todo) => (
              <div key={todo.id} className="flex">
                <h4 className="mr-2">{todo.title}</h4>
                {/* Delete Button */}
                <button
                  className="px-4 text-red-500"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
                {/* Update Button */}
                <button
                  className="px-4 text-green-500"
                  onClick={() => handleUpdate(todo)} // Set the selected todo to the input for editing
                >
                  Update
                </button>
              </div>
            ))
          ) : (
            <div>No todos</div>
          )}
        </div>
        <div>{createNewTodo.isLoading ? <p>...is loading</p> : ""}</div>
      </div>
    </div>
  );
};

export default TodoList;
