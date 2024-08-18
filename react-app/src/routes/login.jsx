import {
  createFileRoute,
  useNavigate,
  useRouter,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth"; // Import the useAuth hook

export const Route = createFileRoute("/login")({
  component: login,
});

export default function login() {
  const navigate = useNavigate({ from: "/login" });
  const { isLogged, signIn, signOut } = useAuth(); // Destructure useAuth

  const [authStatus, setAuthStatus] = useState(isLogged());

  const handleSignIn = () => {
    signIn();
    setAuthStatus(true);
    router.invalidate();
    navigate({ to: "/" });
  };

  useEffect(() => {
    signOut();
    setAuthStatus(false);
    router.invalidate();
    // when you navigate to login page you are not authorized anymore
  }, []);

  useEffect(() => {
    // This effect runs whenever `authStatus` changes and rechecks the authentication status.
    setAuthStatus(isLogged());
  }, [authStatus]);

  const router = useRouter();
  return (
    <>
      <div className="text-red-600">You are not authenticated</div>
      <button
        onClick={handleSignIn}
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200 border border-blue-600 hover:border-blue-700"
      >
        Sign in
      </button>
    </>
  );
}
