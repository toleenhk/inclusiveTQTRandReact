import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authentication/profile")({
  component: () => <div>Hello /_authentication/profile!</div>,
});
