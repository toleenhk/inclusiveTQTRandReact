import React, { useState } from "react";
import { useGetTodo } from "../../services/queries";
import {
  useCreateNewTodo,
  useDeleteTodo,
  useUpdateTodo,
} from "../../services/mutation";

const TodoList = () => {
  const { data: todos = [] } = useGetTodo(); // we add[] for the filter, because we must filter an array
  const createNewTodo = useCreateNewTodo();
  const deleteTodo = useDeleteTodo();
  const updateTodo = useUpdateTodo();

  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    checked: false,
  });
  // State for search input
  const [searchQuery, setSearchQuery] = useState("");

  // Filter todos based on the search query
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    createNewTodo.mutate(newTodo); // Trigger the mutation with the new todo data
    setNewTodo({ title: "", description: "", checked: false }); // Reset the form after submission
  };
  const handleDelete = (id) => {
    deleteTodo.mutate(id);
  };
  const handleUpdate = (todo) => {
    //update is not working here you can check updateVersion component if you copy here it will work
    updateTodo.mutate(todo);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className=" p-5 font-bold text-red-800">Creat todo list</h1>
      <input
        type="text"
        placeholder="Search todos"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 mb-5"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
      />
      <form className=" flex" onSubmit={handleNewTodoSubmit}>
        <div>
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="add todo"
              value={newTodo.title}
              onChange={(e) =>
                setNewTodo({ ...newTodo, title: e.target.value })
              }
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <div className="flex flex-col gap-y-3">
        <h1 className="pt-10">All todos</h1>
        <div>
          {/* if we did not have a filter we can only make todos instead of filteredTodos */}
          {filteredTodos && filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => (
              <div key={todo.id} className="flex">
                <h4 key={todo.id}>{todo.title}</h4>
                <button
                  className="px-4 text-red-500"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
                <button
                  className="px-4 text-green-500"
                  onClick={() => handleUpdate(todo)}
                >
                  update
                </button>
              </div>
            ))
          ) : (
            <div>no todos</div>
          )}
        </div>
        <div>{createNewTodo.isPending ? <p>... is loading</p> : ""}</div>
      </div>
    </div>
  );
};

export default TodoList;
