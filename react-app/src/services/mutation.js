import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewTodo, deleteTodo, updateTodo } from "./api";

// add in the main   const queryClient = new QueryClient();
export function useCreateNewTodo() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newTodo) => createNewTodo(newTodo),
    onSettled: async (_, error) => {
      console.log("it is on settled");
      if (error) {
        console.log("there is an error");
      } else {
        await queryClient.invalidateQueries({ queryKey: ["todos"] });
        // queryClient.invalidateQueries({ queryKey: ["todoById"] });
        //instead of refreash the page so we could see the new todo now every time we submit we see new todo
      }
    },
  });
  return mutation;
}

export function useDeleteTodo() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id) => deleteTodo(id),
    onSettled: async (_, error) => {
      if (error) {
        console.log("there is an error");
      } else {
        await queryClient.invalidateQueries({ queryKey: ["todos"] });
      }
    },
  });
  return mutation;
}

export function useUpdateTodo() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data) => updateTodo(data),
    onSettled: async (_, error) => {
      if (error) {
        console.log("error on Update");
      } else {
        await queryClient.invalidateQueries({ queryKey: ["todos"] });
      }
    },
  });
  return mutation;
}
