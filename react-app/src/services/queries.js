import { useQuery } from "@tanstack/react-query";
import { getTodo } from "./api";

export function useGetTodo() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodo,
  });

  // We can assume by this point that `isSuccess === true`
  return { isLoading, isError, data };
}
