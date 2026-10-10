import { Navigate } from "react-router";

export function ProtectedRoute({ children }) {
  const auth = true;
  return auth ? children : <Navigate to="/" />;
}
