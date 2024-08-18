import { createFileRoute, redirect } from "@tanstack/react-router";
import NavbarTop from "../components/navigation/NavbarTop";
import TodoList from "../components/todoList/TodoList";

export const Route = createFileRoute("/")({
  beforeLoad: ({ context }) => {
    const { isLogged } = context.auth; // the auth you take from the main.jsx
    if (!isLogged()) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: firstPage,
});

export function firstPage() {
  return (
    <>
      <NavbarTop />
      <TodoList />
    </>
  );
}
//for authentication: just need to check the index.jsx and login.jsx for the authentication and hooks (useAuth)=> it is clear
