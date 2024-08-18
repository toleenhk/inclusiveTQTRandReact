import { createRootRoute, Outlet, redirect } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  // beforeLoad: ({ context }) => {
  //   const { isLogged } = context.auth;
  //   if (!isLogged()) {
  //     throw redirect({
  //       to: "/login",
  //     });
  //   }
  // },
  component: () => (
    <>
      Here is the general page
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
