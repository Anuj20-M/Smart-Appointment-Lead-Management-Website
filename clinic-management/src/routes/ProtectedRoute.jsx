import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context-API/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/auth?mode=register" replace />;
  }

  return children;
};

export default ProtectedRoute;
