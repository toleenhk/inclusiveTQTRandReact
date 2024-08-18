// src/hooks/useAuth.js
export const useAuth = () => {
  const signIn = () => {
    localStorage.setItem("isAuthenticated", "true");
  };

  const signOut = () => {
    localStorage.removeItem("isAuthenticated");
  };

  const isLogged = () => {
    return localStorage.getItem("isAuthenticated") === "true";
  };

  // Return an object that contains signIn, signOut, and isLogged.
  return { signIn, signOut, isLogged };
};
