import axios from "axios";

const URL_BASE = "http://localhost:8080";
const axiosInstance = axios.create({ baseURL: URL_BASE });

// export function createTodo(todo) {
//   axiosInstance.post("/todos", {
//     todo,
//   });
// }
export const createNewTodo = async (todo) => {
  const response = await axiosInstance.post("todos", todo);
  return response;
};

export async function getTodo() {
  const response = await axiosInstance.get("todos");
  return response.data;
}

export async function deleteTodo(id) {
  const response = await axiosInstance.delete(`todos/${id}`);
  return response;
}

export async function updateTodo(data) {
  const response = await axiosInstance.put(`todos/${data.id}`, data);
  return response;
}
